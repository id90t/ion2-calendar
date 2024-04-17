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
function CalendarDemandModal_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r0._d.closeLabel);
} }
function CalendarDemandModal_ion_icon_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ion-icon", 15);
} }
function CalendarDemandModal_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 16)(1, "h4", 17);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "ion-calendar-month", 18);
    i0.ɵɵlistener("change", function CalendarDemandModal_ng_template_20_Template_ion_calendar_month_change_3_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.onChange($event)); })("ngModelChange", function CalendarDemandModal_ng_template_20_Template_ion_calendar_month_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r10 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r10.datesTemp = $event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const month_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵattribute("id", "month-" + i_r7);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r3._monthFormat(month_r6.original == null ? null : month_r6.original.date));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("month", month_r6)("pickMode", ctx_r3._d.pickMode)("isSaveHistory", ctx_r3._d.isSaveHistory)("id", ctx_r3._d.id)("color", ctx_r3._d.color)("maxMultiDates", ctx_r3._d.maxMultiDates)("ngModel", ctx_r3.datesTemp);
} }
function CalendarDemandModal_ion_row_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ion-row", 19)(1, "ion-col", 20);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "ion-col", 21);
    i0.ɵɵelement(4, "ion-icon", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "ion-col", 23);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵclassMap("dates-toolbar");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r4._getDayFormatted(ctx_r4.datesTemp[0]) || "Start Date", " ");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r4._getDayFormatted(ctx_r4.datesTemp[1]) || "End Date", " ");
} }
function CalendarDemandModal_ion_button_25_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r11._d.doneLabel);
} }
function CalendarDemandModal_ion_button_25_ion_icon_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ion-icon", 26);
} }
function CalendarDemandModal_ion_button_25_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ion-button", 24);
    i0.ɵɵlistener("click", function CalendarDemandModal_ion_button_25_Template_ion_button_click_0_listener() { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r13.done()); });
    i0.ɵɵtemplate(1, CalendarDemandModal_ion_button_25_span_1_Template, 2, 1, "span", 2);
    i0.ɵɵtemplate(2, CalendarDemandModal_ion_button_25_ion_icon_2_Template, 1, 0, "ion-icon", 25);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", !ctx_r5.canDone());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5._d.doneLabel !== "" && !ctx_r5._d.doneIcon);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5._d.doneIcon);
} }
const _c1 = [[["", "sub-header", ""]]];
const _c2 = function (a0) { return { "multi-selection": a0 }; };
const _c3 = ["[sub-header]"];
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
        this.datesTemp = [null, null];
        this._scrollLock = true;
    }
    ngOnInit() {
        this.initDemandCalendar();
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
    async initDemandCalendar() {
        if (this.demandCalendarService) {
            const days = await this.demandCalendarService.get(this.latitude, this.longitude).toPromise();
            this.options.daysConfig = this.buildDays(days);
            this.init();
            this.initDefaultDate();
        }
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
        /* 2024-04-03
        export interface DayConfig {
            date: Date;
            marked?: boolean;
            disable?: boolean;
            title?: string;
            subTitle?: string;
            cssClass?: string;
        }
        */
        return dayConfig;
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
CalendarDemandModal.ɵfac = function CalendarDemandModal_Factory(t) { return new (t || CalendarDemandModal)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.ModalController), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.CalendarService)); };
CalendarDemandModal.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CalendarDemandModal, selectors: [["ion-calendar-demand-modal"]], viewQuery: function CalendarDemandModal_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(IonContent, 7);
        i0.ɵɵviewQuery(_c0, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.content = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.monthsEle = _t.first);
    } }, hostVars: 2, hostBindings: function CalendarDemandModal_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("ion-page", ctx.ionPage);
    } }, inputs: { options: "options", demandCalendarService: "demandCalendarService", latitude: "latitude", longitude: "longitude" }, ngContentSelectors: _c3, decls: 26, vars: 14, consts: [["slot", "secondary"], ["type", "button", "slot", "icon-only", "fill", "clear", 1, "primary", 3, "click"], [4, "ngIf"], ["name", "close", 4, "ngIf"], [1, "calendar-demand-indicator-container"], [1, "calendar-demand-indicator", "calendar-demand-indicator-cheaper"], [1, "calendar-demand-indicator", "calendar-demand-indicator-average"], [1, "calendar-demand-indicator", "calendar-demand-indicator-higher"], [3, "color", "weekArray", "weekStart"], [1, "calendar-page", 3, "scrollEvents", "ngClass", "ionScroll"], ["months", ""], ["ngFor", "", 3, "ngForOf", "ngForTrackBy"], ["threshold", "25%", 3, "ionInfinite"], ["lines", "none", "class", "ion-margin-vertical", "no-border", "", 3, "class", 4, "ngIf"], ["expand", "full", 3, "disabled", "click", 4, "ngIf"], ["name", "close"], [1, "month-box"], [1, "month-title"], [3, "month", "pickMode", "isSaveHistory", "id", "color", "maxMultiDates", "ngModel", "change", "ngModelChange"], ["lines", "none", "no-border", "", 1, "ion-margin-vertical"], ["size", "4", 1, "start-date", "ion-text-nowrap"], ["size", "4", 1, "ion-text-center"], ["name", "arrow-forward-outline"], ["size", "4", 1, "end-date", "ion-text-right", "ion-text-nowrap"], ["expand", "full", 3, "disabled", "click"], ["name", "checkmark", 4, "ngIf"], ["name", "checkmark"]], template: function CalendarDemandModal_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c1);
        i0.ɵɵelementStart(0, "ion-header")(1, "ion-toolbar")(2, "ion-buttons", 0)(3, "ion-button", 1);
        i0.ɵɵlistener("click", function CalendarDemandModal_Template_ion_button_click_3_listener() { return ctx.onCancel(); });
        i0.ɵɵtemplate(4, CalendarDemandModal_span_4_Template, 2, 1, "span", 2);
        i0.ɵɵtemplate(5, CalendarDemandModal_ion_icon_5_Template, 1, 0, "ion-icon", 3);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(6, "ion-title");
        i0.ɵɵtext(7);
        i0.ɵɵelementEnd()();
        i0.ɵɵprojection(8);
        i0.ɵɵelementStart(9, "ion-row", 4)(10, "div", 5);
        i0.ɵɵtext(11, " Cheaper ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "div", 6);
        i0.ɵɵtext(13, " Average ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "div", 7);
        i0.ɵɵtext(15, " Higher ");
        i0.ɵɵelementEnd()();
        i0.ɵɵelement(16, "ion-calendar-week", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "ion-content", 9);
        i0.ɵɵlistener("ionScroll", function CalendarDemandModal_Template_ion_content_ionScroll_17_listener($event) { return ctx.onScroll($event); });
        i0.ɵɵelementStart(18, "div", null, 10);
        i0.ɵɵtemplate(20, CalendarDemandModal_ng_template_20_Template, 4, 9, "ng-template", 11);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "ion-infinite-scroll", 12);
        i0.ɵɵlistener("ionInfinite", function CalendarDemandModal_Template_ion_infinite_scroll_ionInfinite_21_listener($event) { return ctx.nextMonth($event); });
        i0.ɵɵelement(22, "ion-infinite-scroll-content");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(23, "ion-footer");
        i0.ɵɵtemplate(24, CalendarDemandModal_ion_row_24_Template, 7, 4, "ion-row", 13);
        i0.ɵɵtemplate(25, CalendarDemandModal_ion_button_25_Template, 3, 3, "ion-button", 14);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngIf", ctx._d.closeLabel !== "" && !ctx._d.closeIcon);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx._d.closeIcon);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1("", ctx._d.title, " ");
        i0.ɵɵadvance(9);
        i0.ɵɵproperty("color", ctx._d.color)("weekArray", ctx._d.weekdays)("weekStart", ctx._d.weekStart);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("scrollEvents", true)("ngClass", i0.ɵɵpureFunction1(12, _c2, ctx._d.pickMode === "multi"));
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.calendarMonths)("ngForTrackBy", ctx.trackByIndex);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngIf", ctx._d.pickMode === "range");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx._d.autoDone);
    } }, dependencies: [i3.NgClass, i3.NgForOf, i3.NgIf, i1.IonButton, i1.IonButtons, i1.IonCol, i1.IonContent, i1.IonFooter, i1.IonHeader, i1.IonIcon, i1.IonInfiniteScroll, i1.IonInfiniteScrollContent, i1.IonRow, i1.IonTitle, i1.IonToolbar, i4.NgControlStatus, i4.NgModel, i5.CalendarWeekComponent, i6.MonthComponent], styles: ["[_nghost-%COMP%]   ion-select[_ngcontent-%COMP%]{max-width:unset}[_nghost-%COMP%]   ion-select[_ngcontent-%COMP%]   .select-icon[_ngcontent-%COMP%] > .select-icon-inner[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-select[_ngcontent-%COMP%]   .select-text[_ngcontent-%COMP%]{color:#fff!important}[_nghost-%COMP%]   ion-select.select-ios[_ngcontent-%COMP%]{max-width:unset}[_nghost-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-button.md[_ngcontent-%COMP%]{color:var(--ion-color-primary)}[_nghost-%COMP%]   .dates-toolbar[_ngcontent-%COMP%]{--background: transparent;padding:0 1rem}[_nghost-%COMP%]   .dates-toolbar.primary[_ngcontent-%COMP%]{--background: var(--ion-color-primary)}[_nghost-%COMP%]   .dates-toolbar.secondary[_ngcontent-%COMP%]{--background: var(--ion-color-secondary)}[_nghost-%COMP%]   .dates-toolbar.danger[_ngcontent-%COMP%]{--background: var(--ion-color-danger)}[_nghost-%COMP%]   .dates-toolbar.dark[_ngcontent-%COMP%]{--background: var(--ion-color-dark)}[_nghost-%COMP%]   .dates-toolbar.light[_ngcontent-%COMP%]{--background: var(--ion-color-light)}[_nghost-%COMP%]   .dates-toolbar.transparent[_ngcontent-%COMP%]{--background: transparent}[_nghost-%COMP%]   .dates-toolbar.toolbar-md[_ngcontent-%COMP%]{min-height:44px}[_nghost-%COMP%]   .ios.dates-toolbar[_ngcontent-%COMP%]{padding-top:1rem}[_nghost-%COMP%]   .start-date[_ngcontent-%COMP%]{padding-left:.5rem}[_nghost-%COMP%]   .end-date[_ngcontent-%COMP%]{margin-right:-.5rem}[_nghost-%COMP%]   .calendar-page[_ngcontent-%COMP%]{background-color:#fbfbfb}[_nghost-%COMP%]   .month-box[_ngcontent-%COMP%]{display:inline-block;width:100%;padding-bottom:1em}[_nghost-%COMP%]   #month-0[_ngcontent-%COMP%]{padding-top:1rem}[_nghost-%COMP%]   .month-title[_ngcontent-%COMP%]{padding-left:1rem;text-align:left;color:#363749}[_nghost-%COMP%]   h4[_ngcontent-%COMP%]{font-weight:400;font-size:1.1rem;display:block;text-align:center;margin:1rem 0 0;color:#929292}body[data-dark-mode=true]   [_nghost-%COMP%]   .month-title[_ngcontent-%COMP%]{color:#fff}body[data-dark-mode=true]   [_nghost-%COMP%]   .dates-toolbar[_ngcontent-%COMP%]{color:#fff}.calendar-demand-indicator-container[_ngcontent-%COMP%]{justify-content:center}.calendar-demand-indicator[_ngcontent-%COMP%]{padding:.25rem;margin:auto .25rem}.calendar-demand-indicator-cheaper[_ngcontent-%COMP%]{background-color:#2dd36f}.calendar-demand-indicator-average[_ngcontent-%COMP%]{background-color:#f2b01e}.calendar-demand-indicator-higher[_ngcontent-%COMP%]{background-color:#f53d3d}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CalendarDemandModal, [{
        type: Component,
        args: [{ selector: 'ion-calendar-demand-modal', template: `
    <ion-header>
        <ion-toolbar>
            <ion-buttons slot="secondary">
                <ion-button type='button' slot="icon-only" fill="clear" class="primary" (click)="onCancel()">
                    <span *ngIf="_d.closeLabel !== '' && !_d.closeIcon">{{ _d.closeLabel }}</span>
                    <ion-icon *ngIf="_d.closeIcon" name="close"></ion-icon>
                </ion-button>
            </ion-buttons>
            <ion-title>{{ _d.title }} </ion-title>
        </ion-toolbar>
        <ng-content select="[sub-header]"></ng-content>
        <ion-row class="calendar-demand-indicator-container">
            <div class="calendar-demand-indicator calendar-demand-indicator-cheaper">
                Cheaper
            </div>
            <div class="calendar-demand-indicator calendar-demand-indicator-average">
                Average
            </div>
            <div class="calendar-demand-indicator calendar-demand-indicator-higher">
                Higher
            </div>
        </ion-row>
        <ion-calendar-week
            [color]="_d.color"
            [weekArray]="_d.weekdays"
            [weekStart]="_d.weekStart">
        </ion-calendar-week>
    </ion-header>

    <ion-content class="calendar-page"
        [scrollEvents]="true"
        [ngClass]="{'multi-selection': _d.pickMode === 'multi'}"
        (ionScroll)="onScroll($event)">

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
        <ion-row *ngIf="_d.pickMode === 'range'" lines="none" class="ion-margin-vertical" [class]="'dates-toolbar'" no-border>
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
      <ion-button expand="full" *ngIf="!_d.autoDone" [disabled]="!canDone()" (click)="done()">
        <span *ngIf="_d.doneLabel !== '' && !_d.doneIcon">{{ _d.doneLabel }}</span>
        <ion-icon *ngIf="_d.doneIcon" name="checkmark"></ion-icon>
      </ion-button>
    </ion-footer>
  `, styles: [":host ion-select{max-width:unset}:host ion-select .select-icon>.select-icon-inner,:host ion-select .select-text{color:#fff!important}:host ion-select.select-ios{max-width:unset}:host ion-toolbar ion-button.md{color:var(--ion-color-primary)}:host .dates-toolbar{--background: transparent;padding:0 1rem}:host .dates-toolbar.primary{--background: var(--ion-color-primary)}:host .dates-toolbar.secondary{--background: var(--ion-color-secondary)}:host .dates-toolbar.danger{--background: var(--ion-color-danger)}:host .dates-toolbar.dark{--background: var(--ion-color-dark)}:host .dates-toolbar.light{--background: var(--ion-color-light)}:host .dates-toolbar.transparent{--background: transparent}:host .dates-toolbar.toolbar-md{min-height:44px}:host .ios.dates-toolbar{padding-top:1rem}:host .start-date{padding-left:.5rem}:host .end-date{margin-right:-.5rem}:host .calendar-page{background-color:#fbfbfb}:host .month-box{display:inline-block;width:100%;padding-bottom:1em}:host #month-0{padding-top:1rem}:host .month-title{padding-left:1rem;text-align:left;color:#363749}:host h4{font-weight:400;font-size:1.1rem;display:block;text-align:center;margin:1rem 0 0;color:#929292}body[data-dark-mode=true] :host .month-title{color:#fff}body[data-dark-mode=true] :host .dates-toolbar{color:#fff}.calendar-demand-indicator-container{justify-content:center}.calendar-demand-indicator{padding:.25rem;margin:auto .25rem}.calendar-demand-indicator-cheaper{background-color:#2dd36f}.calendar-demand-indicator-average{background-color:#f2b01e}.calendar-demand-indicator-higher{background-color:#f53d3d}\n"] }]
    }], function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i1.ModalController }, { type: i0.ChangeDetectorRef }, { type: i2.CalendarService }]; }, { content: [{
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
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItZGVtYW5kLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9jYWxlbmRhci1kZW1hbmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsU0FBUyxFQUNULFVBQVUsRUFDVixpQkFBaUIsRUFDakIsU0FBUyxFQUVULEtBQUssRUFFTCxXQUFXLEdBQ2QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDL0QsT0FBTyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBQzVCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxXQUFXLENBQUM7Ozs7Ozs7Ozs7SUFhbEIsNEJBQW9EO0lBQUEsWUFBbUI7SUFBQSxpQkFBTzs7O0lBQTFCLGVBQW1CO0lBQW5CLDBDQUFtQjs7O0lBQ3ZFLCtCQUF1RDs7OztJQStCL0QsK0JBQWdELGFBQUE7SUFDcEIsWUFBd0M7SUFBQSxpQkFBSztJQUNyRSw4Q0FPNEI7SUFEeEIsNkxBQVUsZUFBQSx1QkFBZ0IsQ0FBQSxJQUFDLDZPQUFBO0lBRS9CLGlCQUFxQixFQUFBOzs7OztJQVZGLHFDQUF3QjtJQUNuQixlQUF3QztJQUF4QyxvR0FBd0M7SUFDNUMsZUFBZTtJQUFmLGdDQUFlLGdDQUFBLDBDQUFBLG9CQUFBLDBCQUFBLDBDQUFBLDZCQUFBOzs7SUFvQjNDLG1DQUFzSCxrQkFBQTtJQUU5RyxZQUNKO0lBQUEsaUJBQVU7SUFDVixtQ0FBMEM7SUFDdEMsK0JBQWtEO0lBQ3RELGlCQUFVO0lBQ1YsbUNBQWtFO0lBQzlELFlBQ0o7SUFBQSxpQkFBVSxFQUFBOzs7SUFUb0UsOEJBQXlCO0lBRW5HLGVBQ0o7SUFESSw2RkFDSjtJQUtJLGVBQ0o7SUFESSwyRkFDSjs7O0lBR0osNEJBQWtEO0lBQUEsWUFBa0I7SUFBQSxpQkFBTzs7O0lBQXpCLGVBQWtCO0lBQWxCLDBDQUFrQjs7O0lBQ3BFLCtCQUEwRDs7OztJQUY1RCxzQ0FBd0Y7SUFBakIsOEtBQVMsZUFBQSxjQUFNLENBQUEsSUFBQztJQUNyRixvRkFBMkU7SUFDM0UsNkZBQTBEO0lBQzVELGlCQUFhOzs7SUFIa0MsNENBQXVCO0lBQzdELGVBQXlDO0lBQXpDLHdFQUF5QztJQUNyQyxlQUFpQjtJQUFqQix5Q0FBaUI7Ozs7O0FBN0VwQyxNQUFNLHVCQUF1QixHQUFHLENBQUMsQ0FBQztBQWtGbEMsTUFBTSxPQUFPLG1CQUFtQjtJQTBCNUIsWUFDWSxTQUFvQixFQUNyQixXQUF1QixFQUN2QixTQUEwQixFQUMxQixHQUFzQixFQUN0QixNQUF1QjtRQUp0QixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3JCLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQ3ZCLGNBQVMsR0FBVCxTQUFTLENBQWlCO1FBQzFCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3RCLFdBQU0sR0FBTixNQUFNLENBQWlCO1FBeEJsQyxZQUFPLEdBQUcsSUFBSSxDQUFDO1FBS04sMEJBQXFCLEdBQWlDLElBQUksQ0FBQztRQUMzRCxhQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFFaEMsY0FBUyxHQUE2QixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQU1uRCxnQkFBVyxHQUFHLElBQUksQ0FBQztJQVVmLENBQUM7SUFFTCxRQUFRO1FBQ0osSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFHOUIsQ0FBQztJQUVELGVBQWU7UUFDWCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLG9CQUFvQjtZQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4RCxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRUQsSUFBSTtRQUNBLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxFQUFFLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7UUFDekIsSUFBSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFO1lBQ3RDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUM7U0FDeEM7UUFFRCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQ2xELE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUM5QixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUM3RCxJQUFJLENBQUMsRUFBRSxDQUNWLENBQUM7SUFDTixDQUFDO0lBRUQsZUFBZTtRQUNYLE1BQU0sRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDMUUsUUFBUSxRQUFRLEVBQUU7WUFDZCxLQUFLLFNBQVMsQ0FBQyxNQUFNO2dCQUNqQixJQUFJLFdBQVcsRUFBRTtvQkFDYixJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7aUJBQzdGO2dCQUNELE1BQU07WUFDVixLQUFLLFNBQVMsQ0FBQyxLQUFLO2dCQUNoQixJQUFJLGdCQUFnQixFQUFFO29CQUNsQixJQUFJLGdCQUFnQixDQUFDLElBQUksRUFBRTt3QkFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO3FCQUN2RztvQkFDRCxJQUFJLGdCQUFnQixDQUFDLEVBQUUsRUFBRTt3QkFDckIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO3FCQUNyRztpQkFDSjtnQkFDRCxNQUFNO1lBQ1YsS0FBSyxTQUFTLENBQUMsS0FBSztnQkFDaEIsSUFBSSxZQUFZLElBQUksWUFBWSxDQUFDLE1BQU0sRUFBRTtvQkFDckMsSUFBSSxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBTSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQzlHO2dCQUNELE1BQU07WUFDVjtnQkFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3JDO0lBQ0wsQ0FBQztJQUVELEtBQUssQ0FBQyxrQkFBa0I7UUFDcEIsSUFBSSxJQUFJLENBQUMscUJBQXFCLEVBQUU7WUFDNUIsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQzdGLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDOUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ1osSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQzFCO0lBQ0wsQ0FBQztJQUVELFNBQVMsQ0FBQyxLQUFZO1FBQ2xCLE1BQU0sU0FBUyxHQUFnQixFQUFFLENBQUM7UUFFbEMsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUN2QixLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNqQixTQUFTLENBQUMsSUFBSSxDQUFDO29CQUNYLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsQ0FBQyxNQUFNLEVBQUU7b0JBQ2xELE1BQU0sRUFBRSxLQUFLO29CQUNiLFdBQVcsRUFBRSxJQUFJLENBQUMsTUFBTTtpQkFDM0IsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUM7U0FDTjtRQUNEOzs7Ozs7Ozs7VUFTRTtRQUVGLE9BQU8sU0FBUyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxZQUFZO1FBQ1IsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDN0IsSUFBSSxRQUFRLEVBQUU7WUFDVixRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQWMsRUFBRSxFQUFFO2dCQUMzQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFO29CQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQzlGLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBRUQsUUFBUSxDQUFDLElBQVM7UUFDZCxNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7UUFFdkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUV6QixJQUFJLFFBQVEsS0FBSyxTQUFTLENBQUMsS0FBSyxJQUFJLFFBQVEsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDNUQsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2Y7UUFFRCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELFFBQVE7UUFDSixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELElBQUk7UUFDQSxNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUU3QixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3JGLENBQUM7SUFFRCxPQUFPO1FBQ0gsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ2hDLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO1FBQ0QsTUFBTSxFQUFFLFFBQVEsRUFBRSx5QkFBeUIsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7UUFFeEQsUUFBUSxRQUFRLEVBQUU7WUFDZCxLQUFLLFNBQVMsQ0FBQyxNQUFNO2dCQUNqQixPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMzRCxLQUFLLFNBQVMsQ0FBQyxLQUFLO2dCQUNoQixJQUFJLHlCQUF5QixFQUFFO29CQUMzQixPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDMUQ7Z0JBQ0QsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzlHLEtBQUssU0FBUyxDQUFDLEtBQUs7Z0JBQ2hCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ25GO2dCQUNJLE9BQU8sS0FBSyxDQUFDO1NBQ3BCO0lBQ0wsQ0FBQztJQUVELEtBQUs7UUFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxRQUFRO1FBQ0osT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsU0FBUyxDQUFDLEtBQVU7UUFDaEIsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUM7UUFDdkMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDM0MsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO2FBQ3ZDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO2FBQ1gsT0FBTyxFQUFFLENBQUM7UUFDZixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXRFLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUU7WUFDL0UsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQzdCLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLEVBQUUsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELGNBQWM7UUFDVixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXJDLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFO1lBQzFCLElBQUksQ0FBQyxFQUFFLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDO1lBQ3JDLE9BQU87U0FDVjtRQUVELE1BQU0sU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7YUFDaEUsUUFBUSxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBQzthQUN0QyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBRWhCLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDOUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELFlBQVksQ0FBQyxJQUFVO1FBQ25CLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hELE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxTQUFTLGdCQUFnQixFQUFFLENBQUMsQ0FBQztRQUN4RixNQUFNLG9CQUFvQixHQUFHLEdBQUcsQ0FBQztRQUVqQyxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ1osTUFBTSxnQkFBZ0IsR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUVuRSxJQUFJLGdCQUFnQixLQUFLLENBQUMsQ0FBQyxJQUFJLGdCQUFnQixLQUFLLENBQUMsRUFBRTtnQkFDbkQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLGdCQUFnQixFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQ3hEO1FBQ0wsQ0FBQyxFQUFFLG9CQUFvQixDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELG1CQUFtQjtRQUNmLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsUUFBUSxDQUFDLE1BQVc7UUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsb0JBQW9CO1lBQUUsT0FBTztRQUUxQyxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDO1FBRTFCLElBQUksTUFBTSxDQUFDLFNBQVMsSUFBSSxHQUFHLElBQUksTUFBTSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNyRSxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBZSxFQUFFLEVBQUU7Z0JBQ3JELElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBRXRCLE1BQU0sd0JBQXdCLEdBQUcsVUFBVSxDQUFDLFlBQVksQ0FBQztnQkFDekQsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUN0QixVQUFVLENBQUMsR0FBRyxFQUFFO29CQUNaLE1BQU0sdUJBQXVCLEdBQUcsVUFBVSxDQUFDLFlBQVksQ0FBQztvQkFFeEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLHVCQUF1QixHQUFHLHdCQUF3QixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7d0JBQzNGLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQzFCLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNaLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILFVBQVU7UUFDTixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFlLEVBQUUsRUFBRTtZQUM1RCxvR0FBb0c7WUFDcEcsVUFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1lBQzlCLFVBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztZQUNwQywrRUFBK0U7WUFDL0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7WUFDaEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7UUFDMUQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsbUJBQW1CLENBQUMsSUFBVTtRQUMxQixJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzRixNQUFNLGVBQWUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsTUFBTSxPQUFPLEdBQVksZUFBZSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsT0FBTztZQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFFeEIsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3JCLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNqRDtRQUVELE9BQU8sZUFBZSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELFdBQVcsQ0FBQyxJQUFTO1FBQ2pCLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMvRCxDQUFDO0lBRUQsWUFBWSxDQUFDLElBQVM7UUFDbEIsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsSUFBUztRQUN0QixJQUFJLENBQUMsSUFBSSxFQUFFO1lBQUUsT0FBTyxJQUFJLENBQUM7U0FBRTtRQUMzQixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxZQUFZLENBQUMsS0FBYSxFQUFFLFVBQXlCO1FBQ2pELE9BQU8sVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNsRSxDQUFDOztzRkFoVFEsbUJBQW1CO3NFQUFuQixtQkFBbUI7dUJBQ2pCLFVBQVU7Ozs7Ozs7Ozs7UUE3RXJCLGtDQUFZLGtCQUFBLHFCQUFBLG9CQUFBO1FBR3dFLG9HQUFTLGNBQVUsSUFBQztRQUN4RixzRUFBOEU7UUFDOUUsOEVBQXVEO1FBQzNELGlCQUFhLEVBQUE7UUFFakIsaUNBQVc7UUFBQSxZQUFlO1FBQUEsaUJBQVksRUFBQTtRQUUxQyxrQkFBK0M7UUFDL0Msa0NBQXFELGNBQUE7UUFFN0MsMEJBQ0o7UUFBQSxpQkFBTTtRQUNOLCtCQUF5RTtRQUNyRSwwQkFDSjtRQUFBLGlCQUFNO1FBQ04sK0JBQXdFO1FBQ3BFLHlCQUNKO1FBQUEsaUJBQU0sRUFBQTtRQUVWLHdDQUlvQjtRQUN4QixpQkFBYTtRQUViLHVDQUdtQztRQUEvQixvSEFBYSxvQkFBZ0IsSUFBQztRQUVsQyxzQ0FBYTtRQUNULHVGQWFjO1FBQ2hCLGlCQUFNO1FBRU4sZ0RBQXVFO1FBQWxDLGdJQUFlLHFCQUFpQixJQUFDO1FBQ3BFLCtDQUEyRDtRQUM3RCxpQkFBc0IsRUFBQTtRQUl4QixtQ0FBWTtRQUNSLCtFQVVVO1FBQ1oscUZBR2E7UUFDZixpQkFBYTs7UUFyRVUsZUFBMkM7UUFBM0Msb0VBQTJDO1FBQ3ZDLGVBQWtCO1FBQWxCLHVDQUFrQjtRQUcxQixlQUFlO1FBQWYsNENBQWU7UUFlMUIsZUFBa0I7UUFBbEIsb0NBQWtCLDhCQUFBLCtCQUFBO1FBT3RCLGVBQXFCO1FBQXJCLG1DQUFxQixxRUFBQTtRQUtRLGVBQTBCO1FBQTFCLDRDQUEwQixrQ0FBQTtRQXVCN0MsZUFBNkI7UUFBN0Isa0RBQTZCO1FBV2QsZUFBa0I7UUFBbEIsdUNBQWtCOzt1RkFPdEMsbUJBQW1CO2NBaEYvQixTQUFTOzJCQUNJLDJCQUEyQixZQUUzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMkVYO2lMQUlDLE9BQU87a0JBRE4sU0FBUzttQkFBQyxVQUFVLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBR3ZDLFNBQVM7a0JBRFIsU0FBUzttQkFBQyxRQUFRLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBSXJDLE9BQU87a0JBRE4sV0FBVzttQkFBQyxnQkFBZ0I7WUFJN0IsT0FBTztrQkFETixLQUFLO1lBR0cscUJBQXFCO2tCQUE3QixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENvbXBvbmVudCxcbiAgICBWaWV3Q2hpbGQsXG4gICAgRWxlbWVudFJlZixcbiAgICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBSZW5kZXJlcjIsXG4gICAgT25Jbml0LFxuICAgIElucHV0LFxuICAgIEFmdGVyVmlld0luaXQsXG4gICAgSG9zdEJpbmRpbmcsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTW9kYWxDb250cm9sbGVyLCBJb25Db250ZW50IH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuaW1wb3J0IHsgQ2FsZW5kYXJEYXksIENhbGVuZGFyTW9udGgsIENhbGVuZGFyTW9kYWxPcHRpb25zLCBEYXlDb25maWcgfSBmcm9tICcuLi9jYWxlbmRhci5tb2RlbCc7XG5pbXBvcnQgeyBDYWxlbmRhclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jYWxlbmRhci5zZXJ2aWNlJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IHBpY2tNb2RlcyB9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgRGVtYW5kQ2FsZW5kYXJTZXJ2aWNlIGZyb20gJy4uL21vZGVscy9kZW1hbi1jYWxlbmRhci1zZXJ2aWNlLkludGVyZmFjZSc7XG5cbmNvbnN0IE5VTV9PRl9NT05USFNfVE9fQ1JFQVRFID0gMztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdpb24tY2FsZW5kYXItZGVtYW5kLW1vZGFsJyxcbiAgICBzdHlsZVVybHM6IFsnLi9jYWxlbmRhci5tb2RhbC5zY3NzJ10sXG4gICAgdGVtcGxhdGU6IGBcbiAgICA8aW9uLWhlYWRlcj5cbiAgICAgICAgPGlvbi10b29sYmFyPlxuICAgICAgICAgICAgPGlvbi1idXR0b25zIHNsb3Q9XCJzZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICA8aW9uLWJ1dHRvbiB0eXBlPSdidXR0b24nIHNsb3Q9XCJpY29uLW9ubHlcIiBmaWxsPVwiY2xlYXJcIiBjbGFzcz1cInByaW1hcnlcIiAoY2xpY2spPVwib25DYW5jZWwoKVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cIl9kLmNsb3NlTGFiZWwgIT09ICcnICYmICFfZC5jbG9zZUljb25cIj57eyBfZC5jbG9zZUxhYmVsIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8aW9uLWljb24gKm5nSWY9XCJfZC5jbG9zZUljb25cIiBuYW1lPVwiY2xvc2VcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgICAgIDwvaW9uLWJ1dHRvbj5cbiAgICAgICAgICAgIDwvaW9uLWJ1dHRvbnM+XG4gICAgICAgICAgICA8aW9uLXRpdGxlPnt7IF9kLnRpdGxlIH19IDwvaW9uLXRpdGxlPlxuICAgICAgICA8L2lvbi10b29sYmFyPlxuICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbc3ViLWhlYWRlcl1cIj48L25nLWNvbnRlbnQ+XG4gICAgICAgIDxpb24tcm93IGNsYXNzPVwiY2FsZW5kYXItZGVtYW5kLWluZGljYXRvci1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYWxlbmRhci1kZW1hbmQtaW5kaWNhdG9yIGNhbGVuZGFyLWRlbWFuZC1pbmRpY2F0b3ItY2hlYXBlclwiPlxuICAgICAgICAgICAgICAgIENoZWFwZXJcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhbGVuZGFyLWRlbWFuZC1pbmRpY2F0b3IgY2FsZW5kYXItZGVtYW5kLWluZGljYXRvci1hdmVyYWdlXCI+XG4gICAgICAgICAgICAgICAgQXZlcmFnZVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsZW5kYXItZGVtYW5kLWluZGljYXRvciBjYWxlbmRhci1kZW1hbmQtaW5kaWNhdG9yLWhpZ2hlclwiPlxuICAgICAgICAgICAgICAgIEhpZ2hlclxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvaW9uLXJvdz5cbiAgICAgICAgPGlvbi1jYWxlbmRhci13ZWVrXG4gICAgICAgICAgICBbY29sb3JdPVwiX2QuY29sb3JcIlxuICAgICAgICAgICAgW3dlZWtBcnJheV09XCJfZC53ZWVrZGF5c1wiXG4gICAgICAgICAgICBbd2Vla1N0YXJ0XT1cIl9kLndlZWtTdGFydFwiPlxuICAgICAgICA8L2lvbi1jYWxlbmRhci13ZWVrPlxuICAgIDwvaW9uLWhlYWRlcj5cblxuICAgIDxpb24tY29udGVudCBjbGFzcz1cImNhbGVuZGFyLXBhZ2VcIlxuICAgICAgICBbc2Nyb2xsRXZlbnRzXT1cInRydWVcIlxuICAgICAgICBbbmdDbGFzc109XCJ7J211bHRpLXNlbGVjdGlvbic6IF9kLnBpY2tNb2RlID09PSAnbXVsdGknfVwiXG4gICAgICAgIChpb25TY3JvbGwpPVwib25TY3JvbGwoJGV2ZW50KVwiPlxuXG4gICAgPGRpdiAjbW9udGhzPlxuICAgICAgICA8bmctdGVtcGxhdGUgbmdGb3IgbGV0LW1vbnRoIFtuZ0Zvck9mXT1cImNhbGVuZGFyTW9udGhzXCIgW25nRm9yVHJhY2tCeV09XCJ0cmFja0J5SW5kZXhcIiBsZXQtaT1cImluZGV4XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9udGgtYm94XCIgW2F0dHIuaWRdPVwiJ21vbnRoLScgKyBpXCI+XG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwibW9udGgtdGl0bGVcIj57eyBfbW9udGhGb3JtYXQobW9udGgub3JpZ2luYWw/LmRhdGUpIH19PC9oND5cbiAgICAgICAgICAgICAgICA8aW9uLWNhbGVuZGFyLW1vbnRoIFttb250aF09XCJtb250aFwiXG4gICAgICAgICAgICAgICAgICAgIFtwaWNrTW9kZV09XCJfZC5waWNrTW9kZVwiXG4gICAgICAgICAgICAgICAgICAgIFtpc1NhdmVIaXN0b3J5XT1cIl9kLmlzU2F2ZUhpc3RvcnlcIlxuICAgICAgICAgICAgICAgICAgICBbaWRdPVwiX2QuaWRcIlxuICAgICAgICAgICAgICAgICAgICBbY29sb3JdPVwiX2QuY29sb3JcIlxuICAgICAgICAgICAgICAgICAgICBbbWF4TXVsdGlEYXRlc109XCJfZC5tYXhNdWx0aURhdGVzXCJcbiAgICAgICAgICAgICAgICAgICAgKGNoYW5nZSk9XCJvbkNoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJkYXRlc1RlbXBcIj5cbiAgICAgICAgICAgICAgICA8L2lvbi1jYWxlbmRhci1tb250aD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxpb24taW5maW5pdGUtc2Nyb2xsIHRocmVzaG9sZD1cIjI1JVwiIChpb25JbmZpbml0ZSk9XCJuZXh0TW9udGgoJGV2ZW50KVwiPlxuICAgICAgICA8aW9uLWluZmluaXRlLXNjcm9sbC1jb250ZW50PjwvaW9uLWluZmluaXRlLXNjcm9sbC1jb250ZW50PlxuICAgICAgPC9pb24taW5maW5pdGUtc2Nyb2xsPlxuXG4gICAgPC9pb24tY29udGVudD5cblxuICAgIDxpb24tZm9vdGVyPlxuICAgICAgICA8aW9uLXJvdyAqbmdJZj1cIl9kLnBpY2tNb2RlID09PSAncmFuZ2UnXCIgbGluZXM9XCJub25lXCIgY2xhc3M9XCJpb24tbWFyZ2luLXZlcnRpY2FsXCIgW2NsYXNzXT1cIidkYXRlcy10b29sYmFyJ1wiIG5vLWJvcmRlcj5cbiAgICAgICAgICAgIDxpb24tY29sIHNpemU9XCI0XCIgY2xhc3M9XCJzdGFydC1kYXRlIGlvbi10ZXh0LW5vd3JhcFwiPlxuICAgICAgICAgICAgICAgIHt7IF9nZXREYXlGb3JtYXR0ZWQoZGF0ZXNUZW1wWzBdKSB8fCAnU3RhcnQgRGF0ZScgfX1cbiAgICAgICAgICAgIDwvaW9uLWNvbD5cbiAgICAgICAgICAgIDxpb24tY29sIHNpemU9XCI0XCIgY2xhc3M9XCJpb24tdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8aW9uLWljb24gbmFtZT1cImFycm93LWZvcndhcmQtb3V0bGluZVwiPjwvaW9uLWljb24+XG4gICAgICAgICAgICA8L2lvbi1jb2w+XG4gICAgICAgICAgICA8aW9uLWNvbCBzaXplPVwiNFwiIGNsYXNzPVwiZW5kLWRhdGUgaW9uLXRleHQtcmlnaHQgaW9uLXRleHQtbm93cmFwXCI+XG4gICAgICAgICAgICAgICAge3sgX2dldERheUZvcm1hdHRlZChkYXRlc1RlbXBbMV0pIHx8ICdFbmQgRGF0ZScgfX1cbiAgICAgICAgICAgIDwvaW9uLWNvbD5cbiAgICAgICAgPC9pb24tcm93PlxuICAgICAgPGlvbi1idXR0b24gZXhwYW5kPVwiZnVsbFwiICpuZ0lmPVwiIV9kLmF1dG9Eb25lXCIgW2Rpc2FibGVkXT1cIiFjYW5Eb25lKClcIiAoY2xpY2spPVwiZG9uZSgpXCI+XG4gICAgICAgIDxzcGFuICpuZ0lmPVwiX2QuZG9uZUxhYmVsICE9PSAnJyAmJiAhX2QuZG9uZUljb25cIj57eyBfZC5kb25lTGFiZWwgfX08L3NwYW4+XG4gICAgICAgIDxpb24taWNvbiAqbmdJZj1cIl9kLmRvbmVJY29uXCIgbmFtZT1cImNoZWNrbWFya1wiPjwvaW9uLWljb24+XG4gICAgICA8L2lvbi1idXR0b24+XG4gICAgPC9pb24tZm9vdGVyPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhckRlbWFuZE1vZGFsIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgICBAVmlld0NoaWxkKElvbkNvbnRlbnQsIHsgc3RhdGljOiB0cnVlIH0pXG4gICAgY29udGVudDogSW9uQ29udGVudCB8IGFueTtcbiAgICBAVmlld0NoaWxkKCdtb250aHMnLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICAgIG1vbnRoc0VsZTogRWxlbWVudFJlZiB8IGFueTtcblxuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaW9uLXBhZ2UnKVxuICAgIGlvblBhZ2UgPSB0cnVlO1xuXG4gICAgQElucHV0KClcbiAgICBvcHRpb25zOiBDYWxlbmRhck1vZGFsT3B0aW9ucyB8IGFueTtcblxuICAgIEBJbnB1dCgpIGRlbWFuZENhbGVuZGFyU2VydmljZTogRGVtYW5kQ2FsZW5kYXJTZXJ2aWNlIHwgbnVsbCA9IG51bGw7XG4gICAgQElucHV0KCkgbGF0aXR1ZGU6IHN0cmluZyA9ICcnO1xuICAgIEBJbnB1dCgpIGxvbmdpdHVkZTogc3RyaW5nID0gJyc7XG5cbiAgICBkYXRlc1RlbXA6IEFycmF5PENhbGVuZGFyRGF5PiB8IGFueSA9IFtudWxsLCBudWxsXTtcbiAgICBjYWxlbmRhck1vbnRoczogQXJyYXk8Q2FsZW5kYXJNb250aD4gfCBhbnk7XG4gICAgc3RlcDogbnVtYmVyIHwgYW55O1xuICAgIHNob3dZZWFyUGlja2VyOiBib29sZWFuIHwgYW55O1xuICAgIHllYXI6IG51bWJlciB8IGFueTtcbiAgICB5ZWFyczogQXJyYXk8bnVtYmVyPiB8IGFueTtcbiAgICBfc2Nyb2xsTG9jayA9IHRydWU7XG4gICAgX2Q6IGFueTtcbiAgICBhY3R1YWxGaXJzdFRpbWU6IG51bWJlciB8IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICBwdWJsaWMgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIHB1YmxpYyBtb2RhbEN0cmw6IE1vZGFsQ29udHJvbGxlcixcbiAgICAgICAgcHVibGljIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgIHB1YmxpYyBjYWxTdmM6IENhbGVuZGFyU2VydmljZVxuICAgICkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pbml0RGVtYW5kQ2FsZW5kYXIoKTtcblxuXG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmZpbmRDc3NDbGFzcygpO1xuICAgICAgICBpZiAodGhpcy5fZC5jYW5CYWNrd2FyZHNTZWxlY3RlZCkgdGhpcy5iYWNrd2FyZHNNb250aCgpO1xuICAgICAgICB0aGlzLnNjcm9sbFRvRGVmYXVsdERhdGUoKTtcbiAgICB9XG5cbiAgICBpbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9kID0gdGhpcy5jYWxTdmMuc2FmZU9wdCh0aGlzLm9wdGlvbnMpO1xuICAgICAgICB0aGlzLl9kLnNob3dBZGphY2VudE1vbnRoRGF5ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3RlcCA9IHRoaXMuX2Quc3RlcDtcbiAgICAgICAgaWYgKHRoaXMuc3RlcCA8IHRoaXMuY2FsU3ZjLkRFRkFVTFRfU1RFUCkge1xuICAgICAgICAgICAgdGhpcy5zdGVwID0gdGhpcy5jYWxTdmMuREVGQVVMVF9TVEVQO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWxlbmRhck1vbnRocyA9IHRoaXMuY2FsU3ZjLmNyZWF0ZU1vbnRoc0J5UGVyaW9kKFxuICAgICAgICAgICAgbW9tZW50KHRoaXMuX2QuZnJvbSkudmFsdWVPZigpLFxuICAgICAgICAgICAgdGhpcy5maW5kSW5pdE1vbnRoTnVtYmVyKHRoaXMuX2QuZGVmYXVsdFNjcm9sbFRvKSArIHRoaXMuc3RlcCxcbiAgICAgICAgICAgIHRoaXMuX2RcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBpbml0RGVmYXVsdERhdGUoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHsgcGlja01vZGUsIGRlZmF1bHREYXRlLCBkZWZhdWx0RGF0ZVJhbmdlLCBkZWZhdWx0RGF0ZXMgfSA9IHRoaXMuX2Q7XG4gICAgICAgIHN3aXRjaCAocGlja01vZGUpIHtcbiAgICAgICAgICAgIGNhc2UgcGlja01vZGVzLlNJTkdMRTpcbiAgICAgICAgICAgICAgICBpZiAoZGVmYXVsdERhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRlc1RlbXBbMF0gPSB0aGlzLmNhbFN2Yy5jcmVhdGVDYWxlbmRhckRheSh0aGlzLl9nZXREYXlUaW1lKGRlZmF1bHREYXRlKSwgdGhpcy5fZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBwaWNrTW9kZXMuUkFOR0U6XG4gICAgICAgICAgICAgICAgaWYgKGRlZmF1bHREYXRlUmFuZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlZmF1bHREYXRlUmFuZ2UuZnJvbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRlc1RlbXBbMF0gPSB0aGlzLmNhbFN2Yy5jcmVhdGVDYWxlbmRhckRheSh0aGlzLl9nZXREYXlUaW1lKGRlZmF1bHREYXRlUmFuZ2UuZnJvbSksIHRoaXMuX2QpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZWZhdWx0RGF0ZVJhbmdlLnRvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGVzVGVtcFsxXSA9IHRoaXMuY2FsU3ZjLmNyZWF0ZUNhbGVuZGFyRGF5KHRoaXMuX2dldERheVRpbWUoZGVmYXVsdERhdGVSYW5nZS50byksIHRoaXMuX2QpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBwaWNrTW9kZXMuTVVMVEk6XG4gICAgICAgICAgICAgICAgaWYgKGRlZmF1bHREYXRlcyAmJiBkZWZhdWx0RGF0ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0ZXNUZW1wID0gZGVmYXVsdERhdGVzLm1hcCgoZTogYW55KSA9PiB0aGlzLmNhbFN2Yy5jcmVhdGVDYWxlbmRhckRheSh0aGlzLl9nZXREYXlUaW1lKGUpLCB0aGlzLl9kKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGVzVGVtcCA9IFtudWxsLCBudWxsXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGluaXREZW1hbmRDYWxlbmRhcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgaWYgKHRoaXMuZGVtYW5kQ2FsZW5kYXJTZXJ2aWNlKSB7XG4gICAgICAgICAgICBjb25zdCBkYXlzID0gYXdhaXQgdGhpcy5kZW1hbmRDYWxlbmRhclNlcnZpY2UuZ2V0KHRoaXMubGF0aXR1ZGUsIHRoaXMubG9uZ2l0dWRlKS50b1Byb21pc2UoKTtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5kYXlzQ29uZmlnID0gdGhpcy5idWlsZERheXMoZGF5cylcbiAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICAgICAgdGhpcy5pbml0RGVmYXVsdERhdGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJ1aWxkRGF5cyhpdGVtczogYW55W10pOiBEYXlDb25maWdbXSB7XG4gICAgICAgIGNvbnN0IGRheUNvbmZpZzogRGF5Q29uZmlnW10gPSBbXTtcblxuICAgICAgICBpZiAoaXRlbXMgJiYgaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGRheUNvbmZpZy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZTogbW9tZW50KGl0ZW0uY2hlY2tfaW4sICdZWVlZLU1NLUREJykudG9EYXRlKCksXG4gICAgICAgICAgICAgICAgICAgIG1hcmtlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGRlbWFuZExldmVsOiBpdGVtLmRlbWFuZFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLyogMjAyNC0wNC0wM1xuICAgICAgICBleHBvcnQgaW50ZXJmYWNlIERheUNvbmZpZyB7XG4gICAgICAgICAgICBkYXRlOiBEYXRlO1xuICAgICAgICAgICAgbWFya2VkPzogYm9vbGVhbjtcbiAgICAgICAgICAgIGRpc2FibGU/OiBib29sZWFuO1xuICAgICAgICAgICAgdGl0bGU/OiBzdHJpbmc7XG4gICAgICAgICAgICBzdWJUaXRsZT86IHN0cmluZztcbiAgICAgICAgICAgIGNzc0NsYXNzPzogc3RyaW5nO1xuICAgICAgICB9XG4gICAgICAgICovXG5cbiAgICAgICAgcmV0dXJuIGRheUNvbmZpZztcbiAgICB9XG5cbiAgICBmaW5kQ3NzQ2xhc3MoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHsgY3NzQ2xhc3MgfSA9IHRoaXMuX2Q7XG4gICAgICAgIGlmIChjc3NDbGFzcykge1xuICAgICAgICAgICAgY3NzQ2xhc3Muc3BsaXQoJyAnKS5mb3JFYWNoKChfY2xhc3M6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChfY2xhc3MudHJpbSgpICE9PSAnJykgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBfY2xhc3MpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNoYW5nZShkYXRhOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgeyBwaWNrTW9kZSwgYXV0b0RvbmUgfSA9IHRoaXMuX2Q7XG5cbiAgICAgICAgdGhpcy5kYXRlc1RlbXAgPSBkYXRhO1xuICAgICAgICB0aGlzLnJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgICAgICAgaWYgKHBpY2tNb2RlICE9PSBwaWNrTW9kZXMuTVVMVEkgJiYgYXV0b0RvbmUgJiYgdGhpcy5jYW5Eb25lKCkpIHtcbiAgICAgICAgICAgIHRoaXMuZG9uZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZXBhaW50RE9NKCk7XG4gICAgfVxuXG4gICAgb25DYW5jZWwoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubW9kYWxDdHJsLmRpc21pc3MobnVsbCwgJ2NhbmNlbCcpO1xuICAgIH1cblxuICAgIGRvbmUoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHsgcGlja01vZGUgfSA9IHRoaXMuX2Q7XG5cbiAgICAgICAgdGhpcy5tb2RhbEN0cmwuZGlzbWlzcyh0aGlzLmNhbFN2Yy53cmFwUmVzdWx0KHRoaXMuZGF0ZXNUZW1wLCBwaWNrTW9kZSksICdkb25lJyk7XG4gICAgfVxuXG4gICAgY2FuRG9uZSgpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHRoaXMuZGF0ZXNUZW1wKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgcGlja01vZGUsIGRlZmF1bHRFbmREYXRlVG9TdGFydERhdGUgfSA9IHRoaXMuX2Q7XG5cbiAgICAgICAgc3dpdGNoIChwaWNrTW9kZSkge1xuICAgICAgICAgICAgY2FzZSBwaWNrTW9kZXMuU0lOR0xFOlxuICAgICAgICAgICAgICAgIHJldHVybiAhISh0aGlzLmRhdGVzVGVtcFswXSAmJiB0aGlzLmRhdGVzVGVtcFswXS50aW1lKTtcbiAgICAgICAgICAgIGNhc2UgcGlja01vZGVzLlJBTkdFOlxuICAgICAgICAgICAgICAgIGlmIChkZWZhdWx0RW5kRGF0ZVRvU3RhcnREYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhISh0aGlzLmRhdGVzVGVtcFswXSAmJiB0aGlzLmRhdGVzVGVtcFswXS50aW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuICEhKHRoaXMuZGF0ZXNUZW1wWzBdICYmIHRoaXMuZGF0ZXNUZW1wWzFdKSAmJiAhISh0aGlzLmRhdGVzVGVtcFswXS50aW1lICYmIHRoaXMuZGF0ZXNUZW1wWzFdLnRpbWUpO1xuICAgICAgICAgICAgY2FzZSBwaWNrTW9kZXMuTVVMVEk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZXNUZW1wLmxlbmd0aCA+IDAgJiYgdGhpcy5kYXRlc1RlbXAuZXZlcnkoZSA9PiAhIWUgJiYgISFlLnRpbWUpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5kYXRlc1RlbXAgPSBbbnVsbCwgbnVsbF07XG4gICAgfVxuXG4gICAgY2FuQ2xlYXIoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuZGF0ZXNUZW1wWzBdO1xuICAgIH1cblxuICAgIG5leHRNb250aChldmVudDogYW55KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGxlbiA9IHRoaXMuY2FsZW5kYXJNb250aHMubGVuZ3RoO1xuICAgICAgICBjb25zdCBmaW5hbCA9IHRoaXMuY2FsZW5kYXJNb250aHNbbGVuIC0gMV07XG4gICAgICAgIGNvbnN0IG5leHRUaW1lID0gbW9tZW50KGZpbmFsLm9yaWdpbmFsLnRpbWUpXG4gICAgICAgICAgICAuYWRkKDEsICdNJylcbiAgICAgICAgICAgIC52YWx1ZU9mKCk7XG4gICAgICAgIGNvbnN0IHJhbmdlRW5kID0gdGhpcy5fZC50byA/IG1vbWVudCh0aGlzLl9kLnRvKS5zdWJ0cmFjdCgxLCAnTScpIDogMDtcblxuICAgICAgICBpZiAobGVuIDw9IDAgfHwgKHJhbmdlRW5kICE9PSAwICYmIG1vbWVudChmaW5hbC5vcmlnaW5hbC50aW1lKS5pc0FmdGVyKHJhbmdlRW5kKSkpIHtcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhbGVuZGFyTW9udGhzLnB1c2goLi4udGhpcy5jYWxTdmMuY3JlYXRlTW9udGhzQnlQZXJpb2QobmV4dFRpbWUsIE5VTV9PRl9NT05USFNfVE9fQ1JFQVRFLCB0aGlzLl9kKSk7XG4gICAgICAgIGV2ZW50LnRhcmdldC5jb21wbGV0ZSgpO1xuICAgICAgICB0aGlzLnJlcGFpbnRET00oKTtcbiAgICB9XG5cbiAgICBiYWNrd2FyZHNNb250aCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgZmlyc3QgPSB0aGlzLmNhbGVuZGFyTW9udGhzWzBdO1xuXG4gICAgICAgIGlmIChmaXJzdC5vcmlnaW5hbC50aW1lIDw9IDApIHtcbiAgICAgICAgICAgIHRoaXMuX2QuY2FuQmFja3dhcmRzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZpcnN0VGltZSA9ICh0aGlzLmFjdHVhbEZpcnN0VGltZSA9IG1vbWVudChmaXJzdC5vcmlnaW5hbC50aW1lKVxuICAgICAgICAgICAgLnN1YnRyYWN0KE5VTV9PRl9NT05USFNfVE9fQ1JFQVRFLCAnTScpXG4gICAgICAgICAgICAudmFsdWVPZigpKTtcblxuICAgICAgICB0aGlzLmNhbGVuZGFyTW9udGhzLnVuc2hpZnQoLi4udGhpcy5jYWxTdmMuY3JlYXRlTW9udGhzQnlQZXJpb2QoZmlyc3RUaW1lLCBOVU1fT0ZfTU9OVEhTX1RPX0NSRUFURSwgdGhpcy5fZCkpO1xuICAgICAgICB0aGlzLnJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIHRoaXMucmVwYWludERPTSgpO1xuICAgIH1cblxuICAgIHNjcm9sbFRvRGF0ZShkYXRlOiBEYXRlKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHREYXRlSW5kZXggPSB0aGlzLmZpbmRJbml0TW9udGhOdW1iZXIoZGF0ZSk7XG4gICAgICAgIGNvbnN0IG1vbnRoRWxlbWVudCA9IHRoaXMubW9udGhzRWxlLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bYG1vbnRoLSR7ZGVmYXVsdERhdGVJbmRleH1gXTtcbiAgICAgICAgY29uc3QgZG9tRWxlbVJlYWR5V2FpdFRpbWUgPSAzMDA7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZWZhdWx0RGF0ZU1vbnRoID0gbW9udGhFbGVtZW50ID8gbW9udGhFbGVtZW50Lm9mZnNldFRvcCA6IDA7XG5cbiAgICAgICAgICAgIGlmIChkZWZhdWx0RGF0ZUluZGV4ICE9PSAtMSAmJiBkZWZhdWx0RGF0ZU1vbnRoICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LnNjcm9sbEJ5UG9pbnQoMCwgZGVmYXVsdERhdGVNb250aCwgMTI4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgZG9tRWxlbVJlYWR5V2FpdFRpbWUpO1xuICAgIH1cblxuICAgIHNjcm9sbFRvRGVmYXVsdERhdGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2Nyb2xsVG9EYXRlKHRoaXMuX2QuZGVmYXVsdFNjcm9sbFRvKTtcbiAgICB9XG5cbiAgICBvblNjcm9sbCgkZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuX2QuY2FuQmFja3dhcmRzU2VsZWN0ZWQpIHJldHVybjtcblxuICAgICAgICBjb25zdCB7IGRldGFpbCB9ID0gJGV2ZW50O1xuXG4gICAgICAgIGlmIChkZXRhaWwuc2Nyb2xsVG9wIDw9IDIwMCAmJiBkZXRhaWwudmVsb2NpdHlZIDwgMCAmJiB0aGlzLl9zY3JvbGxMb2NrKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQuZ2V0U2Nyb2xsRWxlbWVudCgpLnRoZW4oKHNjcm9sbEVsZW06IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX3Njcm9sbExvY2sgPSAhMTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGhlaWdodEJlZm9yZU1vbnRoUHJlcGVuZCA9IHNjcm9sbEVsZW0uc2Nyb2xsSGVpZ2h0O1xuICAgICAgICAgICAgICAgIHRoaXMuYmFja3dhcmRzTW9udGgoKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaGVpZ2h0QWZ0ZXJNb250aFByZXBlbmQgPSBzY3JvbGxFbGVtLnNjcm9sbEhlaWdodDtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQuc2Nyb2xsQnlQb2ludCgwLCBoZWlnaHRBZnRlck1vbnRoUHJlcGVuZCAtIGhlaWdodEJlZm9yZU1vbnRoUHJlcGVuZCwgMCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zY3JvbGxMb2NrID0gITA7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sIDE4MCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluIHNvbWUgb2xkZXIgU2FmYXJpIHZlcnNpb25zIChvYnNlcnZlZCBhdCBNYWMncyBTYWZhcmkgMTAuMCksIHRoZXJlIGlzIGFuIGlzc3VlIHdoZXJlIHN0eWxlIHVwZGF0ZXMgdG9cbiAgICAgKiBzaGFkb3dSb290IGRlc2NlbmRhbnRzIGRvbid0IGNhdXNlIGEgYnJvd3NlciByZXBhaW50LlxuICAgICAqIFNlZSBmb3IgbW9yZSBkZXRhaWxzOiBodHRwczovL2dpdGh1Yi5jb20vUG9seW1lci9wb2x5bWVyL2lzc3Vlcy80NzAxXG4gICAgICovXG4gICAgcmVwYWludERPTSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGVudC5nZXRTY3JvbGxFbGVtZW50KCkudGhlbigoc2Nyb2xsRWxlbTogYW55KSA9PiB7XG4gICAgICAgICAgICAvLyBVcGRhdGUgc2Nyb2xsRWxlbSB0byBlbnN1cmUgdGhhdCBoZWlnaHQgb2YgdGhlIGNvbnRhaW5lciBjaGFuZ2VzIGFzIE1vbnRocyBhcmUgYXBwZW5kZWQvcHJlcGVuZGVkXG4gICAgICAgICAgICBzY3JvbGxFbGVtLnN0eWxlLnpJbmRleCA9ICcyJztcbiAgICAgICAgICAgIHNjcm9sbEVsZW0uc3R5bGUuekluZGV4ID0gJ2luaXRpYWwnO1xuICAgICAgICAgICAgLy8gVXBkYXRlIG1vbnRoc0VsZSB0byBlbnN1cmUgc2VsZWN0ZWQgc3RhdGUgaXMgcmVmbGVjdGVkIHdoZW4gdGFwcGluZyBvbiBhIGRheVxuICAgICAgICAgICAgdGhpcy5tb250aHNFbGUubmF0aXZlRWxlbWVudC5zdHlsZS56SW5kZXggPSAnMic7XG4gICAgICAgICAgICB0aGlzLm1vbnRoc0VsZS5uYXRpdmVFbGVtZW50LnN0eWxlLnpJbmRleCA9ICdpbml0aWFsJztcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZmluZEluaXRNb250aE51bWJlcihkYXRlOiBEYXRlKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IHN0YXJ0RGF0ZSA9IHRoaXMuYWN0dWFsRmlyc3RUaW1lID8gbW9tZW50KHRoaXMuYWN0dWFsRmlyc3RUaW1lKSA6IG1vbWVudCh0aGlzLl9kLmZyb20pO1xuICAgICAgICBjb25zdCBkZWZhdWx0U2Nyb2xsVG8gPSBtb21lbnQoZGF0ZSk7XG4gICAgICAgIGNvbnN0IGlzQWZ0ZXI6IGJvb2xlYW4gPSBkZWZhdWx0U2Nyb2xsVG8uaXNBZnRlcihzdGFydERhdGUpO1xuICAgICAgICBpZiAoIWlzQWZ0ZXIpIHJldHVybiAtMTtcblxuICAgICAgICBpZiAodGhpcy5zaG93WWVhclBpY2tlcikge1xuICAgICAgICAgICAgc3RhcnREYXRlID0gbW9tZW50KG5ldyBEYXRlKHRoaXMueWVhciwgMCwgMSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRlZmF1bHRTY3JvbGxUby5kaWZmKHN0YXJ0RGF0ZSwgJ21vbnRoJyk7XG4gICAgfVxuXG4gICAgX2dldERheVRpbWUoZGF0ZTogYW55KTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIG1vbWVudChtb21lbnQoZGF0ZSkuZm9ybWF0KCdZWVlZLU1NLUREJykpLnZhbHVlT2YoKTtcbiAgICB9XG5cbiAgICBfbW9udGhGb3JtYXQoZGF0ZTogYW55KTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIG1vbWVudChkYXRlKS5mb3JtYXQodGhpcy5fZC5tb250aEZvcm1hdC5yZXBsYWNlKC95L2csICdZJykpO1xuICAgIH1cblxuICAgIF9nZXREYXlGb3JtYXR0ZWQoZGF0YTogYW55KSB7XG4gICAgICAgIGlmICghZGF0YSkgeyByZXR1cm4gbnVsbDsgfVxuICAgICAgICByZXR1cm4gbW9tZW50KGRhdGEudGltZSkuZm9ybWF0KCdkZGQsIE1NTSBEbycpO1xuICAgIH1cblxuICAgIHRyYWNrQnlJbmRleChpbmRleDogbnVtYmVyLCBtb21lbnREYXRlOiBDYWxlbmRhck1vbnRoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIG1vbWVudERhdGUub3JpZ2luYWwgPyBtb21lbnREYXRlLm9yaWdpbmFsLnRpbWUgOiBpbmRleDtcbiAgICB9XG59XG4iXX0=