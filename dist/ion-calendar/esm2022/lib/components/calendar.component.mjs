import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { CalendarService } from '../services/calendar.service';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import moment from 'moment';
import { defaults, pickModes } from '../config';
import * as i0 from "@angular/core";
import * as i1 from "../services/calendar.service";
import * as i2 from "@angular/common";
import * as i3 from "@ionic/angular";
import * as i4 from "@angular/forms";
import * as i5 from "./calendar-week.component";
import * as i6 from "./month.component";
import * as i7 from "./month-picker.component";
const _c0 = () => [];
function CalendarComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ion-button", 5);
    i0.ɵɵpipe(1, "date");
    i0.ɵɵlistener("click", function CalendarComponent_ng_template_1_Template_ion_button_click_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.switchView()); });
    i0.ɵɵtext(2);
    i0.ɵɵelement(3, "ion-icon", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵattribute("aria-label", i0.ɵɵpipeBind2(1, 3, ctx_r1.getDate(ctx_r1.monthOpt == null ? null : ctx_r1.monthOpt.original == null ? null : ctx_r1.monthOpt.original.time), ctx_r1.MONTH_DATE_FORMAT));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1._monthFormat(ctx_r1.monthOpt.original.time), " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("name", ctx_r1._view === "days" ? "md-arrow-dropdown" : "md-arrow-dropup");
} }
function CalendarComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵpipe(1, "date");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵattribute("aria-label", i0.ɵɵpipeBind2(1, 2, ctx_r1.getDate(ctx_r1.monthOpt.original.time), ctx_r1.MONTH_DATE_FORMAT));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1._monthFormat(ctx_r1.monthOpt.original.time), " ");
} }
function CalendarComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ion-button", 8);
    i0.ɵɵlistener("click", function CalendarComponent_ng_template_4_Template_ion_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.prev()); });
    i0.ɵɵelement(1, "ion-icon", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "ion-button", 10);
    i0.ɵɵlistener("click", function CalendarComponent_ng_template_4_Template_ion_button_click_2_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.next()); });
    i0.ɵɵelement(3, "ion-icon", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", !ctx_r1.canBack());
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", !ctx_r1.canNext());
} }
function CalendarComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelement(0, "ion-calendar-week", 12);
    i0.ɵɵelementStart(1, "ion-calendar-month", 13);
    i0.ɵɵtwoWayListener("ngModelChange", function CalendarComponent_ng_template_5_Template_ion_calendar_month_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1._calendarMonthValue, $event) || (ctx_r1._calendarMonthValue = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("change", function CalendarComponent_ng_template_5_Template_ion_calendar_month_change_1_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onChanged($event)); })("swipe", function CalendarComponent_ng_template_5_Template_ion_calendar_month_swipe_1_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.swipeEvent($event)); })("select", function CalendarComponent_ng_template_5_Template_ion_calendar_month_select_1_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.select.emit($event)); })("selectStart", function CalendarComponent_ng_template_5_Template_ion_calendar_month_selectStart_1_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.selectStart.emit($event)); })("selectEnd", function CalendarComponent_ng_template_5_Template_ion_calendar_month_selectEnd_1_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.selectEnd.emit($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("weekArray", ctx_r1._d.weekdays)("weekStart", ctx_r1._d.weekStart);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1._calendarMonthValue);
    i0.ɵɵproperty("month", ctx_r1.monthOpt)("readonly", ctx_r1.readonly)("pickMode", ctx_r1._d.pickMode)("color", ctx_r1._d.color);
} }
function CalendarComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ion-calendar-month-picker", 14);
    i0.ɵɵlistener("select", function CalendarComponent_ng_template_6_Template_ion_calendar_month_picker_select_0_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.monthOnSelect($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("color", ctx_r1._d.color ? ctx_r1._d.color : "")("monthFormat", ctx_r1._options["monthPickerFormat"] && ctx_r1._options["monthPickerFormat"].length > 0 ? ctx_r1._options["monthPickerFormat"] : i0.ɵɵpureFunction0(3, _c0))("month", ctx_r1.monthOpt);
} }
export const ION_CAL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CalendarComponent),
    multi: true,
};
export class CalendarComponent {
    get showToggleButtons() {
        return this._showToggleButtons;
    }
    set showToggleButtons(value) {
        this._showToggleButtons = value;
    }
    get showMonthPicker() {
        return this._showMonthPicker;
    }
    set showMonthPicker(value) {
        this._showMonthPicker = value;
    }
    set options(value) {
        this._options = value;
        this.initOpt();
        if (this.monthOpt && this.monthOpt.original) {
            this.monthOpt = this.createMonth(this.monthOpt.original.time);
        }
    }
    get options() {
        return this._options;
    }
    constructor(calSvc) {
        this.calSvc = calSvc;
        this._view = 'days';
        this._calendarMonthValue = [null, null];
        this._showToggleButtons = true;
        this._showMonthPicker = true;
        this.format = defaults.DATE_FORMAT;
        this.type = 'string';
        this.readonly = false;
        this.change = new EventEmitter();
        this.monthChange = new EventEmitter();
        this.select = new EventEmitter();
        this.selectStart = new EventEmitter();
        this.selectEnd = new EventEmitter();
        this.MONTH_DATE_FORMAT = 'MMMM yyyy';
        this._onChanged = () => { };
        this._onTouched = () => { };
    }
    ngOnInit() {
        this.initOpt();
        this.monthOpt = this.createMonth(new Date().getTime());
    }
    getViewDate() {
        return this._handleType(this.monthOpt.original.time);
    }
    getDate(date) {
        return new Date(date);
    }
    setViewDate(value) {
        this.monthOpt = this.createMonth(this._payloadToTimeNumber(value));
    }
    switchView() {
        this._view = this._view === 'days' ? 'month' : 'days';
    }
    prev() {
        if (this._view === 'days') {
            this.backMonth();
        }
        else {
            this.prevYear();
        }
    }
    next() {
        if (this._view === 'days') {
            this.nextMonth();
        }
        else {
            this.nextYear();
        }
    }
    prevYear() {
        if (moment(this.monthOpt.original.time).year() === 1970)
            return;
        const backTime = moment(this.monthOpt.original.time)
            .subtract(1, 'year')
            .valueOf();
        this.monthOpt = this.createMonth(backTime);
    }
    nextYear() {
        const nextTime = moment(this.monthOpt.original.time)
            .add(1, 'year')
            .valueOf();
        this.monthOpt = this.createMonth(nextTime);
    }
    nextMonth() {
        const nextTime = moment(this.monthOpt.original.time)
            .add(1, 'months')
            .valueOf();
        this.monthChange.emit({
            oldMonth: this.calSvc.multiFormat(this.monthOpt.original.time),
            newMonth: this.calSvc.multiFormat(nextTime),
        });
        this.monthOpt = this.createMonth(nextTime);
    }
    canNext() {
        if (!this._d.to || this._view !== 'days')
            return true;
        return this.monthOpt.original.time < moment(this._d.to).valueOf();
    }
    backMonth() {
        const backTime = moment(this.monthOpt.original.time)
            .subtract(1, 'months')
            .valueOf();
        this.monthChange.emit({
            oldMonth: this.calSvc.multiFormat(this.monthOpt.original.time),
            newMonth: this.calSvc.multiFormat(backTime),
        });
        this.monthOpt = this.createMonth(backTime);
    }
    canBack() {
        if (!this._d.from || this._view !== 'days')
            return true;
        return this.monthOpt.original.time > moment(this._d.from).valueOf();
    }
    monthOnSelect(month) {
        this._view = 'days';
        const newMonth = moment(this.monthOpt.original.time)
            .month(month)
            .valueOf();
        this.monthChange.emit({
            oldMonth: this.calSvc.multiFormat(this.monthOpt.original.time),
            newMonth: this.calSvc.multiFormat(newMonth),
        });
        this.monthOpt = this.createMonth(newMonth);
    }
    onChanged($event) {
        switch (this._d.pickMode) {
            case pickModes.SINGLE:
                const date = this._handleType($event[0].time);
                this._onChanged(date);
                this.change.emit(date);
                break;
            case pickModes.RANGE:
                if ($event[0] && $event[1]) {
                    const rangeDate = {
                        from: this._handleType($event[0].time),
                        to: this._handleType($event[1].time),
                    };
                    this._onChanged(rangeDate);
                    this.change.emit(rangeDate);
                }
                break;
            case pickModes.MULTI:
                const dates = [];
                for (let i = 0; i < $event.length; i++) {
                    if ($event[i] && $event[i].time) {
                        const pushData = this._handleType($event[i].time);
                        dates.push(pushData);
                    }
                }
                this._onChanged(dates);
                this.change.emit(dates);
                break;
            default:
        }
    }
    swipeEvent($event) {
        const isNext = $event.deltaX < 0;
        if (isNext && this.canNext()) {
            this.nextMonth();
        }
        else if (!isNext && this.canBack()) {
            this.backMonth();
        }
    }
    _payloadToTimeNumber(value) {
        let date;
        if (this.type === 'string') {
            date = moment(value, this.format);
        }
        else {
            date = moment(value);
        }
        return date.valueOf();
    }
    _monthFormat(date) {
        return moment(date).format(this._d.monthFormat.replace(/y/g, 'Y'));
    }
    initOpt() {
        if (this._options && typeof this._options.showToggleButtons === 'boolean') {
            this.showToggleButtons = this._options.showToggleButtons;
        }
        if (this._options && typeof this._options.showMonthPicker === 'boolean') {
            this.showMonthPicker = this._options.showMonthPicker;
            if (this._view !== 'days' && !this.showMonthPicker) {
                this._view = 'days';
            }
        }
        this._d = this.calSvc.safeOpt(this._options || {});
    }
    createMonth(date) {
        return this.calSvc.createMonthsByPeriod(date, 1, this._d)[0];
    }
    _createCalendarDay(value) {
        return this.calSvc.createCalendarDay(this._payloadToTimeNumber(value), this._d);
    }
    _handleType(value) {
        const date = moment(value);
        switch (this.type) {
            case 'string':
                return date.format(this.format);
            case 'js-date':
                return date.toDate();
            case 'moment':
                return date;
            case 'time':
                return date.valueOf();
            case 'object':
                return date.toObject();
            default:
                return date;
        }
    }
    writeValue(obj) {
        this._writeValue(obj);
        if (obj) {
            if (this._calendarMonthValue[0]) {
                this.monthOpt = this.createMonth(this._calendarMonthValue[0].time);
            }
            else {
                this.monthOpt = this.createMonth(new Date().getTime());
            }
        }
    }
    registerOnChange(fn) {
        this._onChanged = fn;
    }
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    _writeValue(value) {
        if (!value) {
            this._calendarMonthValue = [null, null];
            return;
        }
        switch (this._d.pickMode) {
            case 'single':
                this._calendarMonthValue[0] = this._createCalendarDay(value);
                break;
            case 'range':
                if (value.from) {
                    this._calendarMonthValue[0] = value.from ? this._createCalendarDay(value.from) : null;
                }
                if (value.to) {
                    this._calendarMonthValue[1] = value.to ? this._createCalendarDay(value.to) : null;
                }
                break;
            case 'multi':
                if (Array.isArray(value)) {
                    this._calendarMonthValue = value.map(e => {
                        return this._createCalendarDay(e);
                    });
                }
                else {
                    this._calendarMonthValue = [null, null];
                }
                break;
            default:
        }
    }
    static { this.ɵfac = function CalendarComponent_Factory(t) { return new (t || CalendarComponent)(i0.ɵɵdirectiveInject(i1.CalendarService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CalendarComponent, selectors: [["ion-calendar"]], inputs: { format: "format", type: "type", readonly: "readonly", options: "options" }, outputs: { change: "change", monthChange: "monthChange", select: "select", selectStart: "selectStart", selectEnd: "selectEnd" }, features: [i0.ɵɵProvidersFeature([ION_CAL_VALUE_ACCESSOR])], decls: 8, vars: 5, consts: [["title", ""], ["monthPicker", ""], [1, "title"], [3, "ngIf", "ngIfElse"], [3, "ngIf"], ["type", "button", "fill", "clear", 1, "switch-btn", 3, "click"], [1, "arrow-dropdown", 3, "name"], [1, "switch-btn"], ["type", "button", "fill", "clear", 1, "back", 3, "click", "disabled"], ["slot", "icon-only", "size", "small", "name", "ios-arrow-back"], ["type", "button", "fill", "clear", 1, "forward", 3, "click", "disabled"], ["slot", "icon-only", "size", "small", "name", "ios-arrow-forward"], ["color", "transparent", 3, "weekArray", "weekStart"], [1, "component-mode", 3, "ngModelChange", "change", "swipe", "select", "selectStart", "selectEnd", "ngModel", "month", "readonly", "pickMode", "color"], [3, "select", "color", "monthFormat", "month"]], template: function CalendarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 2);
            i0.ɵɵtemplate(1, CalendarComponent_ng_template_1_Template, 4, 6, "ng-template", 3)(2, CalendarComponent_ng_template_2_Template, 3, 5, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(4, CalendarComponent_ng_template_4_Template, 4, 2, "ng-template", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(5, CalendarComponent_ng_template_5_Template, 2, 7, "ng-template", 3)(6, CalendarComponent_ng_template_6_Template, 1, 4, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            const title_r6 = i0.ɵɵreference(3);
            const monthPicker_r7 = i0.ɵɵreference(7);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx._showMonthPicker)("ngIfElse", title_r6);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx._showToggleButtons);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx._view === "days")("ngIfElse", monthPicker_r7);
        } }, dependencies: [i2.NgIf, i3.IonButton, i3.IonIcon, i4.NgControlStatus, i4.NgModel, i5.CalendarWeekComponent, i6.MonthComponent, i7.MonthPickerComponent, i2.DatePipe], styles: ["[_nghost-%COMP%]{padding:10px 20px;box-sizing:border-box;display:inline-block;background-color:#fff;width:100%}[_nghost-%COMP%]   .title[_ngcontent-%COMP%]{padding:0 40px;overflow:hidden}[_nghost-%COMP%]   .title[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%], [_nghost-%COMP%]   .title[_ngcontent-%COMP%]   .forward[_ngcontent-%COMP%], [_nghost-%COMP%]   .title[_ngcontent-%COMP%]   .switch-btn[_ngcontent-%COMP%]{display:block;position:relative;float:left;min-height:32px;margin:0;padding:0;--padding-start: 0;--padding-end: 0;font-size:15px}[_nghost-%COMP%]   .title[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%], [_nghost-%COMP%]   .title[_ngcontent-%COMP%]   .forward[_ngcontent-%COMP%]{color:#757575}[_nghost-%COMP%]   .title[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]{margin-left:-100%;left:-40px;width:40px}[_nghost-%COMP%]   .title[_ngcontent-%COMP%]   .forward[_ngcontent-%COMP%]{margin-left:-40px;right:-40px;width:40px}[_nghost-%COMP%]   .title[_ngcontent-%COMP%]   .switch-btn[_ngcontent-%COMP%]{--margin-top: 0;--margin-bottom: 0;--margin-start: auto;--margin-end: auto;width:100%;text-align:center;line-height:32px;color:#757575}[_nghost-%COMP%]   .title[_ngcontent-%COMP%]   .switch-btn[_ngcontent-%COMP%]   .arrow-dropdown[_ngcontent-%COMP%]{margin-left:5px}[_nghost-%COMP%]   .days.between[_ngcontent-%COMP%]   .days-btn.is-last[_ngcontent-%COMP%], [_nghost-%COMP%]   .days.between[_ngcontent-%COMP%]   .days-btn.is-first[_ngcontent-%COMP%]{border-radius:0}[_nghost-%COMP%]   .component-mode[_ngcontent-%COMP%]   .days.startSelection.is-last-wrap[_ngcontent-%COMP%]:after{border-radius:0}[_nghost-%COMP%]   .component-mode[_ngcontent-%COMP%]   .days.endSelection.is-first-wrap[_ngcontent-%COMP%]:after{border-radius:0}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CalendarComponent, [{
        type: Component,
        args: [{ selector: 'ion-calendar', providers: [ION_CAL_VALUE_ACCESSOR], template: `
    <div class="title">
      <ng-template [ngIf]="_showMonthPicker" [ngIfElse]="title">
        <ion-button type="button"
                    fill="clear"
                    class="switch-btn"
                    [attr.aria-label]="getDate(monthOpt?.original?.time) | date:MONTH_DATE_FORMAT"
                    (click)="switchView()">
          {{ _monthFormat(monthOpt.original.time) }}
          <ion-icon class="arrow-dropdown"
                    [name]="_view === 'days' ? 'md-arrow-dropdown' : 'md-arrow-dropup'"></ion-icon>
        </ion-button>
      </ng-template>
      <ng-template #title>
        <div class="switch-btn"
             [attr.aria-label]="getDate(monthOpt.original.time) | date:MONTH_DATE_FORMAT">
          {{ _monthFormat(monthOpt.original.time) }}
        </div>
      </ng-template>
      <ng-template [ngIf]="_showToggleButtons">
        <ion-button type="button" fill="clear" class="back" [disabled]="!canBack()" (click)="prev()">
          <ion-icon slot="icon-only" size="small" name="ios-arrow-back"></ion-icon>
        </ion-button>
        <ion-button type="button" fill="clear" class="forward" [disabled]="!canNext()" (click)="next()">
          <ion-icon slot="icon-only" size="small" name="ios-arrow-forward"></ion-icon>
        </ion-button>
      </ng-template>
    </div>
    <ng-template [ngIf]="_view === 'days'" [ngIfElse]="monthPicker">
      <ion-calendar-week color="transparent"
                         [weekArray]="_d.weekdays"
                         [weekStart]="_d.weekStart">
      </ion-calendar-week>

      <ion-calendar-month class="component-mode"
                          [(ngModel)]="_calendarMonthValue"
                          [month]="monthOpt"
                          [readonly]="readonly"
                          (change)="onChanged($event)"
                          (swipe)="swipeEvent($event)"
                          (select)="select.emit($event)"
                          (selectStart)="selectStart.emit($event)"
                          (selectEnd)="selectEnd.emit($event)"
                          [pickMode]="_d.pickMode"
                          [color]="_d.color">
      </ion-calendar-month>
    </ng-template>

    <ng-template #monthPicker>
      <ion-calendar-month-picker [color]="_d.color ? _d.color : ''"
                                 [monthFormat]="_options['monthPickerFormat'] && _options['monthPickerFormat'].length > 0 ? _options['monthPickerFormat'] : []  "
                                 (select)="monthOnSelect($event)"
                                 [month]="monthOpt">
      </ion-calendar-month-picker>
    </ng-template>
  `, styles: [":host{padding:10px 20px;box-sizing:border-box;display:inline-block;background-color:#fff;width:100%}:host .title{padding:0 40px;overflow:hidden}:host .title .back,:host .title .forward,:host .title .switch-btn{display:block;position:relative;float:left;min-height:32px;margin:0;padding:0;--padding-start: 0;--padding-end: 0;font-size:15px}:host .title .back,:host .title .forward{color:#757575}:host .title .back{margin-left:-100%;left:-40px;width:40px}:host .title .forward{margin-left:-40px;right:-40px;width:40px}:host .title .switch-btn{--margin-top: 0;--margin-bottom: 0;--margin-start: auto;--margin-end: auto;width:100%;text-align:center;line-height:32px;color:#757575}:host .title .switch-btn .arrow-dropdown{margin-left:5px}:host .days.between .days-btn.is-last,:host .days.between .days-btn.is-first{border-radius:0}:host .component-mode .days.startSelection.is-last-wrap:after{border-radius:0}:host .component-mode .days.endSelection.is-first-wrap:after{border-radius:0}\n"] }]
    }], () => [{ type: i1.CalendarService }], { format: [{
            type: Input
        }], type: [{
            type: Input
        }], readonly: [{
            type: Input
        }], change: [{
            type: Output
        }], monthChange: [{
            type: Output
        }], select: [{
            type: Output
        }], selectStart: [{
            type: Output
        }], selectEnd: [{
            type: Output
        }], options: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CalendarComponent, { className: "CalendarComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2NhbGVuZGFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQVdyRyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDL0QsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpFLE9BQVEsTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUM3QixPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7Ozs7Ozs7Ozs7O0lBZXhDLHFDQUltQzs7SUFBdkIseUxBQVMsbUJBQVksS0FBQztJQUNoQyxZQUNBO0lBQUEsOEJBQ3lGO0lBQzNGLGlCQUFhOzs7O0lBSFgsZUFDQTtJQURBLG1GQUNBO0lBQ1UsY0FBbUU7SUFBbkUsd0ZBQW1FOzs7SUFJL0UsOEJBQ2tGOztJQUNoRixZQUNGO0lBQUEsaUJBQU07Ozs7SUFESixlQUNGO0lBREUsbUZBQ0Y7Ozs7SUFHQSxxQ0FBNkY7SUFBakIseUxBQVMsYUFBTSxLQUFDO0lBQzFGLDhCQUF5RTtJQUMzRSxpQkFBYTtJQUNiLHNDQUFnRztJQUFqQix5TEFBUyxhQUFNLEtBQUM7SUFDN0YsK0JBQTRFO0lBQzlFLGlCQUFhOzs7SUFMdUMsNENBQXVCO0lBR3BCLGVBQXVCO0lBQXZCLDRDQUF1Qjs7OztJQU1oRix3Q0FHb0I7SUFFcEIsOENBVXVDO0lBVG5CLDRVQUFpQztJQU9qQyxBQURBLEFBREEsQUFEQSxBQURBLHlNQUFVLHdCQUFpQixLQUFDLDBMQUNuQix5QkFBa0IsS0FBQyw0TEFDbEIsMEJBQW1CLEtBQUMsc01BQ2YsK0JBQXdCLEtBQUMs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QUFDLEVBQUU7d0JBQ3ZDLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNwQyxDQUFDLENBQUMsQ0FBQztnQkFDTCxDQUFDO3FCQUFNLENBQUM7b0JBQ04sSUFBSSxDQUFDLG1CQUFtQixHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUMxQyxDQUFDO2dCQUNELE1BQU07WUFFUixRQUFRO1FBQ1YsQ0FBQztJQUNILENBQUM7a0ZBdFRVLGlCQUFpQjtvRUFBakIsaUJBQWlCLHlSQTNEakIsQ0FBQyxzQkFBc0IsQ0FBQztZQUdqQyw4QkFBbUI7WUFrQmpCLEFBTkEsQUFYQSxrRkFBMEQsc0dBV3RDLHFFQU1xQjtZQVEzQyxpQkFBTTtZQXFCTixBQXBCQSxrRkFBZ0Usc0dBb0J0Qzs7OztZQTlDWCxjQUF5QjtZQUFDLEFBQTFCLDJDQUF5QixzQkFBbUI7WUFpQjVDLGVBQTJCO1lBQTNCLDZDQUEyQjtZQVM3QixjQUF5QjtZQUFDLEFBQTFCLDJDQUF5Qiw0QkFBeUI7OztpRkE2QnRELGlCQUFpQjtjQTdEN0IsU0FBUzsyQkFDRSxjQUFjLGFBQ2IsQ0FBQyxzQkFBc0IsQ0FBQyxZQUV6Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXVEVDtnREE2QkQsTUFBTTtrQkFETCxLQUFLO1lBR04sSUFBSTtrQkFESCxLQUFLO1lBR04sUUFBUTtrQkFEUCxLQUFLO1lBR04sTUFBTTtrQkFETCxNQUFNO1lBR1AsV0FBVztrQkFEVixNQUFNO1lBR1AsTUFBTTtrQkFETCxNQUFNO1lBR1AsV0FBVztrQkFEVixNQUFNO1lBR1AsU0FBUztrQkFEUixNQUFNO1lBSUgsT0FBTztrQkFEVixLQUFLOztrRkEzQ0ssaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgZm9yd2FyZFJlZiwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgQ2FsZW5kYXJNb250aCxcbiAgQ2FsZW5kYXJNb2RhbE9wdGlvbnMsXG4gIENhbGVuZGFyQ29tcG9uZW50T3B0aW9ucyxcbiAgQ2FsZW5kYXJEYXksXG4gIENhbGVuZGFyQ29tcG9uZW50UGF5bG9hZFR5cGVzLFxuICBDYWxlbmRhckNvbXBvbmVudE1vbnRoQ2hhbmdlLFxuICBDYWxlbmRhckNvbXBvbmVudFR5cGVQcm9wZXJ0eSxcbn0gZnJvbSAnLi4vY2FsZW5kYXIubW9kZWwnO1xuaW1wb3J0IHsgQ2FsZW5kYXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY2FsZW5kYXIuc2VydmljZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCAgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgeyBkZWZhdWx0cywgcGlja01vZGVzIH0gZnJvbSAnLi4vY29uZmlnJztcblxuZXhwb3J0IGNvbnN0IElPTl9DQUxfVkFMVUVfQUNDRVNTT1I6IFByb3ZpZGVyID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ2FsZW5kYXJDb21wb25lbnQpLFxuICBtdWx0aTogdHJ1ZSxcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lvbi1jYWxlbmRhcicsXG4gIHByb3ZpZGVyczogW0lPTl9DQUxfVkFMVUVfQUNDRVNTT1JdLFxuICBzdHlsZVVybHM6IFsnLi9jYWxlbmRhci5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlxuICAgICAgPG5nLXRlbXBsYXRlIFtuZ0lmXT1cIl9zaG93TW9udGhQaWNrZXJcIiBbbmdJZkVsc2VdPVwidGl0bGVcIj5cbiAgICAgICAgPGlvbi1idXR0b24gdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjbGVhclwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwic3dpdGNoLWJ0blwiXG4gICAgICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiZ2V0RGF0ZShtb250aE9wdD8ub3JpZ2luYWw/LnRpbWUpIHwgZGF0ZTpNT05USF9EQVRFX0ZPUk1BVFwiXG4gICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJzd2l0Y2hWaWV3KClcIj5cbiAgICAgICAgICB7eyBfbW9udGhGb3JtYXQobW9udGhPcHQub3JpZ2luYWwudGltZSkgfX1cbiAgICAgICAgICA8aW9uLWljb24gY2xhc3M9XCJhcnJvdy1kcm9wZG93blwiXG4gICAgICAgICAgICAgICAgICAgIFtuYW1lXT1cIl92aWV3ID09PSAnZGF5cycgPyAnbWQtYXJyb3ctZHJvcGRvd24nIDogJ21kLWFycm93LWRyb3B1cCdcIj48L2lvbi1pY29uPlxuICAgICAgICA8L2lvbi1idXR0b24+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgPG5nLXRlbXBsYXRlICN0aXRsZT5cbiAgICAgICAgPGRpdiBjbGFzcz1cInN3aXRjaC1idG5cIlxuICAgICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiZ2V0RGF0ZShtb250aE9wdC5vcmlnaW5hbC50aW1lKSB8IGRhdGU6TU9OVEhfREFURV9GT1JNQVRcIj5cbiAgICAgICAgICB7eyBfbW9udGhGb3JtYXQobW9udGhPcHQub3JpZ2luYWwudGltZSkgfX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgPG5nLXRlbXBsYXRlIFtuZ0lmXT1cIl9zaG93VG9nZ2xlQnV0dG9uc1wiPlxuICAgICAgICA8aW9uLWJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgZmlsbD1cImNsZWFyXCIgY2xhc3M9XCJiYWNrXCIgW2Rpc2FibGVkXT1cIiFjYW5CYWNrKClcIiAoY2xpY2spPVwicHJldigpXCI+XG4gICAgICAgICAgPGlvbi1pY29uIHNsb3Q9XCJpY29uLW9ubHlcIiBzaXplPVwic21hbGxcIiBuYW1lPVwiaW9zLWFycm93LWJhY2tcIj48L2lvbi1pY29uPlxuICAgICAgICA8L2lvbi1idXR0b24+XG4gICAgICAgIDxpb24tYnV0dG9uIHR5cGU9XCJidXR0b25cIiBmaWxsPVwiY2xlYXJcIiBjbGFzcz1cImZvcndhcmRcIiBbZGlzYWJsZWRdPVwiIWNhbk5leHQoKVwiIChjbGljayk9XCJuZXh0KClcIj5cbiAgICAgICAgICA8aW9uLWljb24gc2xvdD1cImljb24tb25seVwiIHNpemU9XCJzbWFsbFwiIG5hbWU9XCJpb3MtYXJyb3ctZm9yd2FyZFwiPjwvaW9uLWljb24+XG4gICAgICAgIDwvaW9uLWJ1dHRvbj5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPC9kaXY+XG4gICAgPG5nLXRlbXBsYXRlIFtuZ0lmXT1cIl92aWV3ID09PSAnZGF5cydcIiBbbmdJZkVsc2VdPVwibW9udGhQaWNrZXJcIj5cbiAgICAgIDxpb24tY2FsZW5kYXItd2VlayBjb2xvcj1cInRyYW5zcGFyZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBbd2Vla0FycmF5XT1cIl9kLndlZWtkYXlzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBbd2Vla1N0YXJ0XT1cIl9kLndlZWtTdGFydFwiPlxuICAgICAgPC9pb24tY2FsZW5kYXItd2Vlaz5cblxuICAgICAgPGlvbi1jYWxlbmRhci1tb250aCBjbGFzcz1cImNvbXBvbmVudC1tb2RlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJfY2FsZW5kYXJNb250aFZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW21vbnRoXT1cIm1vbnRoT3B0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW3JlYWRvbmx5XT1cInJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKGNoYW5nZSk9XCJvbkNoYW5nZWQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChzd2lwZSk9XCJzd2lwZUV2ZW50KCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAoc2VsZWN0KT1cInNlbGVjdC5lbWl0KCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAoc2VsZWN0U3RhcnQpPVwic2VsZWN0U3RhcnQuZW1pdCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKHNlbGVjdEVuZCk9XCJzZWxlY3RFbmQuZW1pdCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW3BpY2tNb2RlXT1cIl9kLnBpY2tNb2RlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbG9yXT1cIl9kLmNvbG9yXCI+XG4gICAgICA8L2lvbi1jYWxlbmRhci1tb250aD5cbiAgICA8L25nLXRlbXBsYXRlPlxuXG4gICAgPG5nLXRlbXBsYXRlICNtb250aFBpY2tlcj5cbiAgICAgIDxpb24tY2FsZW5kYXItbW9udGgtcGlja2VyIFtjb2xvcl09XCJfZC5jb2xvciA/IF9kLmNvbG9yIDogJydcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW21vbnRoRm9ybWF0XT1cIl9vcHRpb25zWydtb250aFBpY2tlckZvcm1hdCddICYmIF9vcHRpb25zWydtb250aFBpY2tlckZvcm1hdCddLmxlbmd0aCA+IDAgPyBfb3B0aW9uc1snbW9udGhQaWNrZXJGb3JtYXQnXSA6IFtdICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHNlbGVjdCk9XCJtb250aE9uU2VsZWN0KCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW21vbnRoXT1cIm1vbnRoT3B0XCI+XG4gICAgICA8L2lvbi1jYWxlbmRhci1tb250aC1waWNrZXI+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0IHtcbiAgX2Q6IENhbGVuZGFyTW9kYWxPcHRpb25zIHwgYW55O1xuICBfb3B0aW9uczogQ2FsZW5kYXJDb21wb25lbnRPcHRpb25zIHwgYW55O1xuICBfdmlldzogJ21vbnRoJyB8ICdkYXlzJyA9ICdkYXlzJztcbiAgX2NhbGVuZGFyTW9udGhWYWx1ZTogQ2FsZW5kYXJEYXlbXSB8IGFueSA9IFtudWxsLCBudWxsXTtcblxuICBfc2hvd1RvZ2dsZUJ1dHRvbnMgPSB0cnVlO1xuICBnZXQgc2hvd1RvZ2dsZUJ1dHRvbnMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3dUb2dnbGVCdXR0b25zO1xuICB9XG5cbiAgc2V0IHNob3dUb2dnbGVCdXR0b25zKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2hvd1RvZ2dsZUJ1dHRvbnMgPSB2YWx1ZTtcbiAgfVxuXG4gIF9zaG93TW9udGhQaWNrZXIgPSB0cnVlO1xuICBnZXQgc2hvd01vbnRoUGlja2VyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zaG93TW9udGhQaWNrZXI7XG4gIH1cblxuICBzZXQgc2hvd01vbnRoUGlja2VyKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2hvd01vbnRoUGlja2VyID0gdmFsdWU7XG4gIH1cblxuICBtb250aE9wdDogQ2FsZW5kYXJNb250aCB8IGFueTtcblxuICBASW5wdXQoKVxuICBmb3JtYXQ6IHN0cmluZyA9IGRlZmF1bHRzLkRBVEVfRk9STUFUO1xuICBASW5wdXQoKVxuICB0eXBlOiBDYWxlbmRhckNvbXBvbmVudFR5cGVQcm9wZXJ0eSA9ICdzdHJpbmcnO1xuICBASW5wdXQoKVxuICByZWFkb25seSA9IGZhbHNlO1xuICBAT3V0cHV0KClcbiAgY2hhbmdlOiBFdmVudEVtaXR0ZXI8Q2FsZW5kYXJDb21wb25lbnRQYXlsb2FkVHlwZXM+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgbW9udGhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxDYWxlbmRhckNvbXBvbmVudE1vbnRoQ2hhbmdlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIHNlbGVjdDogRXZlbnRFbWl0dGVyPENhbGVuZGFyRGF5PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIHNlbGVjdFN0YXJ0OiBFdmVudEVtaXR0ZXI8Q2FsZW5kYXJEYXk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgc2VsZWN0RW5kOiBFdmVudEVtaXR0ZXI8Q2FsZW5kYXJEYXk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBvcHRpb25zKHZhbHVlOiBDYWxlbmRhckNvbXBvbmVudE9wdGlvbnMpIHtcbiAgICB0aGlzLl9vcHRpb25zID0gdmFsdWU7XG4gICAgdGhpcy5pbml0T3B0KCk7XG4gICAgaWYgKHRoaXMubW9udGhPcHQgJiYgdGhpcy5tb250aE9wdC5vcmlnaW5hbCkge1xuICAgICAgdGhpcy5tb250aE9wdCA9IHRoaXMuY3JlYXRlTW9udGgodGhpcy5tb250aE9wdC5vcmlnaW5hbC50aW1lKTtcbiAgICB9XG4gIH1cblxuICBnZXQgb3B0aW9ucygpOiBDYWxlbmRhckNvbXBvbmVudE9wdGlvbnMge1xuICAgIHJldHVybiB0aGlzLl9vcHRpb25zO1xuICB9XG5cbiAgcmVhZG9ubHkgTU9OVEhfREFURV9GT1JNQVQgPSAnTU1NTSB5eXl5JztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgY2FsU3ZjOiBDYWxlbmRhclNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pbml0T3B0KCk7XG4gICAgdGhpcy5tb250aE9wdCA9IHRoaXMuY3JlYXRlTW9udGgobmV3IERhdGUoKS5nZXRUaW1lKCkpO1xuICB9XG5cbiAgZ2V0Vmlld0RhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hhbmRsZVR5cGUodGhpcy5tb250aE9wdC5vcmlnaW5hbC50aW1lKTtcbiAgfVxuXG4gIGdldERhdGUoZGF0ZTogbnVtYmVyKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUpO1xuICB9XG5cbiAgc2V0Vmlld0RhdGUodmFsdWU6IENhbGVuZGFyQ29tcG9uZW50UGF5bG9hZFR5cGVzKSB7XG4gICAgdGhpcy5tb250aE9wdCA9IHRoaXMuY3JlYXRlTW9udGgodGhpcy5fcGF5bG9hZFRvVGltZU51bWJlcih2YWx1ZSkpO1xuICB9XG5cbiAgc3dpdGNoVmlldygpOiB2b2lkIHtcbiAgICB0aGlzLl92aWV3ID0gdGhpcy5fdmlldyA9PT0gJ2RheXMnID8gJ21vbnRoJyA6ICdkYXlzJztcbiAgfVxuXG4gIHByZXYoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3ZpZXcgPT09ICdkYXlzJykge1xuICAgICAgdGhpcy5iYWNrTW9udGgoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wcmV2WWVhcigpO1xuICAgIH1cbiAgfVxuXG4gIG5leHQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3ZpZXcgPT09ICdkYXlzJykge1xuICAgICAgdGhpcy5uZXh0TW9udGgoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5uZXh0WWVhcigpO1xuICAgIH1cbiAgfVxuXG4gIHByZXZZZWFyKCk6IHZvaWQge1xuICAgIGlmIChtb21lbnQodGhpcy5tb250aE9wdC5vcmlnaW5hbC50aW1lKS55ZWFyKCkgPT09IDE5NzApIHJldHVybjtcbiAgICBjb25zdCBiYWNrVGltZSA9IG1vbWVudCh0aGlzLm1vbnRoT3B0Lm9yaWdpbmFsLnRpbWUpXG4gICAgICAuc3VidHJhY3QoMSwgJ3llYXInKVxuICAgICAgLnZhbHVlT2YoKTtcbiAgICB0aGlzLm1vbnRoT3B0ID0gdGhpcy5jcmVhdGVNb250aChiYWNrVGltZSk7XG4gIH1cblxuICBuZXh0WWVhcigpOiB2b2lkIHtcbiAgICBjb25zdCBuZXh0VGltZSA9IG1vbWVudCh0aGlzLm1vbnRoT3B0Lm9yaWdpbmFsLnRpbWUpXG4gICAgICAuYWRkKDEsICd5ZWFyJylcbiAgICAgIC52YWx1ZU9mKCk7XG4gICAgdGhpcy5tb250aE9wdCA9IHRoaXMuY3JlYXRlTW9udGgobmV4dFRpbWUpO1xuICB9XG5cbiAgbmV4dE1vbnRoKCk6IHZvaWQge1xuICAgIGNvbnN0IG5leHRUaW1lID0gbW9tZW50KHRoaXMubW9udGhPcHQub3JpZ2luYWwudGltZSlcbiAgICAgIC5hZGQoMSwgJ21vbnRocycpXG4gICAgICAudmFsdWVPZigpO1xuICAgIHRoaXMubW9udGhDaGFuZ2UuZW1pdCh7XG4gICAgICBvbGRNb250aDogdGhpcy5jYWxTdmMubXVsdGlGb3JtYXQodGhpcy5tb250aE9wdC5vcmlnaW5hbC50aW1lKSxcbiAgICAgIG5ld01vbnRoOiB0aGlzLmNhbFN2Yy5tdWx0aUZvcm1hdChuZXh0VGltZSksXG4gICAgfSk7XG4gICAgdGhpcy5tb250aE9wdCA9IHRoaXMuY3JlYXRlTW9udGgobmV4dFRpbWUpO1xuICB9XG5cbiAgY2FuTmV4dCgpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuX2QudG8gfHwgdGhpcy5fdmlldyAhPT0gJ2RheXMnKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gdGhpcy5tb250aE9wdC5vcmlnaW5hbC50aW1lIDwgbW9tZW50KHRoaXMuX2QudG8pLnZhbHVlT2YoKTtcbiAgfVxuXG4gIGJhY2tNb250aCgpOiB2b2lkIHtcbiAgICBjb25zdCBiYWNrVGltZSA9IG1vbWVudCh0aGlzLm1vbnRoT3B0Lm9yaWdpbmFsLnRpbWUpXG4gICAgICAuc3VidHJhY3QoMSwgJ21vbnRocycpXG4gICAgICAudmFsdWVPZigpO1xuICAgIHRoaXMubW9udGhDaGFuZ2UuZW1pdCh7XG4gICAgICBvbGRNb250aDogdGhpcy5jYWxTdmMubXVsdGlGb3JtYXQodGhpcy5tb250aE9wdC5vcmlnaW5hbC50aW1lKSxcbiAgICAgIG5ld01vbnRoOiB0aGlzLmNhbFN2Yy5tdWx0aUZvcm1hdChiYWNrVGltZSksXG4gICAgfSk7XG4gICAgdGhpcy5tb250aE9wdCA9IHRoaXMuY3JlYXRlTW9udGgoYmFja1RpbWUpO1xuICB9XG5cbiAgY2FuQmFjaygpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuX2QuZnJvbSB8fCB0aGlzLl92aWV3ICE9PSAnZGF5cycpIHJldHVybiB0cnVlO1xuICAgIHJldHVybiB0aGlzLm1vbnRoT3B0Lm9yaWdpbmFsLnRpbWUgPiBtb21lbnQodGhpcy5fZC5mcm9tKS52YWx1ZU9mKCk7XG4gIH1cblxuICBtb250aE9uU2VsZWN0KG1vbnRoOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLl92aWV3ID0gJ2RheXMnO1xuICAgIGNvbnN0IG5ld01vbnRoID0gbW9tZW50KHRoaXMubW9udGhPcHQub3JpZ2luYWwudGltZSlcbiAgICAgIC5tb250aChtb250aClcbiAgICAgIC52YWx1ZU9mKCk7XG4gICAgdGhpcy5tb250aENoYW5nZS5lbWl0KHtcbiAgICAgIG9sZE1vbnRoOiB0aGlzLmNhbFN2Yy5tdWx0aUZvcm1hdCh0aGlzLm1vbnRoT3B0Lm9yaWdpbmFsLnRpbWUpLFxuICAgICAgbmV3TW9udGg6IHRoaXMuY2FsU3ZjLm11bHRpRm9ybWF0KG5ld01vbnRoKSxcbiAgICB9KTtcbiAgICB0aGlzLm1vbnRoT3B0ID0gdGhpcy5jcmVhdGVNb250aChuZXdNb250aCk7XG4gIH1cblxuICBvbkNoYW5nZWQoJGV2ZW50OiBDYWxlbmRhckRheVtdKTogdm9pZCB7XG4gICAgc3dpdGNoICh0aGlzLl9kLnBpY2tNb2RlKSB7XG4gICAgICBjYXNlIHBpY2tNb2Rlcy5TSU5HTEU6XG4gICAgICAgIGNvbnN0IGRhdGUgPSB0aGlzLl9oYW5kbGVUeXBlKCRldmVudFswXS50aW1lKTtcbiAgICAgICAgdGhpcy5fb25DaGFuZ2VkKGRhdGUpO1xuICAgICAgICB0aGlzLmNoYW5nZS5lbWl0KGRhdGUpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBwaWNrTW9kZXMuUkFOR0U6XG4gICAgICAgIGlmICgkZXZlbnRbMF0gJiYgJGV2ZW50WzFdKSB7XG4gICAgICAgICAgY29uc3QgcmFuZ2VEYXRlID0ge1xuICAgICAgICAgICAgZnJvbTogdGhpcy5faGFuZGxlVHlwZSgkZXZlbnRbMF0udGltZSksXG4gICAgICAgICAgICB0bzogdGhpcy5faGFuZGxlVHlwZSgkZXZlbnRbMV0udGltZSksXG4gICAgICAgICAgfTtcbiAgICAgICAgICB0aGlzLl9vbkNoYW5nZWQocmFuZ2VEYXRlKTtcbiAgICAgICAgICB0aGlzLmNoYW5nZS5lbWl0KHJhbmdlRGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgcGlja01vZGVzLk1VTFRJOlxuICAgICAgICBjb25zdCBkYXRlcyA9IFtdIGFzIGFueTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8ICRldmVudC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmICgkZXZlbnRbaV0gJiYgJGV2ZW50W2ldLnRpbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHB1c2hEYXRhID0gdGhpcy5faGFuZGxlVHlwZSgkZXZlbnRbaV0udGltZSkgYXMgYW55XG4gICAgICAgICAgICBkYXRlcy5wdXNoKHB1c2hEYXRhKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9vbkNoYW5nZWQoZGF0ZXMpO1xuICAgICAgICB0aGlzLmNoYW5nZS5lbWl0KGRhdGVzKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgfVxuICB9XG5cbiAgc3dpcGVFdmVudCgkZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIGNvbnN0IGlzTmV4dCA9ICRldmVudC5kZWx0YVggPCAwO1xuICAgIGlmIChpc05leHQgJiYgdGhpcy5jYW5OZXh0KCkpIHtcbiAgICAgIHRoaXMubmV4dE1vbnRoKCk7XG4gICAgfSBlbHNlIGlmICghaXNOZXh0ICYmIHRoaXMuY2FuQmFjaygpKSB7XG4gICAgICB0aGlzLmJhY2tNb250aCgpO1xuICAgIH1cbiAgfVxuXG4gIF9vbkNoYW5nZWQ6IEZ1bmN0aW9uID0gKCkgPT4ge307XG5cbiAgX29uVG91Y2hlZDogRnVuY3Rpb24gPSAoKSA9PiB7fTtcblxuICBfcGF5bG9hZFRvVGltZU51bWJlcih2YWx1ZTogQ2FsZW5kYXJDb21wb25lbnRQYXlsb2FkVHlwZXMpOiBudW1iZXIge1xuICAgIGxldCBkYXRlO1xuICAgIGlmICh0aGlzLnR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBkYXRlID0gbW9tZW50KHZhbHVlLCB0aGlzLmZvcm1hdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGUgPSBtb21lbnQodmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0ZS52YWx1ZU9mKCk7XG4gIH1cblxuICBfbW9udGhGb3JtYXQoZGF0ZTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbW9tZW50KGRhdGUpLmZvcm1hdCh0aGlzLl9kLm1vbnRoRm9ybWF0LnJlcGxhY2UoL3kvZywgJ1knKSk7XG4gIH1cblxuICBwcml2YXRlIGluaXRPcHQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX29wdGlvbnMgJiYgdHlwZW9mIHRoaXMuX29wdGlvbnMuc2hvd1RvZ2dsZUJ1dHRvbnMgPT09ICdib29sZWFuJykge1xuICAgICAgdGhpcy5zaG93VG9nZ2xlQnV0dG9ucyA9IHRoaXMuX29wdGlvbnMuc2hvd1RvZ2dsZUJ1dHRvbnM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9vcHRpb25zICYmIHR5cGVvZiB0aGlzLl9vcHRpb25zLnNob3dNb250aFBpY2tlciA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICB0aGlzLnNob3dNb250aFBpY2tlciA9IHRoaXMuX29wdGlvbnMuc2hvd01vbnRoUGlja2VyO1xuICAgICAgaWYgKHRoaXMuX3ZpZXcgIT09ICdkYXlzJyAmJiAhdGhpcy5zaG93TW9udGhQaWNrZXIpIHtcbiAgICAgICAgdGhpcy5fdmlldyA9ICdkYXlzJztcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fZCA9IHRoaXMuY2FsU3ZjLnNhZmVPcHQodGhpcy5fb3B0aW9ucyB8fCB7fSk7XG4gIH1cblxuICBjcmVhdGVNb250aChkYXRlOiBudW1iZXIpOiBDYWxlbmRhck1vbnRoIHtcbiAgICByZXR1cm4gdGhpcy5jYWxTdmMuY3JlYXRlTW9udGhzQnlQZXJpb2QoZGF0ZSwgMSwgdGhpcy5fZClbMF07XG4gIH1cblxuICBfY3JlYXRlQ2FsZW5kYXJEYXkodmFsdWU6IENhbGVuZGFyQ29tcG9uZW50UGF5bG9hZFR5cGVzKTogQ2FsZW5kYXJEYXkge1xuICAgIHJldHVybiB0aGlzLmNhbFN2Yy5jcmVhdGVDYWxlbmRhckRheSh0aGlzLl9wYXlsb2FkVG9UaW1lTnVtYmVyKHZhbHVlKSwgdGhpcy5fZCk7XG4gIH1cblxuICBfaGFuZGxlVHlwZSh2YWx1ZTogbnVtYmVyKTogQ2FsZW5kYXJDb21wb25lbnRQYXlsb2FkVHlwZXMge1xuICAgIGNvbnN0IGRhdGUgPSBtb21lbnQodmFsdWUpO1xuICAgIHN3aXRjaCAodGhpcy50eXBlKSB7XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICByZXR1cm4gZGF0ZS5mb3JtYXQodGhpcy5mb3JtYXQpO1xuICAgICAgY2FzZSAnanMtZGF0ZSc6XG4gICAgICAgIHJldHVybiBkYXRlLnRvRGF0ZSgpO1xuICAgICAgY2FzZSAnbW9tZW50JzpcbiAgICAgICAgcmV0dXJuIGRhdGU7XG4gICAgICBjYXNlICd0aW1lJzpcbiAgICAgICAgcmV0dXJuIGRhdGUudmFsdWVPZigpO1xuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgcmV0dXJuIGRhdGUudG9PYmplY3QoKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBkYXRlO1xuICAgIH1cbiAgfVxuXG4gIHdyaXRlVmFsdWUob2JqOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLl93cml0ZVZhbHVlKG9iaik7XG4gICAgaWYgKG9iaikge1xuICAgICAgaWYgKHRoaXMuX2NhbGVuZGFyTW9udGhWYWx1ZVswXSkge1xuICAgICAgICB0aGlzLm1vbnRoT3B0ID0gdGhpcy5jcmVhdGVNb250aCh0aGlzLl9jYWxlbmRhck1vbnRoVmFsdWVbMF0udGltZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm1vbnRoT3B0ID0gdGhpcy5jcmVhdGVNb250aChuZXcgRGF0ZSgpLmdldFRpbWUoKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKCkgPT4ge30pOiB2b2lkIHtcbiAgICB0aGlzLl9vbkNoYW5nZWQgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMuX29uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgX3dyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHRoaXMuX2NhbGVuZGFyTW9udGhWYWx1ZSA9IFtudWxsLCBudWxsXTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRoaXMuX2QucGlja01vZGUpIHtcbiAgICAgIGNhc2UgJ3NpbmdsZSc6XG4gICAgICAgIHRoaXMuX2NhbGVuZGFyTW9udGhWYWx1ZVswXSA9IHRoaXMuX2NyZWF0ZUNhbGVuZGFyRGF5KHZhbHVlKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3JhbmdlJzpcbiAgICAgICAgaWYgKHZhbHVlLmZyb20pIHtcbiAgICAgICAgICB0aGlzLl9jYWxlbmRhck1vbnRoVmFsdWVbMF0gPSB2YWx1ZS5mcm9tID8gdGhpcy5fY3JlYXRlQ2FsZW5kYXJEYXkodmFsdWUuZnJvbSkgOiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZS50bykge1xuICAgICAgICAgIHRoaXMuX2NhbGVuZGFyTW9udGhWYWx1ZVsxXSA9IHZhbHVlLnRvID8gdGhpcy5fY3JlYXRlQ2FsZW5kYXJEYXkodmFsdWUudG8pIDogbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnbXVsdGknOlxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICB0aGlzLl9jYWxlbmRhck1vbnRoVmFsdWUgPSB2YWx1ZS5tYXAoZSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY3JlYXRlQ2FsZW5kYXJEYXkoZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fY2FsZW5kYXJNb250aFZhbHVlID0gW251bGwsIG51bGxdO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgIH1cbiAgfVxufVxuIl19