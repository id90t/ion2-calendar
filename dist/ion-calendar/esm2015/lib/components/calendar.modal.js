import { Component, ViewChild, ElementRef, ChangeDetectorRef, Renderer2, Input, HostBinding, } from '@angular/core';
import { NavParams, ModalController, IonContent } from '@ionic/angular';
import { CalendarService } from '../services/calendar.service';
import moment from 'moment';
import { pickModes } from '../config';
import * as i0 from "@angular/core";
import * as i1 from "@ionic/angular";
import * as i2 from "../services/calendar.service";
import * as i3 from "./calendar-week.component";
import * as i4 from "./month.component";
import * as i5 from "@angular/common";
import * as i6 from "@angular/forms";
const NUM_OF_MONTHS_TO_CREATE = 3;
export class CalendarModal {
    constructor(_renderer, _elementRef, params, modalCtrl, ref, calSvc) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.params = params;
        this.modalCtrl = modalCtrl;
        this.ref = ref;
        this.calSvc = calSvc;
        this.ionPage = true;
        this.datesTemp = [null, null];
        this._scrollLock = true;
    }
    ngOnInit() {
        this.init();
        this.initDefaultDate();
    }
    ngAfterViewInit() {
        this.findCssClass();
        if (this._d.canBackwardsSelected)
            this.backwardsMonth();
        this.scrollToDefaultDate();
    }
    init() {
        this._d = this.calSvc.safeOpt(this.options);
        this._d.showAdjacentMonthDay = false;
        this.step = this._d.step;
        if (this.step < this.calSvc.DEFAULT_STEP) {
            this.step = this.calSvc.DEFAULT_STEP;
        }
        this.calendarMonths = this.calSvc.createMonthsByPeriod(moment(this._d.from).valueOf(), this.findInitMonthNumber(this._d.defaultScrollTo) + this.step, this._d);
    }
    initDefaultDate() {
        const { pickMode, defaultDate, defaultDateRange, defaultDates } = this._d;
        switch (pickMode) {
            case pickModes.SINGLE:
                if (defaultDate) {
                    this.datesTemp[0] = this.calSvc.createCalendarDay(this._getDayTime(defaultDate), this._d);
                }
                break;
            case pickModes.RANGE:
                if (defaultDateRange) {
                    if (defaultDateRange.from) {
                        this.datesTemp[0] = this.calSvc.createCalendarDay(this._getDayTime(defaultDateRange.from), this._d);
                    }
                    if (defaultDateRange.to) {
                        this.datesTemp[1] = this.calSvc.createCalendarDay(this._getDayTime(defaultDateRange.to), this._d);
                    }
                }
                break;
            case pickModes.MULTI:
                if (defaultDates && defaultDates.length) {
                    this.datesTemp = defaultDates.map((e) => this.calSvc.createCalendarDay(this._getDayTime(e), this._d));
                }
                break;
            default:
                this.datesTemp = [null, null];
        }
    }
    findCssClass() {
        const { cssClass } = this._d;
        if (cssClass) {
            cssClass.split(' ').forEach((_class) => {
                if (_class.trim() !== '')
                    this._renderer.addClass(this._elementRef.nativeElement, _class);
            });
        }
    }
    onChange(data) {
        const { pickMode, autoDone } = this._d;
        this.datesTemp = data;
        this.ref.detectChanges();
        if (pickMode !== pickModes.MULTI && autoDone && this.canDone()) {
            this.done();
        }
        this.repaintDOM();
    }
    onCancel() {
        this.modalCtrl.dismiss(null, 'cancel');
    }
    done() {
        const { pickMode } = this._d;
        this.modalCtrl.dismiss(this.calSvc.wrapResult(this.datesTemp, pickMode), 'done');
    }
    canDone() {
        if (!Array.isArray(this.datesTemp)) {
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
    nextMonth(event) {
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
    backwardsMonth() {
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
    scrollToDate(date) {
        const defaultDateIndex = this.findInitMonthNumber(date);
        const monthElement = this.monthsEle.nativeElement.children[`month-${defaultDateIndex}`];
        const domElemReadyWaitTime = 300;
        setTimeout(() => {
            const defaultDateMonth = monthElement ? monthElement.offsetTop : 0;
            if (defaultDateIndex !== -1 && defaultDateMonth !== 0) {
                this.content.scrollByPoint(0, defaultDateMonth, 128);
            }
        }, domElemReadyWaitTime);
    }
    scrollToDefaultDate() {
        this.scrollToDate(this._d.defaultScrollTo);
    }
    onScroll($event) {
        if (!this._d.canBackwardsSelected)
            return;
        const { detail } = $event;
        if (detail.scrollTop <= 200 && detail.velocityY < 0 && this._scrollLock) {
            this.content.getScrollElement().then((scrollElem) => {
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
    /**
     * In some older Safari versions (observed at Mac's Safari 10.0), there is an issue where style updates to
     * shadowRoot descendants don't cause a browser repaint.
     * See for more details: https://github.com/Polymer/polymer/issues/4701
     */
    repaintDOM() {
        return this.content.getScrollElement().then((scrollElem) => {
            // Update scrollElem to ensure that height of the container changes as Months are appended/prepended
            scrollElem.style.zIndex = '2';
            scrollElem.style.zIndex = 'initial';
            // Update monthsEle to ensure selected state is reflected when tapping on a day
            this.monthsEle.nativeElement.style.zIndex = '2';
            this.monthsEle.nativeElement.style.zIndex = 'initial';
        });
    }
    findInitMonthNumber(date) {
        let startDate = this.actualFirstTime ? moment(this.actualFirstTime) : moment(this._d.from);
        const defaultScrollTo = moment(date);
        const isAfter = defaultScrollTo.isAfter(startDate);
        if (!isAfter)
            return -1;
        if (this.showYearPicker) {
            startDate = moment(new Date(this.year, 0, 1));
        }
        return defaultScrollTo.diff(startDate, 'month');
    }
    _getDayTime(date) {
        return moment(moment(date).format('YYYY-MM-DD')).valueOf();
    }
    _monthFormat(date) {
        return moment(date).format(this._d.monthFormat.replace(/y/g, 'Y'));
    }
    _getDayFormatted(data) {
        if (!data) {
            return null;
        }
        return moment(data.time).format('ddd, MMM Do');
    }
    trackByIndex(index, momentDate) {
        return momentDate.original ? momentDate.original.time : index;
    }
}
CalendarModal.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CalendarModal, deps: [{ token: i0.Renderer2 }, { token: i0.ElementRef }, { token: i1.NavParams }, { token: i1.ModalController }, { token: i0.ChangeDetectorRef }, { token: i2.CalendarService }], target: i0.ɵɵFactoryTarget.Component });
CalendarModal.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: CalendarModal, selector: "ion-calendar-modal", inputs: { options: "options" }, host: { properties: { "class.ion-page": "this.ionPage" } }, viewQueries: [{ propertyName: "content", first: true, predicate: IonContent, descendants: true, static: true }, { propertyName: "monthsEle", first: true, predicate: ["months"], descendants: true, static: true }], ngImport: i0, template: `
    <ion-header>
      <ion-toolbar>
          <ion-buttons slot="secondary">
              <ion-button type='button' slot="icon-only" fill="clear" class="primary" (click)="onCancel()">
              <span *ngIf="_d.closeLabel !== '' && !_d.closeIcon">{{ _d.closeLabel }}</span>
              <ion-icon *ngIf="_d.closeIcon" name="close"></ion-icon>
            </ion-button>
          </ion-buttons>

          <ion-title>{{ _d.title }}</ion-title>
      </ion-toolbar>

      <ng-content select="[sub-header]"></ng-content>

      <ion-row *ngIf="_d.pickMode === 'range'" lines="none" [class]="'dates-toolbar'" no-border>
        <ion-col size="4" class="start-date ion-text-nowrap">
          {{ _getDayFormatted(datesTemp[0]) || 'Start Date' }}
        </ion-col>
        <ion-col size="4" class="ion-text-center">
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </ion-col>
        <ion-col size="4" class="end-date ion-text-right ion-text-nowrap">
          {{ _getDayFormatted(datesTemp[1]) || 'End Date' }}
        </ion-col>
      </ion-row>

      <ion-calendar-week
        [color]="_d.color"
        [weekArray]="_d.weekdays"
        [weekStart]="_d.weekStart">
      </ion-calendar-week>

    </ion-header>

    <ion-content (ionScroll)="onScroll($event)" class="calendar-page" [scrollEvents]="true"
                 [ngClass]="{'multi-selection': _d.pickMode === 'multi'}">

      <div #months>
        <ng-template ngFor let-month [ngForOf]="calendarMonths" [ngForTrackBy]="trackByIndex" let-i="index">
          <div class="month-box" [attr.id]="'month-' + i">
            <h4 class="month-title">{{ _monthFormat(month.original?.date) }}</h4>
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

      <ion-infinite-scroll threshold="25%" (ionInfinite)="nextMonth($event)">
        <ion-infinite-scroll-content></ion-infinite-scroll-content>
      </ion-infinite-scroll>

    </ion-content>

    <ion-footer>

        <ion-button expand="full" *ngIf="!_d.autoDone" [disabled]="!canDone()" (click)="done()">
          <span *ngIf="_d.doneLabel !== '' && !_d.doneIcon">{{ _d.doneLabel }}</span>
          <ion-icon *ngIf="_d.doneIcon" name="checkmark"></ion-icon>
        </ion-button>

    </ion-footer>
  `, isInline: true, styles: [":host ion-select{max-width:unset}:host ion-select .select-icon>.select-icon-inner,:host ion-select .select-text{color:#fff!important}:host ion-select.select-ios{max-width:unset}:host ion-toolbar ion-button.md{color:var(--ion-color-primary)}:host .dates-toolbar{--background: transparent;padding:0 1rem}:host .dates-toolbar.primary{--background: var(--ion-color-primary)}:host .dates-toolbar.secondary{--background: var(--ion-color-secondary)}:host .dates-toolbar.danger{--background: var(--ion-color-danger)}:host .dates-toolbar.dark{--background: var(--ion-color-dark)}:host .dates-toolbar.light{--background: var(--ion-color-light)}:host .dates-toolbar.transparent{--background: transparent}:host .dates-toolbar.toolbar-md{min-height:44px}:host .ios.dates-toolbar{padding-top:1rem}:host .start-date{padding-left:.5rem}:host .end-date{margin-right:-.5rem}:host .calendar-page{background-color:#fbfbfb}:host .month-box{display:inline-block;width:100%;padding-bottom:1em}:host #month-0{padding-top:1rem}:host .month-title{padding-left:1rem;text-align:left;color:#363749}:host h4{font-weight:400;font-size:1.1rem;display:block;text-align:center;margin:1rem 0 0;color:#929292}body[data-dark-mode=true] :host .month-title{color:#fff}body[data-dark-mode=true] :host .dates-toolbar{color:#fff}\n"], components: [{ type: i1.IonHeader, selector: "ion-header", inputs: ["collapse", "mode", "translucent"] }, { type: i1.IonToolbar, selector: "ion-toolbar", inputs: ["color", "mode"] }, { type: i1.IonButtons, selector: "ion-buttons", inputs: ["collapse"] }, { type: i1.IonButton, selector: "ion-button", inputs: ["buttonType", "color", "disabled", "download", "expand", "fill", "form", "href", "mode", "rel", "routerAnimation", "routerDirection", "shape", "size", "strong", "target", "type"] }, { type: i1.IonIcon, selector: "ion-icon", inputs: ["color", "flipRtl", "icon", "ios", "lazy", "md", "mode", "name", "sanitize", "size", "src"] }, { type: i1.IonTitle, selector: "ion-title", inputs: ["color", "size"] }, { type: i1.IonRow, selector: "ion-row" }, { type: i1.IonCol, selector: "ion-col", inputs: ["offset", "offsetLg", "offsetMd", "offsetSm", "offsetXl", "offsetXs", "pull", "pullLg", "pullMd", "pullSm", "pullXl", "pullXs", "push", "pushLg", "pushMd", "pushSm", "pushXl", "pushXs", "size", "sizeLg", "sizeMd", "sizeSm", "sizeXl", "sizeXs"] }, { type: i3.CalendarWeekComponent, selector: "ion-calendar-week", inputs: ["color", "weekArray", "weekStart"] }, { type: i1.IonContent, selector: "ion-content", inputs: ["color", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"] }, { type: i4.MonthComponent, selector: "ion-calendar-month", inputs: ["month", "pickMode", "isSaveHistory", "id", "readonly", "color", "maxMultiDates"], outputs: ["change", "select", "selectStart", "selectEnd"] }, { type: i1.IonInfiniteScroll, selector: "ion-infinite-scroll", inputs: ["disabled", "position", "threshold"] }, { type: i1.IonInfiniteScrollContent, selector: "ion-infinite-scroll-content", inputs: ["loadingSpinner", "loadingText"] }, { type: i1.IonFooter, selector: "ion-footer", inputs: ["collapse", "mode", "translucent"] }], directives: [{ type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i5.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i5.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i6.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i6.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CalendarModal, decorators: [{
            type: Component,
            args: [{
                    selector: 'ion-calendar-modal',
                    styleUrls: ['./calendar.modal.scss'],
                    template: `
    <ion-header>
      <ion-toolbar>
          <ion-buttons slot="secondary">
              <ion-button type='button' slot="icon-only" fill="clear" class="primary" (click)="onCancel()">
              <span *ngIf="_d.closeLabel !== '' && !_d.closeIcon">{{ _d.closeLabel }}</span>
              <ion-icon *ngIf="_d.closeIcon" name="close"></ion-icon>
            </ion-button>
          </ion-buttons>

          <ion-title>{{ _d.title }}</ion-title>
      </ion-toolbar>

      <ng-content select="[sub-header]"></ng-content>

      <ion-row *ngIf="_d.pickMode === 'range'" lines="none" [class]="'dates-toolbar'" no-border>
        <ion-col size="4" class="start-date ion-text-nowrap">
          {{ _getDayFormatted(datesTemp[0]) || 'Start Date' }}
        </ion-col>
        <ion-col size="4" class="ion-text-center">
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </ion-col>
        <ion-col size="4" class="end-date ion-text-right ion-text-nowrap">
          {{ _getDayFormatted(datesTemp[1]) || 'End Date' }}
        </ion-col>
      </ion-row>

      <ion-calendar-week
        [color]="_d.color"
        [weekArray]="_d.weekdays"
        [weekStart]="_d.weekStart">
      </ion-calendar-week>

    </ion-header>

    <ion-content (ionScroll)="onScroll($event)" class="calendar-page" [scrollEvents]="true"
                 [ngClass]="{'multi-selection': _d.pickMode === 'multi'}">

      <div #months>
        <ng-template ngFor let-month [ngForOf]="calendarMonths" [ngForTrackBy]="trackByIndex" let-i="index">
          <div class="month-box" [attr.id]="'month-' + i">
            <h4 class="month-title">{{ _monthFormat(month.original?.date) }}</h4>
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

      <ion-infinite-scroll threshold="25%" (ionInfinite)="nextMonth($event)">
        <ion-infinite-scroll-content></ion-infinite-scroll-content>
      </ion-infinite-scroll>

    </ion-content>

    <ion-footer>

        <ion-button expand="full" *ngIf="!_d.autoDone" [disabled]="!canDone()" (click)="done()">
          <span *ngIf="_d.doneLabel !== '' && !_d.doneIcon">{{ _d.doneLabel }}</span>
          <ion-icon *ngIf="_d.doneIcon" name="checkmark"></ion-icon>
        </ion-button>

    </ion-footer>
  `,
                }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i1.NavParams }, { type: i1.ModalController }, { type: i0.ChangeDetectorRef }, { type: i2.CalendarService }]; }, propDecorators: { content: [{
                type: ViewChild,
                args: [IonContent, { static: true }]
            }], monthsEle: [{
                type: ViewChild,
                args: ['months', { static: true }]
            }], ionPage: [{
                type: HostBinding,
                args: ['class.ion-page']
            }], options: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIubW9kYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvY2FsZW5kYXIubW9kYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxTQUFTLEVBQ1QsVUFBVSxFQUNWLGlCQUFpQixFQUNqQixTQUFTLEVBRVQsS0FBSyxFQUVMLFdBQVcsR0FDWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDL0QsT0FBTyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBQzVCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxXQUFXLENBQUM7Ozs7Ozs7O0FBRXRDLE1BQU0sdUJBQXVCLEdBQUcsQ0FBQyxDQUFDO0FBNkVsQyxNQUFNLE9BQU8sYUFBYTtJQXNCeEIsWUFDVSxTQUFvQixFQUNyQixXQUF1QixFQUN2QixNQUFpQixFQUNqQixTQUEwQixFQUMxQixHQUFzQixFQUN0QixNQUF1QjtRQUx0QixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3JCLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQ3ZCLFdBQU0sR0FBTixNQUFNLENBQVc7UUFDakIsY0FBUyxHQUFULFNBQVMsQ0FBaUI7UUFDMUIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDdEIsV0FBTSxHQUFOLE1BQU0sQ0FBaUI7UUFyQmhDLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFLZixjQUFTLEdBQTZCLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBTW5ELGdCQUFXLEdBQUcsSUFBSSxDQUFDO0lBV2hCLENBQUM7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ1osSUFBSSxDQUFDLGVBQWUsRUFB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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FzRVQ7aUJBQ0Y7Nk9BR0MsT0FBTztzQkFETixTQUFTO3VCQUFDLFVBQVUsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Z0JBR3ZDLFNBQVM7c0JBRFIsU0FBUzt1QkFBQyxRQUFRLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2dCQUlyQyxPQUFPO3NCQUROLFdBQVc7dUJBQUMsZ0JBQWdCO2dCQUk3QixPQUFPO3NCQUROLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIFZpZXdDaGlsZCxcbiAgRWxlbWVudFJlZixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIFJlbmRlcmVyMixcbiAgT25Jbml0LFxuICBJbnB1dCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgSG9zdEJpbmRpbmcsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2UGFyYW1zLCBNb2RhbENvbnRyb2xsZXIsIElvbkNvbnRlbnQgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5pbXBvcnQgeyBDYWxlbmRhckRheSwgQ2FsZW5kYXJNb250aCwgQ2FsZW5kYXJNb2RhbE9wdGlvbnMgfSBmcm9tICcuLi9jYWxlbmRhci5tb2RlbCc7XG5pbXBvcnQgeyBDYWxlbmRhclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jYWxlbmRhci5zZXJ2aWNlJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IHBpY2tNb2RlcyB9IGZyb20gJy4uL2NvbmZpZyc7XG5cbmNvbnN0IE5VTV9PRl9NT05USFNfVE9fQ1JFQVRFID0gMztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaW9uLWNhbGVuZGFyLW1vZGFsJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2FsZW5kYXIubW9kYWwuc2NzcyddLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxpb24taGVhZGVyPlxuICAgICAgPGlvbi10b29sYmFyPlxuICAgICAgICAgIDxpb24tYnV0dG9ucyBzbG90PVwic2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgIDxpb24tYnV0dG9uIHR5cGU9J2J1dHRvbicgc2xvdD1cImljb24tb25seVwiIGZpbGw9XCJjbGVhclwiIGNsYXNzPVwicHJpbWFyeVwiIChjbGljayk9XCJvbkNhbmNlbCgpXCI+XG4gICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiX2QuY2xvc2VMYWJlbCAhPT0gJycgJiYgIV9kLmNsb3NlSWNvblwiPnt7IF9kLmNsb3NlTGFiZWwgfX08L3NwYW4+XG4gICAgICAgICAgICAgIDxpb24taWNvbiAqbmdJZj1cIl9kLmNsb3NlSWNvblwiIG5hbWU9XCJjbG9zZVwiPjwvaW9uLWljb24+XG4gICAgICAgICAgICA8L2lvbi1idXR0b24+XG4gICAgICAgICAgPC9pb24tYnV0dG9ucz5cblxuICAgICAgICAgIDxpb24tdGl0bGU+e3sgX2QudGl0bGUgfX08L2lvbi10aXRsZT5cbiAgICAgIDwvaW9uLXRvb2xiYXI+XG5cbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltzdWItaGVhZGVyXVwiPjwvbmctY29udGVudD5cblxuICAgICAgPGlvbi1yb3cgKm5nSWY9XCJfZC5waWNrTW9kZSA9PT0gJ3JhbmdlJ1wiIGxpbmVzPVwibm9uZVwiIFtjbGFzc109XCInZGF0ZXMtdG9vbGJhcidcIiBuby1ib3JkZXI+XG4gICAgICAgIDxpb24tY29sIHNpemU9XCI0XCIgY2xhc3M9XCJzdGFydC1kYXRlIGlvbi10ZXh0LW5vd3JhcFwiPlxuICAgICAgICAgIHt7IF9nZXREYXlGb3JtYXR0ZWQoZGF0ZXNUZW1wWzBdKSB8fCAnU3RhcnQgRGF0ZScgfX1cbiAgICAgICAgPC9pb24tY29sPlxuICAgICAgICA8aW9uLWNvbCBzaXplPVwiNFwiIGNsYXNzPVwiaW9uLXRleHQtY2VudGVyXCI+XG4gICAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJhcnJvdy1mb3J3YXJkLW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICA8L2lvbi1jb2w+XG4gICAgICAgIDxpb24tY29sIHNpemU9XCI0XCIgY2xhc3M9XCJlbmQtZGF0ZSBpb24tdGV4dC1yaWdodCBpb24tdGV4dC1ub3dyYXBcIj5cbiAgICAgICAgICB7eyBfZ2V0RGF5Rm9ybWF0dGVkKGRhdGVzVGVtcFsxXSkgfHwgJ0VuZCBEYXRlJyB9fVxuICAgICAgICA8L2lvbi1jb2w+XG4gICAgICA8L2lvbi1yb3c+XG5cbiAgICAgIDxpb24tY2FsZW5kYXItd2Vla1xuICAgICAgICBbY29sb3JdPVwiX2QuY29sb3JcIlxuICAgICAgICBbd2Vla0FycmF5XT1cIl9kLndlZWtkYXlzXCJcbiAgICAgICAgW3dlZWtTdGFydF09XCJfZC53ZWVrU3RhcnRcIj5cbiAgICAgIDwvaW9uLWNhbGVuZGFyLXdlZWs+XG5cbiAgICA8L2lvbi1oZWFkZXI+XG5cbiAgICA8aW9uLWNvbnRlbnQgKGlvblNjcm9sbCk9XCJvblNjcm9sbCgkZXZlbnQpXCIgY2xhc3M9XCJjYWxlbmRhci1wYWdlXCIgW3Njcm9sbEV2ZW50c109XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydtdWx0aS1zZWxlY3Rpb24nOiBfZC5waWNrTW9kZSA9PT0gJ211bHRpJ31cIj5cblxuICAgICAgPGRpdiAjbW9udGhzPlxuICAgICAgICA8bmctdGVtcGxhdGUgbmdGb3IgbGV0LW1vbnRoIFtuZ0Zvck9mXT1cImNhbGVuZGFyTW9udGhzXCIgW25nRm9yVHJhY2tCeV09XCJ0cmFja0J5SW5kZXhcIiBsZXQtaT1cImluZGV4XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1vbnRoLWJveFwiIFthdHRyLmlkXT1cIidtb250aC0nICsgaVwiPlxuICAgICAgICAgICAgPGg0IGNsYXNzPVwibW9udGgtdGl0bGVcIj57eyBfbW9udGhGb3JtYXQobW9udGgub3JpZ2luYWw/LmRhdGUpIH19PC9oND5cbiAgICAgICAgICAgIDxpb24tY2FsZW5kYXItbW9udGggW21vbnRoXT1cIm1vbnRoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3BpY2tNb2RlXT1cIl9kLnBpY2tNb2RlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2lzU2F2ZUhpc3RvcnldPVwiX2QuaXNTYXZlSGlzdG9yeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpZF09XCJfZC5pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb2xvcl09XCJfZC5jb2xvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFttYXhNdWx0aURhdGVzXT1cIl9kLm1heE11bHRpRGF0ZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2hhbmdlKT1cIm9uQ2hhbmdlKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImRhdGVzVGVtcFwiPlxuICAgICAgICAgICAgPC9pb24tY2FsZW5kYXItbW9udGg+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8aW9uLWluZmluaXRlLXNjcm9sbCB0aHJlc2hvbGQ9XCIyNSVcIiAoaW9uSW5maW5pdGUpPVwibmV4dE1vbnRoKCRldmVudClcIj5cbiAgICAgICAgPGlvbi1pbmZpbml0ZS1zY3JvbGwtY29udGVudD48L2lvbi1pbmZpbml0ZS1zY3JvbGwtY29udGVudD5cbiAgICAgIDwvaW9uLWluZmluaXRlLXNjcm9sbD5cblxuICAgIDwvaW9uLWNvbnRlbnQ+XG5cbiAgICA8aW9uLWZvb3Rlcj5cblxuICAgICAgICA8aW9uLWJ1dHRvbiBleHBhbmQ9XCJmdWxsXCIgKm5nSWY9XCIhX2QuYXV0b0RvbmVcIiBbZGlzYWJsZWRdPVwiIWNhbkRvbmUoKVwiIChjbGljayk9XCJkb25lKClcIj5cbiAgICAgICAgICA8c3BhbiAqbmdJZj1cIl9kLmRvbmVMYWJlbCAhPT0gJycgJiYgIV9kLmRvbmVJY29uXCI+e3sgX2QuZG9uZUxhYmVsIH19PC9zcGFuPlxuICAgICAgICAgIDxpb24taWNvbiAqbmdJZj1cIl9kLmRvbmVJY29uXCIgbmFtZT1cImNoZWNrbWFya1wiPjwvaW9uLWljb24+XG4gICAgICAgIDwvaW9uLWJ1dHRvbj5cblxuICAgIDwvaW9uLWZvb3Rlcj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJNb2RhbCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBWaWV3Q2hpbGQoSW9uQ29udGVudCwgeyBzdGF0aWM6IHRydWUgfSlcbiAgY29udGVudDogSW9uQ29udGVudCB8IGFueTtcbiAgQFZpZXdDaGlsZCgnbW9udGhzJywgeyBzdGF0aWM6IHRydWUgfSlcbiAgbW9udGhzRWxlOiBFbGVtZW50UmVmIHwgYW55O1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuaW9uLXBhZ2UnKVxuICBpb25QYWdlID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBvcHRpb25zOiBDYWxlbmRhck1vZGFsT3B0aW9ucyB8IGFueTtcblxuICBkYXRlc1RlbXA6IEFycmF5PENhbGVuZGFyRGF5PiB8IGFueSA9IFtudWxsLCBudWxsXTtcbiAgY2FsZW5kYXJNb250aHM6IEFycmF5PENhbGVuZGFyTW9udGg+IHwgYW55O1xuICBzdGVwOiBudW1iZXIgfCBhbnk7XG4gIHNob3dZZWFyUGlja2VyOiBib29sZWFuIHwgYW55O1xuICB5ZWFyOiBudW1iZXIgfCBhbnk7XG4gIHllYXJzOiBBcnJheTxudW1iZXI+IHwgYW55O1xuICBfc2Nyb2xsTG9jayA9IHRydWU7XG4gIF9kOiBhbnk7XG4gIGFjdHVhbEZpcnN0VGltZTogbnVtYmVyIHwgYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHVibGljIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHB1YmxpYyBwYXJhbXM6IE5hdlBhcmFtcyxcbiAgICBwdWJsaWMgbW9kYWxDdHJsOiBNb2RhbENvbnRyb2xsZXIsXG4gICAgcHVibGljIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHVibGljIGNhbFN2YzogQ2FsZW5kYXJTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmluaXQoKTtcbiAgICB0aGlzLmluaXREZWZhdWx0RGF0ZSgpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZmluZENzc0NsYXNzKCk7XG4gICAgaWYgKHRoaXMuX2QuY2FuQmFja3dhcmRzU2VsZWN0ZWQpIHRoaXMuYmFja3dhcmRzTW9udGgoKTtcbiAgICB0aGlzLnNjcm9sbFRvRGVmYXVsdERhdGUoKTtcbiAgfVxuXG4gIGluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fZCA9IHRoaXMuY2FsU3ZjLnNhZmVPcHQodGhpcy5vcHRpb25zKTtcbiAgICB0aGlzLl9kLnNob3dBZGphY2VudE1vbnRoRGF5ID0gZmFsc2U7XG4gICAgdGhpcy5zdGVwID0gdGhpcy5fZC5zdGVwO1xuICAgIGlmICh0aGlzLnN0ZXAgPCB0aGlzLmNhbFN2Yy5ERUZBVUxUX1NURVApIHtcbiAgICAgIHRoaXMuc3RlcCA9IHRoaXMuY2FsU3ZjLkRFRkFVTFRfU1RFUDtcbiAgICB9XG5cbiAgICB0aGlzLmNhbGVuZGFyTW9udGhzID0gdGhpcy5jYWxTdmMuY3JlYXRlTW9udGhzQnlQZXJpb2QoXG4gICAgICBtb21lbnQodGhpcy5fZC5mcm9tKS52YWx1ZU9mKCksXG4gICAgICB0aGlzLmZpbmRJbml0TW9udGhOdW1iZXIodGhpcy5fZC5kZWZhdWx0U2Nyb2xsVG8pICsgdGhpcy5zdGVwLFxuICAgICAgdGhpcy5fZFxuICAgICk7XG4gIH1cblxuICBpbml0RGVmYXVsdERhdGUoKTogdm9pZCB7XG4gICAgY29uc3QgeyBwaWNrTW9kZSwgZGVmYXVsdERhdGUsIGRlZmF1bHREYXRlUmFuZ2UsIGRlZmF1bHREYXRlcyB9ID0gdGhpcy5fZDtcbiAgICBzd2l0Y2ggKHBpY2tNb2RlKSB7XG4gICAgICBjYXNlIHBpY2tNb2Rlcy5TSU5HTEU6XG4gICAgICAgIGlmIChkZWZhdWx0RGF0ZSkge1xuICAgICAgICAgIHRoaXMuZGF0ZXNUZW1wWzBdID0gdGhpcy5jYWxTdmMuY3JlYXRlQ2FsZW5kYXJEYXkodGhpcy5fZ2V0RGF5VGltZShkZWZhdWx0RGF0ZSksIHRoaXMuX2QpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBwaWNrTW9kZXMuUkFOR0U6XG4gICAgICAgIGlmIChkZWZhdWx0RGF0ZVJhbmdlKSB7XG4gICAgICAgICAgaWYgKGRlZmF1bHREYXRlUmFuZ2UuZnJvbSkge1xuICAgICAgICAgICAgdGhpcy5kYXRlc1RlbXBbMF0gPSB0aGlzLmNhbFN2Yy5jcmVhdGVDYWxlbmRhckRheSh0aGlzLl9nZXREYXlUaW1lKGRlZmF1bHREYXRlUmFuZ2UuZnJvbSksIHRoaXMuX2QpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZGVmYXVsdERhdGVSYW5nZS50bykge1xuICAgICAgICAgICAgdGhpcy5kYXRlc1RlbXBbMV0gPSB0aGlzLmNhbFN2Yy5jcmVhdGVDYWxlbmRhckRheSh0aGlzLl9nZXREYXlUaW1lKGRlZmF1bHREYXRlUmFuZ2UudG8pLCB0aGlzLl9kKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHBpY2tNb2Rlcy5NVUxUSTpcbiAgICAgICAgaWYgKGRlZmF1bHREYXRlcyAmJiBkZWZhdWx0RGF0ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy5kYXRlc1RlbXAgPSBkZWZhdWx0RGF0ZXMubWFwKChlOiBhbnkpID0+IHRoaXMuY2FsU3ZjLmNyZWF0ZUNhbGVuZGFyRGF5KHRoaXMuX2dldERheVRpbWUoZSksIHRoaXMuX2QpKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMuZGF0ZXNUZW1wID0gW251bGwsIG51bGxdO1xuICAgIH1cbiAgfVxuXG4gIGZpbmRDc3NDbGFzcygpOiB2b2lkIHtcbiAgICBjb25zdCB7IGNzc0NsYXNzIH0gPSB0aGlzLl9kO1xuICAgIGlmIChjc3NDbGFzcykge1xuICAgICAgY3NzQ2xhc3Muc3BsaXQoJyAnKS5mb3JFYWNoKChfY2xhc3M6IHN0cmluZykgPT4ge1xuICAgICAgICBpZiAoX2NsYXNzLnRyaW0oKSAhPT0gJycpIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgX2NsYXNzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2hhbmdlKGRhdGE6IGFueSk6IHZvaWQge1xuICAgIGNvbnN0IHsgcGlja01vZGUsIGF1dG9Eb25lIH0gPSB0aGlzLl9kO1xuXG4gICAgdGhpcy5kYXRlc1RlbXAgPSBkYXRhO1xuICAgIHRoaXMucmVmLmRldGVjdENoYW5nZXMoKTtcblxuICAgIGlmIChwaWNrTW9kZSAhPT0gcGlja01vZGVzLk1VTFRJICYmIGF1dG9Eb25lICYmIHRoaXMuY2FuRG9uZSgpKSB7XG4gICAgICB0aGlzLmRvbmUoKTtcbiAgICB9XG5cbiAgICB0aGlzLnJlcGFpbnRET00oKTtcbiAgfVxuXG4gIG9uQ2FuY2VsKCk6IHZvaWQge1xuICAgIHRoaXMubW9kYWxDdHJsLmRpc21pc3MobnVsbCwgJ2NhbmNlbCcpO1xuICB9XG5cbiAgZG9uZSgpOiB2b2lkIHtcbiAgICBjb25zdCB7IHBpY2tNb2RlIH0gPSB0aGlzLl9kO1xuXG4gICAgdGhpcy5tb2RhbEN0cmwuZGlzbWlzcyh0aGlzLmNhbFN2Yy53cmFwUmVzdWx0KHRoaXMuZGF0ZXNUZW1wLCBwaWNrTW9kZSksICdkb25lJyk7XG4gIH1cblxuICBjYW5Eb25lKCk6IGJvb2xlYW4ge1xuICAgIGlmICghQXJyYXkuaXNBcnJheSh0aGlzLmRhdGVzVGVtcCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgeyBwaWNrTW9kZSwgZGVmYXVsdEVuZERhdGVUb1N0YXJ0RGF0ZSB9ID0gdGhpcy5fZDtcblxuICAgIHN3aXRjaCAocGlja01vZGUpIHtcbiAgICAgIGNhc2UgcGlja01vZGVzLlNJTkdMRTpcbiAgICAgICAgcmV0dXJuICEhKHRoaXMuZGF0ZXNUZW1wWzBdICYmIHRoaXMuZGF0ZXNUZW1wWzBdLnRpbWUpO1xuICAgICAgY2FzZSBwaWNrTW9kZXMuUkFOR0U6XG4gICAgICAgIGlmIChkZWZhdWx0RW5kRGF0ZVRvU3RhcnREYXRlKSB7XG4gICAgICAgICAgcmV0dXJuICEhKHRoaXMuZGF0ZXNUZW1wWzBdICYmIHRoaXMuZGF0ZXNUZW1wWzBdLnRpbWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAhISh0aGlzLmRhdGVzVGVtcFswXSAmJiB0aGlzLmRhdGVzVGVtcFsxXSkgJiYgISEodGhpcy5kYXRlc1RlbXBbMF0udGltZSAmJiB0aGlzLmRhdGVzVGVtcFsxXS50aW1lKTtcbiAgICAgIGNhc2UgcGlja01vZGVzLk1VTFRJOlxuICAgICAgICByZXR1cm4gdGhpcy5kYXRlc1RlbXAubGVuZ3RoID4gMCAmJiB0aGlzLmRhdGVzVGVtcC5ldmVyeShlID0+ICEhZSAmJiAhIWUudGltZSk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5kYXRlc1RlbXAgPSBbbnVsbCwgbnVsbF07XG4gIH1cblxuICBjYW5DbGVhcigpIHtcbiAgICByZXR1cm4gISF0aGlzLmRhdGVzVGVtcFswXTtcbiAgfVxuXG4gIG5leHRNb250aChldmVudDogYW55KTogdm9pZCB7XG4gICAgY29uc3QgbGVuID0gdGhpcy5jYWxlbmRhck1vbnRocy5sZW5ndGg7XG4gICAgY29uc3QgZmluYWwgPSB0aGlzLmNhbGVuZGFyTW9udGhzW2xlbiAtIDFdO1xuICAgIGNvbnN0IG5leHRUaW1lID0gbW9tZW50KGZpbmFsLm9yaWdpbmFsLnRpbWUpXG4gICAgICAuYWRkKDEsICdNJylcbiAgICAgIC52YWx1ZU9mKCk7XG4gICAgY29uc3QgcmFuZ2VFbmQgPSB0aGlzLl9kLnRvID8gbW9tZW50KHRoaXMuX2QudG8pLnN1YnRyYWN0KDEsICdNJykgOiAwO1xuXG4gICAgaWYgKGxlbiA8PSAwIHx8IChyYW5nZUVuZCAhPT0gMCAmJiBtb21lbnQoZmluYWwub3JpZ2luYWwudGltZSkuaXNBZnRlcihyYW5nZUVuZCkpKSB7XG4gICAgICBldmVudC50YXJnZXQuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuY2FsZW5kYXJNb250aHMucHVzaCguLi50aGlzLmNhbFN2Yy5jcmVhdGVNb250aHNCeVBlcmlvZChuZXh0VGltZSwgTlVNX09GX01PTlRIU19UT19DUkVBVEUsIHRoaXMuX2QpKTtcbiAgICBldmVudC50YXJnZXQuY29tcGxldGUoKTtcbiAgICB0aGlzLnJlcGFpbnRET00oKTtcbiAgfVxuXG4gIGJhY2t3YXJkc01vbnRoKCk6IHZvaWQge1xuICAgIGNvbnN0IGZpcnN0ID0gdGhpcy5jYWxlbmRhck1vbnRoc1swXTtcblxuICAgIGlmIChmaXJzdC5vcmlnaW5hbC50aW1lIDw9IDApIHtcbiAgICAgIHRoaXMuX2QuY2FuQmFja3dhcmRzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBmaXJzdFRpbWUgPSAodGhpcy5hY3R1YWxGaXJzdFRpbWUgPSBtb21lbnQoZmlyc3Qub3JpZ2luYWwudGltZSlcbiAgICAgIC5zdWJ0cmFjdChOVU1fT0ZfTU9OVEhTX1RPX0NSRUFURSwgJ00nKVxuICAgICAgLnZhbHVlT2YoKSk7XG5cbiAgICB0aGlzLmNhbGVuZGFyTW9udGhzLnVuc2hpZnQoLi4udGhpcy5jYWxTdmMuY3JlYXRlTW9udGhzQnlQZXJpb2QoZmlyc3RUaW1lLCBOVU1fT0ZfTU9OVEhTX1RPX0NSRUFURSwgdGhpcy5fZCkpO1xuICAgIHRoaXMucmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICB0aGlzLnJlcGFpbnRET00oKTtcbiAgfVxuXG4gIHNjcm9sbFRvRGF0ZShkYXRlOiBEYXRlKTogdm9pZCB7XG4gICAgY29uc3QgZGVmYXVsdERhdGVJbmRleCA9IHRoaXMuZmluZEluaXRNb250aE51bWJlcihkYXRlKTtcbiAgICBjb25zdCBtb250aEVsZW1lbnQgPSB0aGlzLm1vbnRoc0VsZS5uYXRpdmVFbGVtZW50LmNoaWxkcmVuW2Btb250aC0ke2RlZmF1bHREYXRlSW5kZXh9YF07XG4gICAgY29uc3QgZG9tRWxlbVJlYWR5V2FpdFRpbWUgPSAzMDA7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IGRlZmF1bHREYXRlTW9udGggPSBtb250aEVsZW1lbnQgPyBtb250aEVsZW1lbnQub2Zmc2V0VG9wIDogMDtcblxuICAgICAgaWYgKGRlZmF1bHREYXRlSW5kZXggIT09IC0xICYmIGRlZmF1bHREYXRlTW9udGggIT09IDApIHtcbiAgICAgICAgdGhpcy5jb250ZW50LnNjcm9sbEJ5UG9pbnQoMCwgZGVmYXVsdERhdGVNb250aCwgMTI4KTtcbiAgICAgIH1cbiAgICB9LCBkb21FbGVtUmVhZHlXYWl0VGltZSk7XG4gIH1cblxuICBzY3JvbGxUb0RlZmF1bHREYXRlKCk6IHZvaWQge1xuICAgIHRoaXMuc2Nyb2xsVG9EYXRlKHRoaXMuX2QuZGVmYXVsdFNjcm9sbFRvKTtcbiAgfVxuXG4gIG9uU2Nyb2xsKCRldmVudDogYW55KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9kLmNhbkJhY2t3YXJkc1NlbGVjdGVkKSByZXR1cm47XG5cbiAgICBjb25zdCB7IGRldGFpbCB9ID0gJGV2ZW50O1xuXG4gICAgaWYgKGRldGFpbC5zY3JvbGxUb3AgPD0gMjAwICYmIGRldGFpbC52ZWxvY2l0eVkgPCAwICYmIHRoaXMuX3Njcm9sbExvY2spIHtcbiAgICAgIHRoaXMuY29udGVudC5nZXRTY3JvbGxFbGVtZW50KCkudGhlbigoc2Nyb2xsRWxlbSA6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLl9zY3JvbGxMb2NrID0gITE7XG5cbiAgICAgICAgY29uc3QgaGVpZ2h0QmVmb3JlTW9udGhQcmVwZW5kID0gc2Nyb2xsRWxlbS5zY3JvbGxIZWlnaHQ7XG4gICAgICAgIHRoaXMuYmFja3dhcmRzTW9udGgoKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgY29uc3QgaGVpZ2h0QWZ0ZXJNb250aFByZXBlbmQgPSBzY3JvbGxFbGVtLnNjcm9sbEhlaWdodDtcblxuICAgICAgICAgIHRoaXMuY29udGVudC5zY3JvbGxCeVBvaW50KDAsIGhlaWdodEFmdGVyTW9udGhQcmVwZW5kIC0gaGVpZ2h0QmVmb3JlTW9udGhQcmVwZW5kLCAwKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3Njcm9sbExvY2sgPSAhMDtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSwgMTgwKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJbiBzb21lIG9sZGVyIFNhZmFyaSB2ZXJzaW9ucyAob2JzZXJ2ZWQgYXQgTWFjJ3MgU2FmYXJpIDEwLjApLCB0aGVyZSBpcyBhbiBpc3N1ZSB3aGVyZSBzdHlsZSB1cGRhdGVzIHRvXG4gICAqIHNoYWRvd1Jvb3QgZGVzY2VuZGFudHMgZG9uJ3QgY2F1c2UgYSBicm93c2VyIHJlcGFpbnQuXG4gICAqIFNlZSBmb3IgbW9yZSBkZXRhaWxzOiBodHRwczovL2dpdGh1Yi5jb20vUG9seW1lci9wb2x5bWVyL2lzc3Vlcy80NzAxXG4gICAqL1xuICByZXBhaW50RE9NKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQuZ2V0U2Nyb2xsRWxlbWVudCgpLnRoZW4oKHNjcm9sbEVsZW06IGFueSkgPT4ge1xuICAgICAgLy8gVXBkYXRlIHNjcm9sbEVsZW0gdG8gZW5zdXJlIHRoYXQgaGVpZ2h0IG9mIHRoZSBjb250YWluZXIgY2hhbmdlcyBhcyBNb250aHMgYXJlIGFwcGVuZGVkL3ByZXBlbmRlZFxuICAgICAgc2Nyb2xsRWxlbS5zdHlsZS56SW5kZXggPSAnMic7XG4gICAgICBzY3JvbGxFbGVtLnN0eWxlLnpJbmRleCA9ICdpbml0aWFsJztcbiAgICAgIC8vIFVwZGF0ZSBtb250aHNFbGUgdG8gZW5zdXJlIHNlbGVjdGVkIHN0YXRlIGlzIHJlZmxlY3RlZCB3aGVuIHRhcHBpbmcgb24gYSBkYXlcbiAgICAgIHRoaXMubW9udGhzRWxlLm5hdGl2ZUVsZW1lbnQuc3R5bGUuekluZGV4ID0gJzInO1xuICAgICAgdGhpcy5tb250aHNFbGUubmF0aXZlRWxlbWVudC5zdHlsZS56SW5kZXggPSAnaW5pdGlhbCc7XG4gICAgfSk7XG4gIH1cblxuICBmaW5kSW5pdE1vbnRoTnVtYmVyKGRhdGU6IERhdGUpOiBudW1iZXIge1xuICAgIGxldCBzdGFydERhdGUgPSB0aGlzLmFjdHVhbEZpcnN0VGltZSA/IG1vbWVudCh0aGlzLmFjdHVhbEZpcnN0VGltZSkgOiBtb21lbnQodGhpcy5fZC5mcm9tKTtcbiAgICBjb25zdCBkZWZhdWx0U2Nyb2xsVG8gPSBtb21lbnQoZGF0ZSk7XG4gICAgY29uc3QgaXNBZnRlcjogYm9vbGVhbiA9IGRlZmF1bHRTY3JvbGxUby5pc0FmdGVyKHN0YXJ0RGF0ZSk7XG4gICAgaWYgKCFpc0FmdGVyKSByZXR1cm4gLTE7XG5cbiAgICBpZiAodGhpcy5zaG93WWVhclBpY2tlcikge1xuICAgICAgc3RhcnREYXRlID0gbW9tZW50KG5ldyBEYXRlKHRoaXMueWVhciwgMCwgMSkpO1xuICAgIH1cblxuICAgIHJldHVybiBkZWZhdWx0U2Nyb2xsVG8uZGlmZihzdGFydERhdGUsICdtb250aCcpO1xuICB9XG5cbiAgX2dldERheVRpbWUoZGF0ZTogYW55KTogbnVtYmVyIHtcbiAgICByZXR1cm4gbW9tZW50KG1vbWVudChkYXRlKS5mb3JtYXQoJ1lZWVktTU0tREQnKSkudmFsdWVPZigpO1xuICB9XG5cbiAgX21vbnRoRm9ybWF0KGRhdGU6IGFueSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG1vbWVudChkYXRlKS5mb3JtYXQodGhpcy5fZC5tb250aEZvcm1hdC5yZXBsYWNlKC95L2csICdZJykpO1xuICB9XG5cbiAgX2dldERheUZvcm1hdHRlZChkYXRhOiBhbnkpIHtcbiAgICBpZiAoIWRhdGEpIHsgcmV0dXJuIG51bGw7IH1cbiAgICByZXR1cm4gbW9tZW50KGRhdGEudGltZSkuZm9ybWF0KCdkZGQsIE1NTSBEbycpO1xuICB9XG5cbiAgdHJhY2tCeUluZGV4KGluZGV4OiBudW1iZXIsIG1vbWVudERhdGU6IENhbGVuZGFyTW9udGgpOiBudW1iZXIge1xuICAgIHJldHVybiBtb21lbnREYXRlLm9yaWdpbmFsID8gbW9tZW50RGF0ZS5vcmlnaW5hbC50aW1lIDogaW5kZXg7XG4gIH1cbn1cbiJdfQ==