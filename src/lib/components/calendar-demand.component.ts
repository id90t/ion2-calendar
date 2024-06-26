import {
    Component,
    ViewChild,
    ElementRef,
    ChangeDetectorRef,
    Renderer2,
    OnInit,
    Input,
    AfterViewInit,
    HostBinding,
} from '@angular/core';
import { ModalController, IonContent } from '@ionic/angular';
import { CalendarDay, CalendarMonth, CalendarModalOptions, DayConfig } from '../calendar.model';
import { CalendarService } from '../services/calendar.service';
import moment from 'moment';
import { pickModes } from '../config';
import DemandCalendarService from '../models/deman-calendar-service.Interface';

const NUM_OF_MONTHS_TO_CREATE = 3;

@Component({
    selector: 'ion-calendar-demand-modal',
    styleUrls: ['./calendar.modal.scss', './calendar-demand.component.scss'],
    template: `
    <ion-header>
        <ion-toolbar>
            <ion-buttons slot="secondary">
                <ion-button type='button' slot="icon-only" fill="clear" class="primary" (click)="onCancel()">
                    <span *ngIf="_d?.closeLabel !== '' && !_d?.closeIcon">{{ _d?.closeLabel }}</span>
                    <ion-icon *ngIf="_d?.closeIcon" name="close"></ion-icon>
                </ion-button>
            </ion-buttons>
            <ion-title>{{ _d?.title }} </ion-title>
        </ion-toolbar>
        <ng-content select="[sub-header]"></ng-content>
        <ion-row class="calendar-demand-indicator-container ion-padding-top" *ngIf="!loading">
            <div class="calendar-demand-indicator calendar-demand-indicator-cheaper">
                {{ cheaperText }}
            </div>
            <div class="calendar-demand-indicator calendar-demand-indicator-average">
                {{ averageText }}
            </div>
            <div class="calendar-demand-indicator calendar-demand-indicator-higher">
                {{ higherText }}
            </div>
            
            <ion-button shape="round" fill="clear" id="click-trigger" class="ion-no-padding">
                <ion-icon name="information-circle-outline"></ion-icon>
            </ion-button>            
            <ion-popover trigger="click-trigger" triggerAction="click">
                <ng-template>
                    <ion-content class="ion-padding">Based on the most frequent searches per day</ion-content>
                </ng-template>
            </ion-popover>
        </ion-row>
        <ion-calendar-week *ngIf="_d"
            [color]="_d.color"
            [weekArray]="_d.weekdays"
            [weekStart]="_d.weekStart">
        </ion-calendar-week>
    </ion-header>

    <ion-content class="calendar-page"
        [scrollEvents]="true"
        [ngClass]="{'multi-selection': _d?.pickMode === 'multi'}"
        (ionScroll)="onScroll($event)">

        <div #months *ngIf="!loading && _d">
            <ng-template ngFor let-month [ngForOf]="calendarMonths" [ngForTrackBy]="trackByIndex" let-i="index">
                <div class="month-box" [attr.id]="'month-' + i">
                    <h4 class="month-title">{{ monthFormat(month.original?.date) }}</h4>
                    <ion-calendar-month [month]="month"
                        [pickMode]="_d.pickMode"
                        [isSaveHistory]="_d.isSaveHistory"
                        [id]="_d.id"
                        [color]="_d.color"
                        [maxMultiDates]="_d.maxMultiDates"
                        (change)="onChange($event)"
                        [(ngModel)]="datesTemp">
                    </ion-calendar-month>
                </div>
            </ng-template>
        </div>

        <div *ngIf="loading" class="loading-container">
            <ion-spinner name="crescent" color="primary" class="loading-indicator"></ion-spinner>
        </div>

        <ion-infinite-scroll threshold="25%" (ionInfinite)="nextMonth($event)">
            <ion-infinite-scroll-content></ion-infinite-scroll-content>
        </ion-infinite-scroll>

    </ion-content>

    <ion-footer>
        <ion-row *ngIf="_d?.pickMode === 'range'" lines="none" class="ion-margin-vertical" [class]="'dates-toolbar'" no-border>
            <ion-col size="4" class="start-date ion-text-nowrap">
                {{ getDayFormatted(datesTemp[0]) || 'Start Date' }}
            </ion-col>
            <ion-col size="4" class="ion-text-center">
                <ion-icon name="arrow-forward-outline"></ion-icon>
            </ion-col>
            <ion-col size="4" class="end-date ion-text-right ion-text-nowrap">
                {{ getDayFormatted(datesTemp[1]) || 'End Date' }}
            </ion-col>
        </ion-row>
      <ion-button expand="full" *ngIf="!_d?.autoDone" [disabled]="!canDone()" (click)="done()">
        <span *ngIf="_d?.doneLabel !== '' && !_d?.doneIcon">{{ _d?.doneLabel }}</span>
        <ion-icon *ngIf="_d?.doneIcon" name="checkmark"></ion-icon>
      </ion-button>
    </ion-footer>
  `,
})
export class CalendarDemandModal implements OnInit, AfterViewInit {
    @ViewChild(IonContent, { static: true })
    content: IonContent | any;
    @ViewChild('months', { static: true })
    monthsEle: ElementRef | any;

    @HostBinding('class.ion-page')
    ionPage = true;

    @Input()
    options: CalendarModalOptions | any;

    @Input() demandCalendarService: DemandCalendarService | null = null;
    @Input() latitude: string = '';
    @Input() longitude: string = '';
    @Input() cheaperText: string = 'Cheaper';
    @Input() averageText: string = 'Average';
    @Input() higherText: string = 'Higher';

    loading: boolean = true;
    datesTemp: Array<CalendarDay> | any = [null, null];
    calendarMonths: Array<CalendarMonth> | any;
    step: number | any;
    showYearPicker: boolean | any;
    year: number | any;
    years: Array<number> | any;
    _scrollLock = true;
    _d: any;
    actualFirstTime: number | any;

    constructor(
        private _renderer: Renderer2,
        public _elementRef: ElementRef,
        public modalCtrl: ModalController,
        public ref: ChangeDetectorRef,
        public calSvc: CalendarService
    ) { }

    ngOnInit(): void {
        this.initDemandCalendar();
    }

    ngAfterViewInit(): void {

    }

    init(): void {
        this._d = this.calSvc.safeOpt(this.options);
        this._d.showAdjacentMonthDay = false;
        this.step = this._d.step;
        if (this.step < this.calSvc.DEFAULT_STEP) {
            this.step = this.calSvc.DEFAULT_STEP;
        }

        this.calendarMonths = this.calSvc.createMonthsByPeriod(
            moment(this._d.from).valueOf(),
            this.findInitMonthNumber(this._d.defaultScrollTo) + this.step,
            this._d
        );
    }

    initDefaultDate(): void {
        const { pickMode, defaultDate, defaultDateRange, defaultDates } = this._d;
        switch (pickMode) {
            case pickModes.SINGLE:
                if (defaultDate) {
                    this.datesTemp[0] = this.calSvc.createCalendarDay(this.getDayTime(defaultDate), this._d);
                }
                break;
            case pickModes.RANGE:
                if (defaultDateRange) {
                    if (defaultDateRange.from) {
                        this.datesTemp[0] = this.calSvc.createCalendarDay(this.getDayTime(defaultDateRange.from), this._d);
                    }
                    if (defaultDateRange.to) {
                        this.datesTemp[1] = this.calSvc.createCalendarDay(this.getDayTime(defaultDateRange.to), this._d);
                    }
                }
                break;
            case pickModes.MULTI:
                if (defaultDates && defaultDates.length) {
                    this.datesTemp = defaultDates.map((e: any) => this.calSvc.createCalendarDay(this.getDayTime(e), this._d));
                }
                break;
            default:
                this.datesTemp = [null, null];
        }
    }

    async initDemandCalendar(): Promise<void> {
        if (this.demandCalendarService) {
            const days = await this.demandCalendarService.get(this.latitude, this.longitude).toPromise();
            this.options.daysConfig = this.buildDays(days)
        }
        this.loading = false;
        this.init();
        this.initDefaultDate();

        this.findCssClass();
        if (this._d?.canBackwardsSelected) {
            this.backwardsMonth();
        }
        this.scrollToDefaultDate();
    }

    buildDays(items: any[]): DayConfig[] {
        const dayConfig: DayConfig[] = [];
        if (items && items.length) {
            items.forEach(item => {
                dayConfig.push({
                    date: moment(item.check_in, 'YYYY-MM-DD').toDate(),
                    marked: false,
                    demandLevel: item.demand
                });
            });
        }
        return dayConfig;
    }

    findCssClass(): void {
        if (this._d) {
            const { cssClass } = this._d;
            if (cssClass) {
                cssClass.split(' ').forEach((_class: string) => {
                    if (_class.trim() !== '') this._renderer.addClass(this._elementRef.nativeElement, _class);
                });
            }
        }
    }

    onChange(data: any): void {
        const { pickMode, autoDone } = this._d;

        this.datesTemp = data;
        this.ref.detectChanges();

        if (pickMode !== pickModes.MULTI && autoDone && this.canDone()) {
            this.done();
        }

        this.repaintDOM();
    }

    onCancel(): void {
        this.modalCtrl.dismiss(null, 'cancel');
    }

    done(): void {
        const { pickMode } = this._d;

        this.modalCtrl.dismiss(this.calSvc.wrapResult(this.datesTemp, pickMode), 'done');
    }

    canDone(): boolean {
        if (!Array.isArray(this.datesTemp)) {
            return false;
        }
        if (!this._d) {
            return false;
        }

        const { pickMode, defaultEndDateToStartDate } = this._d;
        switch (pickMode) {
            case pickModes.SINGLE:
                return !!(this.datesTemp[0] && this.datesTemp[0].time);
            case pickModes.RANGE:
                if (defaultEndDateToStartDate) {
                    return !!(this.datesTemp[0] && this.datesTemp[0].time);
                }
                return !!(this.datesTemp[0] && this.datesTemp[1]) && !!(this.datesTemp[0].time && this.datesTemp[1].time);
            case pickModes.MULTI:
                return this.datesTemp.length > 0 && this.datesTemp.every(e => !!e && !!e.time);
            default:
                return false;
        }
    }

    clear() {
        this.datesTemp = [null, null];
    }

    canClear() {
        return !!this.datesTemp[0];
    }

    nextMonth(event: any): void {
        const len = this.calendarMonths.length;
        const final = this.calendarMonths[len - 1];
        const nextTime = moment(final.original.time)
            .add(1, 'M')
            .valueOf();
        const rangeEnd = this._d.to ? moment(this._d.to).subtract(1, 'M') : 0;

        if (len <= 0 || (rangeEnd !== 0 && moment(final.original.time).isAfter(rangeEnd))) {
            event.target.disabled = true;
            return;
        }

        this.calendarMonths.push(...this.calSvc.createMonthsByPeriod(nextTime, NUM_OF_MONTHS_TO_CREATE, this._d));
        event.target.complete();
        this.repaintDOM();
    }

    backwardsMonth(): void {
        const first = this.calendarMonths[0];

        if (first.original.time <= 0) {
            this._d.canBackwardsSelected = false;
            return;
        }

        const firstTime = (this.actualFirstTime = moment(first.original.time)
            .subtract(NUM_OF_MONTHS_TO_CREATE, 'M')
            .valueOf());

        this.calendarMonths.unshift(...this.calSvc.createMonthsByPeriod(firstTime, NUM_OF_MONTHS_TO_CREATE, this._d));
        this.ref.detectChanges();
        this.repaintDOM();
    }

    scrollToDate(date: Date): void {
        const defaultDateIndex = this.findInitMonthNumber(date);
        const monthElement = this.monthsEle?.nativeElement.children[`month-${defaultDateIndex}`];
        const domElemReadyWaitTime = 300;

        setTimeout(() => {
            const defaultDateMonth = monthElement ? monthElement.offsetTop : 0;

            if (defaultDateIndex !== -1 && defaultDateMonth !== 0) {
                this.content.scrollByPoint(0, defaultDateMonth, 128);
            }
        }, domElemReadyWaitTime);
    }

    scrollToDefaultDate(): void {
        this.scrollToDate(this._d.defaultScrollTo);
    }

    onScroll($event: any): void {
        if (!this._d?.canBackwardsSelected) return;

        const { detail } = $event;

        if (detail.scrollTop <= 200 && detail.velocityY < 0 && this._scrollLock) {
            this.content.getScrollElement().then((scrollElem: any) => {
                this._scrollLock = !1;

                const heightBeforeMonthPrepend = scrollElem.scrollHeight;
                this.backwardsMonth();
                setTimeout(() => {
                    const heightAfterMonthPrepend = scrollElem.scrollHeight;

                    this.content.scrollByPoint(0, heightAfterMonthPrepend - heightBeforeMonthPrepend, 0).then(() => {
                        this._scrollLock = !0;
                    });
                }, 180);
            });
        }
    }

    repaintDOM() {
        return this.content.getScrollElement().then((scrollElem: any) => {
            scrollElem.style.zIndex = '2';
            scrollElem.style.zIndex = 'initial';
            if (this.monthsEle?.nativeElement) {
                this.monthsEle.nativeElement.style.zIndex = '2';
                this.monthsEle.nativeElement.style.zIndex = 'initial';
            }
        });
    }

    findInitMonthNumber(date: Date): number {
        let startDate = this.actualFirstTime ? moment(this.actualFirstTime) : moment(this._d.from);
        const defaultScrollTo = moment(date);
        const isAfter: boolean = defaultScrollTo.isAfter(startDate);
        if (!isAfter) return -1;

        if (this.showYearPicker) {
            startDate = moment(new Date(this.year, 0, 1));
        }

        return defaultScrollTo.diff(startDate, 'month');
    }

    getDayTime(date: any): number {
        return moment(moment(date).format('YYYY-MM-DD')).valueOf();
    }

    monthFormat(date: any): string {
        return moment(date).format(this._d.monthFormat.replace(/y/g, 'Y'));
    }

    getDayFormatted(data: any) {
        if (!data) { return null; }
        return moment(data.time).format('ddd, MMM Do');
    }

    trackByIndex(index: number, momentDate: CalendarMonth): number {
        return momentDate.original ? momentDate.original.time : index;
    }
}
