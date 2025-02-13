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
function CalendarDemandModal_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0._d == null ? null : ctx_r0._d.closeLabel);
} }
function CalendarDemandModal_ion_icon_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ion-icon", 12);
} }
function CalendarDemandModal_ion_row_9_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ion-content", 20);
    i0.ɵɵtext(1, "Based on the most frequent searches per day");
    i0.ɵɵelementEnd();
} }
function CalendarDemandModal_ion_row_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ion-row", 13)(1, "div", 14);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 15);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 16);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "ion-button", 17);
    i0.ɵɵelement(8, "ion-icon", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "ion-popover", 19);
    i0.ɵɵtemplate(10, CalendarDemandModal_ion_row_9_ng_template_10_Template, 2, 0, "ng-template");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.cheaperText, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.averageText, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.higherText, " ");
} }
function CalendarDemandModal_ion_calendar_week_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ion-calendar-week", 21);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("color", ctx_r0._d.color)("weekArray", ctx_r0._d.weekdays)("weekStart", ctx_r0._d.weekStart);
} }
function CalendarDemandModal_div_12_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 23)(1, "h4", 24);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "ion-calendar-month", 25);
    i0.ɵɵlistener("change", function CalendarDemandModal_div_12_ng_template_2_Template_ion_calendar_month_change_3_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.onChange($event)); });
    i0.ɵɵtwoWayListener("ngModelChange", function CalendarDemandModal_div_12_ng_template_2_Template_ion_calendar_month_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.datesTemp, $event) || (ctx_r0.datesTemp = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const month_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵattribute("id", "month-" + i_r4);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.monthFormat(month_r3.original == null ? null : month_r3.original.date));
    i0.ɵɵadvance();
    i0.ɵɵproperty("month", month_r3)("pickMode", ctx_r0._d.pickMode)("isSaveHistory", ctx_r0._d.isSaveHistory)("id", ctx_r0._d.id)("color", ctx_r0._d.color)("maxMultiDates", ctx_r0._d.maxMultiDates);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.datesTemp);
} }
function CalendarDemandModal_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", null, 0);
    i0.ɵɵtemplate(2, CalendarDemandModal_div_12_ng_template_2_Template, 4, 9, "ng-template", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r0.calendarMonths)("ngForTrackBy", ctx_r0.trackByIndex);
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
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassMap("dates-toolbar");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.getDayFormatted(ctx_r0.datesTemp[0]) || "Start Date", " ");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.getDayFormatted(ctx_r0.datesTemp[1]) || "End Date", " ");
} }
function CalendarDemandModal_ion_button_18_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0._d == null ? null : ctx_r0._d.doneLabel);
} }
function CalendarDemandModal_ion_button_18_ion_icon_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ion-icon", 35);
} }
function CalendarDemandModal_ion_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ion-button", 33);
    i0.ɵɵlistener("click", function CalendarDemandModal_ion_button_18_Template_ion_button_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.done()); });
    i0.ɵɵtemplate(1, CalendarDemandModal_ion_button_18_span_1_Template, 2, 1, "span", 3)(2, CalendarDemandModal_ion_button_18_ion_icon_2_Template, 1, 0, "ion-icon", 34);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", !ctx_r0.canDone());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r0._d == null ? null : ctx_r0._d.doneLabel) !== "" && !(ctx_r0._d == null ? null : ctx_r0._d.doneIcon));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0._d == null ? null : ctx_r0._d.doneIcon);
} }
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
    static { this.ɵfac = function CalendarDemandModal_Factory(t) { return new (t || CalendarDemandModal)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.ModalController), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.CalendarService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CalendarDemandModal, selectors: [["ion-calendar-demand-modal"]], viewQuery: function CalendarDemandModal_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(IonContent, 7);
            i0.ɵɵviewQuery(_c0, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.content = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.monthsEle = _t.first);
        } }, hostVars: 2, hostBindings: function CalendarDemandModal_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("ion-page", ctx.ionPage);
        } }, inputs: { options: "options", demandCalendarService: "demandCalendarService", latitude: "latitude", longitude: "longitude", cheaperText: "cheaperText", averageText: "averageText", higherText: "higherText" }, ngContentSelectors: _c2, decls: 19, vars: 13, consts: [["months", ""], ["slot", "secondary"], ["type", "button", "slot", "icon-only", "fill", "clear", 1, "primary", 3, "click"], [4, "ngIf"], ["name", "close", 4, "ngIf"], ["class", "calendar-demand-indicator-container ion-padding-top", 4, "ngIf"], [3, "color", "weekArray", "weekStart", 4, "ngIf"], [1, "calendar-page", 3, "ionScroll", "scrollEvents", "ngClass"], ["class", "loading-container", 4, "ngIf"], ["threshold", "25%", 3, "ionInfinite"], ["lines", "none", "class", "ion-margin-vertical", "no-border", "", 3, "class", 4, "ngIf"], ["expand", "full", 3, "disabled", "click", 4, "ngIf"], ["name", "close"], [1, "calendar-demand-indicator-container", "ion-padding-top"], [1, "calendar-demand-indicator", "calendar-demand-indicator-cheaper"], [1, "calendar-demand-indicator", "calendar-demand-indicator-average"], [1, "calendar-demand-indicator", "calendar-demand-indicator-higher"], ["shape", "round", "fill", "clear", "id", "click-trigger", 1, "ion-no-padding"], ["name", "information-circle-outline"], ["trigger", "click-trigger", "triggerAction", "click"], [1, "ion-padding"], [3, "color", "weekArray", "weekStart"], ["ngFor", "", 3, "ngForOf", "ngForTrackBy"], [1, "month-box"], [1, "month-title"], [3, "change", "ngModelChange", "month", "pickMode", "isSaveHistory", "id", "color", "maxMultiDates", "ngModel"], [1, "loading-container"], ["name", "crescent", "color", "primary", 1, "loading-indicator"], ["lines", "none", "no-border", "", 1, "ion-margin-vertical"], ["size", "4", 1, "start-date", "ion-text-nowrap"], ["size", "4", 1, "ion-text-center"], ["name", "arrow-forward-outline"], ["size", "4", 1, "end-date", "ion-text-right", "ion-text-nowrap"], ["expand", "full", 3, "click", "disabled"], ["name", "checkmark", 4, "ngIf"], ["name", "checkmark"]], template: function CalendarDemandModal_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c1);
            i0.ɵɵelementStart(0, "ion-header")(1, "ion-toolbar")(2, "ion-buttons", 1)(3, "ion-button", 2);
            i0.ɵɵlistener("click", function CalendarDemandModal_Template_ion_button_click_3_listener() { return ctx.onCancel(); });
            i0.ɵɵtemplate(4, CalendarDemandModal_span_4_Template, 2, 1, "span", 3)(5, CalendarDemandModal_ion_icon_5_Template, 1, 0, "ion-icon", 4);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(6, "ion-title");
            i0.ɵɵtext(7);
            i0.ɵɵelementEnd()();
            i0.ɵɵprojection(8);
            i0.ɵɵtemplate(9, CalendarDemandModal_ion_row_9_Template, 11, 3, "ion-row", 5)(10, CalendarDemandModal_ion_calendar_week_10_Template, 1, 3, "ion-calendar-week", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "ion-content", 7);
            i0.ɵɵlistener("ionScroll", function CalendarDemandModal_Template_ion_content_ionScroll_11_listener($event) { return ctx.onScroll($event); });
            i0.ɵɵtemplate(12, CalendarDemandModal_div_12_Template, 3, 2, "div", 3)(13, CalendarDemandModal_div_13_Template, 2, 0, "div", 8);
            i0.ɵɵelementStart(14, "ion-infinite-scroll", 9);
            i0.ɵɵlistener("ionInfinite", function CalendarDemandModal_Template_ion_infinite_scroll_ionInfinite_14_listener($event) { return ctx.nextMonth($event); });
            i0.ɵɵelement(15, "ion-infinite-scroll-content");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(16, "ion-footer");
            i0.ɵɵtemplate(17, CalendarDemandModal_ion_row_17_Template, 7, 4, "ion-row", 10)(18, CalendarDemandModal_ion_button_18_Template, 3, 3, "ion-button", 11);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", (ctx._d == null ? null : ctx._d.closeLabel) !== "" && !(ctx._d == null ? null : ctx._d.closeIcon));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx._d == null ? null : ctx._d.closeIcon);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("", ctx._d == null ? null : ctx._d.title, " ");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !ctx.loading);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx._d);
            i0.ɵɵadvance();
            i0.ɵɵproperty("scrollEvents", true)("ngClass", i0.ɵɵpureFunction1(11, _c3, (ctx._d == null ? null : ctx._d.pickMode) === "multi"));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.loading && ctx._d);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.loading);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", (ctx._d == null ? null : ctx._d.pickMode) === "range");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !(ctx._d == null ? null : ctx._d.autoDone));
        } }, dependencies: [i3.NgClass, i3.NgForOf, i3.NgIf, i1.IonButton, i1.IonButtons, i1.IonCol, i1.IonContent, i1.IonFooter, i1.IonHeader, i1.IonIcon, i1.IonInfiniteScroll, i1.IonInfiniteScrollContent, i1.IonRow, i1.IonSpinner, i1.IonTitle, i1.IonToolbar, i1.IonPopover, i4.NgControlStatus, i4.NgModel, i5.CalendarWeekComponent, i6.MonthComponent], styles: ["[_nghost-%COMP%]   ion-select[_ngcontent-%COMP%]{max-width:unset}[_nghost-%COMP%]   ion-select[_ngcontent-%COMP%]   .select-icon[_ngcontent-%COMP%] > .select-icon-inner[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-select[_ngcontent-%COMP%]   .select-text[_ngcontent-%COMP%]{color:#fff!important}[_nghost-%COMP%]   ion-select.select-ios[_ngcontent-%COMP%]{max-width:unset}[_nghost-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-button.md[_ngcontent-%COMP%]{color:var(--ion-color-primary)}[_nghost-%COMP%]   .dates-toolbar[_ngcontent-%COMP%]{--background: transparent;padding:0 1rem}[_nghost-%COMP%]   .dates-toolbar.primary[_ngcontent-%COMP%]{--background: var(--ion-color-primary)}[_nghost-%COMP%]   .dates-toolbar.secondary[_ngcontent-%COMP%]{--background: var(--ion-color-secondary)}[_nghost-%COMP%]   .dates-toolbar.danger[_ngcontent-%COMP%]{--background: var(--ion-color-danger)}[_nghost-%COMP%]   .dates-toolbar.dark[_ngcontent-%COMP%]{--background: var(--ion-color-dark)}[_nghost-%COMP%]   .dates-toolbar.light[_ngcontent-%COMP%]{--background: var(--ion-color-light)}[_nghost-%COMP%]   .dates-toolbar.transparent[_ngcontent-%COMP%]{--background: transparent}[_nghost-%COMP%]   .dates-toolbar.toolbar-md[_ngcontent-%COMP%]{min-height:44px}[_nghost-%COMP%]   .ios.dates-toolbar[_ngcontent-%COMP%]{padding-top:1rem}[_nghost-%COMP%]   .start-date[_ngcontent-%COMP%]{padding-left:.5rem}[_nghost-%COMP%]   .end-date[_ngcontent-%COMP%]{margin-right:-.5rem}[_nghost-%COMP%]   .calendar-page[_ngcontent-%COMP%]{background-color:#fbfbfb}[_nghost-%COMP%]   .month-box[_ngcontent-%COMP%]{display:inline-block;width:100%;padding-bottom:1em}[_nghost-%COMP%]   #month-0[_ngcontent-%COMP%]{padding-top:1rem}[_nghost-%COMP%]   .month-title[_ngcontent-%COMP%]{padding-left:1rem;text-align:left;color:#363749}[_nghost-%COMP%]   h4[_ngcontent-%COMP%]{font-weight:400;font-size:1.1rem;display:block;text-align:center;margin:1rem 0 0;color:#929292}body[data-dark-mode=true]   [_nghost-%COMP%]   .month-title[_ngcontent-%COMP%]{color:#fff}body[data-dark-mode=true]   [_nghost-%COMP%]   .dates-toolbar[_ngcontent-%COMP%]{color:#fff}.calendar-demand-indicator-container[_ngcontent-%COMP%]{justify-content:center;background-color:var(--ion-toolbar-background, var(--ion-color-step-50, #f7f7f7))}.calendar-demand-indicator[_ngcontent-%COMP%]{padding:.25rem;margin:auto .25rem;border-radius:5px}.calendar-demand-indicator-cheaper[_ngcontent-%COMP%]{background-color:#6cd395}.calendar-demand-indicator-average[_ngcontent-%COMP%]{background-color:#f2c666}.calendar-demand-indicator-higher[_ngcontent-%COMP%]{background-color:#f58787}.loading-container[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;justify-content:center;align-items:center}.loading-indicator[_ngcontent-%COMP%]{width:5rem;height:5rem}", "[_nghost-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{border:none!important}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CalendarDemandModal, [{
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CalendarDemandModal, { className: "CalendarDemandModal" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItZGVtYW5kLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9jYWxlbmRhci1kZW1hbmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsU0FBUyxFQUNULFVBQVUsRUFDVixpQkFBaUIsRUFDakIsU0FBUyxFQUVULEtBQUssRUFFTCxXQUFXLEdBQ2QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDL0QsT0FBTyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBQzVCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxXQUFXLENBQUM7Ozs7Ozs7Ozs7Ozs7SUFhbEIsNEJBQXNEO0lBQUEsWUFBb0I7SUFBQSxpQkFBTzs7O0lBQTNCLGNBQW9CO0lBQXBCLHFFQUFvQjs7O0lBQzFFLCtCQUF3RDs7O0lBc0J4RCx1Q0FBaUM7SUFBQSwyREFBMkM7SUFBQSxpQkFBYzs7O0lBZmxHLEFBREosbUNBQXNGLGNBQ1Q7SUFDckUsWUFDSjtJQUFBLGlCQUFNO0lBQ04sK0JBQXlFO0lBQ3JFLFlBQ0o7SUFBQSxpQkFBTTtJQUNOLCtCQUF3RTtJQUNwRSxZQUNKO0lBQUEsaUJBQU07SUFFTixzQ0FBaUY7SUFDN0UsK0JBQXVEO0lBQzNELGlCQUFhO0lBQ2IsdUNBQTJEO0lBQ3ZELDZGQUFhO0lBSXJCLEFBREksaUJBQWMsRUFDUjs7O0lBakJGLGVBQ0o7SUFESSxtREFDSjtJQUVJLGVBQ0o7SUFESSxtREFDSjtJQUVJLGVBQ0o7SUFESSxrREFDSjs7O0lBV0osd0NBSW9COzs7SUFEaEIsQUFEQSxBQURBLHVDQUFrQixpQ0FDTyxrQ0FDQzs7OztJQVlsQixBQURKLCtCQUFn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QUFjO1lBb0JoRSxjQUFRO1lBQVIsNkJBQVE7WUFRNUIsY0FBcUI7WUFDckIsQUFEQSxtQ0FBcUIsK0ZBQ29DO1lBRzNDLGNBQW9CO1lBQXBCLDZDQUFvQjtZQWlCNUIsY0FBYTtZQUFiLGtDQUFhO1lBV1QsZUFBOEI7WUFBOUIsNEVBQThCO1lBV2YsY0FBbUI7WUFBbkIsaUVBQW1COzs7aUZBT3ZDLG1CQUFtQjtjQTdGL0IsU0FBUzsyQkFDSSwyQkFBMkIsWUFFM0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Rlg7K0pBSUMsT0FBTztrQkFETixTQUFTO21CQUFDLFVBQVUsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFHdkMsU0FBUztrQkFEUixTQUFTO21CQUFDLFFBQVEsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFJckMsT0FBTztrQkFETixXQUFXO21CQUFDLGdCQUFnQjtZQUk3QixPQUFPO2tCQUROLEtBQUs7WUFHRyxxQkFBcUI7a0JBQTdCLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSzs7a0ZBakJHLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQ29tcG9uZW50LFxuICAgIFZpZXdDaGlsZCxcbiAgICBFbGVtZW50UmVmLFxuICAgIENoYW5nZURldGVjdG9yUmVmLFxuICAgIFJlbmRlcmVyMixcbiAgICBPbkluaXQsXG4gICAgSW5wdXQsXG4gICAgQWZ0ZXJWaWV3SW5pdCxcbiAgICBIb3N0QmluZGluZyxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNb2RhbENvbnRyb2xsZXIsIElvbkNvbnRlbnQgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5pbXBvcnQgeyBDYWxlbmRhckRheSwgQ2FsZW5kYXJNb250aCwgQ2FsZW5kYXJNb2RhbE9wdGlvbnMsIERheUNvbmZpZyB9IGZyb20gJy4uL2NhbGVuZGFyLm1vZGVsJztcbmltcG9ydCB7IENhbGVuZGFyU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2NhbGVuZGFyLnNlcnZpY2UnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgcGlja01vZGVzIH0gZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCBEZW1hbmRDYWxlbmRhclNlcnZpY2UgZnJvbSAnLi4vbW9kZWxzL2RlbWFuLWNhbGVuZGFyLXNlcnZpY2UuSW50ZXJmYWNlJztcblxuY29uc3QgTlVNX09GX01PTlRIU19UT19DUkVBVEUgPSAzO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2lvbi1jYWxlbmRhci1kZW1hbmQtbW9kYWwnLFxuICAgIHN0eWxlVXJsczogWycuL2NhbGVuZGFyLm1vZGFsLnNjc3MnLCAnLi9jYWxlbmRhci1kZW1hbmQuY29tcG9uZW50LnNjc3MnXSxcbiAgICB0ZW1wbGF0ZTogYFxuICAgIDxpb24taGVhZGVyPlxuICAgICAgICA8aW9uLXRvb2xiYXI+XG4gICAgICAgICAgICA8aW9uLWJ1dHRvbnMgc2xvdD1cInNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgIDxpb24tYnV0dG9uIHR5cGU9J2J1dHRvbicgc2xvdD1cImljb24tb25seVwiIGZpbGw9XCJjbGVhclwiIGNsYXNzPVwicHJpbWFyeVwiIChjbGljayk9XCJvbkNhbmNlbCgpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiX2Q/LmNsb3NlTGFiZWwgIT09ICcnICYmICFfZD8uY2xvc2VJY29uXCI+e3sgX2Q/LmNsb3NlTGFiZWwgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxpb24taWNvbiAqbmdJZj1cIl9kPy5jbG9zZUljb25cIiBuYW1lPVwiY2xvc2VcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgICAgIDwvaW9uLWJ1dHRvbj5cbiAgICAgICAgICAgIDwvaW9uLWJ1dHRvbnM+XG4gICAgICAgICAgICA8aW9uLXRpdGxlPnt7IF9kPy50aXRsZSB9fSA8L2lvbi10aXRsZT5cbiAgICAgICAgPC9pb24tdG9vbGJhcj5cbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3N1Yi1oZWFkZXJdXCI+PC9uZy1jb250ZW50PlxuICAgICAgICA8aW9uLXJvdyBjbGFzcz1cImNhbGVuZGFyLWRlbWFuZC1pbmRpY2F0b3ItY29udGFpbmVyIGlvbi1wYWRkaW5nLXRvcFwiICpuZ0lmPVwiIWxvYWRpbmdcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYWxlbmRhci1kZW1hbmQtaW5kaWNhdG9yIGNhbGVuZGFyLWRlbWFuZC1pbmRpY2F0b3ItY2hlYXBlclwiPlxuICAgICAgICAgICAgICAgIHt7IGNoZWFwZXJUZXh0IH19XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYWxlbmRhci1kZW1hbmQtaW5kaWNhdG9yIGNhbGVuZGFyLWRlbWFuZC1pbmRpY2F0b3ItYXZlcmFnZVwiPlxuICAgICAgICAgICAgICAgIHt7IGF2ZXJhZ2VUZXh0IH19XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYWxlbmRhci1kZW1hbmQtaW5kaWNhdG9yIGNhbGVuZGFyLWRlbWFuZC1pbmRpY2F0b3ItaGlnaGVyXCI+XG4gICAgICAgICAgICAgICAge3sgaGlnaGVyVGV4dCB9fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxpb24tYnV0dG9uIHNoYXBlPVwicm91bmRcIiBmaWxsPVwiY2xlYXJcIiBpZD1cImNsaWNrLXRyaWdnZXJcIiBjbGFzcz1cImlvbi1uby1wYWRkaW5nXCI+XG4gICAgICAgICAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJpbmZvcm1hdGlvbi1jaXJjbGUtb3V0bGluZVwiPjwvaW9uLWljb24+XG4gICAgICAgICAgICA8L2lvbi1idXR0b24+ICAgICAgICAgICAgXG4gICAgICAgICAgICA8aW9uLXBvcG92ZXIgdHJpZ2dlcj1cImNsaWNrLXRyaWdnZXJcIiB0cmlnZ2VyQWN0aW9uPVwiY2xpY2tcIj5cbiAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgIDxpb24tY29udGVudCBjbGFzcz1cImlvbi1wYWRkaW5nXCI+QmFzZWQgb24gdGhlIG1vc3QgZnJlcXVlbnQgc2VhcmNoZXMgcGVyIGRheTwvaW9uLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvaW9uLXBvcG92ZXI+XG4gICAgICAgIDwvaW9uLXJvdz5cbiAgICAgICAgPGlvbi1jYWxlbmRhci13ZWVrICpuZ0lmPVwiX2RcIlxuICAgICAgICAgICAgW2NvbG9yXT1cIl9kLmNvbG9yXCJcbiAgICAgICAgICAgIFt3ZWVrQXJyYXldPVwiX2Qud2Vla2RheXNcIlxuICAgICAgICAgICAgW3dlZWtTdGFydF09XCJfZC53ZWVrU3RhcnRcIj5cbiAgICAgICAgPC9pb24tY2FsZW5kYXItd2Vlaz5cbiAgICA8L2lvbi1oZWFkZXI+XG5cbiAgICA8aW9uLWNvbnRlbnQgY2xhc3M9XCJjYWxlbmRhci1wYWdlXCJcbiAgICAgICAgW3Njcm9sbEV2ZW50c109XCJ0cnVlXCJcbiAgICAgICAgW25nQ2xhc3NdPVwieydtdWx0aS1zZWxlY3Rpb24nOiBfZD8ucGlja01vZGUgPT09ICdtdWx0aSd9XCJcbiAgICAgICAgKGlvblNjcm9sbCk9XCJvblNjcm9sbCgkZXZlbnQpXCI+XG5cbiAgICAgICAgPGRpdiAjbW9udGhzICpuZ0lmPVwiIWxvYWRpbmcgJiYgX2RcIj5cbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBuZ0ZvciBsZXQtbW9udGggW25nRm9yT2ZdPVwiY2FsZW5kYXJNb250aHNcIiBbbmdGb3JUcmFja0J5XT1cInRyYWNrQnlJbmRleFwiIGxldC1pPVwiaW5kZXhcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9udGgtYm94XCIgW2F0dHIuaWRdPVwiJ21vbnRoLScgKyBpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cIm1vbnRoLXRpdGxlXCI+e3sgbW9udGhGb3JtYXQobW9udGgub3JpZ2luYWw/LmRhdGUpIH19PC9oND5cbiAgICAgICAgICAgICAgICAgICAgPGlvbi1jYWxlbmRhci1tb250aCBbbW9udGhdPVwibW9udGhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW3BpY2tNb2RlXT1cIl9kLnBpY2tNb2RlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtpc1NhdmVIaXN0b3J5XT1cIl9kLmlzU2F2ZUhpc3RvcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2lkXT1cIl9kLmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtjb2xvcl09XCJfZC5jb2xvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbbWF4TXVsdGlEYXRlc109XCJfZC5tYXhNdWx0aURhdGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjaGFuZ2UpPVwib25DaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImRhdGVzVGVtcFwiPlxuICAgICAgICAgICAgICAgICAgICA8L2lvbi1jYWxlbmRhci1tb250aD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgKm5nSWY9XCJsb2FkaW5nXCIgY2xhc3M9XCJsb2FkaW5nLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGlvbi1zcGlubmVyIG5hbWU9XCJjcmVzY2VudFwiIGNvbG9yPVwicHJpbWFyeVwiIGNsYXNzPVwibG9hZGluZy1pbmRpY2F0b3JcIj48L2lvbi1zcGlubmVyPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8aW9uLWluZmluaXRlLXNjcm9sbCB0aHJlc2hvbGQ9XCIyNSVcIiAoaW9uSW5maW5pdGUpPVwibmV4dE1vbnRoKCRldmVudClcIj5cbiAgICAgICAgICAgIDxpb24taW5maW5pdGUtc2Nyb2xsLWNvbnRlbnQ+PC9pb24taW5maW5pdGUtc2Nyb2xsLWNvbnRlbnQ+XG4gICAgICAgIDwvaW9uLWluZmluaXRlLXNjcm9sbD5cblxuICAgIDwvaW9uLWNvbnRlbnQ+XG5cbiAgICA8aW9uLWZvb3Rlcj5cbiAgICAgICAgPGlvbi1yb3cgKm5nSWY9XCJfZD8ucGlja01vZGUgPT09ICdyYW5nZSdcIiBsaW5lcz1cIm5vbmVcIiBjbGFzcz1cImlvbi1tYXJnaW4tdmVydGljYWxcIiBbY2xhc3NdPVwiJ2RhdGVzLXRvb2xiYXInXCIgbm8tYm9yZGVyPlxuICAgICAgICAgICAgPGlvbi1jb2wgc2l6ZT1cIjRcIiBjbGFzcz1cInN0YXJ0LWRhdGUgaW9uLXRleHQtbm93cmFwXCI+XG4gICAgICAgICAgICAgICAge3sgZ2V0RGF5Rm9ybWF0dGVkKGRhdGVzVGVtcFswXSkgfHwgJ1N0YXJ0IERhdGUnIH19XG4gICAgICAgICAgICA8L2lvbi1jb2w+XG4gICAgICAgICAgICA8aW9uLWNvbCBzaXplPVwiNFwiIGNsYXNzPVwiaW9uLXRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJhcnJvdy1mb3J3YXJkLW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgPC9pb24tY29sPlxuICAgICAgICAgICAgPGlvbi1jb2wgc2l6ZT1cIjRcIiBjbGFzcz1cImVuZC1kYXRlIGlvbi10ZXh0LXJpZ2h0IGlvbi10ZXh0LW5vd3JhcFwiPlxuICAgICAgICAgICAgICAgIHt7IGdldERheUZvcm1hdHRlZChkYXRlc1RlbXBbMV0pIHx8ICdFbmQgRGF0ZScgfX1cbiAgICAgICAgICAgIDwvaW9uLWNvbD5cbiAgICAgICAgPC9pb24tcm93PlxuICAgICAgPGlvbi1idXR0b24gZXhwYW5kPVwiZnVsbFwiICpuZ0lmPVwiIV9kPy5hdXRvRG9uZVwiIFtkaXNhYmxlZF09XCIhY2FuRG9uZSgpXCIgKGNsaWNrKT1cImRvbmUoKVwiPlxuICAgICAgICA8c3BhbiAqbmdJZj1cIl9kPy5kb25lTGFiZWwgIT09ICcnICYmICFfZD8uZG9uZUljb25cIj57eyBfZD8uZG9uZUxhYmVsIH19PC9zcGFuPlxuICAgICAgICA8aW9uLWljb24gKm5nSWY9XCJfZD8uZG9uZUljb25cIiBuYW1lPVwiY2hlY2ttYXJrXCI+PC9pb24taWNvbj5cbiAgICAgIDwvaW9uLWJ1dHRvbj5cbiAgICA8L2lvbi1mb290ZXI+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyRGVtYW5kTW9kYWwgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICAgIEBWaWV3Q2hpbGQoSW9uQ29udGVudCwgeyBzdGF0aWM6IHRydWUgfSlcbiAgICBjb250ZW50OiBJb25Db250ZW50IHwgYW55O1xuICAgIEBWaWV3Q2hpbGQoJ21vbnRocycsIHsgc3RhdGljOiB0cnVlIH0pXG4gICAgbW9udGhzRWxlOiBFbGVtZW50UmVmIHwgYW55O1xuXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pb24tcGFnZScpXG4gICAgaW9uUGFnZSA9IHRydWU7XG5cbiAgICBASW5wdXQoKVxuICAgIG9wdGlvbnM6IENhbGVuZGFyTW9kYWxPcHRpb25zIHwgYW55O1xuXG4gICAgQElucHV0KCkgZGVtYW5kQ2FsZW5kYXJTZXJ2aWNlOiBEZW1hbmRDYWxlbmRhclNlcnZpY2UgfCBudWxsID0gbnVsbDtcbiAgICBASW5wdXQoKSBsYXRpdHVkZTogc3RyaW5nID0gJyc7XG4gICAgQElucHV0KCkgbG9uZ2l0dWRlOiBzdHJpbmcgPSAnJztcbiAgICBASW5wdXQoKSBjaGVhcGVyVGV4dDogc3RyaW5nID0gJ0NoZWFwZXInO1xuICAgIEBJbnB1dCgpIGF2ZXJhZ2VUZXh0OiBzdHJpbmcgPSAnQXZlcmFnZSc7XG4gICAgQElucHV0KCkgaGlnaGVyVGV4dDogc3RyaW5nID0gJ0hpZ2hlcic7XG5cbiAgICBsb2FkaW5nOiBib29sZWFuID0gdHJ1ZTtcbiAgICBkYXRlc1RlbXA6IEFycmF5PENhbGVuZGFyRGF5PiB8IGFueSA9IFtudWxsLCBudWxsXTtcbiAgICBjYWxlbmRhck1vbnRoczogQXJyYXk8Q2FsZW5kYXJNb250aD4gfCBhbnk7XG4gICAgc3RlcDogbnVtYmVyIHwgYW55O1xuICAgIHNob3dZZWFyUGlja2VyOiBib29sZWFuIHwgYW55O1xuICAgIHllYXI6IG51bWJlciB8IGFueTtcbiAgICB5ZWFyczogQXJyYXk8bnVtYmVyPiB8IGFueTtcbiAgICBfc2Nyb2xsTG9jayA9IHRydWU7XG4gICAgX2Q6IGFueTtcbiAgICBhY3R1YWxGaXJzdFRpbWU6IG51bWJlciB8IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICBwdWJsaWMgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIHB1YmxpYyBtb2RhbEN0cmw6IE1vZGFsQ29udHJvbGxlcixcbiAgICAgICAgcHVibGljIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgIHB1YmxpYyBjYWxTdmM6IENhbGVuZGFyU2VydmljZVxuICAgICkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pbml0RGVtYW5kQ2FsZW5kYXIoKTtcbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG5cbiAgICB9XG5cbiAgICBpbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9kID0gdGhpcy5jYWxTdmMuc2FmZU9wdCh0aGlzLm9wdGlvbnMpO1xuICAgICAgICB0aGlzLl9kLnNob3dBZGphY2VudE1vbnRoRGF5ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3RlcCA9IHRoaXMuX2Quc3RlcDtcbiAgICAgICAgaWYgKHRoaXMuc3RlcCA8IHRoaXMuY2FsU3ZjLkRFRkFVTFRfU1RFUCkge1xuICAgICAgICAgICAgdGhpcy5zdGVwID0gdGhpcy5jYWxTdmMuREVGQVVMVF9TVEVQO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWxlbmRhck1vbnRocyA9IHRoaXMuY2FsU3ZjLmNyZWF0ZU1vbnRoc0J5UGVyaW9kKFxuICAgICAgICAgICAgbW9tZW50KHRoaXMuX2QuZnJvbSkudmFsdWVPZigpLFxuICAgICAgICAgICAgdGhpcy5maW5kSW5pdE1vbnRoTnVtYmVyKHRoaXMuX2QuZGVmYXVsdFNjcm9sbFRvKSArIHRoaXMuc3RlcCxcbiAgICAgICAgICAgIHRoaXMuX2RcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBpbml0RGVmYXVsdERhdGUoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHsgcGlja01vZGUsIGRlZmF1bHREYXRlLCBkZWZhdWx0RGF0ZVJhbmdlLCBkZWZhdWx0RGF0ZXMgfSA9IHRoaXMuX2Q7XG4gICAgICAgIHN3aXRjaCAocGlja01vZGUpIHtcbiAgICAgICAgICAgIGNhc2UgcGlja01vZGVzLlNJTkdMRTpcbiAgICAgICAgICAgICAgICBpZiAoZGVmYXVsdERhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRlc1RlbXBbMF0gPSB0aGlzLmNhbFN2Yy5jcmVhdGVDYWxlbmRhckRheSh0aGlzLmdldERheVRpbWUoZGVmYXVsdERhdGUpLCB0aGlzLl9kKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHBpY2tNb2Rlcy5SQU5HRTpcbiAgICAgICAgICAgICAgICBpZiAoZGVmYXVsdERhdGVSYW5nZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGVmYXVsdERhdGVSYW5nZS5mcm9tKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGVzVGVtcFswXSA9IHRoaXMuY2FsU3ZjLmNyZWF0ZUNhbGVuZGFyRGF5KHRoaXMuZ2V0RGF5VGltZShkZWZhdWx0RGF0ZVJhbmdlLmZyb20pLCB0aGlzLl9kKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoZGVmYXVsdERhdGVSYW5nZS50bykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRlc1RlbXBbMV0gPSB0aGlzLmNhbFN2Yy5jcmVhdGVDYWxlbmRhckRheSh0aGlzLmdldERheVRpbWUoZGVmYXVsdERhdGVSYW5nZS50byksIHRoaXMuX2QpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBwaWNrTW9kZXMuTVVMVEk6XG4gICAgICAgICAgICAgICAgaWYgKGRlZmF1bHREYXRlcyAmJiBkZWZhdWx0RGF0ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0ZXNUZW1wID0gZGVmYXVsdERhdGVzLm1hcCgoZTogYW55KSA9PiB0aGlzLmNhbFN2Yy5jcmVhdGVDYWxlbmRhckRheSh0aGlzLmdldERheVRpbWUoZSksIHRoaXMuX2QpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRoaXMuZGF0ZXNUZW1wID0gW251bGwsIG51bGxdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgaW5pdERlbWFuZENhbGVuZGFyKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBpZiAodGhpcy5kZW1hbmRDYWxlbmRhclNlcnZpY2UpIHtcbiAgICAgICAgICAgIGNvbnN0IGRheXMgPSBhd2FpdCB0aGlzLmRlbWFuZENhbGVuZGFyU2VydmljZS5nZXQodGhpcy5sYXRpdHVkZSwgdGhpcy5sb25naXR1ZGUpLnRvUHJvbWlzZSgpO1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmRheXNDb25maWcgPSB0aGlzLmJ1aWxkRGF5cyhkYXlzKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgdGhpcy5pbml0RGVmYXVsdERhdGUoKTtcblxuICAgICAgICB0aGlzLmZpbmRDc3NDbGFzcygpO1xuICAgICAgICBpZiAodGhpcy5fZD8uY2FuQmFja3dhcmRzU2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYmFja3dhcmRzTW9udGgoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNjcm9sbFRvRGVmYXVsdERhdGUoKTtcbiAgICB9XG5cbiAgICBidWlsZERheXMoaXRlbXM6IGFueVtdKTogRGF5Q29uZmlnW10ge1xuICAgICAgICBjb25zdCBkYXlDb25maWc6IERheUNvbmZpZ1tdID0gW107XG4gICAgICAgIGlmIChpdGVtcyAmJiBpdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgZGF5Q29uZmlnLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBkYXRlOiBtb21lbnQoaXRlbS5jaGVja19pbiwgJ1lZWVktTU0tREQnKS50b0RhdGUoKSxcbiAgICAgICAgICAgICAgICAgICAgbWFya2VkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgZGVtYW5kTGV2ZWw6IGl0ZW0uZGVtYW5kXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF5Q29uZmlnO1xuICAgIH1cblxuICAgIGZpbmRDc3NDbGFzcygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuX2QpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgY3NzQ2xhc3MgfSA9IHRoaXMuX2Q7XG4gICAgICAgICAgICBpZiAoY3NzQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICBjc3NDbGFzcy5zcGxpdCgnICcpLmZvckVhY2goKF9jbGFzczogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfY2xhc3MudHJpbSgpICE9PSAnJykgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBfY2xhc3MpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25DaGFuZ2UoZGF0YTogYW55KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHsgcGlja01vZGUsIGF1dG9Eb25lIH0gPSB0aGlzLl9kO1xuXG4gICAgICAgIHRoaXMuZGF0ZXNUZW1wID0gZGF0YTtcbiAgICAgICAgdGhpcy5yZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgICAgIGlmIChwaWNrTW9kZSAhPT0gcGlja01vZGVzLk1VTFRJICYmIGF1dG9Eb25lICYmIHRoaXMuY2FuRG9uZSgpKSB7XG4gICAgICAgICAgICB0aGlzLmRvbmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVwYWludERPTSgpO1xuICAgIH1cblxuICAgIG9uQ2FuY2VsKCk6IHZvaWQge1xuICAgICAgICB0aGlzLm1vZGFsQ3RybC5kaXNtaXNzKG51bGwsICdjYW5jZWwnKTtcbiAgICB9XG5cbiAgICBkb25lKCk6IHZvaWQge1xuICAgICAgICBjb25zdCB7IHBpY2tNb2RlIH0gPSB0aGlzLl9kO1xuXG4gICAgICAgIHRoaXMubW9kYWxDdHJsLmRpc21pc3ModGhpcy5jYWxTdmMud3JhcFJlc3VsdCh0aGlzLmRhdGVzVGVtcCwgcGlja01vZGUpLCAnZG9uZScpO1xuICAgIH1cblxuICAgIGNhbkRvbmUoKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheSh0aGlzLmRhdGVzVGVtcCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuX2QpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHsgcGlja01vZGUsIGRlZmF1bHRFbmREYXRlVG9TdGFydERhdGUgfSA9IHRoaXMuX2Q7XG4gICAgICAgIHN3aXRjaCAocGlja01vZGUpIHtcbiAgICAgICAgICAgIGNhc2UgcGlja01vZGVzLlNJTkdMRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gISEodGhpcy5kYXRlc1RlbXBbMF0gJiYgdGhpcy5kYXRlc1RlbXBbMF0udGltZSk7XG4gICAgICAgICAgICBjYXNlIHBpY2tNb2Rlcy5SQU5HRTpcbiAgICAgICAgICAgICAgICBpZiAoZGVmYXVsdEVuZERhdGVUb1N0YXJ0RGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gISEodGhpcy5kYXRlc1RlbXBbMF0gJiYgdGhpcy5kYXRlc1RlbXBbMF0udGltZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiAhISh0aGlzLmRhdGVzVGVtcFswXSAmJiB0aGlzLmRhdGVzVGVtcFsxXSkgJiYgISEodGhpcy5kYXRlc1RlbXBbMF0udGltZSAmJiB0aGlzLmRhdGVzVGVtcFsxXS50aW1lKTtcbiAgICAgICAgICAgIGNhc2UgcGlja01vZGVzLk1VTFRJOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGVzVGVtcC5sZW5ndGggPiAwICYmIHRoaXMuZGF0ZXNUZW1wLmV2ZXJ5KGUgPT4gISFlICYmICEhZS50aW1lKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuZGF0ZXNUZW1wID0gW251bGwsIG51bGxdO1xuICAgIH1cblxuICAgIGNhbkNsZWFyKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLmRhdGVzVGVtcFswXTtcbiAgICB9XG5cbiAgICBuZXh0TW9udGgoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgICAgICBjb25zdCBsZW4gPSB0aGlzLmNhbGVuZGFyTW9udGhzLmxlbmd0aDtcbiAgICAgICAgY29uc3QgZmluYWwgPSB0aGlzLmNhbGVuZGFyTW9udGhzW2xlbiAtIDFdO1xuICAgICAgICBjb25zdCBuZXh0VGltZSA9IG1vbWVudChmaW5hbC5vcmlnaW5hbC50aW1lKVxuICAgICAgICAgICAgLmFkZCgxLCAnTScpXG4gICAgICAgICAgICAudmFsdWVPZigpO1xuICAgICAgICBjb25zdCByYW5nZUVuZCA9IHRoaXMuX2QudG8gPyBtb21lbnQodGhpcy5fZC50bykuc3VidHJhY3QoMSwgJ00nKSA6IDA7XG5cbiAgICAgICAgaWYgKGxlbiA8PSAwIHx8IChyYW5nZUVuZCAhPT0gMCAmJiBtb21lbnQoZmluYWwub3JpZ2luYWwudGltZSkuaXNBZnRlcihyYW5nZUVuZCkpKSB7XG4gICAgICAgICAgICBldmVudC50YXJnZXQuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWxlbmRhck1vbnRocy5wdXNoKC4uLnRoaXMuY2FsU3ZjLmNyZWF0ZU1vbnRoc0J5UGVyaW9kKG5leHRUaW1lLCBOVU1fT0ZfTU9OVEhTX1RPX0NSRUFURSwgdGhpcy5fZCkpO1xuICAgICAgICBldmVudC50YXJnZXQuY29tcGxldGUoKTtcbiAgICAgICAgdGhpcy5yZXBhaW50RE9NKCk7XG4gICAgfVxuXG4gICAgYmFja3dhcmRzTW9udGgoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGZpcnN0ID0gdGhpcy5jYWxlbmRhck1vbnRoc1swXTtcblxuICAgICAgICBpZiAoZmlyc3Qub3JpZ2luYWwudGltZSA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLl9kLmNhbkJhY2t3YXJkc1NlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmaXJzdFRpbWUgPSAodGhpcy5hY3R1YWxGaXJzdFRpbWUgPSBtb21lbnQoZmlyc3Qub3JpZ2luYWwudGltZSlcbiAgICAgICAgICAgIC5zdWJ0cmFjdChOVU1fT0ZfTU9OVEhTX1RPX0NSRUFURSwgJ00nKVxuICAgICAgICAgICAgLnZhbHVlT2YoKSk7XG5cbiAgICAgICAgdGhpcy5jYWxlbmRhck1vbnRocy51bnNoaWZ0KC4uLnRoaXMuY2FsU3ZjLmNyZWF0ZU1vbnRoc0J5UGVyaW9kKGZpcnN0VGltZSwgTlVNX09GX01PTlRIU19UT19DUkVBVEUsIHRoaXMuX2QpKTtcbiAgICAgICAgdGhpcy5yZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB0aGlzLnJlcGFpbnRET00oKTtcbiAgICB9XG5cbiAgICBzY3JvbGxUb0RhdGUoZGF0ZTogRGF0ZSk6IHZvaWQge1xuICAgICAgICBjb25zdCBkZWZhdWx0RGF0ZUluZGV4ID0gdGhpcy5maW5kSW5pdE1vbnRoTnVtYmVyKGRhdGUpO1xuICAgICAgICBjb25zdCBtb250aEVsZW1lbnQgPSB0aGlzLm1vbnRoc0VsZT8ubmF0aXZlRWxlbWVudC5jaGlsZHJlbltgbW9udGgtJHtkZWZhdWx0RGF0ZUluZGV4fWBdO1xuICAgICAgICBjb25zdCBkb21FbGVtUmVhZHlXYWl0VGltZSA9IDMwMDtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRlZmF1bHREYXRlTW9udGggPSBtb250aEVsZW1lbnQgPyBtb250aEVsZW1lbnQub2Zmc2V0VG9wIDogMDtcblxuICAgICAgICAgICAgaWYgKGRlZmF1bHREYXRlSW5kZXggIT09IC0xICYmIGRlZmF1bHREYXRlTW9udGggIT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQuc2Nyb2xsQnlQb2ludCgwLCBkZWZhdWx0RGF0ZU1vbnRoLCAxMjgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBkb21FbGVtUmVhZHlXYWl0VGltZSk7XG4gICAgfVxuXG4gICAgc2Nyb2xsVG9EZWZhdWx0RGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zY3JvbGxUb0RhdGUodGhpcy5fZC5kZWZhdWx0U2Nyb2xsVG8pO1xuICAgIH1cblxuICAgIG9uU2Nyb2xsKCRldmVudDogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5fZD8uY2FuQmFja3dhcmRzU2VsZWN0ZWQpIHJldHVybjtcblxuICAgICAgICBjb25zdCB7IGRldGFpbCB9ID0gJGV2ZW50O1xuXG4gICAgICAgIGlmIChkZXRhaWwuc2Nyb2xsVG9wIDw9IDIwMCAmJiBkZXRhaWwudmVsb2NpdHlZIDwgMCAmJiB0aGlzLl9zY3JvbGxMb2NrKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQuZ2V0U2Nyb2xsRWxlbWVudCgpLnRoZW4oKHNjcm9sbEVsZW06IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX3Njcm9sbExvY2sgPSAhMTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGhlaWdodEJlZm9yZU1vbnRoUHJlcGVuZCA9IHNjcm9sbEVsZW0uc2Nyb2xsSGVpZ2h0O1xuICAgICAgICAgICAgICAgIHRoaXMuYmFja3dhcmRzTW9udGgoKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaGVpZ2h0QWZ0ZXJNb250aFByZXBlbmQgPSBzY3JvbGxFbGVtLnNjcm9sbEhlaWdodDtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQuc2Nyb2xsQnlQb2ludCgwLCBoZWlnaHRBZnRlck1vbnRoUHJlcGVuZCAtIGhlaWdodEJlZm9yZU1vbnRoUHJlcGVuZCwgMCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zY3JvbGxMb2NrID0gITA7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sIDE4MCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlcGFpbnRET00oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRlbnQuZ2V0U2Nyb2xsRWxlbWVudCgpLnRoZW4oKHNjcm9sbEVsZW06IGFueSkgPT4ge1xuICAgICAgICAgICAgc2Nyb2xsRWxlbS5zdHlsZS56SW5kZXggPSAnMic7XG4gICAgICAgICAgICBzY3JvbGxFbGVtLnN0eWxlLnpJbmRleCA9ICdpbml0aWFsJztcbiAgICAgICAgICAgIGlmICh0aGlzLm1vbnRoc0VsZT8ubmF0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMubW9udGhzRWxlLm5hdGl2ZUVsZW1lbnQuc3R5bGUuekluZGV4ID0gJzInO1xuICAgICAgICAgICAgICAgIHRoaXMubW9udGhzRWxlLm5hdGl2ZUVsZW1lbnQuc3R5bGUuekluZGV4ID0gJ2luaXRpYWwnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmaW5kSW5pdE1vbnRoTnVtYmVyKGRhdGU6IERhdGUpOiBudW1iZXIge1xuICAgICAgICBsZXQgc3RhcnREYXRlID0gdGhpcy5hY3R1YWxGaXJzdFRpbWUgPyBtb21lbnQodGhpcy5hY3R1YWxGaXJzdFRpbWUpIDogbW9tZW50KHRoaXMuX2QuZnJvbSk7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRTY3JvbGxUbyA9IG1vbWVudChkYXRlKTtcbiAgICAgICAgY29uc3QgaXNBZnRlcjogYm9vbGVhbiA9IGRlZmF1bHRTY3JvbGxUby5pc0FmdGVyKHN0YXJ0RGF0ZSk7XG4gICAgICAgIGlmICghaXNBZnRlcikgcmV0dXJuIC0xO1xuXG4gICAgICAgIGlmICh0aGlzLnNob3dZZWFyUGlja2VyKSB7XG4gICAgICAgICAgICBzdGFydERhdGUgPSBtb21lbnQobmV3IERhdGUodGhpcy55ZWFyLCAwLCAxKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGVmYXVsdFNjcm9sbFRvLmRpZmYoc3RhcnREYXRlLCAnbW9udGgnKTtcbiAgICB9XG5cbiAgICBnZXREYXlUaW1lKGRhdGU6IGFueSk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBtb21lbnQobW9tZW50KGRhdGUpLmZvcm1hdCgnWVlZWS1NTS1ERCcpKS52YWx1ZU9mKCk7XG4gICAgfVxuXG4gICAgbW9udGhGb3JtYXQoZGF0ZTogYW55KTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIG1vbWVudChkYXRlKS5mb3JtYXQodGhpcy5fZC5tb250aEZvcm1hdC5yZXBsYWNlKC95L2csICdZJykpO1xuICAgIH1cblxuICAgIGdldERheUZvcm1hdHRlZChkYXRhOiBhbnkpIHtcbiAgICAgICAgaWYgKCFkYXRhKSB7IHJldHVybiBudWxsOyB9XG4gICAgICAgIHJldHVybiBtb21lbnQoZGF0YS50aW1lKS5mb3JtYXQoJ2RkZCwgTU1NIERvJyk7XG4gICAgfVxuXG4gICAgdHJhY2tCeUluZGV4KGluZGV4OiBudW1iZXIsIG1vbWVudERhdGU6IENhbGVuZGFyTW9udGgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gbW9tZW50RGF0ZS5vcmlnaW5hbCA/IG1vbWVudERhdGUub3JpZ2luYWwudGltZSA6IGluZGV4O1xuICAgIH1cbn1cbiJdfQ==