import { Component, ViewChild, ElementRef, ChangeDetectorRef, Renderer2, Input, HostBinding, } from '@angular/core';
import { ModalController, IonContent } from '@ionic/angular';
import { CalendarService } from '../services/calendar.service';
import moment from 'moment';
import { pickModes } from '../config';
import * as i0 from "@angular/core";
import * as i1 from "@ionic/angular";
import * as i2 from "../services/calendar.service";
import * as i3 from "@angular/common";
import * as i4 from "@angular/forms";
import * as i5 from "./calendar-week.component";
import * as i6 from "./month.component";
const NUM_OF_MONTHS_TO_CREATE = 3;
export class CalendarDemandModal {
    constructor(_renderer, _elementRef, modalCtrl, ref, calSvc) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.modalCtrl = modalCtrl;
        this.ref = ref;
        this.calSvc = calSvc;
        this.ionPage = true;
        this.demandCalendarService = null;
        this.latitude = '';
        this.longitude = '';
        this.cheaperText = 'Cheaper';
        this.averageText = 'Average';
        this.higherText = 'Higher';
        this.loading = true;
        this.datesTemp = [null, null];
        this._scrollLock = true;
    }
    ngOnInit() {
        this.initDemandCalendar();
    }
    ngAfterViewInit() {
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
                    this.datesTemp = defaultDates.map((e) => this.calSvc.createCalendarDay(this.getDayTime(e), this._d));
                }
                break;
            default:
                this.datesTemp = [null, null];
        }
    }
    async initDemandCalendar() {
        if (this.demandCalendarService) {
            const days = await this.demandCalendarService.get(this.latitude, this.longitude).toPromise();
            this.options.daysConfig = this.buildDays(days);
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
    buildDays(items) {
        const dayConfig = [];
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
    findCssClass() {
        if (this._d) {
            const { cssClass } = this._d;
            if (cssClass) {
                cssClass.split(' ').forEach((_class) => {
                    if (_class.trim() !== '')
                        this._renderer.addClass(this._elementRef.nativeElement, _class);
                });
            }
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
        const monthElement = this.monthsEle?.nativeElement.children[`month-${defaultDateIndex}`];
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
        if (!this._d?.canBackwardsSelected)
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
    repaintDOM() {
        return this.content.getScrollElement().then((scrollElem) => {
            scrollElem.style.zIndex = '2';
            scrollElem.style.zIndex = 'initial';
            if (this.monthsEle?.nativeElement) {
                this.monthsEle.nativeElement.style.zIndex = '2';
                this.monthsEle.nativeElement.style.zIndex = 'initial';
            }
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
    getDayTime(date) {
        return moment(moment(date).format('YYYY-MM-DD')).valueOf();
    }
    monthFormat(date) {
        return moment(date).format(this._d.monthFormat.replace(/y/g, 'Y'));
    }
    getDayFormatted(data) {
        if (!data) {
            return null;
        }
        return moment(data.time).format('ddd, MMM Do');
    }
    trackByIndex(index, momentDate) {
        return momentDate.original ? momentDate.original.time : index;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CalendarDemandModal, deps: [{ token: i0.Renderer2 }, { token: i0.ElementRef }, { token: i1.ModalController }, { token: i0.ChangeDetectorRef }, { token: i2.CalendarService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: CalendarDemandModal, selector: "ion-calendar-demand-modal", inputs: { options: "options", demandCalendarService: "demandCalendarService", latitude: "latitude", longitude: "longitude", cheaperText: "cheaperText", averageText: "averageText", higherText: "higherText" }, host: { properties: { "class.ion-page": "this.ionPage" } }, viewQueries: [{ propertyName: "content", first: true, predicate: IonContent, descendants: true, static: true }, { propertyName: "monthsEle", first: true, predicate: ["months"], descendants: true, static: true }], ngImport: i0, template: `
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
  `, isInline: true, styles: [":host ion-select{max-width:unset}:host ion-select .select-icon>.select-icon-inner,:host ion-select .select-text{color:#fff!important}:host ion-select.select-ios{max-width:unset}:host ion-toolbar ion-button.md{color:var(--ion-color-primary)}:host .dates-toolbar{--background: transparent;padding:0 1rem}:host .dates-toolbar.primary{--background: var(--ion-color-primary)}:host .dates-toolbar.secondary{--background: var(--ion-color-secondary)}:host .dates-toolbar.danger{--background: var(--ion-color-danger)}:host .dates-toolbar.dark{--background: var(--ion-color-dark)}:host .dates-toolbar.light{--background: var(--ion-color-light)}:host .dates-toolbar.transparent{--background: transparent}:host .dates-toolbar.toolbar-md{min-height:44px}:host .ios.dates-toolbar{padding-top:1rem}:host .start-date{padding-left:.5rem}:host .end-date{margin-right:-.5rem}:host .calendar-page{background-color:#fbfbfb}:host .month-box{display:inline-block;width:100%;padding-bottom:1em}:host #month-0{padding-top:1rem}:host .month-title{padding-left:1rem;text-align:left;color:#363749}:host h4{font-weight:400;font-size:1.1rem;display:block;text-align:center;margin:1rem 0 0;color:#929292}body[data-dark-mode=true] :host .month-title{color:#fff}body[data-dark-mode=true] :host .dates-toolbar{color:#fff}.calendar-demand-indicator-container{justify-content:center;background-color:var(--ion-toolbar-background, var(--ion-color-step-50, #f7f7f7))}.calendar-demand-indicator{padding:.25rem;margin:auto .25rem;border-radius:5px}.calendar-demand-indicator-cheaper{background-color:#6cd395}.calendar-demand-indicator-average{background-color:#f2c666}.calendar-demand-indicator-higher{background-color:#f58787}.loading-container{width:100%;height:100%;display:flex;justify-content:center;align-items:center}.loading-indicator{width:5rem;height:5rem}\n", ":host ion-toolbar{border:none!important}\n"], dependencies: [{ kind: "directive", type: i3.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i1.IonButton, selector: "ion-button", inputs: ["buttonType", "color", "disabled", "download", "expand", "fill", "form", "href", "mode", "rel", "routerAnimation", "routerDirection", "shape", "size", "strong", "target", "type"] }, { kind: "component", type: i1.IonButtons, selector: "ion-buttons", inputs: ["collapse"] }, { kind: "component", type: i1.IonCol, selector: "ion-col", inputs: ["offset", "offsetLg", "offsetMd", "offsetSm", "offsetXl", "offsetXs", "pull", "pullLg", "pullMd", "pullSm", "pullXl", "pullXs", "push", "pushLg", "pushMd", "pushSm", "pushXl", "pushXs", "size", "sizeLg", "sizeMd", "sizeSm", "sizeXl", "sizeXs"] }, { kind: "component", type: i1.IonContent, selector: "ion-content", inputs: ["color", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"] }, { kind: "component", type: i1.IonFooter, selector: "ion-footer", inputs: ["collapse", "mode", "translucent"] }, { kind: "component", type: i1.IonHeader, selector: "ion-header", inputs: ["collapse", "mode", "translucent"] }, { kind: "component", type: i1.IonIcon, selector: "ion-icon", inputs: ["color", "flipRtl", "icon", "ios", "lazy", "md", "mode", "name", "sanitize", "size", "src"] }, { kind: "component", type: i1.IonInfiniteScroll, selector: "ion-infinite-scroll", inputs: ["disabled", "position", "threshold"] }, { kind: "component", type: i1.IonInfiniteScrollContent, selector: "ion-infinite-scroll-content", inputs: ["loadingSpinner", "loadingText"] }, { kind: "component", type: i1.IonRow, selector: "ion-row" }, { kind: "component", type: i1.IonSpinner, selector: "ion-spinner", inputs: ["color", "duration", "name", "paused"] }, { kind: "component", type: i1.IonTitle, selector: "ion-title", inputs: ["color", "size"] }, { kind: "component", type: i1.IonToolbar, selector: "ion-toolbar", inputs: ["color", "mode"] }, { kind: "component", type: i1.IonPopover, selector: "ion-popover", inputs: ["alignment", "animated", "arrow", "keepContentsMounted", "backdropDismiss", "cssClass", "dismissOnSelect", "enterAnimation", "event", "isOpen", "keyboardClose", "leaveAnimation", "mode", "showBackdrop", "translucent", "trigger", "triggerAction", "reference", "size", "side"] }, { kind: "directive", type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i4.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: i5.CalendarWeekComponent, selector: "ion-calendar-week", inputs: ["color", "weekArray", "weekStart"] }, { kind: "component", type: i6.MonthComponent, selector: "ion-calendar-month", inputs: ["month", "pickMode", "isSaveHistory", "id", "readonly", "color", "maxMultiDates"], outputs: ["change", "select", "selectStart", "selectEnd"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CalendarDemandModal, decorators: [{
            type: Component,
            args: [{ selector: 'ion-calendar-demand-modal', template: `
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
  `, styles: [":host ion-select{max-width:unset}:host ion-select .select-icon>.select-icon-inner,:host ion-select .select-text{color:#fff!important}:host ion-select.select-ios{max-width:unset}:host ion-toolbar ion-button.md{color:var(--ion-color-primary)}:host .dates-toolbar{--background: transparent;padding:0 1rem}:host .dates-toolbar.primary{--background: var(--ion-color-primary)}:host .dates-toolbar.secondary{--background: var(--ion-color-secondary)}:host .dates-toolbar.danger{--background: var(--ion-color-danger)}:host .dates-toolbar.dark{--background: var(--ion-color-dark)}:host .dates-toolbar.light{--background: var(--ion-color-light)}:host .dates-toolbar.transparent{--background: transparent}:host .dates-toolbar.toolbar-md{min-height:44px}:host .ios.dates-toolbar{padding-top:1rem}:host .start-date{padding-left:.5rem}:host .end-date{margin-right:-.5rem}:host .calendar-page{background-color:#fbfbfb}:host .month-box{display:inline-block;width:100%;padding-bottom:1em}:host #month-0{padding-top:1rem}:host .month-title{padding-left:1rem;text-align:left;color:#363749}:host h4{font-weight:400;font-size:1.1rem;display:block;text-align:center;margin:1rem 0 0;color:#929292}body[data-dark-mode=true] :host .month-title{color:#fff}body[data-dark-mode=true] :host .dates-toolbar{color:#fff}.calendar-demand-indicator-container{justify-content:center;background-color:var(--ion-toolbar-background, var(--ion-color-step-50, #f7f7f7))}.calendar-demand-indicator{padding:.25rem;margin:auto .25rem;border-radius:5px}.calendar-demand-indicator-cheaper{background-color:#6cd395}.calendar-demand-indicator-average{background-color:#f2c666}.calendar-demand-indicator-higher{background-color:#f58787}.loading-container{width:100%;height:100%;display:flex;justify-content:center;align-items:center}.loading-indicator{width:5rem;height:5rem}\n", ":host ion-toolbar{border:none!important}\n"] }]
        }], ctorParameters: () => [{ type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i1.ModalController }, { type: i0.ChangeDetectorRef }, { type: i2.CalendarService }], propDecorators: { content: [{
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
            }], demandCalendarService: [{
                type: Input
            }], latitude: [{
                type: Input
            }], longitude: [{
                type: Input
            }], cheaperText: [{
                type: Input
            }], averageText: [{
                type: Input
            }], higherText: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItZGVtYW5kLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9jYWxlbmRhci1kZW1hbmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsU0FBUyxFQUNULFVBQVUsRUFDVixpQkFBaUIsRUFDakIsU0FBUyxFQUVULEtBQUssRUFFTCxXQUFXLEdBQ2QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDL0QsT0FBTyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBQzVCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxXQUFXLENBQUM7Ozs7Ozs7O0FBR3RDLE1BQU0sdUJBQXVCLEdBQUcsQ0FBQyxDQUFDO0FBK0ZsQyxNQUFNLE9BQU8sbUJBQW1CO0lBOEI1QixZQUNZLFNBQW9CLEVBQ3JCLFdBQXVCLEVBQ3ZCLFNBQTBCLEVBQzFCLEdBQXNCLEVBQ3RCLE1BQXVCO1FBSnRCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDckIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDdkIsY0FBUyxHQUFULFNBQVMsQ0FBaUI7UUFDMUIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDdEIsV0FBTSxHQUFOLE1BQU0sQ0FBaUI7UUE1QmxDLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFLTiwwQkFBcUIsR0FBaUMsSUFBSSxDQUFDO1FBQzNELGFBQVEsR0FBVyxFQUFFLENBQUM7UUFDdEIsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUN2QixnQkFBVyxHQUFXLFNBQVMsQ0FBQztRQUNoQyxnQkFBVyxHQUFXLFNBQVMsQ0FBQztRQUNoQyxlQUFVLEdBQVcsUUFBUSxDQUFDO1FBRXZDLFlBQU8s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QUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNsRSxDQUFDOytHQTNTUSxtQkFBbUI7bUdBQW5CLG1CQUFtQixzWEFDakIsVUFBVSxrS0EzRlg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Rlg7OzRGQUVVLG1CQUFtQjtrQkE3Ri9CLFNBQVM7K0JBQ0ksMkJBQTJCLFlBRTNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0ZYO21NQUlDLE9BQU87c0JBRE4sU0FBUzt1QkFBQyxVQUFVLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2dCQUd2QyxTQUFTO3NCQURSLFNBQVM7dUJBQUMsUUFBUSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtnQkFJckMsT0FBTztzQkFETixXQUFXO3VCQUFDLGdCQUFnQjtnQkFJN0IsT0FBTztzQkFETixLQUFLO2dCQUdHLHFCQUFxQjtzQkFBN0IsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENvbXBvbmVudCxcbiAgICBWaWV3Q2hpbGQsXG4gICAgRWxlbWVudFJlZixcbiAgICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBSZW5kZXJlcjIsXG4gICAgT25Jbml0LFxuICAgIElucHV0LFxuICAgIEFmdGVyVmlld0luaXQsXG4gICAgSG9zdEJpbmRpbmcsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTW9kYWxDb250cm9sbGVyLCBJb25Db250ZW50IH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuaW1wb3J0IHsgQ2FsZW5kYXJEYXksIENhbGVuZGFyTW9udGgsIENhbGVuZGFyTW9kYWxPcHRpb25zLCBEYXlDb25maWcgfSBmcm9tICcuLi9jYWxlbmRhci5tb2RlbCc7XG5pbXBvcnQgeyBDYWxlbmRhclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jYWxlbmRhci5zZXJ2aWNlJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IHBpY2tNb2RlcyB9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgRGVtYW5kQ2FsZW5kYXJTZXJ2aWNlIGZyb20gJy4uL21vZGVscy9kZW1hbi1jYWxlbmRhci1zZXJ2aWNlLkludGVyZmFjZSc7XG5cbmNvbnN0IE5VTV9PRl9NT05USFNfVE9fQ1JFQVRFID0gMztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdpb24tY2FsZW5kYXItZGVtYW5kLW1vZGFsJyxcbiAgICBzdHlsZVVybHM6IFsnLi9jYWxlbmRhci5tb2RhbC5zY3NzJywgJy4vY2FsZW5kYXItZGVtYW5kLmNvbXBvbmVudC5zY3NzJ10sXG4gICAgdGVtcGxhdGU6IGBcbiAgICA8aW9uLWhlYWRlcj5cbiAgICAgICAgPGlvbi10b29sYmFyPlxuICAgICAgICAgICAgPGlvbi1idXR0b25zIHNsb3Q9XCJzZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICA8aW9uLWJ1dHRvbiB0eXBlPSdidXR0b24nIHNsb3Q9XCJpY29uLW9ubHlcIiBmaWxsPVwiY2xlYXJcIiBjbGFzcz1cInByaW1hcnlcIiAoY2xpY2spPVwib25DYW5jZWwoKVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cIl9kPy5jbG9zZUxhYmVsICE9PSAnJyAmJiAhX2Q/LmNsb3NlSWNvblwiPnt7IF9kPy5jbG9zZUxhYmVsIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8aW9uLWljb24gKm5nSWY9XCJfZD8uY2xvc2VJY29uXCIgbmFtZT1cImNsb3NlXCI+PC9pb24taWNvbj5cbiAgICAgICAgICAgICAgICA8L2lvbi1idXR0b24+XG4gICAgICAgICAgICA8L2lvbi1idXR0b25zPlxuICAgICAgICAgICAgPGlvbi10aXRsZT57eyBfZD8udGl0bGUgfX0gPC9pb24tdGl0bGU+XG4gICAgICAgIDwvaW9uLXRvb2xiYXI+XG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltzdWItaGVhZGVyXVwiPjwvbmctY29udGVudD5cbiAgICAgICAgPGlvbi1yb3cgY2xhc3M9XCJjYWxlbmRhci1kZW1hbmQtaW5kaWNhdG9yLWNvbnRhaW5lciBpb24tcGFkZGluZy10b3BcIiAqbmdJZj1cIiFsb2FkaW5nXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsZW5kYXItZGVtYW5kLWluZGljYXRvciBjYWxlbmRhci1kZW1hbmQtaW5kaWNhdG9yLWNoZWFwZXJcIj5cbiAgICAgICAgICAgICAgICB7eyBjaGVhcGVyVGV4dCB9fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsZW5kYXItZGVtYW5kLWluZGljYXRvciBjYWxlbmRhci1kZW1hbmQtaW5kaWNhdG9yLWF2ZXJhZ2VcIj5cbiAgICAgICAgICAgICAgICB7eyBhdmVyYWdlVGV4dCB9fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsZW5kYXItZGVtYW5kLWluZGljYXRvciBjYWxlbmRhci1kZW1hbmQtaW5kaWNhdG9yLWhpZ2hlclwiPlxuICAgICAgICAgICAgICAgIHt7IGhpZ2hlclRleHQgfX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8aW9uLWJ1dHRvbiBzaGFwZT1cInJvdW5kXCIgZmlsbD1cImNsZWFyXCIgaWQ9XCJjbGljay10cmlnZ2VyXCIgY2xhc3M9XCJpb24tbm8tcGFkZGluZ1wiPlxuICAgICAgICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwiaW5mb3JtYXRpb24tY2lyY2xlLW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgPC9pb24tYnV0dG9uPiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGlvbi1wb3BvdmVyIHRyaWdnZXI9XCJjbGljay10cmlnZ2VyXCIgdHJpZ2dlckFjdGlvbj1cImNsaWNrXCI+XG4gICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICA8aW9uLWNvbnRlbnQgY2xhc3M9XCJpb24tcGFkZGluZ1wiPkJhc2VkIG9uIHRoZSBtb3N0IGZyZXF1ZW50IHNlYXJjaGVzIHBlciBkYXk8L2lvbi1jb250ZW50PlxuICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICA8L2lvbi1wb3BvdmVyPlxuICAgICAgICA8L2lvbi1yb3c+XG4gICAgICAgIDxpb24tY2FsZW5kYXItd2VlayAqbmdJZj1cIl9kXCJcbiAgICAgICAgICAgIFtjb2xvcl09XCJfZC5jb2xvclwiXG4gICAgICAgICAgICBbd2Vla0FycmF5XT1cIl9kLndlZWtkYXlzXCJcbiAgICAgICAgICAgIFt3ZWVrU3RhcnRdPVwiX2Qud2Vla1N0YXJ0XCI+XG4gICAgICAgIDwvaW9uLWNhbGVuZGFyLXdlZWs+XG4gICAgPC9pb24taGVhZGVyPlxuXG4gICAgPGlvbi1jb250ZW50IGNsYXNzPVwiY2FsZW5kYXItcGFnZVwiXG4gICAgICAgIFtzY3JvbGxFdmVudHNdPVwidHJ1ZVwiXG4gICAgICAgIFtuZ0NsYXNzXT1cInsnbXVsdGktc2VsZWN0aW9uJzogX2Q/LnBpY2tNb2RlID09PSAnbXVsdGknfVwiXG4gICAgICAgIChpb25TY3JvbGwpPVwib25TY3JvbGwoJGV2ZW50KVwiPlxuXG4gICAgICAgIDxkaXYgI21vbnRocyAqbmdJZj1cIiFsb2FkaW5nICYmIF9kXCI+XG4gICAgICAgICAgICA8bmctdGVtcGxhdGUgbmdGb3IgbGV0LW1vbnRoIFtuZ0Zvck9mXT1cImNhbGVuZGFyTW9udGhzXCIgW25nRm9yVHJhY2tCeV09XCJ0cmFja0J5SW5kZXhcIiBsZXQtaT1cImluZGV4XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vbnRoLWJveFwiIFthdHRyLmlkXT1cIidtb250aC0nICsgaVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJtb250aC10aXRsZVwiPnt7IG1vbnRoRm9ybWF0KG1vbnRoLm9yaWdpbmFsPy5kYXRlKSB9fTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDxpb24tY2FsZW5kYXItbW9udGggW21vbnRoXT1cIm1vbnRoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtwaWNrTW9kZV09XCJfZC5waWNrTW9kZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbaXNTYXZlSGlzdG9yeV09XCJfZC5pc1NhdmVIaXN0b3J5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtpZF09XCJfZC5pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbY29sb3JdPVwiX2QuY29sb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW21heE11bHRpRGF0ZXNdPVwiX2QubWF4TXVsdGlEYXRlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAoY2hhbmdlKT1cIm9uQ2hhbmdlKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJkYXRlc1RlbXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9pb24tY2FsZW5kYXItbW9udGg+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2ICpuZ0lmPVwibG9hZGluZ1wiIGNsYXNzPVwibG9hZGluZy1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxpb24tc3Bpbm5lciBuYW1lPVwiY3Jlc2NlbnRcIiBjb2xvcj1cInByaW1hcnlcIiBjbGFzcz1cImxvYWRpbmctaW5kaWNhdG9yXCI+PC9pb24tc3Bpbm5lcj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGlvbi1pbmZpbml0ZS1zY3JvbGwgdGhyZXNob2xkPVwiMjUlXCIgKGlvbkluZmluaXRlKT1cIm5leHRNb250aCgkZXZlbnQpXCI+XG4gICAgICAgICAgICA8aW9uLWluZmluaXRlLXNjcm9sbC1jb250ZW50PjwvaW9uLWluZmluaXRlLXNjcm9sbC1jb250ZW50PlxuICAgICAgICA8L2lvbi1pbmZpbml0ZS1zY3JvbGw+XG5cbiAgICA8L2lvbi1jb250ZW50PlxuXG4gICAgPGlvbi1mb290ZXI+XG4gICAgICAgIDxpb24tcm93ICpuZ0lmPVwiX2Q/LnBpY2tNb2RlID09PSAncmFuZ2UnXCIgbGluZXM9XCJub25lXCIgY2xhc3M9XCJpb24tbWFyZ2luLXZlcnRpY2FsXCIgW2NsYXNzXT1cIidkYXRlcy10b29sYmFyJ1wiIG5vLWJvcmRlcj5cbiAgICAgICAgICAgIDxpb24tY29sIHNpemU9XCI0XCIgY2xhc3M9XCJzdGFydC1kYXRlIGlvbi10ZXh0LW5vd3JhcFwiPlxuICAgICAgICAgICAgICAgIHt7IGdldERheUZvcm1hdHRlZChkYXRlc1RlbXBbMF0pIHx8ICdTdGFydCBEYXRlJyB9fVxuICAgICAgICAgICAgPC9pb24tY29sPlxuICAgICAgICAgICAgPGlvbi1jb2wgc2l6ZT1cIjRcIiBjbGFzcz1cImlvbi10ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwiYXJyb3ctZm9yd2FyZC1vdXRsaW5lXCI+PC9pb24taWNvbj5cbiAgICAgICAgICAgIDwvaW9uLWNvbD5cbiAgICAgICAgICAgIDxpb24tY29sIHNpemU9XCI0XCIgY2xhc3M9XCJlbmQtZGF0ZSBpb24tdGV4dC1yaWdodCBpb24tdGV4dC1ub3dyYXBcIj5cbiAgICAgICAgICAgICAgICB7eyBnZXREYXlGb3JtYXR0ZWQoZGF0ZXNUZW1wWzFdKSB8fCAnRW5kIERhdGUnIH19XG4gICAgICAgICAgICA8L2lvbi1jb2w+XG4gICAgICAgIDwvaW9uLXJvdz5cbiAgICAgIDxpb24tYnV0dG9uIGV4cGFuZD1cImZ1bGxcIiAqbmdJZj1cIiFfZD8uYXV0b0RvbmVcIiBbZGlzYWJsZWRdPVwiIWNhbkRvbmUoKVwiIChjbGljayk9XCJkb25lKClcIj5cbiAgICAgICAgPHNwYW4gKm5nSWY9XCJfZD8uZG9uZUxhYmVsICE9PSAnJyAmJiAhX2Q/LmRvbmVJY29uXCI+e3sgX2Q/LmRvbmVMYWJlbCB9fTwvc3Bhbj5cbiAgICAgICAgPGlvbi1pY29uICpuZ0lmPVwiX2Q/LmRvbmVJY29uXCIgbmFtZT1cImNoZWNrbWFya1wiPjwvaW9uLWljb24+XG4gICAgICA8L2lvbi1idXR0b24+XG4gICAgPC9pb24tZm9vdGVyPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhckRlbWFuZE1vZGFsIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgICBAVmlld0NoaWxkKElvbkNvbnRlbnQsIHsgc3RhdGljOiB0cnVlIH0pXG4gICAgY29udGVudDogSW9uQ29udGVudCB8IGFueTtcbiAgICBAVmlld0NoaWxkKCdtb250aHMnLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICAgIG1vbnRoc0VsZTogRWxlbWVudFJlZiB8IGFueTtcblxuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaW9uLXBhZ2UnKVxuICAgIGlvblBhZ2UgPSB0cnVlO1xuXG4gICAgQElucHV0KClcbiAgICBvcHRpb25zOiBDYWxlbmRhck1vZGFsT3B0aW9ucyB8IGFueTtcblxuICAgIEBJbnB1dCgpIGRlbWFuZENhbGVuZGFyU2VydmljZTogRGVtYW5kQ2FsZW5kYXJTZXJ2aWNlIHwgbnVsbCA9IG51bGw7XG4gICAgQElucHV0KCkgbGF0aXR1ZGU6IHN0cmluZyA9ICcnO1xuICAgIEBJbnB1dCgpIGxvbmdpdHVkZTogc3RyaW5nID0gJyc7XG4gICAgQElucHV0KCkgY2hlYXBlclRleHQ6IHN0cmluZyA9ICdDaGVhcGVyJztcbiAgICBASW5wdXQoKSBhdmVyYWdlVGV4dDogc3RyaW5nID0gJ0F2ZXJhZ2UnO1xuICAgIEBJbnB1dCgpIGhpZ2hlclRleHQ6IHN0cmluZyA9ICdIaWdoZXInO1xuXG4gICAgbG9hZGluZzogYm9vbGVhbiA9IHRydWU7XG4gICAgZGF0ZXNUZW1wOiBBcnJheTxDYWxlbmRhckRheT4gfCBhbnkgPSBbbnVsbCwgbnVsbF07XG4gICAgY2FsZW5kYXJNb250aHM6IEFycmF5PENhbGVuZGFyTW9udGg+IHwgYW55O1xuICAgIHN0ZXA6IG51bWJlciB8IGFueTtcbiAgICBzaG93WWVhclBpY2tlcjogYm9vbGVhbiB8IGFueTtcbiAgICB5ZWFyOiBudW1iZXIgfCBhbnk7XG4gICAgeWVhcnM6IEFycmF5PG51bWJlcj4gfCBhbnk7XG4gICAgX3Njcm9sbExvY2sgPSB0cnVlO1xuICAgIF9kOiBhbnk7XG4gICAgYWN0dWFsRmlyc3RUaW1lOiBudW1iZXIgfCBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgcHVibGljIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBwdWJsaWMgbW9kYWxDdHJsOiBNb2RhbENvbnRyb2xsZXIsXG4gICAgICAgIHB1YmxpYyByZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICBwdWJsaWMgY2FsU3ZjOiBDYWxlbmRhclNlcnZpY2VcbiAgICApIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaW5pdERlbWFuZENhbGVuZGFyKCk7XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuXG4gICAgfVxuXG4gICAgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fZCA9IHRoaXMuY2FsU3ZjLnNhZmVPcHQodGhpcy5vcHRpb25zKTtcbiAgICAgICAgdGhpcy5fZC5zaG93QWRqYWNlbnRNb250aERheSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN0ZXAgPSB0aGlzLl9kLnN0ZXA7XG4gICAgICAgIGlmICh0aGlzLnN0ZXAgPCB0aGlzLmNhbFN2Yy5ERUZBVUxUX1NURVApIHtcbiAgICAgICAgICAgIHRoaXMuc3RlcCA9IHRoaXMuY2FsU3ZjLkRFRkFVTFRfU1RFUDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FsZW5kYXJNb250aHMgPSB0aGlzLmNhbFN2Yy5jcmVhdGVNb250aHNCeVBlcmlvZChcbiAgICAgICAgICAgIG1vbWVudCh0aGlzLl9kLmZyb20pLnZhbHVlT2YoKSxcbiAgICAgICAgICAgIHRoaXMuZmluZEluaXRNb250aE51bWJlcih0aGlzLl9kLmRlZmF1bHRTY3JvbGxUbykgKyB0aGlzLnN0ZXAsXG4gICAgICAgICAgICB0aGlzLl9kXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgaW5pdERlZmF1bHREYXRlKCk6IHZvaWQge1xuICAgICAgICBjb25zdCB7IHBpY2tNb2RlLCBkZWZhdWx0RGF0ZSwgZGVmYXVsdERhdGVSYW5nZSwgZGVmYXVsdERhdGVzIH0gPSB0aGlzLl9kO1xuICAgICAgICBzd2l0Y2ggKHBpY2tNb2RlKSB7XG4gICAgICAgICAgICBjYXNlIHBpY2tNb2Rlcy5TSU5HTEU6XG4gICAgICAgICAgICAgICAgaWYgKGRlZmF1bHREYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0ZXNUZW1wWzBdID0gdGhpcy5jYWxTdmMuY3JlYXRlQ2FsZW5kYXJEYXkodGhpcy5nZXREYXlUaW1lKGRlZmF1bHREYXRlKSwgdGhpcy5fZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBwaWNrTW9kZXMuUkFOR0U6XG4gICAgICAgICAgICAgICAgaWYgKGRlZmF1bHREYXRlUmFuZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlZmF1bHREYXRlUmFuZ2UuZnJvbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRlc1RlbXBbMF0gPSB0aGlzLmNhbFN2Yy5jcmVhdGVDYWxlbmRhckRheSh0aGlzLmdldERheVRpbWUoZGVmYXVsdERhdGVSYW5nZS5mcm9tKSwgdGhpcy5fZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlZmF1bHREYXRlUmFuZ2UudG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0ZXNUZW1wWzFdID0gdGhpcy5jYWxTdmMuY3JlYXRlQ2FsZW5kYXJEYXkodGhpcy5nZXREYXlUaW1lKGRlZmF1bHREYXRlUmFuZ2UudG8pLCB0aGlzLl9kKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgcGlja01vZGVzLk1VTFRJOlxuICAgICAgICAgICAgICAgIGlmIChkZWZhdWx0RGF0ZXMgJiYgZGVmYXVsdERhdGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGVzVGVtcCA9IGRlZmF1bHREYXRlcy5tYXAoKGU6IGFueSkgPT4gdGhpcy5jYWxTdmMuY3JlYXRlQ2FsZW5kYXJEYXkodGhpcy5nZXREYXlUaW1lKGUpLCB0aGlzLl9kKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGVzVGVtcCA9IFtudWxsLCBudWxsXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGluaXREZW1hbmRDYWxlbmRhcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgaWYgKHRoaXMuZGVtYW5kQ2FsZW5kYXJTZXJ2aWNlKSB7XG4gICAgICAgICAgICBjb25zdCBkYXlzID0gYXdhaXQgdGhpcy5kZW1hbmRDYWxlbmRhclNlcnZpY2UuZ2V0KHRoaXMubGF0aXR1ZGUsIHRoaXMubG9uZ2l0dWRlKS50b1Byb21pc2UoKTtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5kYXlzQ29uZmlnID0gdGhpcy5idWlsZERheXMoZGF5cylcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIHRoaXMuaW5pdERlZmF1bHREYXRlKCk7XG5cbiAgICAgICAgdGhpcy5maW5kQ3NzQ2xhc3MoKTtcbiAgICAgICAgaWYgKHRoaXMuX2Q/LmNhbkJhY2t3YXJkc1NlbGVjdGVkKSB7XG4gICAgICAgICAgICB0aGlzLmJhY2t3YXJkc01vbnRoKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zY3JvbGxUb0RlZmF1bHREYXRlKCk7XG4gICAgfVxuXG4gICAgYnVpbGREYXlzKGl0ZW1zOiBhbnlbXSk6IERheUNvbmZpZ1tdIHtcbiAgICAgICAgY29uc3QgZGF5Q29uZmlnOiBEYXlDb25maWdbXSA9IFtdO1xuICAgICAgICBpZiAoaXRlbXMgJiYgaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGRheUNvbmZpZy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZTogbW9tZW50KGl0ZW0uY2hlY2tfaW4sICdZWVlZLU1NLUREJykudG9EYXRlKCksXG4gICAgICAgICAgICAgICAgICAgIG1hcmtlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGRlbWFuZExldmVsOiBpdGVtLmRlbWFuZFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRheUNvbmZpZztcbiAgICB9XG5cbiAgICBmaW5kQ3NzQ2xhc3MoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLl9kKSB7XG4gICAgICAgICAgICBjb25zdCB7IGNzc0NsYXNzIH0gPSB0aGlzLl9kO1xuICAgICAgICAgICAgaWYgKGNzc0NsYXNzKSB7XG4gICAgICAgICAgICAgICAgY3NzQ2xhc3Muc3BsaXQoJyAnKS5mb3JFYWNoKChfY2xhc3M6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoX2NsYXNzLnRyaW0oKSAhPT0gJycpIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgX2NsYXNzKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ2hhbmdlKGRhdGE6IGFueSk6IHZvaWQge1xuICAgICAgICBjb25zdCB7IHBpY2tNb2RlLCBhdXRvRG9uZSB9ID0gdGhpcy5fZDtcblxuICAgICAgICB0aGlzLmRhdGVzVGVtcCA9IGRhdGE7XG4gICAgICAgIHRoaXMucmVmLmRldGVjdENoYW5nZXMoKTtcblxuICAgICAgICBpZiAocGlja01vZGUgIT09IHBpY2tNb2Rlcy5NVUxUSSAmJiBhdXRvRG9uZSAmJiB0aGlzLmNhbkRvbmUoKSkge1xuICAgICAgICAgICAgdGhpcy5kb25lKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlcGFpbnRET00oKTtcbiAgICB9XG5cbiAgICBvbkNhbmNlbCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5tb2RhbEN0cmwuZGlzbWlzcyhudWxsLCAnY2FuY2VsJyk7XG4gICAgfVxuXG4gICAgZG9uZSgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgeyBwaWNrTW9kZSB9ID0gdGhpcy5fZDtcblxuICAgICAgICB0aGlzLm1vZGFsQ3RybC5kaXNtaXNzKHRoaXMuY2FsU3ZjLndyYXBSZXN1bHQodGhpcy5kYXRlc1RlbXAsIHBpY2tNb2RlKSwgJ2RvbmUnKTtcbiAgICB9XG5cbiAgICBjYW5Eb25lKCk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkodGhpcy5kYXRlc1RlbXApKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLl9kKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB7IHBpY2tNb2RlLCBkZWZhdWx0RW5kRGF0ZVRvU3RhcnREYXRlIH0gPSB0aGlzLl9kO1xuICAgICAgICBzd2l0Y2ggKHBpY2tNb2RlKSB7XG4gICAgICAgICAgICBjYXNlIHBpY2tNb2Rlcy5TSU5HTEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuICEhKHRoaXMuZGF0ZXNUZW1wWzBdICYmIHRoaXMuZGF0ZXNUZW1wWzBdLnRpbWUpO1xuICAgICAgICAgICAgY2FzZSBwaWNrTW9kZXMuUkFOR0U6XG4gICAgICAgICAgICAgICAgaWYgKGRlZmF1bHRFbmREYXRlVG9TdGFydERhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICEhKHRoaXMuZGF0ZXNUZW1wWzBdICYmIHRoaXMuZGF0ZXNUZW1wWzBdLnRpbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gISEodGhpcy5kYXRlc1RlbXBbMF0gJiYgdGhpcy5kYXRlc1RlbXBbMV0pICYmICEhKHRoaXMuZGF0ZXNUZW1wWzBdLnRpbWUgJiYgdGhpcy5kYXRlc1RlbXBbMV0udGltZSk7XG4gICAgICAgICAgICBjYXNlIHBpY2tNb2Rlcy5NVUxUSTpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRlc1RlbXAubGVuZ3RoID4gMCAmJiB0aGlzLmRhdGVzVGVtcC5ldmVyeShlID0+ICEhZSAmJiAhIWUudGltZSk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLmRhdGVzVGVtcCA9IFtudWxsLCBudWxsXTtcbiAgICB9XG5cbiAgICBjYW5DbGVhcigpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5kYXRlc1RlbXBbMF07XG4gICAgfVxuXG4gICAgbmV4dE1vbnRoKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbGVuID0gdGhpcy5jYWxlbmRhck1vbnRocy5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGZpbmFsID0gdGhpcy5jYWxlbmRhck1vbnRoc1tsZW4gLSAxXTtcbiAgICAgICAgY29uc3QgbmV4dFRpbWUgPSBtb21lbnQoZmluYWwub3JpZ2luYWwudGltZSlcbiAgICAgICAgICAgIC5hZGQoMSwgJ00nKVxuICAgICAgICAgICAgLnZhbHVlT2YoKTtcbiAgICAgICAgY29uc3QgcmFuZ2VFbmQgPSB0aGlzLl9kLnRvID8gbW9tZW50KHRoaXMuX2QudG8pLnN1YnRyYWN0KDEsICdNJykgOiAwO1xuXG4gICAgICAgIGlmIChsZW4gPD0gMCB8fCAocmFuZ2VFbmQgIT09IDAgJiYgbW9tZW50KGZpbmFsLm9yaWdpbmFsLnRpbWUpLmlzQWZ0ZXIocmFuZ2VFbmQpKSkge1xuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FsZW5kYXJNb250aHMucHVzaCguLi50aGlzLmNhbFN2Yy5jcmVhdGVNb250aHNCeVBlcmlvZChuZXh0VGltZSwgTlVNX09GX01PTlRIU19UT19DUkVBVEUsIHRoaXMuX2QpKTtcbiAgICAgICAgZXZlbnQudGFyZ2V0LmNvbXBsZXRlKCk7XG4gICAgICAgIHRoaXMucmVwYWludERPTSgpO1xuICAgIH1cblxuICAgIGJhY2t3YXJkc01vbnRoKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBmaXJzdCA9IHRoaXMuY2FsZW5kYXJNb250aHNbMF07XG5cbiAgICAgICAgaWYgKGZpcnN0Lm9yaWdpbmFsLnRpbWUgPD0gMCkge1xuICAgICAgICAgICAgdGhpcy5fZC5jYW5CYWNrd2FyZHNTZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZmlyc3RUaW1lID0gKHRoaXMuYWN0dWFsRmlyc3RUaW1lID0gbW9tZW50KGZpcnN0Lm9yaWdpbmFsLnRpbWUpXG4gICAgICAgICAgICAuc3VidHJhY3QoTlVNX09GX01PTlRIU19UT19DUkVBVEUsICdNJylcbiAgICAgICAgICAgIC52YWx1ZU9mKCkpO1xuXG4gICAgICAgIHRoaXMuY2FsZW5kYXJNb250aHMudW5zaGlmdCguLi50aGlzLmNhbFN2Yy5jcmVhdGVNb250aHNCeVBlcmlvZChmaXJzdFRpbWUsIE5VTV9PRl9NT05USFNfVE9fQ1JFQVRFLCB0aGlzLl9kKSk7XG4gICAgICAgIHRoaXMucmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgdGhpcy5yZXBhaW50RE9NKCk7XG4gICAgfVxuXG4gICAgc2Nyb2xsVG9EYXRlKGRhdGU6IERhdGUpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdERhdGVJbmRleCA9IHRoaXMuZmluZEluaXRNb250aE51bWJlcihkYXRlKTtcbiAgICAgICAgY29uc3QgbW9udGhFbGVtZW50ID0gdGhpcy5tb250aHNFbGU/Lm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bYG1vbnRoLSR7ZGVmYXVsdERhdGVJbmRleH1gXTtcbiAgICAgICAgY29uc3QgZG9tRWxlbVJlYWR5V2FpdFRpbWUgPSAzMDA7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZWZhdWx0RGF0ZU1vbnRoID0gbW9udGhFbGVtZW50ID8gbW9udGhFbGVtZW50Lm9mZnNldFRvcCA6IDA7XG5cbiAgICAgICAgICAgIGlmIChkZWZhdWx0RGF0ZUluZGV4ICE9PSAtMSAmJiBkZWZhdWx0RGF0ZU1vbnRoICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LnNjcm9sbEJ5UG9pbnQoMCwgZGVmYXVsdERhdGVNb250aCwgMTI4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgZG9tRWxlbVJlYWR5V2FpdFRpbWUpO1xuICAgIH1cblxuICAgIHNjcm9sbFRvRGVmYXVsdERhdGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2Nyb2xsVG9EYXRlKHRoaXMuX2QuZGVmYXVsdFNjcm9sbFRvKTtcbiAgICB9XG5cbiAgICBvblNjcm9sbCgkZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuX2Q/LmNhbkJhY2t3YXJkc1NlbGVjdGVkKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgeyBkZXRhaWwgfSA9ICRldmVudDtcblxuICAgICAgICBpZiAoZGV0YWlsLnNjcm9sbFRvcCA8PSAyMDAgJiYgZGV0YWlsLnZlbG9jaXR5WSA8IDAgJiYgdGhpcy5fc2Nyb2xsTG9jaykge1xuICAgICAgICAgICAgdGhpcy5jb250ZW50LmdldFNjcm9sbEVsZW1lbnQoKS50aGVuKChzY3JvbGxFbGVtOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zY3JvbGxMb2NrID0gITE7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBoZWlnaHRCZWZvcmVNb250aFByZXBlbmQgPSBzY3JvbGxFbGVtLnNjcm9sbEhlaWdodDtcbiAgICAgICAgICAgICAgICB0aGlzLmJhY2t3YXJkc01vbnRoKCk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhlaWdodEFmdGVyTW9udGhQcmVwZW5kID0gc2Nyb2xsRWxlbS5zY3JvbGxIZWlnaHQ7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LnNjcm9sbEJ5UG9pbnQoMCwgaGVpZ2h0QWZ0ZXJNb250aFByZXBlbmQgLSBoZWlnaHRCZWZvcmVNb250aFByZXBlbmQsIDApLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2Nyb2xsTG9jayA9ICEwO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LCAxODApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXBhaW50RE9NKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZW50LmdldFNjcm9sbEVsZW1lbnQoKS50aGVuKChzY3JvbGxFbGVtOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHNjcm9sbEVsZW0uc3R5bGUuekluZGV4ID0gJzInO1xuICAgICAgICAgICAgc2Nyb2xsRWxlbS5zdHlsZS56SW5kZXggPSAnaW5pdGlhbCc7XG4gICAgICAgICAgICBpZiAodGhpcy5tb250aHNFbGU/Lm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vbnRoc0VsZS5uYXRpdmVFbGVtZW50LnN0eWxlLnpJbmRleCA9ICcyJztcbiAgICAgICAgICAgICAgICB0aGlzLm1vbnRoc0VsZS5uYXRpdmVFbGVtZW50LnN0eWxlLnpJbmRleCA9ICdpbml0aWFsJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZmluZEluaXRNb250aE51bWJlcihkYXRlOiBEYXRlKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IHN0YXJ0RGF0ZSA9IHRoaXMuYWN0dWFsRmlyc3RUaW1lID8gbW9tZW50KHRoaXMuYWN0dWFsRmlyc3RUaW1lKSA6IG1vbWVudCh0aGlzLl9kLmZyb20pO1xuICAgICAgICBjb25zdCBkZWZhdWx0U2Nyb2xsVG8gPSBtb21lbnQoZGF0ZSk7XG4gICAgICAgIGNvbnN0IGlzQWZ0ZXI6IGJvb2xlYW4gPSBkZWZhdWx0U2Nyb2xsVG8uaXNBZnRlcihzdGFydERhdGUpO1xuICAgICAgICBpZiAoIWlzQWZ0ZXIpIHJldHVybiAtMTtcblxuICAgICAgICBpZiAodGhpcy5zaG93WWVhclBpY2tlcikge1xuICAgICAgICAgICAgc3RhcnREYXRlID0gbW9tZW50KG5ldyBEYXRlKHRoaXMueWVhciwgMCwgMSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRlZmF1bHRTY3JvbGxUby5kaWZmKHN0YXJ0RGF0ZSwgJ21vbnRoJyk7XG4gICAgfVxuXG4gICAgZ2V0RGF5VGltZShkYXRlOiBhbnkpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gbW9tZW50KG1vbWVudChkYXRlKS5mb3JtYXQoJ1lZWVktTU0tREQnKSkudmFsdWVPZigpO1xuICAgIH1cblxuICAgIG1vbnRoRm9ybWF0KGRhdGU6IGFueSk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBtb21lbnQoZGF0ZSkuZm9ybWF0KHRoaXMuX2QubW9udGhGb3JtYXQucmVwbGFjZSgveS9nLCAnWScpKTtcbiAgICB9XG5cbiAgICBnZXREYXlGb3JtYXR0ZWQoZGF0YTogYW55KSB7XG4gICAgICAgIGlmICghZGF0YSkgeyByZXR1cm4gbnVsbDsgfVxuICAgICAgICByZXR1cm4gbW9tZW50KGRhdGEudGltZSkuZm9ybWF0KCdkZGQsIE1NTSBEbycpO1xuICAgIH1cblxuICAgIHRyYWNrQnlJbmRleChpbmRleDogbnVtYmVyLCBtb21lbnREYXRlOiBDYWxlbmRhck1vbnRoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIG1vbWVudERhdGUub3JpZ2luYWwgPyBtb21lbnREYXRlLm9yaWdpbmFsLnRpbWUgOiBpbmRleDtcbiAgICB9XG59XG4iXX0=