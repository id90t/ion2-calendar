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
    i0.ɵɵtextInterpolate(ctx_r0._d == null ? null : ctx_r0._d.closeLabel);
} }
function CalendarDemandModal_ion_icon_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ion-icon", 11);
} }
function CalendarDemandModal_ion_row_9_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ion-content", 19);
    i0.ɵɵtext(1, "Based on the most frequent searches per day");
    i0.ɵɵelementEnd();
} }
function CalendarDemandModal_ion_row_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ion-row", 12)(1, "div", 13);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 14);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 15);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "ion-button", 16);
    i0.ɵɵelement(8, "ion-icon", 17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "ion-popover", 18);
    i0.ɵɵtemplate(10, CalendarDemandModal_ion_row_9_ng_template_10_Template, 2, 0, "ng-template");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.cheaperText, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.averageText, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.higherText, " ");
} }
function CalendarDemandModal_ion_calendar_week_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ion-calendar-week", 20);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("color", ctx_r3._d.color)("weekArray", ctx_r3._d.weekdays)("weekStart", ctx_r3._d.weekStart);
} }
function CalendarDemandModal_div_12_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 23)(1, "h4", 24);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "ion-calendar-month", 25);
    i0.ɵɵlistener("change", function CalendarDemandModal_div_12_ng_template_2_Template_ion_calendar_month_change_3_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r13.onChange($event)); })("ngModelChange", function CalendarDemandModal_div_12_ng_template_2_Template_ion_calendar_month_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r15 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r15.datesTemp = $event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const month_r11 = ctx.$implicit;
    const i_r12 = ctx.index;
    const ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵattribute("id", "month-" + i_r12);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r10.monthFormat(month_r11.original == null ? null : month_r11.original.date));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("month", month_r11)("pickMode", ctx_r10._d.pickMode)("isSaveHistory", ctx_r10._d.isSaveHistory)("id", ctx_r10._d.id)("color", ctx_r10._d.color)("maxMultiDates", ctx_r10._d.maxMultiDates)("ngModel", ctx_r10.datesTemp);
} }
function CalendarDemandModal_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", null, 21);
    i0.ɵɵtemplate(2, CalendarDemandModal_div_12_ng_template_2_Template, 4, 9, "ng-template", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r4.calendarMonths)("ngForTrackBy", ctx_r4.trackByIndex);
} }
function CalendarDemandModal_div_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 26);
    i0.ɵɵelement(1, "ion-spinner", 27);
    i0.ɵɵelementEnd();
} }
function CalendarDemandModal_ion_row_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ion-row", 28)(1, "ion-col", 29);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "ion-col", 30);
    i0.ɵɵelement(4, "ion-icon", 31);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "ion-col", 32);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵclassMap("dates-toolbar");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r6.getDayFormatted(ctx_r6.datesTemp[0]) || "Start Date", " ");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r6.getDayFormatted(ctx_r6.datesTemp[1]) || "End Date", " ");
} }
function CalendarDemandModal_ion_button_18_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r16 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r16._d == null ? null : ctx_r16._d.doneLabel);
} }
function CalendarDemandModal_ion_button_18_ion_icon_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ion-icon", 35);
} }
function CalendarDemandModal_ion_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ion-button", 33);
    i0.ɵɵlistener("click", function CalendarDemandModal_ion_button_18_Template_ion_button_click_0_listener() { i0.ɵɵrestoreView(_r19); const ctx_r18 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r18.done()); });
    i0.ɵɵtemplate(1, CalendarDemandModal_ion_button_18_span_1_Template, 2, 1, "span", 2);
    i0.ɵɵtemplate(2, CalendarDemandModal_ion_button_18_ion_icon_2_Template, 1, 0, "ion-icon", 34);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", !ctx_r7.canDone());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (ctx_r7._d == null ? null : ctx_r7._d.doneLabel) !== "" && !(ctx_r7._d == null ? null : ctx_r7._d.doneIcon));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7._d == null ? null : ctx_r7._d.doneIcon);
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
    } }, inputs: { options: "options", demandCalendarService: "demandCalendarService", latitude: "latitude", longitude: "longitude", cheaperText: "cheaperText", averageText: "averageText", higherText: "higherText" }, ngContentSelectors: _c3, decls: 19, vars: 13, consts: [["slot", "secondary"], ["type", "button", "slot", "icon-only", "fill", "clear", 1, "primary", 3, "click"], [4, "ngIf"], ["name", "close", 4, "ngIf"], ["class", "calendar-demand-indicator-container ion-padding-top", 4, "ngIf"], [3, "color", "weekArray", "weekStart", 4, "ngIf"], [1, "calendar-page", 3, "scrollEvents", "ngClass", "ionScroll"], ["class", "loading-container", 4, "ngIf"], ["threshold", "25%", 3, "ionInfinite"], ["lines", "none", "class", "ion-margin-vertical", "no-border", "", 3, "class", 4, "ngIf"], ["expand", "full", 3, "disabled", "click", 4, "ngIf"], ["name", "close"], [1, "calendar-demand-indicator-container", "ion-padding-top"], [1, "calendar-demand-indicator", "calendar-demand-indicator-cheaper"], [1, "calendar-demand-indicator", "calendar-demand-indicator-average"], [1, "calendar-demand-indicator", "calendar-demand-indicator-higher"], ["shape", "round", "fill", "clear", "id", "click-trigger", 1, "ion-no-padding"], ["name", "information-circle-outline"], ["trigger", "click-trigger", "triggerAction", "click"], [1, "ion-padding"], [3, "color", "weekArray", "weekStart"], ["months", ""], ["ngFor", "", 3, "ngForOf", "ngForTrackBy"], [1, "month-box"], [1, "month-title"], [3, "month", "pickMode", "isSaveHistory", "id", "color", "maxMultiDates", "ngModel", "change", "ngModelChange"], [1, "loading-container"], ["name", "crescent", "color", "primary", 1, "loading-indicator"], ["lines", "none", "no-border", "", 1, "ion-margin-vertical"], ["size", "4", 1, "start-date", "ion-text-nowrap"], ["size", "4", 1, "ion-text-center"], ["name", "arrow-forward-outline"], ["size", "4", 1, "end-date", "ion-text-right", "ion-text-nowrap"], ["expand", "full", 3, "disabled", "click"], ["name", "checkmark", 4, "ngIf"], ["name", "checkmark"]], template: function CalendarDemandModal_Template(rf, ctx) { if (rf & 1) {
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
        i0.ɵɵtemplate(9, CalendarDemandModal_ion_row_9_Template, 11, 3, "ion-row", 4);
        i0.ɵɵtemplate(10, CalendarDemandModal_ion_calendar_week_10_Template, 1, 3, "ion-calendar-week", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "ion-content", 6);
        i0.ɵɵlistener("ionScroll", function CalendarDemandModal_Template_ion_content_ionScroll_11_listener($event) { return ctx.onScroll($event); });
        i0.ɵɵtemplate(12, CalendarDemandModal_div_12_Template, 3, 2, "div", 2);
        i0.ɵɵtemplate(13, CalendarDemandModal_div_13_Template, 2, 0, "div", 7);
        i0.ɵɵelementStart(14, "ion-infinite-scroll", 8);
        i0.ɵɵlistener("ionInfinite", function CalendarDemandModal_Template_ion_infinite_scroll_ionInfinite_14_listener($event) { return ctx.nextMonth($event); });
        i0.ɵɵelement(15, "ion-infinite-scroll-content");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(16, "ion-footer");
        i0.ɵɵtemplate(17, CalendarDemandModal_ion_row_17_Template, 7, 4, "ion-row", 9);
        i0.ɵɵtemplate(18, CalendarDemandModal_ion_button_18_Template, 3, 3, "ion-button", 10);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngIf", (ctx._d == null ? null : ctx._d.closeLabel) !== "" && !(ctx._d == null ? null : ctx._d.closeIcon));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx._d == null ? null : ctx._d.closeIcon);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1("", ctx._d == null ? null : ctx._d.title, " ");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", !ctx.loading);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx._d);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("scrollEvents", true)("ngClass", i0.ɵɵpureFunction1(11, _c2, (ctx._d == null ? null : ctx._d.pickMode) === "multi"));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.loading && ctx._d);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.loading);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngIf", (ctx._d == null ? null : ctx._d.pickMode) === "range");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !(ctx._d == null ? null : ctx._d.autoDone));
    } }, dependencies: [i3.NgClass, i3.NgForOf, i3.NgIf, i1.IonButton, i1.IonButtons, i1.IonCol, i1.IonContent, i1.IonFooter, i1.IonHeader, i1.IonIcon, i1.IonInfiniteScroll, i1.IonInfiniteScrollContent, i1.IonRow, i1.IonSpinner, i1.IonTitle, i1.IonToolbar, i1.IonPopover, i4.NgControlStatus, i4.NgModel, i5.CalendarWeekComponent, i6.MonthComponent], styles: ["[_nghost-%COMP%]   ion-select[_ngcontent-%COMP%]{max-width:unset}[_nghost-%COMP%]   ion-select[_ngcontent-%COMP%]   .select-icon[_ngcontent-%COMP%] > .select-icon-inner[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-select[_ngcontent-%COMP%]   .select-text[_ngcontent-%COMP%]{color:#fff!important}[_nghost-%COMP%]   ion-select.select-ios[_ngcontent-%COMP%]{max-width:unset}[_nghost-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-button.md[_ngcontent-%COMP%]{color:var(--ion-color-primary)}[_nghost-%COMP%]   .dates-toolbar[_ngcontent-%COMP%]{--background: transparent;padding:0 1rem}[_nghost-%COMP%]   .dates-toolbar.primary[_ngcontent-%COMP%]{--background: var(--ion-color-primary)}[_nghost-%COMP%]   .dates-toolbar.secondary[_ngcontent-%COMP%]{--background: var(--ion-color-secondary)}[_nghost-%COMP%]   .dates-toolbar.danger[_ngcontent-%COMP%]{--background: var(--ion-color-danger)}[_nghost-%COMP%]   .dates-toolbar.dark[_ngcontent-%COMP%]{--background: var(--ion-color-dark)}[_nghost-%COMP%]   .dates-toolbar.light[_ngcontent-%COMP%]{--background: var(--ion-color-light)}[_nghost-%COMP%]   .dates-toolbar.transparent[_ngcontent-%COMP%]{--background: transparent}[_nghost-%COMP%]   .dates-toolbar.toolbar-md[_ngcontent-%COMP%]{min-height:44px}[_nghost-%COMP%]   .ios.dates-toolbar[_ngcontent-%COMP%]{padding-top:1rem}[_nghost-%COMP%]   .start-date[_ngcontent-%COMP%]{padding-left:.5rem}[_nghost-%COMP%]   .end-date[_ngcontent-%COMP%]{margin-right:-.5rem}[_nghost-%COMP%]   .calendar-page[_ngcontent-%COMP%]{background-color:#fbfbfb}[_nghost-%COMP%]   .month-box[_ngcontent-%COMP%]{display:inline-block;width:100%;padding-bottom:1em}[_nghost-%COMP%]   #month-0[_ngcontent-%COMP%]{padding-top:1rem}[_nghost-%COMP%]   .month-title[_ngcontent-%COMP%]{padding-left:1rem;text-align:left;color:#363749}[_nghost-%COMP%]   h4[_ngcontent-%COMP%]{font-weight:400;font-size:1.1rem;display:block;text-align:center;margin:1rem 0 0;color:#929292}body[data-dark-mode=true]   [_nghost-%COMP%]   .month-title[_ngcontent-%COMP%]{color:#fff}body[data-dark-mode=true]   [_nghost-%COMP%]   .dates-toolbar[_ngcontent-%COMP%]{color:#fff}.calendar-demand-indicator-container[_ngcontent-%COMP%]{justify-content:center;background-color:var(--ion-toolbar-background, var(--ion-color-step-50, #f7f7f7))}.calendar-demand-indicator[_ngcontent-%COMP%]{padding:.25rem;margin:auto .25rem;border-radius:5px}.calendar-demand-indicator-cheaper[_ngcontent-%COMP%]{background-color:#6cd395}.calendar-demand-indicator-average[_ngcontent-%COMP%]{background-color:#f2c666}.calendar-demand-indicator-higher[_ngcontent-%COMP%]{background-color:#f58787}.loading-container[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;justify-content:center;align-items:center}.loading-indicator[_ngcontent-%COMP%]{width:5rem;height:5rem}", "[_nghost-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{border:none!important}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CalendarDemandModal, [{
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
        }], cheaperText: [{
            type: Input
        }], averageText: [{
            type: Input
        }], higherText: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItZGVtYW5kLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9jYWxlbmRhci1kZW1hbmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsU0FBUyxFQUNULFVBQVUsRUFDVixpQkFBaUIsRUFDakIsU0FBUyxFQUVULEtBQUssRUFFTCxXQUFXLEdBQ2QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDL0QsT0FBTyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBQzVCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxXQUFXLENBQUM7Ozs7Ozs7Ozs7SUFhbEIsNEJBQXNEO0lBQUEsWUFBb0I7SUFBQSxpQkFBTzs7O0lBQTNCLGVBQW9CO0lBQXBCLHFFQUFvQjs7O0lBQzFFLCtCQUF3RDs7O0lBc0J4RCx1Q0FBaUM7SUFBQSwyREFBMkM7SUFBQSxpQkFBYzs7O0lBaEJ0RyxtQ0FBc0YsY0FBQTtJQUU5RSxZQUNKO0lBQUEsaUJBQU07SUFDTiwrQkFBeUU7SUFDckUsWUFDSjtJQUFBLGlCQUFNO0lBQ04sK0JBQXdFO0lBQ3BFLFlBQ0o7SUFBQSxpQkFBTTtJQUVOLHNDQUFpRjtJQUM3RSwrQkFBdUQ7SUFDM0QsaUJBQWE7SUFDYix1Q0FBMkQ7SUFDdkQsNkZBRWM7SUFDbEIsaUJBQWMsRUFBQTs7O0lBaEJWLGVBQ0o7SUFESSxtREFDSjtJQUVJLGVBQ0o7SUFESSxtREFDSjtJQUVJLGVBQ0o7SUFESSxrREFDSjs7O0lBV0osd0NBSW9COzs7SUFIaEIsdUNBQWtCLGlDQUFBLGtDQUFBOzs7O0lBYWQsK0JBQWdELGFBQUE7SUFDcEIsWUFBdUM7SUFBQSxpQkFB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QUFFO1lBR3ZDLFNBQVM7a0JBRFIsU0FBUzttQkFBQyxRQUFRLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBSXJDLE9BQU87a0JBRE4sV0FBVzttQkFBQyxnQkFBZ0I7WUFJN0IsT0FBTztrQkFETixLQUFLO1lBR0cscUJBQXFCO2tCQUE3QixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENvbXBvbmVudCxcbiAgICBWaWV3Q2hpbGQsXG4gICAgRWxlbWVudFJlZixcbiAgICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBSZW5kZXJlcjIsXG4gICAgT25Jbml0LFxuICAgIElucHV0LFxuICAgIEFmdGVyVmlld0luaXQsXG4gICAgSG9zdEJpbmRpbmcsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTW9kYWxDb250cm9sbGVyLCBJb25Db250ZW50IH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuaW1wb3J0IHsgQ2FsZW5kYXJEYXksIENhbGVuZGFyTW9udGgsIENhbGVuZGFyTW9kYWxPcHRpb25zLCBEYXlDb25maWcgfSBmcm9tICcuLi9jYWxlbmRhci5tb2RlbCc7XG5pbXBvcnQgeyBDYWxlbmRhclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jYWxlbmRhci5zZXJ2aWNlJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IHBpY2tNb2RlcyB9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgRGVtYW5kQ2FsZW5kYXJTZXJ2aWNlIGZyb20gJy4uL21vZGVscy9kZW1hbi1jYWxlbmRhci1zZXJ2aWNlLkludGVyZmFjZSc7XG5cbmNvbnN0IE5VTV9PRl9NT05USFNfVE9fQ1JFQVRFID0gMztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdpb24tY2FsZW5kYXItZGVtYW5kLW1vZGFsJyxcbiAgICBzdHlsZVVybHM6IFsnLi9jYWxlbmRhci5tb2RhbC5zY3NzJywgJy4vY2FsZW5kYXItZGVtYW5kLmNvbXBvbmVudC5zY3NzJ10sXG4gICAgdGVtcGxhdGU6IGBcbiAgICA8aW9uLWhlYWRlcj5cbiAgICAgICAgPGlvbi10b29sYmFyPlxuICAgICAgICAgICAgPGlvbi1idXR0b25zIHNsb3Q9XCJzZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICA8aW9uLWJ1dHRvbiB0eXBlPSdidXR0b24nIHNsb3Q9XCJpY29uLW9ubHlcIiBmaWxsPVwiY2xlYXJcIiBjbGFzcz1cInByaW1hcnlcIiAoY2xpY2spPVwib25DYW5jZWwoKVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cIl9kPy5jbG9zZUxhYmVsICE9PSAnJyAmJiAhX2Q/LmNsb3NlSWNvblwiPnt7IF9kPy5jbG9zZUxhYmVsIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8aW9uLWljb24gKm5nSWY9XCJfZD8uY2xvc2VJY29uXCIgbmFtZT1cImNsb3NlXCI+PC9pb24taWNvbj5cbiAgICAgICAgICAgICAgICA8L2lvbi1idXR0b24+XG4gICAgICAgICAgICA8L2lvbi1idXR0b25zPlxuICAgICAgICAgICAgPGlvbi10aXRsZT57eyBfZD8udGl0bGUgfX0gPC9pb24tdGl0bGU+XG4gICAgICAgIDwvaW9uLXRvb2xiYXI+XG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltzdWItaGVhZGVyXVwiPjwvbmctY29udGVudD5cbiAgICAgICAgPGlvbi1yb3cgY2xhc3M9XCJjYWxlbmRhci1kZW1hbmQtaW5kaWNhdG9yLWNvbnRhaW5lciBpb24tcGFkZGluZy10b3BcIiAqbmdJZj1cIiFsb2FkaW5nXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsZW5kYXItZGVtYW5kLWluZGljYXRvciBjYWxlbmRhci1kZW1hbmQtaW5kaWNhdG9yLWNoZWFwZXJcIj5cbiAgICAgICAgICAgICAgICB7eyBjaGVhcGVyVGV4dCB9fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsZW5kYXItZGVtYW5kLWluZGljYXRvciBjYWxlbmRhci1kZW1hbmQtaW5kaWNhdG9yLWF2ZXJhZ2VcIj5cbiAgICAgICAgICAgICAgICB7eyBhdmVyYWdlVGV4dCB9fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsZW5kYXItZGVtYW5kLWluZGljYXRvciBjYWxlbmRhci1kZW1hbmQtaW5kaWNhdG9yLWhpZ2hlclwiPlxuICAgICAgICAgICAgICAgIHt7IGhpZ2hlclRleHQgfX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8aW9uLWJ1dHRvbiBzaGFwZT1cInJvdW5kXCIgZmlsbD1cImNsZWFyXCIgaWQ9XCJjbGljay10cmlnZ2VyXCIgY2xhc3M9XCJpb24tbm8tcGFkZGluZ1wiPlxuICAgICAgICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwiaW5mb3JtYXRpb24tY2lyY2xlLW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgPC9pb24tYnV0dG9uPiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGlvbi1wb3BvdmVyIHRyaWdnZXI9XCJjbGljay10cmlnZ2VyXCIgdHJpZ2dlckFjdGlvbj1cImNsaWNrXCI+XG4gICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICA8aW9uLWNvbnRlbnQgY2xhc3M9XCJpb24tcGFkZGluZ1wiPkJhc2VkIG9uIHRoZSBtb3N0IGZyZXF1ZW50IHNlYXJjaGVzIHBlciBkYXk8L2lvbi1jb250ZW50PlxuICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICA8L2lvbi1wb3BvdmVyPlxuICAgICAgICA8L2lvbi1yb3c+XG4gICAgICAgIDxpb24tY2FsZW5kYXItd2VlayAqbmdJZj1cIl9kXCJcbiAgICAgICAgICAgIFtjb2xvcl09XCJfZC5jb2xvclwiXG4gICAgICAgICAgICBbd2Vla0FycmF5XT1cIl9kLndlZWtkYXlzXCJcbiAgICAgICAgICAgIFt3ZWVrU3RhcnRdPVwiX2Qud2Vla1N0YXJ0XCI+XG4gICAgICAgIDwvaW9uLWNhbGVuZGFyLXdlZWs+XG4gICAgPC9pb24taGVhZGVyPlxuXG4gICAgPGlvbi1jb250ZW50IGNsYXNzPVwiY2FsZW5kYXItcGFnZVwiXG4gICAgICAgIFtzY3JvbGxFdmVudHNdPVwidHJ1ZVwiXG4gICAgICAgIFtuZ0NsYXNzXT1cInsnbXVsdGktc2VsZWN0aW9uJzogX2Q/LnBpY2tNb2RlID09PSAnbXVsdGknfVwiXG4gICAgICAgIChpb25TY3JvbGwpPVwib25TY3JvbGwoJGV2ZW50KVwiPlxuXG4gICAgICAgIDxkaXYgI21vbnRocyAqbmdJZj1cIiFsb2FkaW5nICYmIF9kXCI+XG4gICAgICAgICAgICA8bmctdGVtcGxhdGUgbmdGb3IgbGV0LW1vbnRoIFtuZ0Zvck9mXT1cImNhbGVuZGFyTW9udGhzXCIgW25nRm9yVHJhY2tCeV09XCJ0cmFja0J5SW5kZXhcIiBsZXQtaT1cImluZGV4XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vbnRoLWJveFwiIFthdHRyLmlkXT1cIidtb250aC0nICsgaVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJtb250aC10aXRsZVwiPnt7IG1vbnRoRm9ybWF0KG1vbnRoLm9yaWdpbmFsPy5kYXRlKSB9fTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDxpb24tY2FsZW5kYXItbW9udGggW21vbnRoXT1cIm1vbnRoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtwaWNrTW9kZV09XCJfZC5waWNrTW9kZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbaXNTYXZlSGlzdG9yeV09XCJfZC5pc1NhdmVIaXN0b3J5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtpZF09XCJfZC5pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbY29sb3JdPVwiX2QuY29sb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW21heE11bHRpRGF0ZXNdPVwiX2QubWF4TXVsdGlEYXRlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAoY2hhbmdlKT1cIm9uQ2hhbmdlKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJkYXRlc1RlbXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9pb24tY2FsZW5kYXItbW9udGg+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2ICpuZ0lmPVwibG9hZGluZ1wiIGNsYXNzPVwibG9hZGluZy1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxpb24tc3Bpbm5lciBuYW1lPVwiY3Jlc2NlbnRcIiBjb2xvcj1cInByaW1hcnlcIiBjbGFzcz1cImxvYWRpbmctaW5kaWNhdG9yXCI+PC9pb24tc3Bpbm5lcj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGlvbi1pbmZpbml0ZS1zY3JvbGwgdGhyZXNob2xkPVwiMjUlXCIgKGlvbkluZmluaXRlKT1cIm5leHRNb250aCgkZXZlbnQpXCI+XG4gICAgICAgICAgICA8aW9uLWluZmluaXRlLXNjcm9sbC1jb250ZW50PjwvaW9uLWluZmluaXRlLXNjcm9sbC1jb250ZW50PlxuICAgICAgICA8L2lvbi1pbmZpbml0ZS1zY3JvbGw+XG5cbiAgICA8L2lvbi1jb250ZW50PlxuXG4gICAgPGlvbi1mb290ZXI+XG4gICAgICAgIDxpb24tcm93ICpuZ0lmPVwiX2Q/LnBpY2tNb2RlID09PSAncmFuZ2UnXCIgbGluZXM9XCJub25lXCIgY2xhc3M9XCJpb24tbWFyZ2luLXZlcnRpY2FsXCIgW2NsYXNzXT1cIidkYXRlcy10b29sYmFyJ1wiIG5vLWJvcmRlcj5cbiAgICAgICAgICAgIDxpb24tY29sIHNpemU9XCI0XCIgY2xhc3M9XCJzdGFydC1kYXRlIGlvbi10ZXh0LW5vd3JhcFwiPlxuICAgICAgICAgICAgICAgIHt7IGdldERheUZvcm1hdHRlZChkYXRlc1RlbXBbMF0pIHx8ICdTdGFydCBEYXRlJyB9fVxuICAgICAgICAgICAgPC9pb24tY29sPlxuICAgICAgICAgICAgPGlvbi1jb2wgc2l6ZT1cIjRcIiBjbGFzcz1cImlvbi10ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwiYXJyb3ctZm9yd2FyZC1vdXRsaW5lXCI+PC9pb24taWNvbj5cbiAgICAgICAgICAgIDwvaW9uLWNvbD5cbiAgICAgICAgICAgIDxpb24tY29sIHNpemU9XCI0XCIgY2xhc3M9XCJlbmQtZGF0ZSBpb24tdGV4dC1yaWdodCBpb24tdGV4dC1ub3dyYXBcIj5cbiAgICAgICAgICAgICAgICB7eyBnZXREYXlGb3JtYXR0ZWQoZGF0ZXNUZW1wWzFdKSB8fCAnRW5kIERhdGUnIH19XG4gICAgICAgICAgICA8L2lvbi1jb2w+XG4gICAgICAgIDwvaW9uLXJvdz5cbiAgICAgIDxpb24tYnV0dG9uIGV4cGFuZD1cImZ1bGxcIiAqbmdJZj1cIiFfZD8uYXV0b0RvbmVcIiBbZGlzYWJsZWRdPVwiIWNhbkRvbmUoKVwiIChjbGljayk9XCJkb25lKClcIj5cbiAgICAgICAgPHNwYW4gKm5nSWY9XCJfZD8uZG9uZUxhYmVsICE9PSAnJyAmJiAhX2Q/LmRvbmVJY29uXCI+e3sgX2Q/LmRvbmVMYWJlbCB9fTwvc3Bhbj5cbiAgICAgICAgPGlvbi1pY29uICpuZ0lmPVwiX2Q/LmRvbmVJY29uXCIgbmFtZT1cImNoZWNrbWFya1wiPjwvaW9uLWljb24+XG4gICAgICA8L2lvbi1idXR0b24+XG4gICAgPC9pb24tZm9vdGVyPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhckRlbWFuZE1vZGFsIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgICBAVmlld0NoaWxkKElvbkNvbnRlbnQsIHsgc3RhdGljOiB0cnVlIH0pXG4gICAgY29udGVudDogSW9uQ29udGVudCB8IGFueTtcbiAgICBAVmlld0NoaWxkKCdtb250aHMnLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICAgIG1vbnRoc0VsZTogRWxlbWVudFJlZiB8IGFueTtcblxuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaW9uLXBhZ2UnKVxuICAgIGlvblBhZ2UgPSB0cnVlO1xuXG4gICAgQElucHV0KClcbiAgICBvcHRpb25zOiBDYWxlbmRhck1vZGFsT3B0aW9ucyB8IGFueTtcblxuICAgIEBJbnB1dCgpIGRlbWFuZENhbGVuZGFyU2VydmljZTogRGVtYW5kQ2FsZW5kYXJTZXJ2aWNlIHwgbnVsbCA9IG51bGw7XG4gICAgQElucHV0KCkgbGF0aXR1ZGU6IHN0cmluZyA9ICcnO1xuICAgIEBJbnB1dCgpIGxvbmdpdHVkZTogc3RyaW5nID0gJyc7XG4gICAgQElucHV0KCkgY2hlYXBlclRleHQ6IHN0cmluZyA9ICdDaGVhcGVyJztcbiAgICBASW5wdXQoKSBhdmVyYWdlVGV4dDogc3RyaW5nID0gJ0F2ZXJhZ2UnO1xuICAgIEBJbnB1dCgpIGhpZ2hlclRleHQ6IHN0cmluZyA9ICdIaWdoZXInO1xuXG4gICAgbG9hZGluZzogYm9vbGVhbiA9IHRydWU7XG4gICAgZGF0ZXNUZW1wOiBBcnJheTxDYWxlbmRhckRheT4gfCBhbnkgPSBbbnVsbCwgbnVsbF07XG4gICAgY2FsZW5kYXJNb250aHM6IEFycmF5PENhbGVuZGFyTW9udGg+IHwgYW55O1xuICAgIHN0ZXA6IG51bWJlciB8IGFueTtcbiAgICBzaG93WWVhclBpY2tlcjogYm9vbGVhbiB8IGFueTtcbiAgICB5ZWFyOiBudW1iZXIgfCBhbnk7XG4gICAgeWVhcnM6IEFycmF5PG51bWJlcj4gfCBhbnk7XG4gICAgX3Njcm9sbExvY2sgPSB0cnVlO1xuICAgIF9kOiBhbnk7XG4gICAgYWN0dWFsRmlyc3RUaW1lOiBudW1iZXIgfCBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgcHVibGljIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBwdWJsaWMgbW9kYWxDdHJsOiBNb2RhbENvbnRyb2xsZXIsXG4gICAgICAgIHB1YmxpYyByZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICBwdWJsaWMgY2FsU3ZjOiBDYWxlbmRhclNlcnZpY2VcbiAgICApIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaW5pdERlbWFuZENhbGVuZGFyKCk7XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuXG4gICAgfVxuXG4gICAgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fZCA9IHRoaXMuY2FsU3ZjLnNhZmVPcHQodGhpcy5vcHRpb25zKTtcbiAgICAgICAgdGhpcy5fZC5zaG93QWRqYWNlbnRNb250aERheSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN0ZXAgPSB0aGlzLl9kLnN0ZXA7XG4gICAgICAgIGlmICh0aGlzLnN0ZXAgPCB0aGlzLmNhbFN2Yy5ERUZBVUxUX1NURVApIHtcbiAgICAgICAgICAgIHRoaXMuc3RlcCA9IHRoaXMuY2FsU3ZjLkRFRkFVTFRfU1RFUDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FsZW5kYXJNb250aHMgPSB0aGlzLmNhbFN2Yy5jcmVhdGVNb250aHNCeVBlcmlvZChcbiAgICAgICAgICAgIG1vbWVudCh0aGlzLl9kLmZyb20pLnZhbHVlT2YoKSxcbiAgICAgICAgICAgIHRoaXMuZmluZEluaXRNb250aE51bWJlcih0aGlzLl9kLmRlZmF1bHRTY3JvbGxUbykgKyB0aGlzLnN0ZXAsXG4gICAgICAgICAgICB0aGlzLl9kXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgaW5pdERlZmF1bHREYXRlKCk6IHZvaWQge1xuICAgICAgICBjb25zdCB7IHBpY2tNb2RlLCBkZWZhdWx0RGF0ZSwgZGVmYXVsdERhdGVSYW5nZSwgZGVmYXVsdERhdGVzIH0gPSB0aGlzLl9kO1xuICAgICAgICBzd2l0Y2ggKHBpY2tNb2RlKSB7XG4gICAgICAgICAgICBjYXNlIHBpY2tNb2Rlcy5TSU5HTEU6XG4gICAgICAgICAgICAgICAgaWYgKGRlZmF1bHREYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0ZXNUZW1wWzBdID0gdGhpcy5jYWxTdmMuY3JlYXRlQ2FsZW5kYXJEYXkodGhpcy5nZXREYXlUaW1lKGRlZmF1bHREYXRlKSwgdGhpcy5fZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBwaWNrTW9kZXMuUkFOR0U6XG4gICAgICAgICAgICAgICAgaWYgKGRlZmF1bHREYXRlUmFuZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlZmF1bHREYXRlUmFuZ2UuZnJvbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRlc1RlbXBbMF0gPSB0aGlzLmNhbFN2Yy5jcmVhdGVDYWxlbmRhckRheSh0aGlzLmdldERheVRpbWUoZGVmYXVsdERhdGVSYW5nZS5mcm9tKSwgdGhpcy5fZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlZmF1bHREYXRlUmFuZ2UudG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0ZXNUZW1wWzFdID0gdGhpcy5jYWxTdmMuY3JlYXRlQ2FsZW5kYXJEYXkodGhpcy5nZXREYXlUaW1lKGRlZmF1bHREYXRlUmFuZ2UudG8pLCB0aGlzLl9kKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgcGlja01vZGVzLk1VTFRJOlxuICAgICAgICAgICAgICAgIGlmIChkZWZhdWx0RGF0ZXMgJiYgZGVmYXVsdERhdGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGVzVGVtcCA9IGRlZmF1bHREYXRlcy5tYXAoKGU6IGFueSkgPT4gdGhpcy5jYWxTdmMuY3JlYXRlQ2FsZW5kYXJEYXkodGhpcy5nZXREYXlUaW1lKGUpLCB0aGlzLl9kKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGVzVGVtcCA9IFtudWxsLCBudWxsXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGluaXREZW1hbmRDYWxlbmRhcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgaWYgKHRoaXMuZGVtYW5kQ2FsZW5kYXJTZXJ2aWNlKSB7XG4gICAgICAgICAgICBjb25zdCBkYXlzID0gYXdhaXQgdGhpcy5kZW1hbmRDYWxlbmRhclNlcnZpY2UuZ2V0KHRoaXMubGF0aXR1ZGUsIHRoaXMubG9uZ2l0dWRlKS50b1Byb21pc2UoKTtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5kYXlzQ29uZmlnID0gdGhpcy5idWlsZERheXMoZGF5cylcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIHRoaXMuaW5pdERlZmF1bHREYXRlKCk7XG5cbiAgICAgICAgdGhpcy5maW5kQ3NzQ2xhc3MoKTtcbiAgICAgICAgaWYgKHRoaXMuX2Q/LmNhbkJhY2t3YXJkc1NlbGVjdGVkKSB7XG4gICAgICAgICAgICB0aGlzLmJhY2t3YXJkc01vbnRoKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zY3JvbGxUb0RlZmF1bHREYXRlKCk7XG4gICAgfVxuXG4gICAgYnVpbGREYXlzKGl0ZW1zOiBhbnlbXSk6IERheUNvbmZpZ1tdIHtcbiAgICAgICAgY29uc3QgZGF5Q29uZmlnOiBEYXlDb25maWdbXSA9IFtdO1xuICAgICAgICBpZiAoaXRlbXMgJiYgaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGRheUNvbmZpZy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZTogbW9tZW50KGl0ZW0uY2hlY2tfaW4sICdZWVlZLU1NLUREJykudG9EYXRlKCksXG4gICAgICAgICAgICAgICAgICAgIG1hcmtlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGRlbWFuZExldmVsOiBpdGVtLmRlbWFuZFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRheUNvbmZpZztcbiAgICB9XG5cbiAgICBmaW5kQ3NzQ2xhc3MoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLl9kKSB7XG4gICAgICAgICAgICBjb25zdCB7IGNzc0NsYXNzIH0gPSB0aGlzLl9kO1xuICAgICAgICAgICAgaWYgKGNzc0NsYXNzKSB7XG4gICAgICAgICAgICAgICAgY3NzQ2xhc3Muc3BsaXQoJyAnKS5mb3JFYWNoKChfY2xhc3M6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoX2NsYXNzLnRyaW0oKSAhPT0gJycpIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgX2NsYXNzKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ2hhbmdlKGRhdGE6IGFueSk6IHZvaWQge1xuICAgICAgICBjb25zdCB7IHBpY2tNb2RlLCBhdXRvRG9uZSB9ID0gdGhpcy5fZDtcblxuICAgICAgICB0aGlzLmRhdGVzVGVtcCA9IGRhdGE7XG4gICAgICAgIHRoaXMucmVmLmRldGVjdENoYW5nZXMoKTtcblxuICAgICAgICBpZiAocGlja01vZGUgIT09IHBpY2tNb2Rlcy5NVUxUSSAmJiBhdXRvRG9uZSAmJiB0aGlzLmNhbkRvbmUoKSkge1xuICAgICAgICAgICAgdGhpcy5kb25lKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlcGFpbnRET00oKTtcbiAgICB9XG5cbiAgICBvbkNhbmNlbCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5tb2RhbEN0cmwuZGlzbWlzcyhudWxsLCAnY2FuY2VsJyk7XG4gICAgfVxuXG4gICAgZG9uZSgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgeyBwaWNrTW9kZSB9ID0gdGhpcy5fZDtcblxuICAgICAgICB0aGlzLm1vZGFsQ3RybC5kaXNtaXNzKHRoaXMuY2FsU3ZjLndyYXBSZXN1bHQodGhpcy5kYXRlc1RlbXAsIHBpY2tNb2RlKSwgJ2RvbmUnKTtcbiAgICB9XG5cbiAgICBjYW5Eb25lKCk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkodGhpcy5kYXRlc1RlbXApKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLl9kKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB7IHBpY2tNb2RlLCBkZWZhdWx0RW5kRGF0ZVRvU3RhcnREYXRlIH0gPSB0aGlzLl9kO1xuICAgICAgICBzd2l0Y2ggKHBpY2tNb2RlKSB7XG4gICAgICAgICAgICBjYXNlIHBpY2tNb2Rlcy5TSU5HTEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuICEhKHRoaXMuZGF0ZXNUZW1wWzBdICYmIHRoaXMuZGF0ZXNUZW1wWzBdLnRpbWUpO1xuICAgICAgICAgICAgY2FzZSBwaWNrTW9kZXMuUkFOR0U6XG4gICAgICAgICAgICAgICAgaWYgKGRlZmF1bHRFbmREYXRlVG9TdGFydERhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICEhKHRoaXMuZGF0ZXNUZW1wWzBdICYmIHRoaXMuZGF0ZXNUZW1wWzBdLnRpbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gISEodGhpcy5kYXRlc1RlbXBbMF0gJiYgdGhpcy5kYXRlc1RlbXBbMV0pICYmICEhKHRoaXMuZGF0ZXNUZW1wWzBdLnRpbWUgJiYgdGhpcy5kYXRlc1RlbXBbMV0udGltZSk7XG4gICAgICAgICAgICBjYXNlIHBpY2tNb2Rlcy5NVUxUSTpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRlc1RlbXAubGVuZ3RoID4gMCAmJiB0aGlzLmRhdGVzVGVtcC5ldmVyeShlID0+ICEhZSAmJiAhIWUudGltZSk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLmRhdGVzVGVtcCA9IFtudWxsLCBudWxsXTtcbiAgICB9XG5cbiAgICBjYW5DbGVhcigpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5kYXRlc1RlbXBbMF07XG4gICAgfVxuXG4gICAgbmV4dE1vbnRoKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbGVuID0gdGhpcy5jYWxlbmRhck1vbnRocy5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGZpbmFsID0gdGhpcy5jYWxlbmRhck1vbnRoc1tsZW4gLSAxXTtcbiAgICAgICAgY29uc3QgbmV4dFRpbWUgPSBtb21lbnQoZmluYWwub3JpZ2luYWwudGltZSlcbiAgICAgICAgICAgIC5hZGQoMSwgJ00nKVxuICAgICAgICAgICAgLnZhbHVlT2YoKTtcbiAgICAgICAgY29uc3QgcmFuZ2VFbmQgPSB0aGlzLl9kLnRvID8gbW9tZW50KHRoaXMuX2QudG8pLnN1YnRyYWN0KDEsICdNJykgOiAwO1xuXG4gICAgICAgIGlmIChsZW4gPD0gMCB8fCAocmFuZ2VFbmQgIT09IDAgJiYgbW9tZW50KGZpbmFsLm9yaWdpbmFsLnRpbWUpLmlzQWZ0ZXIocmFuZ2VFbmQpKSkge1xuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FsZW5kYXJNb250aHMucHVzaCguLi50aGlzLmNhbFN2Yy5jcmVhdGVNb250aHNCeVBlcmlvZChuZXh0VGltZSwgTlVNX09GX01PTlRIU19UT19DUkVBVEUsIHRoaXMuX2QpKTtcbiAgICAgICAgZXZlbnQudGFyZ2V0LmNvbXBsZXRlKCk7XG4gICAgICAgIHRoaXMucmVwYWludERPTSgpO1xuICAgIH1cblxuICAgIGJhY2t3YXJkc01vbnRoKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBmaXJzdCA9IHRoaXMuY2FsZW5kYXJNb250aHNbMF07XG5cbiAgICAgICAgaWYgKGZpcnN0Lm9yaWdpbmFsLnRpbWUgPD0gMCkge1xuICAgICAgICAgICAgdGhpcy5fZC5jYW5CYWNrd2FyZHNTZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZmlyc3RUaW1lID0gKHRoaXMuYWN0dWFsRmlyc3RUaW1lID0gbW9tZW50KGZpcnN0Lm9yaWdpbmFsLnRpbWUpXG4gICAgICAgICAgICAuc3VidHJhY3QoTlVNX09GX01PTlRIU19UT19DUkVBVEUsICdNJylcbiAgICAgICAgICAgIC52YWx1ZU9mKCkpO1xuXG4gICAgICAgIHRoaXMuY2FsZW5kYXJNb250aHMudW5zaGlmdCguLi50aGlzLmNhbFN2Yy5jcmVhdGVNb250aHNCeVBlcmlvZChmaXJzdFRpbWUsIE5VTV9PRl9NT05USFNfVE9fQ1JFQVRFLCB0aGlzLl9kKSk7XG4gICAgICAgIHRoaXMucmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgdGhpcy5yZXBhaW50RE9NKCk7XG4gICAgfVxuXG4gICAgc2Nyb2xsVG9EYXRlKGRhdGU6IERhdGUpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdERhdGVJbmRleCA9IHRoaXMuZmluZEluaXRNb250aE51bWJlcihkYXRlKTtcbiAgICAgICAgY29uc3QgbW9udGhFbGVtZW50ID0gdGhpcy5tb250aHNFbGU/Lm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bYG1vbnRoLSR7ZGVmYXVsdERhdGVJbmRleH1gXTtcbiAgICAgICAgY29uc3QgZG9tRWxlbVJlYWR5V2FpdFRpbWUgPSAzMDA7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZWZhdWx0RGF0ZU1vbnRoID0gbW9udGhFbGVtZW50ID8gbW9udGhFbGVtZW50Lm9mZnNldFRvcCA6IDA7XG5cbiAgICAgICAgICAgIGlmIChkZWZhdWx0RGF0ZUluZGV4ICE9PSAtMSAmJiBkZWZhdWx0RGF0ZU1vbnRoICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LnNjcm9sbEJ5UG9pbnQoMCwgZGVmYXVsdERhdGVNb250aCwgMTI4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgZG9tRWxlbVJlYWR5V2FpdFRpbWUpO1xuICAgIH1cblxuICAgIHNjcm9sbFRvRGVmYXVsdERhdGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2Nyb2xsVG9EYXRlKHRoaXMuX2QuZGVmYXVsdFNjcm9sbFRvKTtcbiAgICB9XG5cbiAgICBvblNjcm9sbCgkZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuX2Q/LmNhbkJhY2t3YXJkc1NlbGVjdGVkKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgeyBkZXRhaWwgfSA9ICRldmVudDtcblxuICAgICAgICBpZiAoZGV0YWlsLnNjcm9sbFRvcCA8PSAyMDAgJiYgZGV0YWlsLnZlbG9jaXR5WSA8IDAgJiYgdGhpcy5fc2Nyb2xsTG9jaykge1xuICAgICAgICAgICAgdGhpcy5jb250ZW50LmdldFNjcm9sbEVsZW1lbnQoKS50aGVuKChzY3JvbGxFbGVtOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zY3JvbGxMb2NrID0gITE7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBoZWlnaHRCZWZvcmVNb250aFByZXBlbmQgPSBzY3JvbGxFbGVtLnNjcm9sbEhlaWdodDtcbiAgICAgICAgICAgICAgICB0aGlzLmJhY2t3YXJkc01vbnRoKCk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhlaWdodEFmdGVyTW9udGhQcmVwZW5kID0gc2Nyb2xsRWxlbS5zY3JvbGxIZWlnaHQ7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LnNjcm9sbEJ5UG9pbnQoMCwgaGVpZ2h0QWZ0ZXJNb250aFByZXBlbmQgLSBoZWlnaHRCZWZvcmVNb250aFByZXBlbmQsIDApLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2Nyb2xsTG9jayA9ICEwO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LCAxODApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXBhaW50RE9NKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZW50LmdldFNjcm9sbEVsZW1lbnQoKS50aGVuKChzY3JvbGxFbGVtOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHNjcm9sbEVsZW0uc3R5bGUuekluZGV4ID0gJzInO1xuICAgICAgICAgICAgc2Nyb2xsRWxlbS5zdHlsZS56SW5kZXggPSAnaW5pdGlhbCc7XG4gICAgICAgICAgICBpZiAodGhpcy5tb250aHNFbGU/Lm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vbnRoc0VsZS5uYXRpdmVFbGVtZW50LnN0eWxlLnpJbmRleCA9ICcyJztcbiAgICAgICAgICAgICAgICB0aGlzLm1vbnRoc0VsZS5uYXRpdmVFbGVtZW50LnN0eWxlLnpJbmRleCA9ICdpbml0aWFsJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZmluZEluaXRNb250aE51bWJlcihkYXRlOiBEYXRlKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IHN0YXJ0RGF0ZSA9IHRoaXMuYWN0dWFsRmlyc3RUaW1lID8gbW9tZW50KHRoaXMuYWN0dWFsRmlyc3RUaW1lKSA6IG1vbWVudCh0aGlzLl9kLmZyb20pO1xuICAgICAgICBjb25zdCBkZWZhdWx0U2Nyb2xsVG8gPSBtb21lbnQoZGF0ZSk7XG4gICAgICAgIGNvbnN0IGlzQWZ0ZXI6IGJvb2xlYW4gPSBkZWZhdWx0U2Nyb2xsVG8uaXNBZnRlcihzdGFydERhdGUpO1xuICAgICAgICBpZiAoIWlzQWZ0ZXIpIHJldHVybiAtMTtcblxuICAgICAgICBpZiAodGhpcy5zaG93WWVhclBpY2tlcikge1xuICAgICAgICAgICAgc3RhcnREYXRlID0gbW9tZW50KG5ldyBEYXRlKHRoaXMueWVhciwgMCwgMSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRlZmF1bHRTY3JvbGxUby5kaWZmKHN0YXJ0RGF0ZSwgJ21vbnRoJyk7XG4gICAgfVxuXG4gICAgZ2V0RGF5VGltZShkYXRlOiBhbnkpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gbW9tZW50KG1vbWVudChkYXRlKS5mb3JtYXQoJ1lZWVktTU0tREQnKSkudmFsdWVPZigpO1xuICAgIH1cblxuICAgIG1vbnRoRm9ybWF0KGRhdGU6IGFueSk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBtb21lbnQoZGF0ZSkuZm9ybWF0KHRoaXMuX2QubW9udGhGb3JtYXQucmVwbGFjZSgveS9nLCAnWScpKTtcbiAgICB9XG5cbiAgICBnZXREYXlGb3JtYXR0ZWQoZGF0YTogYW55KSB7XG4gICAgICAgIGlmICghZGF0YSkgeyByZXR1cm4gbnVsbDsgfVxuICAgICAgICByZXR1cm4gbW9tZW50KGRhdGEudGltZSkuZm9ybWF0KCdkZGQsIE1NTSBEbycpO1xuICAgIH1cblxuICAgIHRyYWNrQnlJbmRleChpbmRleDogbnVtYmVyLCBtb21lbnREYXRlOiBDYWxlbmRhck1vbnRoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIG1vbWVudERhdGUub3JpZ2luYWwgPyBtb21lbnREYXRlLm9yaWdpbmFsLnRpbWUgOiBpbmRleDtcbiAgICB9XG59XG4iXX0=