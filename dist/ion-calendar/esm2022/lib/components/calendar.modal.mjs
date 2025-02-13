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
const _c0 = ["months"];
const _c1 = [[["", "sub-header", ""]]];
const _c2 = ["[sub-header]"];
const _c3 = a0 => ({ "multi-selection": a0 });
function CalendarModal_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1._d.closeLabel);
} }
function CalendarModal_ion_icon_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ion-icon", 11);
} }
function CalendarModal_ion_row_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ion-row", 12)(1, "ion-col", 13);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "ion-col", 14);
    i0.ɵɵelement(4, "ion-icon", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "ion-col", 16);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassMap("dates-toolbar");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1._getDayFormatted(ctx_r1.datesTemp[0]) || "Start Date", " ");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r1._getDayFormatted(ctx_r1.datesTemp[1]) || "End Date", " ");
} }
function CalendarModal_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 17)(1, "h4", 18);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "ion-calendar-month", 19);
    i0.ɵɵlistener("change", function CalendarModal_ng_template_14_Template_ion_calendar_month_change_3_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onChange($event)); });
    i0.ɵɵtwoWayListener("ngModelChange", function CalendarModal_ng_template_14_Template_ion_calendar_month_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.datesTemp, $event) || (ctx_r1.datesTemp = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const month_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵattribute("id", "month-" + i_r5);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1._monthFormat(month_r4.original == null ? null : month_r4.original.date));
    i0.ɵɵadvance();
    i0.ɵɵproperty("month", month_r4)("pickMode", ctx_r1._d.pickMode)("isSaveHistory", ctx_r1._d.isSaveHistory)("id", ctx_r1._d.id)("color", ctx_r1._d.color)("maxMultiDates", ctx_r1._d.maxMultiDates);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.datesTemp);
} }
function CalendarModal_ion_button_18_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1._d.doneLabel);
} }
function CalendarModal_ion_button_18_ion_icon_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ion-icon", 22);
} }
function CalendarModal_ion_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ion-button", 20);
    i0.ɵɵlistener("click", function CalendarModal_ion_button_18_Template_ion_button_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.done()); });
    i0.ɵɵtemplate(1, CalendarModal_ion_button_18_span_1_Template, 2, 1, "span", 3)(2, CalendarModal_ion_button_18_ion_icon_2_Template, 1, 0, "ion-icon", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", !ctx_r1.canDone());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1._d.doneLabel !== "" && !ctx_r1._d.doneIcon);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1._d.doneIcon);
} }
const NUM_OF_MONTHS_TO_CREATE = 3;
export class CalendarModal {
    constructor(_renderer, _elementRef, modalCtrl, ref, calSvc) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
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
    static { this.ɵfac = function CalendarModal_Factory(t) { return new (t || CalendarModal)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.ModalController), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.CalendarService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CalendarModal, selectors: [["ion-calendar-modal"]], viewQuery: function CalendarModal_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(IonContent, 7);
            i0.ɵɵviewQuery(_c0, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.content = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.monthsEle = _t.first);
        } }, hostVars: 2, hostBindings: function CalendarModal_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("ion-page", ctx.ionPage);
        } }, inputs: { options: "options" }, ngContentSelectors: _c2, decls: 19, vars: 14, consts: [["months", ""], ["slot", "secondary"], ["type", "button", "slot", "icon-only", "fill", "clear", 1, "primary", 3, "click"], [4, "ngIf"], ["name", "close", 4, "ngIf"], ["lines", "none", "no-border", "", 3, "class", 4, "ngIf"], [3, "color", "weekArray", "weekStart"], [1, "calendar-page", 3, "ionScroll", "scrollEvents", "ngClass"], ["ngFor", "", 3, "ngForOf", "ngForTrackBy"], ["threshold", "25%", 3, "ionInfinite"], ["expand", "full", 3, "disabled", "click", 4, "ngIf"], ["name", "close"], ["lines", "none", "no-border", ""], ["size", "4", 1, "start-date", "ion-text-nowrap"], ["size", "4", 1, "ion-text-center"], ["name", "arrow-forward-outline"], ["size", "4", 1, "end-date", "ion-text-right", "ion-text-nowrap"], [1, "month-box"], [1, "month-title"], [3, "change", "ngModelChange", "month", "pickMode", "isSaveHistory", "id", "color", "maxMultiDates", "ngModel"], ["expand", "full", 3, "click", "disabled"], ["name", "checkmark", 4, "ngIf"], ["name", "checkmark"]], template: function CalendarModal_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵprojectionDef(_c1);
            i0.ɵɵelementStart(0, "ion-header")(1, "ion-toolbar")(2, "ion-buttons", 1)(3, "ion-button", 2);
            i0.ɵɵlistener("click", function CalendarModal_Template_ion_button_click_3_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onCancel()); });
            i0.ɵɵtemplate(4, CalendarModal_span_4_Template, 2, 1, "span", 3)(5, CalendarModal_ion_icon_5_Template, 1, 0, "ion-icon", 4);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(6, "ion-title");
            i0.ɵɵtext(7);
            i0.ɵɵelementEnd()();
            i0.ɵɵprojection(8);
            i0.ɵɵtemplate(9, CalendarModal_ion_row_9_Template, 7, 4, "ion-row", 5);
            i0.ɵɵelement(10, "ion-calendar-week", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "ion-content", 7);
            i0.ɵɵlistener("ionScroll", function CalendarModal_Template_ion_content_ionScroll_11_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onScroll($event)); });
            i0.ɵɵelementStart(12, "div", null, 0);
            i0.ɵɵtemplate(14, CalendarModal_ng_template_14_Template, 4, 9, "ng-template", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "ion-infinite-scroll", 9);
            i0.ɵɵlistener("ionInfinite", function CalendarModal_Template_ion_infinite_scroll_ionInfinite_15_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.nextMonth($event)); });
            i0.ɵɵelement(16, "ion-infinite-scroll-content");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(17, "ion-footer");
            i0.ɵɵtemplate(18, CalendarModal_ion_button_18_Template, 3, 3, "ion-button", 10);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", ctx._d.closeLabel !== "" && !ctx._d.closeIcon);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx._d.closeIcon);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx._d.title);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx._d.pickMode === "range");
            i0.ɵɵadvance();
            i0.ɵɵproperty("color", ctx._d.color)("weekArray", ctx._d.weekdays)("weekStart", ctx._d.weekStart);
            i0.ɵɵadvance();
            i0.ɵɵproperty("scrollEvents", true)("ngClass", i0.ɵɵpureFunction1(12, _c3, ctx._d.pickMode === "multi"));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx.calendarMonths)("ngForTrackBy", ctx.trackByIndex);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", !ctx._d.autoDone);
        } }, dependencies: [i3.NgClass, i3.NgForOf, i3.NgIf, i1.IonButton, i1.IonButtons, i1.IonCol, i1.IonContent, i1.IonFooter, i1.IonHeader, i1.IonIcon, i1.IonInfiniteScroll, i1.IonInfiniteScrollContent, i1.IonRow, i1.IonTitle, i1.IonToolbar, i4.NgControlStatus, i4.NgModel, i5.CalendarWeekComponent, i6.MonthComponent], styles: ["[_nghost-%COMP%]   ion-select[_ngcontent-%COMP%]{max-width:unset}[_nghost-%COMP%]   ion-select[_ngcontent-%COMP%]   .select-icon[_ngcontent-%COMP%] > .select-icon-inner[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-select[_ngcontent-%COMP%]   .select-text[_ngcontent-%COMP%]{color:#fff!important}[_nghost-%COMP%]   ion-select.select-ios[_ngcontent-%COMP%]{max-width:unset}[_nghost-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-button.md[_ngcontent-%COMP%]{color:var(--ion-color-primary)}[_nghost-%COMP%]   .dates-toolbar[_ngcontent-%COMP%]{--background: transparent;padding:0 1rem}[_nghost-%COMP%]   .dates-toolbar.primary[_ngcontent-%COMP%]{--background: var(--ion-color-primary)}[_nghost-%COMP%]   .dates-toolbar.secondary[_ngcontent-%COMP%]{--background: var(--ion-color-secondary)}[_nghost-%COMP%]   .dates-toolbar.danger[_ngcontent-%COMP%]{--background: var(--ion-color-danger)}[_nghost-%COMP%]   .dates-toolbar.dark[_ngcontent-%COMP%]{--background: var(--ion-color-dark)}[_nghost-%COMP%]   .dates-toolbar.light[_ngcontent-%COMP%]{--background: var(--ion-color-light)}[_nghost-%COMP%]   .dates-toolbar.transparent[_ngcontent-%COMP%]{--background: transparent}[_nghost-%COMP%]   .dates-toolbar.toolbar-md[_ngcontent-%COMP%]{min-height:44px}[_nghost-%COMP%]   .ios.dates-toolbar[_ngcontent-%COMP%]{padding-top:1rem}[_nghost-%COMP%]   .start-date[_ngcontent-%COMP%]{padding-left:.5rem}[_nghost-%COMP%]   .end-date[_ngcontent-%COMP%]{margin-right:-.5rem}[_nghost-%COMP%]   .calendar-page[_ngcontent-%COMP%]{background-color:#fbfbfb}[_nghost-%COMP%]   .month-box[_ngcontent-%COMP%]{display:inline-block;width:100%;padding-bottom:1em}[_nghost-%COMP%]   #month-0[_ngcontent-%COMP%]{padding-top:1rem}[_nghost-%COMP%]   .month-title[_ngcontent-%COMP%]{padding-left:1rem;text-align:left;color:#363749}[_nghost-%COMP%]   h4[_ngcontent-%COMP%]{font-weight:400;font-size:1.1rem;display:block;text-align:center;margin:1rem 0 0;color:#929292}body[data-dark-mode=true]   [_nghost-%COMP%]   .month-title[_ngcontent-%COMP%]{color:#fff}body[data-dark-mode=true]   [_nghost-%COMP%]   .dates-toolbar[_ngcontent-%COMP%]{color:#fff}.calendar-demand-indicator-container[_ngcontent-%COMP%]{justify-content:center;background-color:var(--ion-toolbar-background, var(--ion-color-step-50, #f7f7f7))}.calendar-demand-indicator[_ngcontent-%COMP%]{padding:.25rem;margin:auto .25rem;border-radius:5px}.calendar-demand-indicator-cheaper[_ngcontent-%COMP%]{background-color:#6cd395}.calendar-demand-indicator-average[_ngcontent-%COMP%]{background-color:#f2c666}.calendar-demand-indicator-higher[_ngcontent-%COMP%]{background-color:#f58787}.loading-container[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;justify-content:center;align-items:center}.loading-indicator[_ngcontent-%COMP%]{width:5rem;height:5rem}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CalendarModal, [{
        type: Component,
        args: [{ selector: 'ion-calendar-modal', template: `
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
  `, styles: [":host ion-select{max-width:unset}:host ion-select .select-icon>.select-icon-inner,:host ion-select .select-text{color:#fff!important}:host ion-select.select-ios{max-width:unset}:host ion-toolbar ion-button.md{color:var(--ion-color-primary)}:host .dates-toolbar{--background: transparent;padding:0 1rem}:host .dates-toolbar.primary{--background: var(--ion-color-primary)}:host .dates-toolbar.secondary{--background: var(--ion-color-secondary)}:host .dates-toolbar.danger{--background: var(--ion-color-danger)}:host .dates-toolbar.dark{--background: var(--ion-color-dark)}:host .dates-toolbar.light{--background: var(--ion-color-light)}:host .dates-toolbar.transparent{--background: transparent}:host .dates-toolbar.toolbar-md{min-height:44px}:host .ios.dates-toolbar{padding-top:1rem}:host .start-date{padding-left:.5rem}:host .end-date{margin-right:-.5rem}:host .calendar-page{background-color:#fbfbfb}:host .month-box{display:inline-block;width:100%;padding-bottom:1em}:host #month-0{padding-top:1rem}:host .month-title{padding-left:1rem;text-align:left;color:#363749}:host h4{font-weight:400;font-size:1.1rem;display:block;text-align:center;margin:1rem 0 0;color:#929292}body[data-dark-mode=true] :host .month-title{color:#fff}body[data-dark-mode=true] :host .dates-toolbar{color:#fff}.calendar-demand-indicator-container{justify-content:center;background-color:var(--ion-toolbar-background, var(--ion-color-step-50, #f7f7f7))}.calendar-demand-indicator{padding:.25rem;margin:auto .25rem;border-radius:5px}.calendar-demand-indicator-cheaper{background-color:#6cd395}.calendar-demand-indicator-average{background-color:#f2c666}.calendar-demand-indicator-higher{background-color:#f58787}.loading-container{width:100%;height:100%;display:flex;justify-content:center;align-items:center}.loading-indicator{width:5rem;height:5rem}\n"] }]
    }], () => [{ type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i1.ModalController }, { type: i0.ChangeDetectorRef }, { type: i2.CalendarService }], { content: [{
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
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CalendarModal, { className: "CalendarModal" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIubW9kYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvY2FsZW5kYXIubW9kYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxTQUFTLEVBQ1QsVUFBVSxFQUNWLGlCQUFpQixFQUNqQixTQUFTLEVBRVQsS0FBSyxFQUVMLFdBQVcsR0FDWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUcsZUFBZSxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTlELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMvRCxPQUFPLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFDNUIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7Ozs7Ozs7Ozs7OztJQVl4Qiw0QkFBb0Q7SUFBQSxZQUFtQjtJQUFBLGlCQUFPOzs7SUFBMUIsY0FBbUI7SUFBbkIsMENBQW1COzs7SUFDdkUsK0JBQXVEOzs7SUFVN0QsQUFERixtQ0FBMEYsa0JBQ25DO0lBQ25ELFlBQ0Y7SUFBQSxpQkFBVTtJQUNWLG1DQUEwQztJQUN4QywrQkFBa0Q7SUFDcEQsaUJBQVU7SUFDVixtQ0FBa0U7SUFDaEUsWUFDRjtJQUNGLEFBREUsaUJBQVUsRUFDRjs7O0lBVjRDLDhCQUF5QjtJQUUzRSxlQUNGO0lBREUsNkZBQ0Y7SUFLRSxlQUNGO0lBREUsMkZBQ0Y7Ozs7SUFpQkksQUFERiwrQkFBZ0QsYUFDdEI7SUFBQSxZQUF3QztJQUFBLGlCQUFLO0lBQ3JFLDhDQU80QztJQUR4QixzTUFBVSx1QkFBZ0IsS0FBQztJQUMzQixxVEFBdUI7SUFFN0MsQUFERSxpQkFBcUIsRUFDakI7Ozs7OztJQVZvQixlQUF3QztJQUF4QyxvR0FBd0M7SUFDNUMsY0FBZTtJQUtmLEFBREEsQUFEQSxBQURBLEFBREEsQUFEQSxnQ0FBZSxnQ0FDUyww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LEtBQUM7WUFHekMscUNBQWE7WUFDWCxnRkFBb0c7WUFldEcsaUJBQU07WUFFTiwrQ0FBdUU7WUFBbEMsZ0tBQWUscUJBQWlCLEtBQUM7WUFDcEUsK0NBQTJEO1lBRy9ELEFBRkUsaUJBQXNCLEVBRVY7WUFFZCxtQ0FBWTtZQUVSLCtFQUF3RjtZQUs1RixpQkFBYTs7WUFoRUksZUFBMkM7WUFBM0Msb0VBQTJDO1lBQ3ZDLGNBQWtCO1lBQWxCLHVDQUFrQjtZQUl0QixlQUFjO1lBQWQsa0NBQWM7WUFLbkIsZUFBNkI7WUFBN0Isa0RBQTZCO1lBYXJDLGNBQWtCO1lBRWxCLEFBREEsQUFEQSxvQ0FBa0IsOEJBQ08sK0JBQ0M7WUFLb0MsY0FBcUI7WUFDMUUsQUFEcUQsbUNBQXFCLHFFQUNsQjtZQUdwQyxlQUEwQjtZQUFDLEFBQTNCLDRDQUEwQixrQ0FBOEI7WUF5QjFELGVBQWtCO1lBQWxCLHVDQUFrQjs7O2lGQVF4QyxhQUFhO2NBM0V6QixTQUFTOzJCQUNFLG9CQUFvQixZQUVwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXNFVDsrSkFJRCxPQUFPO2tCQUROLFNBQVM7bUJBQUMsVUFBVSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQUd2QyxTQUFTO2tCQURSLFNBQVM7bUJBQUMsUUFBUSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQUlyQyxPQUFPO2tCQUROLFdBQVc7bUJBQUMsZ0JBQWdCO1lBSTdCLE9BQU87a0JBRE4sS0FBSzs7a0ZBVEssYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgVmlld0NoaWxkLFxuICBFbGVtZW50UmVmLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgUmVuZGVyZXIyLFxuICBPbkluaXQsXG4gIElucHV0LFxuICBBZnRlclZpZXdJbml0LFxuICBIb3N0QmluZGluZyxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyAgTW9kYWxDb250cm9sbGVyLCBJb25Db250ZW50IH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuaW1wb3J0IHsgQ2FsZW5kYXJEYXksIENhbGVuZGFyTW9udGgsIENhbGVuZGFyTW9kYWxPcHRpb25zIH0gZnJvbSAnLi4vY2FsZW5kYXIubW9kZWwnO1xuaW1wb3J0IHsgQ2FsZW5kYXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY2FsZW5kYXIuc2VydmljZSc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgeyBwaWNrTW9kZXMgfSBmcm9tICcuLi9jb25maWcnO1xuXG5jb25zdCBOVU1fT0ZfTU9OVEhTX1RPX0NSRUFURSA9IDM7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lvbi1jYWxlbmRhci1tb2RhbCcsXG4gIHN0eWxlVXJsczogWycuL2NhbGVuZGFyLm1vZGFsLnNjc3MnXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8aW9uLWhlYWRlcj5cbiAgICAgIDxpb24tdG9vbGJhcj5cbiAgICAgICAgICA8aW9uLWJ1dHRvbnMgc2xvdD1cInNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICA8aW9uLWJ1dHRvbiB0eXBlPSdidXR0b24nIHNsb3Q9XCJpY29uLW9ubHlcIiBmaWxsPVwiY2xlYXJcIiBjbGFzcz1cInByaW1hcnlcIiAoY2xpY2spPVwib25DYW5jZWwoKVwiPlxuICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cIl9kLmNsb3NlTGFiZWwgIT09ICcnICYmICFfZC5jbG9zZUljb25cIj57eyBfZC5jbG9zZUxhYmVsIH19PC9zcGFuPlxuICAgICAgICAgICAgICA8aW9uLWljb24gKm5nSWY9XCJfZC5jbG9zZUljb25cIiBuYW1lPVwiY2xvc2VcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgPC9pb24tYnV0dG9uPlxuICAgICAgICAgIDwvaW9uLWJ1dHRvbnM+XG5cbiAgICAgICAgICA8aW9uLXRpdGxlPnt7IF9kLnRpdGxlIH19PC9pb24tdGl0bGU+XG4gICAgICA8L2lvbi10b29sYmFyPlxuXG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbc3ViLWhlYWRlcl1cIj48L25nLWNvbnRlbnQ+XG5cbiAgICAgIDxpb24tcm93ICpuZ0lmPVwiX2QucGlja01vZGUgPT09ICdyYW5nZSdcIiBsaW5lcz1cIm5vbmVcIiBbY2xhc3NdPVwiJ2RhdGVzLXRvb2xiYXInXCIgbm8tYm9yZGVyPlxuICAgICAgICA8aW9uLWNvbCBzaXplPVwiNFwiIGNsYXNzPVwic3RhcnQtZGF0ZSBpb24tdGV4dC1ub3dyYXBcIj5cbiAgICAgICAgICB7eyBfZ2V0RGF5Rm9ybWF0dGVkKGRhdGVzVGVtcFswXSkgfHwgJ1N0YXJ0IERhdGUnIH19XG4gICAgICAgIDwvaW9uLWNvbD5cbiAgICAgICAgPGlvbi1jb2wgc2l6ZT1cIjRcIiBjbGFzcz1cImlvbi10ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwiYXJyb3ctZm9yd2FyZC1vdXRsaW5lXCI+PC9pb24taWNvbj5cbiAgICAgICAgPC9pb24tY29sPlxuICAgICAgICA8aW9uLWNvbCBzaXplPVwiNFwiIGNsYXNzPVwiZW5kLWRhdGUgaW9uLXRleHQtcmlnaHQgaW9uLXRleHQtbm93cmFwXCI+XG4gICAgICAgICAge3sgX2dldERheUZvcm1hdHRlZChkYXRlc1RlbXBbMV0pIHx8ICdFbmQgRGF0ZScgfX1cbiAgICAgICAgPC9pb24tY29sPlxuICAgICAgPC9pb24tcm93PlxuXG4gICAgICA8aW9uLWNhbGVuZGFyLXdlZWtcbiAgICAgICAgW2NvbG9yXT1cIl9kLmNvbG9yXCJcbiAgICAgICAgW3dlZWtBcnJheV09XCJfZC53ZWVrZGF5c1wiXG4gICAgICAgIFt3ZWVrU3RhcnRdPVwiX2Qud2Vla1N0YXJ0XCI+XG4gICAgICA8L2lvbi1jYWxlbmRhci13ZWVrPlxuXG4gICAgPC9pb24taGVhZGVyPlxuXG4gICAgPGlvbi1jb250ZW50IChpb25TY3JvbGwpPVwib25TY3JvbGwoJGV2ZW50KVwiIGNsYXNzPVwiY2FsZW5kYXItcGFnZVwiIFtzY3JvbGxFdmVudHNdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnbXVsdGktc2VsZWN0aW9uJzogX2QucGlja01vZGUgPT09ICdtdWx0aSd9XCI+XG5cbiAgICAgIDxkaXYgI21vbnRocz5cbiAgICAgICAgPG5nLXRlbXBsYXRlIG5nRm9yIGxldC1tb250aCBbbmdGb3JPZl09XCJjYWxlbmRhck1vbnRoc1wiIFtuZ0ZvclRyYWNrQnldPVwidHJhY2tCeUluZGV4XCIgbGV0LWk9XCJpbmRleFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb250aC1ib3hcIiBbYXR0ci5pZF09XCInbW9udGgtJyArIGlcIj5cbiAgICAgICAgICAgIDxoNCBjbGFzcz1cIm1vbnRoLXRpdGxlXCI+e3sgX21vbnRoRm9ybWF0KG1vbnRoLm9yaWdpbmFsPy5kYXRlKSB9fTwvaDQ+XG4gICAgICAgICAgICA8aW9uLWNhbGVuZGFyLW1vbnRoIFttb250aF09XCJtb250aFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtwaWNrTW9kZV09XCJfZC5waWNrTW9kZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpc1NhdmVIaXN0b3J5XT1cIl9kLmlzU2F2ZUhpc3RvcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaWRdPVwiX2QuaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29sb3JdPVwiX2QuY29sb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbWF4TXVsdGlEYXRlc109XCJfZC5tYXhNdWx0aURhdGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNoYW5nZSk9XCJvbkNoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJkYXRlc1RlbXBcIj5cbiAgICAgICAgICAgIDwvaW9uLWNhbGVuZGFyLW1vbnRoPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuXG4gICAgICA8L2Rpdj5cblxuICAgICAgPGlvbi1pbmZpbml0ZS1zY3JvbGwgdGhyZXNob2xkPVwiMjUlXCIgKGlvbkluZmluaXRlKT1cIm5leHRNb250aCgkZXZlbnQpXCI+XG4gICAgICAgIDxpb24taW5maW5pdGUtc2Nyb2xsLWNvbnRlbnQ+PC9pb24taW5maW5pdGUtc2Nyb2xsLWNvbnRlbnQ+XG4gICAgICA8L2lvbi1pbmZpbml0ZS1zY3JvbGw+XG5cbiAgICA8L2lvbi1jb250ZW50PlxuXG4gICAgPGlvbi1mb290ZXI+XG5cbiAgICAgICAgPGlvbi1idXR0b24gZXhwYW5kPVwiZnVsbFwiICpuZ0lmPVwiIV9kLmF1dG9Eb25lXCIgW2Rpc2FibGVkXT1cIiFjYW5Eb25lKClcIiAoY2xpY2spPVwiZG9uZSgpXCI+XG4gICAgICAgICAgPHNwYW4gKm5nSWY9XCJfZC5kb25lTGFiZWwgIT09ICcnICYmICFfZC5kb25lSWNvblwiPnt7IF9kLmRvbmVMYWJlbCB9fTwvc3Bhbj5cbiAgICAgICAgICA8aW9uLWljb24gKm5nSWY9XCJfZC5kb25lSWNvblwiIG5hbWU9XCJjaGVja21hcmtcIj48L2lvbi1pY29uPlxuICAgICAgICA8L2lvbi1idXR0b24+XG5cbiAgICA8L2lvbi1mb290ZXI+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyTW9kYWwgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBAVmlld0NoaWxkKElvbkNvbnRlbnQsIHsgc3RhdGljOiB0cnVlIH0pXG4gIGNvbnRlbnQ6IElvbkNvbnRlbnQgfCBhbnk7XG4gIEBWaWV3Q2hpbGQoJ21vbnRocycsIHsgc3RhdGljOiB0cnVlIH0pXG4gIG1vbnRoc0VsZTogRWxlbWVudFJlZiB8IGFueTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlvbi1wYWdlJylcbiAgaW9uUGFnZSA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgb3B0aW9uczogQ2FsZW5kYXJNb2RhbE9wdGlvbnMgfCBhbnk7XG5cbiAgZGF0ZXNUZW1wOiBBcnJheTxDYWxlbmRhckRheT4gfCBhbnkgPSBbbnVsbCwgbnVsbF07XG4gIGNhbGVuZGFyTW9udGhzOiBBcnJheTxDYWxlbmRhck1vbnRoPiB8IGFueTtcbiAgc3RlcDogbnVtYmVyIHwgYW55O1xuICBzaG93WWVhclBpY2tlcjogYm9vbGVhbiB8IGFueTtcbiAgeWVhcjogbnVtYmVyIHwgYW55O1xuICB5ZWFyczogQXJyYXk8bnVtYmVyPiB8IGFueTtcbiAgX3Njcm9sbExvY2sgPSB0cnVlO1xuICBfZDogYW55O1xuICBhY3R1YWxGaXJzdFRpbWU6IG51bWJlciB8IGFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHB1YmxpYyBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwdWJsaWMgbW9kYWxDdHJsOiBNb2RhbENvbnRyb2xsZXIsXG4gICAgcHVibGljIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHVibGljIGNhbFN2YzogQ2FsZW5kYXJTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmluaXQoKTtcbiAgICB0aGlzLmluaXREZWZhdWx0RGF0ZSgpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZmluZENzc0NsYXNzKCk7XG4gICAgaWYgKHRoaXMuX2QuY2FuQmFja3dhcmRzU2VsZWN0ZWQpIHRoaXMuYmFja3dhcmRzTW9udGgoKTtcbiAgICB0aGlzLnNjcm9sbFRvRGVmYXVsdERhdGUoKTtcbiAgfVxuXG4gIGluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fZCA9IHRoaXMuY2FsU3ZjLnNhZmVPcHQodGhpcy5vcHRpb25zKTtcbiAgICB0aGlzLl9kLnNob3dBZGphY2VudE1vbnRoRGF5ID0gZmFsc2U7XG4gICAgdGhpcy5zdGVwID0gdGhpcy5fZC5zdGVwO1xuICAgIGlmICh0aGlzLnN0ZXAgPCB0aGlzLmNhbFN2Yy5ERUZBVUxUX1NURVApIHtcbiAgICAgIHRoaXMuc3RlcCA9IHRoaXMuY2FsU3ZjLkRFRkFVTFRfU1RFUDtcbiAgICB9XG5cbiAgICB0aGlzLmNhbGVuZGFyTW9udGhzID0gdGhpcy5jYWxTdmMuY3JlYXRlTW9udGhzQnlQZXJpb2QoXG4gICAgICBtb21lbnQodGhpcy5fZC5mcm9tKS52YWx1ZU9mKCksXG4gICAgICB0aGlzLmZpbmRJbml0TW9udGhOdW1iZXIodGhpcy5fZC5kZWZhdWx0U2Nyb2xsVG8pICsgdGhpcy5zdGVwLFxuICAgICAgdGhpcy5fZFxuICAgICk7XG4gIH1cblxuICBpbml0RGVmYXVsdERhdGUoKTogdm9pZCB7XG4gICAgY29uc3QgeyBwaWNrTW9kZSwgZGVmYXVsdERhdGUsIGRlZmF1bHREYXRlUmFuZ2UsIGRlZmF1bHREYXRlcyB9ID0gdGhpcy5fZDtcbiAgICBzd2l0Y2ggKHBpY2tNb2RlKSB7XG4gICAgICBjYXNlIHBpY2tNb2Rlcy5TSU5HTEU6XG4gICAgICAgIGlmIChkZWZhdWx0RGF0ZSkge1xuICAgICAgICAgIHRoaXMuZGF0ZXNUZW1wWzBdID0gdGhpcy5jYWxTdmMuY3JlYXRlQ2FsZW5kYXJEYXkodGhpcy5fZ2V0RGF5VGltZShkZWZhdWx0RGF0ZSksIHRoaXMuX2QpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBwaWNrTW9kZXMuUkFOR0U6XG4gICAgICAgIGlmIChkZWZhdWx0RGF0ZVJhbmdlKSB7XG4gICAgICAgICAgaWYgKGRlZmF1bHREYXRlUmFuZ2UuZnJvbSkge1xuICAgICAgICAgICAgdGhpcy5kYXRlc1RlbXBbMF0gPSB0aGlzLmNhbFN2Yy5jcmVhdGVDYWxlbmRhckRheSh0aGlzLl9nZXREYXlUaW1lKGRlZmF1bHREYXRlUmFuZ2UuZnJvbSksIHRoaXMuX2QpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZGVmYXVsdERhdGVSYW5nZS50bykge1xuICAgICAgICAgICAgdGhpcy5kYXRlc1RlbXBbMV0gPSB0aGlzLmNhbFN2Yy5jcmVhdGVDYWxlbmRhckRheSh0aGlzLl9nZXREYXlUaW1lKGRlZmF1bHREYXRlUmFuZ2UudG8pLCB0aGlzLl9kKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHBpY2tNb2Rlcy5NVUxUSTpcbiAgICAgICAgaWYgKGRlZmF1bHREYXRlcyAmJiBkZWZhdWx0RGF0ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy5kYXRlc1RlbXAgPSBkZWZhdWx0RGF0ZXMubWFwKChlOiBhbnkpID0+IHRoaXMuY2FsU3ZjLmNyZWF0ZUNhbGVuZGFyRGF5KHRoaXMuX2dldERheVRpbWUoZSksIHRoaXMuX2QpKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMuZGF0ZXNUZW1wID0gW251bGwsIG51bGxdO1xuICAgIH1cbiAgfVxuXG4gIGZpbmRDc3NDbGFzcygpOiB2b2lkIHtcbiAgICBjb25zdCB7IGNzc0NsYXNzIH0gPSB0aGlzLl9kO1xuICAgIGlmIChjc3NDbGFzcykge1xuICAgICAgY3NzQ2xhc3Muc3BsaXQoJyAnKS5mb3JFYWNoKChfY2xhc3M6IHN0cmluZykgPT4ge1xuICAgICAgICBpZiAoX2NsYXNzLnRyaW0oKSAhPT0gJycpIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgX2NsYXNzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2hhbmdlKGRhdGE6IGFueSk6IHZvaWQge1xuICAgIGNvbnN0IHsgcGlja01vZGUsIGF1dG9Eb25lIH0gPSB0aGlzLl9kO1xuXG4gICAgdGhpcy5kYXRlc1RlbXAgPSBkYXRhO1xuICAgIHRoaXMucmVmLmRldGVjdENoYW5nZXMoKTtcblxuICAgIGlmIChwaWNrTW9kZSAhPT0gcGlja01vZGVzLk1VTFRJICYmIGF1dG9Eb25lICYmIHRoaXMuY2FuRG9uZSgpKSB7XG4gICAgICB0aGlzLmRvbmUoKTtcbiAgICB9XG5cbiAgICB0aGlzLnJlcGFpbnRET00oKTtcbiAgfVxuXG4gIG9uQ2FuY2VsKCk6IHZvaWQge1xuICAgIHRoaXMubW9kYWxDdHJsLmRpc21pc3MobnVsbCwgJ2NhbmNlbCcpO1xuICB9XG5cbiAgZG9uZSgpOiB2b2lkIHtcbiAgICBjb25zdCB7IHBpY2tNb2RlIH0gPSB0aGlzLl9kO1xuXG4gICAgdGhpcy5tb2RhbEN0cmwuZGlzbWlzcyh0aGlzLmNhbFN2Yy53cmFwUmVzdWx0KHRoaXMuZGF0ZXNUZW1wLCBwaWNrTW9kZSksICdkb25lJyk7XG4gIH1cblxuICBjYW5Eb25lKCk6IGJvb2xlYW4ge1xuICAgIGlmICghQXJyYXkuaXNBcnJheSh0aGlzLmRhdGVzVGVtcCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgeyBwaWNrTW9kZSwgZGVmYXVsdEVuZERhdGVUb1N0YXJ0RGF0ZSB9ID0gdGhpcy5fZDtcblxuICAgIHN3aXRjaCAocGlja01vZGUpIHtcbiAgICAgIGNhc2UgcGlja01vZGVzLlNJTkdMRTpcbiAgICAgICAgcmV0dXJuICEhKHRoaXMuZGF0ZXNUZW1wWzBdICYmIHRoaXMuZGF0ZXNUZW1wWzBdLnRpbWUpO1xuICAgICAgY2FzZSBwaWNrTW9kZXMuUkFOR0U6XG4gICAgICAgIGlmIChkZWZhdWx0RW5kRGF0ZVRvU3RhcnREYXRlKSB7XG4gICAgICAgICAgcmV0dXJuICEhKHRoaXMuZGF0ZXNUZW1wWzBdICYmIHRoaXMuZGF0ZXNUZW1wWzBdLnRpbWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAhISh0aGlzLmRhdGVzVGVtcFswXSAmJiB0aGlzLmRhdGVzVGVtcFsxXSkgJiYgISEodGhpcy5kYXRlc1RlbXBbMF0udGltZSAmJiB0aGlzLmRhdGVzVGVtcFsxXS50aW1lKTtcbiAgICAgIGNhc2UgcGlja01vZGVzLk1VTFRJOlxuICAgICAgICByZXR1cm4gdGhpcy5kYXRlc1RlbXAubGVuZ3RoID4gMCAmJiB0aGlzLmRhdGVzVGVtcC5ldmVyeShlID0+ICEhZSAmJiAhIWUudGltZSk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5kYXRlc1RlbXAgPSBbbnVsbCwgbnVsbF07XG4gIH1cblxuICBjYW5DbGVhcigpIHtcbiAgICByZXR1cm4gISF0aGlzLmRhdGVzVGVtcFswXTtcbiAgfVxuXG4gIG5leHRNb250aChldmVudDogYW55KTogdm9pZCB7XG4gICAgY29uc3QgbGVuID0gdGhpcy5jYWxlbmRhck1vbnRocy5sZW5ndGg7XG4gICAgY29uc3QgZmluYWwgPSB0aGlzLmNhbGVuZGFyTW9udGhzW2xlbiAtIDFdO1xuICAgIGNvbnN0IG5leHRUaW1lID0gbW9tZW50KGZpbmFsLm9yaWdpbmFsLnRpbWUpXG4gICAgICAuYWRkKDEsICdNJylcbiAgICAgIC52YWx1ZU9mKCk7XG4gICAgY29uc3QgcmFuZ2VFbmQgPSB0aGlzLl9kLnRvID8gbW9tZW50KHRoaXMuX2QudG8pLnN1YnRyYWN0KDEsICdNJykgOiAwO1xuXG4gICAgaWYgKGxlbiA8PSAwIHx8IChyYW5nZUVuZCAhPT0gMCAmJiBtb21lbnQoZmluYWwub3JpZ2luYWwudGltZSkuaXNBZnRlcihyYW5nZUVuZCkpKSB7XG4gICAgICBldmVudC50YXJnZXQuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuY2FsZW5kYXJNb250aHMucHVzaCguLi50aGlzLmNhbFN2Yy5jcmVhdGVNb250aHNCeVBlcmlvZChuZXh0VGltZSwgTlVNX09GX01PTlRIU19UT19DUkVBVEUsIHRoaXMuX2QpKTtcbiAgICBldmVudC50YXJnZXQuY29tcGxldGUoKTtcbiAgICB0aGlzLnJlcGFpbnRET00oKTtcbiAgfVxuXG4gIGJhY2t3YXJkc01vbnRoKCk6IHZvaWQge1xuICAgIGNvbnN0IGZpcnN0ID0gdGhpcy5jYWxlbmRhck1vbnRoc1swXTtcblxuICAgIGlmIChmaXJzdC5vcmlnaW5hbC50aW1lIDw9IDApIHtcbiAgICAgIHRoaXMuX2QuY2FuQmFja3dhcmRzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBmaXJzdFRpbWUgPSAodGhpcy5hY3R1YWxGaXJzdFRpbWUgPSBtb21lbnQoZmlyc3Qub3JpZ2luYWwudGltZSlcbiAgICAgIC5zdWJ0cmFjdChOVU1fT0ZfTU9OVEhTX1RPX0NSRUFURSwgJ00nKVxuICAgICAgLnZhbHVlT2YoKSk7XG5cbiAgICB0aGlzLmNhbGVuZGFyTW9udGhzLnVuc2hpZnQoLi4udGhpcy5jYWxTdmMuY3JlYXRlTW9udGhzQnlQZXJpb2QoZmlyc3RUaW1lLCBOVU1fT0ZfTU9OVEhTX1RPX0NSRUFURSwgdGhpcy5fZCkpO1xuICAgIHRoaXMucmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICB0aGlzLnJlcGFpbnRET00oKTtcbiAgfVxuXG4gIHNjcm9sbFRvRGF0ZShkYXRlOiBEYXRlKTogdm9pZCB7XG4gICAgY29uc3QgZGVmYXVsdERhdGVJbmRleCA9IHRoaXMuZmluZEluaXRNb250aE51bWJlcihkYXRlKTtcbiAgICBjb25zdCBtb250aEVsZW1lbnQgPSB0aGlzLm1vbnRoc0VsZS5uYXRpdmVFbGVtZW50LmNoaWxkcmVuW2Btb250aC0ke2RlZmF1bHREYXRlSW5kZXh9YF07XG4gICAgY29uc3QgZG9tRWxlbVJlYWR5V2FpdFRpbWUgPSAzMDA7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IGRlZmF1bHREYXRlTW9udGggPSBtb250aEVsZW1lbnQgPyBtb250aEVsZW1lbnQub2Zmc2V0VG9wIDogMDtcblxuICAgICAgaWYgKGRlZmF1bHREYXRlSW5kZXggIT09IC0xICYmIGRlZmF1bHREYXRlTW9udGggIT09IDApIHtcbiAgICAgICAgdGhpcy5jb250ZW50LnNjcm9sbEJ5UG9pbnQoMCwgZGVmYXVsdERhdGVNb250aCwgMTI4KTtcbiAgICAgIH1cbiAgICB9LCBkb21FbGVtUmVhZHlXYWl0VGltZSk7XG4gIH1cblxuICBzY3JvbGxUb0RlZmF1bHREYXRlKCk6IHZvaWQge1xuICAgIHRoaXMuc2Nyb2xsVG9EYXRlKHRoaXMuX2QuZGVmYXVsdFNjcm9sbFRvKTtcbiAgfVxuXG4gIG9uU2Nyb2xsKCRldmVudDogYW55KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9kLmNhbkJhY2t3YXJkc1NlbGVjdGVkKSByZXR1cm47XG5cbiAgICBjb25zdCB7IGRldGFpbCB9ID0gJGV2ZW50O1xuXG4gICAgaWYgKGRldGFpbC5zY3JvbGxUb3AgPD0gMjAwICYmIGRldGFpbC52ZWxvY2l0eVkgPCAwICYmIHRoaXMuX3Njcm9sbExvY2spIHtcbiAgICAgIHRoaXMuY29udGVudC5nZXRTY3JvbGxFbGVtZW50KCkudGhlbigoc2Nyb2xsRWxlbSA6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLl9zY3JvbGxMb2NrID0gITE7XG5cbiAgICAgICAgY29uc3QgaGVpZ2h0QmVmb3JlTW9udGhQcmVwZW5kID0gc2Nyb2xsRWxlbS5zY3JvbGxIZWlnaHQ7XG4gICAgICAgIHRoaXMuYmFja3dhcmRzTW9udGgoKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgY29uc3QgaGVpZ2h0QWZ0ZXJNb250aFByZXBlbmQgPSBzY3JvbGxFbGVtLnNjcm9sbEhlaWdodDtcblxuICAgICAgICAgIHRoaXMuY29udGVudC5zY3JvbGxCeVBvaW50KDAsIGhlaWdodEFmdGVyTW9udGhQcmVwZW5kIC0gaGVpZ2h0QmVmb3JlTW9udGhQcmVwZW5kLCAwKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3Njcm9sbExvY2sgPSAhMDtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSwgMTgwKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJbiBzb21lIG9sZGVyIFNhZmFyaSB2ZXJzaW9ucyAob2JzZXJ2ZWQgYXQgTWFjJ3MgU2FmYXJpIDEwLjApLCB0aGVyZSBpcyBhbiBpc3N1ZSB3aGVyZSBzdHlsZSB1cGRhdGVzIHRvXG4gICAqIHNoYWRvd1Jvb3QgZGVzY2VuZGFudHMgZG9uJ3QgY2F1c2UgYSBicm93c2VyIHJlcGFpbnQuXG4gICAqIFNlZSBmb3IgbW9yZSBkZXRhaWxzOiBodHRwczovL2dpdGh1Yi5jb20vUG9seW1lci9wb2x5bWVyL2lzc3Vlcy80NzAxXG4gICAqL1xuICByZXBhaW50RE9NKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQuZ2V0U2Nyb2xsRWxlbWVudCgpLnRoZW4oKHNjcm9sbEVsZW06IGFueSkgPT4ge1xuICAgICAgLy8gVXBkYXRlIHNjcm9sbEVsZW0gdG8gZW5zdXJlIHRoYXQgaGVpZ2h0IG9mIHRoZSBjb250YWluZXIgY2hhbmdlcyBhcyBNb250aHMgYXJlIGFwcGVuZGVkL3ByZXBlbmRlZFxuICAgICAgc2Nyb2xsRWxlbS5zdHlsZS56SW5kZXggPSAnMic7XG4gICAgICBzY3JvbGxFbGVtLnN0eWxlLnpJbmRleCA9ICdpbml0aWFsJztcbiAgICAgIC8vIFVwZGF0ZSBtb250aHNFbGUgdG8gZW5zdXJlIHNlbGVjdGVkIHN0YXRlIGlzIHJlZmxlY3RlZCB3aGVuIHRhcHBpbmcgb24gYSBkYXlcbiAgICAgIHRoaXMubW9udGhzRWxlLm5hdGl2ZUVsZW1lbnQuc3R5bGUuekluZGV4ID0gJzInO1xuICAgICAgdGhpcy5tb250aHNFbGUubmF0aXZlRWxlbWVudC5zdHlsZS56SW5kZXggPSAnaW5pdGlhbCc7XG4gICAgfSk7XG4gIH1cblxuICBmaW5kSW5pdE1vbnRoTnVtYmVyKGRhdGU6IERhdGUpOiBudW1iZXIge1xuICAgIGxldCBzdGFydERhdGUgPSB0aGlzLmFjdHVhbEZpcnN0VGltZSA/IG1vbWVudCh0aGlzLmFjdHVhbEZpcnN0VGltZSkgOiBtb21lbnQodGhpcy5fZC5mcm9tKTtcbiAgICBjb25zdCBkZWZhdWx0U2Nyb2xsVG8gPSBtb21lbnQoZGF0ZSk7XG4gICAgY29uc3QgaXNBZnRlcjogYm9vbGVhbiA9IGRlZmF1bHRTY3JvbGxUby5pc0FmdGVyKHN0YXJ0RGF0ZSk7XG4gICAgaWYgKCFpc0FmdGVyKSByZXR1cm4gLTE7XG5cbiAgICBpZiAodGhpcy5zaG93WWVhclBpY2tlcikge1xuICAgICAgc3RhcnREYXRlID0gbW9tZW50KG5ldyBEYXRlKHRoaXMueWVhciwgMCwgMSkpO1xuICAgIH1cblxuICAgIHJldHVybiBkZWZhdWx0U2Nyb2xsVG8uZGlmZihzdGFydERhdGUsICdtb250aCcpO1xuICB9XG5cbiAgX2dldERheVRpbWUoZGF0ZTogYW55KTogbnVtYmVyIHtcbiAgICByZXR1cm4gbW9tZW50KG1vbWVudChkYXRlKS5mb3JtYXQoJ1lZWVktTU0tREQnKSkudmFsdWVPZigpO1xuICB9XG5cbiAgX21vbnRoRm9ybWF0KGRhdGU6IGFueSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG1vbWVudChkYXRlKS5mb3JtYXQodGhpcy5fZC5tb250aEZvcm1hdC5yZXBsYWNlKC95L2csICdZJykpO1xuICB9XG5cbiAgX2dldERheUZvcm1hdHRlZChkYXRhOiBhbnkpIHtcbiAgICBpZiAoIWRhdGEpIHsgcmV0dXJuIG51bGw7IH1cbiAgICByZXR1cm4gbW9tZW50KGRhdGEudGltZSkuZm9ybWF0KCdkZGQsIE1NTSBEbycpO1xuICB9XG5cbiAgdHJhY2tCeUluZGV4KGluZGV4OiBudW1iZXIsIG1vbWVudERhdGU6IENhbGVuZGFyTW9udGgpOiBudW1iZXIge1xuICAgIHJldHVybiBtb21lbnREYXRlLm9yaWdpbmFsID8gbW9tZW50RGF0ZS5vcmlnaW5hbC50aW1lIDogaW5kZXg7XG4gIH1cbn1cbiJdfQ==