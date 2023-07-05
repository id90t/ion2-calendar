import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { CalendarService } from '../services/calendar.service';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import moment from 'moment';
import { defaults, pickModes } from '../config';
import * as i0 from "@angular/core";
import * as i1 from "../services/calendar.service";
import * as i2 from "@ionic/angular";
import * as i3 from "./calendar-week.component";
import * as i4 from "./month.component";
import * as i5 from "./month-picker.component";
import * as i6 from "@angular/common";
import * as i7 from "@angular/forms";
export const ION_CAL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CalendarComponent),
    multi: true,
};
export class CalendarComponent {
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
}
CalendarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CalendarComponent, deps: [{ token: i1.CalendarService }], target: i0.ɵɵFactoryTarget.Component });
CalendarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: CalendarComponent, selector: "ion-calendar", inputs: { format: "format", type: "type", readonly: "readonly", options: "options" }, outputs: { change: "change", monthChange: "monthChange", select: "select", selectStart: "selectStart", selectEnd: "selectEnd" }, providers: [ION_CAL_VALUE_ACCESSOR], ngImport: i0, template: `
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
  `, isInline: true, styles: [":host{padding:10px 20px;box-sizing:border-box;display:inline-block;background-color:#fff;width:100%}:host .title{padding:0 40px;overflow:hidden}:host .title .back,:host .title .forward,:host .title .switch-btn{display:block;position:relative;float:left;min-height:32px;margin:0;padding:0;--padding-start: 0;--padding-end: 0;font-size:15px}:host .title .back,:host .title .forward{color:#757575}:host .title .back{margin-left:-100%;left:-40px;width:40px}:host .title .forward{margin-left:-40px;right:-40px;width:40px}:host .title .switch-btn{--margin-top: 0;--margin-bottom: 0;--margin-start: auto;--margin-end: auto;width:100%;text-align:center;line-height:32px;color:#757575}:host .title .switch-btn .arrow-dropdown{margin-left:5px}:host .days.between .days-btn.is-last,:host .days.between .days-btn.is-first{border-radius:0}:host .component-mode .days.startSelection.is-last-wrap:after{border-radius:0}:host .component-mode .days.endSelection.is-first-wrap:after{border-radius:0}\n"], components: [{ type: i2.IonButton, selector: "ion-button", inputs: ["buttonType", "color", "disabled", "download", "expand", "fill", "form", "href", "mode", "rel", "routerAnimation", "routerDirection", "shape", "size", "strong", "target", "type"] }, { type: i2.IonIcon, selector: "ion-icon", inputs: ["color", "flipRtl", "icon", "ios", "lazy", "md", "mode", "name", "sanitize", "size", "src"] }, { type: i3.CalendarWeekComponent, selector: "ion-calendar-week", inputs: ["color", "weekArray", "weekStart"] }, { type: i4.MonthComponent, selector: "ion-calendar-month", inputs: ["month", "pickMode", "isSaveHistory", "id", "readonly", "color", "maxMultiDates"], outputs: ["change", "select", "selectStart", "selectEnd"] }, { type: i5.MonthPickerComponent, selector: "ion-calendar-month-picker", inputs: ["month", "color", "monthFormat"], outputs: ["select"] }], directives: [{ type: i6.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i7.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i7.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }], pipes: { "date": i6.DatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CalendarComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ion-calendar',
                    providers: [ION_CAL_VALUE_ACCESSOR],
                    styleUrls: ['./calendar.component.scss'],
                    template: `
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
  `,
                }]
        }], ctorParameters: function () { return [{ type: i1.CalendarService }]; }, propDecorators: { format: [{
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
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2NhbGVuZGFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQVdyRyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDL0QsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpFLE9BQVEsTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUM3QixPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7Ozs7Ozs7O0FBRWhELE1BQU0sQ0FBQyxNQUFNLHNCQUFzQixHQUFhO0lBQzlDLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztJQUNoRCxLQUFLLEVBQUUsSUFBSTtDQUNaLENBQUM7QUErREYsTUFBTSxPQUFPLGlCQUFpQjtJQTBENUIsWUFBbUIsTUFBdUI7UUFBdkIsV0FBTSxHQUFOLE1BQU0sQ0FBaUI7UUF2RDFDLFVBQUssR0FBcUIsTUFBTSxDQUFDO1FBQ2pDLHdCQUFtQixHQUF3QixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUV4RCx1QkFBa0IsR0FBRyxJQUFJLENBQUM7UUFTMUIscUJBQWdCLEdBQUcsSUFBSSxDQUFDO1FBWXhCLFdBQU0sR0FBVyxRQUFRLENBQUMsV0FBVyxDQUFDO1FBRXRDLFNBQUksR0FBa0MsUUFBUSxDQUFDO1FBRS9DLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFakIsV0FBTSxHQUFnRCxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXpFLGdCQUFXLEdBQStDLElB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Q0FBQyxDQUFDO29CQUNwQyxDQUFDLENBQUMsQ0FBQztpQkFDSjtxQkFBTTtvQkFDTCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7aUJBQ3pDO2dCQUNELE1BQU07WUFFUixRQUFRO1NBQ1Q7SUFDSCxDQUFDOzsrR0F0VFUsaUJBQWlCO21HQUFqQixpQkFBaUIsOFBBM0RqQixDQUFDLHNCQUFzQixDQUFDLDBCQUV6Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXVEVDs0RkFFVSxpQkFBaUI7a0JBN0Q3QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4QixTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztvQkFDbkMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7b0JBQ3hDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXVEVDtpQkFDRjtzR0E0QkMsTUFBTTtzQkFETCxLQUFLO2dCQUdOLElBQUk7c0JBREgsS0FBSztnQkFHTixRQUFRO3NCQURQLEtBQUs7Z0JBR04sTUFBTTtzQkFETCxNQUFNO2dCQUdQLFdBQVc7c0JBRFYsTUFBTTtnQkFHUCxNQUFNO3NCQURMLE1BQU07Z0JBR1AsV0FBVztzQkFEVixNQUFNO2dCQUdQLFNBQVM7c0JBRFIsTUFBTTtnQkFJSCxPQUFPO3NCQURWLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICBDYWxlbmRhck1vbnRoLFxuICBDYWxlbmRhck1vZGFsT3B0aW9ucyxcbiAgQ2FsZW5kYXJDb21wb25lbnRPcHRpb25zLFxuICBDYWxlbmRhckRheSxcbiAgQ2FsZW5kYXJDb21wb25lbnRQYXlsb2FkVHlwZXMsXG4gIENhbGVuZGFyQ29tcG9uZW50TW9udGhDaGFuZ2UsXG4gIENhbGVuZGFyQ29tcG9uZW50VHlwZVByb3BlcnR5LFxufSBmcm9tICcuLi9jYWxlbmRhci5tb2RlbCc7XG5pbXBvcnQgeyBDYWxlbmRhclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jYWxlbmRhci5zZXJ2aWNlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0ICBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IGRlZmF1bHRzLCBwaWNrTW9kZXMgfSBmcm9tICcuLi9jb25maWcnO1xuXG5leHBvcnQgY29uc3QgSU9OX0NBTF9WQUxVRV9BQ0NFU1NPUjogUHJvdmlkZXIgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBDYWxlbmRhckNvbXBvbmVudCksXG4gIG11bHRpOiB0cnVlLFxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaW9uLWNhbGVuZGFyJyxcbiAgcHJvdmlkZXJzOiBbSU9OX0NBTF9WQUxVRV9BQ0NFU1NPUl0sXG4gIHN0eWxlVXJsczogWycuL2NhbGVuZGFyLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+XG4gICAgICA8bmctdGVtcGxhdGUgW25nSWZdPVwiX3Nob3dNb250aFBpY2tlclwiIFtuZ0lmRWxzZV09XCJ0aXRsZVwiPlxuICAgICAgICA8aW9uLWJ1dHRvbiB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cImNsZWFyXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJzd2l0Y2gtYnRuXCJcbiAgICAgICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJnZXREYXRlKG1vbnRoT3B0Py5vcmlnaW5hbD8udGltZSkgfCBkYXRlOk1PTlRIX0RBVEVfRk9STUFUXCJcbiAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInN3aXRjaFZpZXcoKVwiPlxuICAgICAgICAgIHt7IF9tb250aEZvcm1hdChtb250aE9wdC5vcmlnaW5hbC50aW1lKSB9fVxuICAgICAgICAgIDxpb24taWNvbiBjbGFzcz1cImFycm93LWRyb3Bkb3duXCJcbiAgICAgICAgICAgICAgICAgICAgW25hbWVdPVwiX3ZpZXcgPT09ICdkYXlzJyA/ICdtZC1hcnJvdy1kcm9wZG93bicgOiAnbWQtYXJyb3ctZHJvcHVwJ1wiPjwvaW9uLWljb24+XG4gICAgICAgIDwvaW9uLWJ1dHRvbj5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICA8bmctdGVtcGxhdGUgI3RpdGxlPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic3dpdGNoLWJ0blwiXG4gICAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJnZXREYXRlKG1vbnRoT3B0Lm9yaWdpbmFsLnRpbWUpIHwgZGF0ZTpNT05USF9EQVRFX0ZPUk1BVFwiPlxuICAgICAgICAgIHt7IF9tb250aEZvcm1hdChtb250aE9wdC5vcmlnaW5hbC50aW1lKSB9fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICA8bmctdGVtcGxhdGUgW25nSWZdPVwiX3Nob3dUb2dnbGVCdXR0b25zXCI+XG4gICAgICAgIDxpb24tYnV0dG9uIHR5cGU9XCJidXR0b25cIiBmaWxsPVwiY2xlYXJcIiBjbGFzcz1cImJhY2tcIiBbZGlzYWJsZWRdPVwiIWNhbkJhY2soKVwiIChjbGljayk9XCJwcmV2KClcIj5cbiAgICAgICAgICA8aW9uLWljb24gc2xvdD1cImljb24tb25seVwiIHNpemU9XCJzbWFsbFwiIG5hbWU9XCJpb3MtYXJyb3ctYmFja1wiPjwvaW9uLWljb24+XG4gICAgICAgIDwvaW9uLWJ1dHRvbj5cbiAgICAgICAgPGlvbi1idXR0b24gdHlwZT1cImJ1dHRvblwiIGZpbGw9XCJjbGVhclwiIGNsYXNzPVwiZm9yd2FyZFwiIFtkaXNhYmxlZF09XCIhY2FuTmV4dCgpXCIgKGNsaWNrKT1cIm5leHQoKVwiPlxuICAgICAgICAgIDxpb24taWNvbiBzbG90PVwiaWNvbi1vbmx5XCIgc2l6ZT1cInNtYWxsXCIgbmFtZT1cImlvcy1hcnJvdy1mb3J3YXJkXCI+PC9pb24taWNvbj5cbiAgICAgICAgPC9pb24tYnV0dG9uPlxuICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8L2Rpdj5cbiAgICA8bmctdGVtcGxhdGUgW25nSWZdPVwiX3ZpZXcgPT09ICdkYXlzJ1wiIFtuZ0lmRWxzZV09XCJtb250aFBpY2tlclwiPlxuICAgICAgPGlvbi1jYWxlbmRhci13ZWVrIGNvbG9yPVwidHJhbnNwYXJlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIFt3ZWVrQXJyYXldPVwiX2Qud2Vla2RheXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIFt3ZWVrU3RhcnRdPVwiX2Qud2Vla1N0YXJ0XCI+XG4gICAgICA8L2lvbi1jYWxlbmRhci13ZWVrPlxuXG4gICAgICA8aW9uLWNhbGVuZGFyLW1vbnRoIGNsYXNzPVwiY29tcG9uZW50LW1vZGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cIl9jYWxlbmRhck1vbnRoVmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBbbW9udGhdPVwibW9udGhPcHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBbcmVhZG9ubHldPVwicmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAoY2hhbmdlKT1cIm9uQ2hhbmdlZCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKHN3aXBlKT1cInN3aXBlRXZlbnQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChzZWxlY3QpPVwic2VsZWN0LmVtaXQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChzZWxlY3RTdGFydCk9XCJzZWxlY3RTdGFydC5lbWl0KCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAoc2VsZWN0RW5kKT1cInNlbGVjdEVuZC5lbWl0KCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBbcGlja01vZGVdPVwiX2QucGlja01vZGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBbY29sb3JdPVwiX2QuY29sb3JcIj5cbiAgICAgIDwvaW9uLWNhbGVuZGFyLW1vbnRoPlxuICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICA8bmctdGVtcGxhdGUgI21vbnRoUGlja2VyPlxuICAgICAgPGlvbi1jYWxlbmRhci1tb250aC1waWNrZXIgW2NvbG9yXT1cIl9kLmNvbG9yID8gX2QuY29sb3IgOiAnJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbW9udGhGb3JtYXRdPVwiX29wdGlvbnNbJ21vbnRoUGlja2VyRm9ybWF0J10gJiYgX29wdGlvbnNbJ21vbnRoUGlja2VyRm9ybWF0J10ubGVuZ3RoID4gMCA/IF9vcHRpb25zWydtb250aFBpY2tlckZvcm1hdCddIDogW10gIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoc2VsZWN0KT1cIm1vbnRoT25TZWxlY3QoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbW9udGhdPVwibW9udGhPcHRcIj5cbiAgICAgIDwvaW9uLWNhbGVuZGFyLW1vbnRoLXBpY2tlcj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhckNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQge1xuICBfZDogQ2FsZW5kYXJNb2RhbE9wdGlvbnMgfCBhbnk7XG4gIF9vcHRpb25zOiBDYWxlbmRhckNvbXBvbmVudE9wdGlvbnMgfCBhbnk7XG4gIF92aWV3OiAnbW9udGgnIHwgJ2RheXMnID0gJ2RheXMnO1xuICBfY2FsZW5kYXJNb250aFZhbHVlOiBDYWxlbmRhckRheVtdIHwgYW55ID0gW251bGwsIG51bGxdO1xuXG4gIF9zaG93VG9nZ2xlQnV0dG9ucyA9IHRydWU7XG4gIGdldCBzaG93VG9nZ2xlQnV0dG9ucygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvd1RvZ2dsZUJ1dHRvbnM7XG4gIH1cblxuICBzZXQgc2hvd1RvZ2dsZUJ1dHRvbnModmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zaG93VG9nZ2xlQnV0dG9ucyA9IHZhbHVlO1xuICB9XG5cbiAgX3Nob3dNb250aFBpY2tlciA9IHRydWU7XG4gIGdldCBzaG93TW9udGhQaWNrZXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3dNb250aFBpY2tlcjtcbiAgfVxuXG4gIHNldCBzaG93TW9udGhQaWNrZXIodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zaG93TW9udGhQaWNrZXIgPSB2YWx1ZTtcbiAgfVxuXG4gIG1vbnRoT3B0OiBDYWxlbmRhck1vbnRoIHwgYW55O1xuXG4gIEBJbnB1dCgpXG4gIGZvcm1hdDogc3RyaW5nID0gZGVmYXVsdHMuREFURV9GT1JNQVQ7XG4gIEBJbnB1dCgpXG4gIHR5cGU6IENhbGVuZGFyQ29tcG9uZW50VHlwZVByb3BlcnR5ID0gJ3N0cmluZyc7XG4gIEBJbnB1dCgpXG4gIHJlYWRvbmx5ID0gZmFsc2U7XG4gIEBPdXRwdXQoKVxuICBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxDYWxlbmRhckNvbXBvbmVudFBheWxvYWRUeXBlcz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBtb250aENoYW5nZTogRXZlbnRFbWl0dGVyPENhbGVuZGFyQ29tcG9uZW50TW9udGhDaGFuZ2U+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgc2VsZWN0OiBFdmVudEVtaXR0ZXI8Q2FsZW5kYXJEYXk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgc2VsZWN0U3RhcnQ6IEV2ZW50RW1pdHRlcjxDYWxlbmRhckRheT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBzZWxlY3RFbmQ6IEV2ZW50RW1pdHRlcjxDYWxlbmRhckRheT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQElucHV0KClcbiAgc2V0IG9wdGlvbnModmFsdWU6IENhbGVuZGFyQ29tcG9uZW50T3B0aW9ucykge1xuICAgIHRoaXMuX29wdGlvbnMgPSB2YWx1ZTtcbiAgICB0aGlzLmluaXRPcHQoKTtcbiAgICBpZiAodGhpcy5tb250aE9wdCAmJiB0aGlzLm1vbnRoT3B0Lm9yaWdpbmFsKSB7XG4gICAgICB0aGlzLm1vbnRoT3B0ID0gdGhpcy5jcmVhdGVNb250aCh0aGlzLm1vbnRoT3B0Lm9yaWdpbmFsLnRpbWUpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBvcHRpb25zKCk6IENhbGVuZGFyQ29tcG9uZW50T3B0aW9ucyB7XG4gICAgcmV0dXJuIHRoaXMuX29wdGlvbnM7XG4gIH1cblxuICByZWFkb25seSBNT05USF9EQVRFX0ZPUk1BVCA9ICdNTU1NIHl5eXknO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjYWxTdmM6IENhbGVuZGFyU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmluaXRPcHQoKTtcbiAgICB0aGlzLm1vbnRoT3B0ID0gdGhpcy5jcmVhdGVNb250aChuZXcgRGF0ZSgpLmdldFRpbWUoKSk7XG4gIH1cblxuICBnZXRWaWV3RGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5faGFuZGxlVHlwZSh0aGlzLm1vbnRoT3B0Lm9yaWdpbmFsLnRpbWUpO1xuICB9XG5cbiAgZ2V0RGF0ZShkYXRlOiBudW1iZXIpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoZGF0ZSk7XG4gIH1cblxuICBzZXRWaWV3RGF0ZSh2YWx1ZTogQ2FsZW5kYXJDb21wb25lbnRQYXlsb2FkVHlwZXMpIHtcbiAgICB0aGlzLm1vbnRoT3B0ID0gdGhpcy5jcmVhdGVNb250aCh0aGlzLl9wYXlsb2FkVG9UaW1lTnVtYmVyKHZhbHVlKSk7XG4gIH1cblxuICBzd2l0Y2hWaWV3KCk6IHZvaWQge1xuICAgIHRoaXMuX3ZpZXcgPSB0aGlzLl92aWV3ID09PSAnZGF5cycgPyAnbW9udGgnIDogJ2RheXMnO1xuICB9XG5cbiAgcHJldigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fdmlldyA9PT0gJ2RheXMnKSB7XG4gICAgICB0aGlzLmJhY2tNb250aCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByZXZZZWFyKCk7XG4gICAgfVxuICB9XG5cbiAgbmV4dCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fdmlldyA9PT0gJ2RheXMnKSB7XG4gICAgICB0aGlzLm5leHRNb250aCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm5leHRZZWFyKCk7XG4gICAgfVxuICB9XG5cbiAgcHJldlllYXIoKTogdm9pZCB7XG4gICAgaWYgKG1vbWVudCh0aGlzLm1vbnRoT3B0Lm9yaWdpbmFsLnRpbWUpLnllYXIoKSA9PT0gMTk3MCkgcmV0dXJuO1xuICAgIGNvbnN0IGJhY2tUaW1lID0gbW9tZW50KHRoaXMubW9udGhPcHQub3JpZ2luYWwudGltZSlcbiAgICAgIC5zdWJ0cmFjdCgxLCAneWVhcicpXG4gICAgICAudmFsdWVPZigpO1xuICAgIHRoaXMubW9udGhPcHQgPSB0aGlzLmNyZWF0ZU1vbnRoKGJhY2tUaW1lKTtcbiAgfVxuXG4gIG5leHRZZWFyKCk6IHZvaWQge1xuICAgIGNvbnN0IG5leHRUaW1lID0gbW9tZW50KHRoaXMubW9udGhPcHQub3JpZ2luYWwudGltZSlcbiAgICAgIC5hZGQoMSwgJ3llYXInKVxuICAgICAgLnZhbHVlT2YoKTtcbiAgICB0aGlzLm1vbnRoT3B0ID0gdGhpcy5jcmVhdGVNb250aChuZXh0VGltZSk7XG4gIH1cblxuICBuZXh0TW9udGgoKTogdm9pZCB7XG4gICAgY29uc3QgbmV4dFRpbWUgPSBtb21lbnQodGhpcy5tb250aE9wdC5vcmlnaW5hbC50aW1lKVxuICAgICAgLmFkZCgxLCAnbW9udGhzJylcbiAgICAgIC52YWx1ZU9mKCk7XG4gICAgdGhpcy5tb250aENoYW5nZS5lbWl0KHtcbiAgICAgIG9sZE1vbnRoOiB0aGlzLmNhbFN2Yy5tdWx0aUZvcm1hdCh0aGlzLm1vbnRoT3B0Lm9yaWdpbmFsLnRpbWUpLFxuICAgICAgbmV3TW9udGg6IHRoaXMuY2FsU3ZjLm11bHRpRm9ybWF0KG5leHRUaW1lKSxcbiAgICB9KTtcbiAgICB0aGlzLm1vbnRoT3B0ID0gdGhpcy5jcmVhdGVNb250aChuZXh0VGltZSk7XG4gIH1cblxuICBjYW5OZXh0KCk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5fZC50byB8fCB0aGlzLl92aWV3ICE9PSAnZGF5cycpIHJldHVybiB0cnVlO1xuICAgIHJldHVybiB0aGlzLm1vbnRoT3B0Lm9yaWdpbmFsLnRpbWUgPCBtb21lbnQodGhpcy5fZC50bykudmFsdWVPZigpO1xuICB9XG5cbiAgYmFja01vbnRoKCk6IHZvaWQge1xuICAgIGNvbnN0IGJhY2tUaW1lID0gbW9tZW50KHRoaXMubW9udGhPcHQub3JpZ2luYWwudGltZSlcbiAgICAgIC5zdWJ0cmFjdCgxLCAnbW9udGhzJylcbiAgICAgIC52YWx1ZU9mKCk7XG4gICAgdGhpcy5tb250aENoYW5nZS5lbWl0KHtcbiAgICAgIG9sZE1vbnRoOiB0aGlzLmNhbFN2Yy5tdWx0aUZvcm1hdCh0aGlzLm1vbnRoT3B0Lm9yaWdpbmFsLnRpbWUpLFxuICAgICAgbmV3TW9udGg6IHRoaXMuY2FsU3ZjLm11bHRpRm9ybWF0KGJhY2tUaW1lKSxcbiAgICB9KTtcbiAgICB0aGlzLm1vbnRoT3B0ID0gdGhpcy5jcmVhdGVNb250aChiYWNrVGltZSk7XG4gIH1cblxuICBjYW5CYWNrKCk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5fZC5mcm9tIHx8IHRoaXMuX3ZpZXcgIT09ICdkYXlzJykgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIHRoaXMubW9udGhPcHQub3JpZ2luYWwudGltZSA+IG1vbWVudCh0aGlzLl9kLmZyb20pLnZhbHVlT2YoKTtcbiAgfVxuXG4gIG1vbnRoT25TZWxlY3QobW9udGg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuX3ZpZXcgPSAnZGF5cyc7XG4gICAgY29uc3QgbmV3TW9udGggPSBtb21lbnQodGhpcy5tb250aE9wdC5vcmlnaW5hbC50aW1lKVxuICAgICAgLm1vbnRoKG1vbnRoKVxuICAgICAgLnZhbHVlT2YoKTtcbiAgICB0aGlzLm1vbnRoQ2hhbmdlLmVtaXQoe1xuICAgICAgb2xkTW9udGg6IHRoaXMuY2FsU3ZjLm11bHRpRm9ybWF0KHRoaXMubW9udGhPcHQub3JpZ2luYWwudGltZSksXG4gICAgICBuZXdNb250aDogdGhpcy5jYWxTdmMubXVsdGlGb3JtYXQobmV3TW9udGgpLFxuICAgIH0pO1xuICAgIHRoaXMubW9udGhPcHQgPSB0aGlzLmNyZWF0ZU1vbnRoKG5ld01vbnRoKTtcbiAgfVxuXG4gIG9uQ2hhbmdlZCgkZXZlbnQ6IENhbGVuZGFyRGF5W10pOiB2b2lkIHtcbiAgICBzd2l0Y2ggKHRoaXMuX2QucGlja01vZGUpIHtcbiAgICAgIGNhc2UgcGlja01vZGVzLlNJTkdMRTpcbiAgICAgICAgY29uc3QgZGF0ZSA9IHRoaXMuX2hhbmRsZVR5cGUoJGV2ZW50WzBdLnRpbWUpO1xuICAgICAgICB0aGlzLl9vbkNoYW5nZWQoZGF0ZSk7XG4gICAgICAgIHRoaXMuY2hhbmdlLmVtaXQoZGF0ZSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIHBpY2tNb2Rlcy5SQU5HRTpcbiAgICAgICAgaWYgKCRldmVudFswXSAmJiAkZXZlbnRbMV0pIHtcbiAgICAgICAgICBjb25zdCByYW5nZURhdGUgPSB7XG4gICAgICAgICAgICBmcm9tOiB0aGlzLl9oYW5kbGVUeXBlKCRldmVudFswXS50aW1lKSxcbiAgICAgICAgICAgIHRvOiB0aGlzLl9oYW5kbGVUeXBlKCRldmVudFsxXS50aW1lKSxcbiAgICAgICAgICB9O1xuICAgICAgICAgIHRoaXMuX29uQ2hhbmdlZChyYW5nZURhdGUpO1xuICAgICAgICAgIHRoaXMuY2hhbmdlLmVtaXQocmFuZ2VEYXRlKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBwaWNrTW9kZXMuTVVMVEk6XG4gICAgICAgIGNvbnN0IGRhdGVzID0gW10gYXMgYW55O1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgJGV2ZW50Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKCRldmVudFtpXSAmJiAkZXZlbnRbaV0udGltZSkge1xuICAgICAgICAgICAgY29uc3QgcHVzaERhdGEgPSB0aGlzLl9oYW5kbGVUeXBlKCRldmVudFtpXS50aW1lKSBhcyBhbnlcbiAgICAgICAgICAgIGRhdGVzLnB1c2gocHVzaERhdGEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX29uQ2hhbmdlZChkYXRlcyk7XG4gICAgICAgIHRoaXMuY2hhbmdlLmVtaXQoZGF0ZXMpO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICB9XG4gIH1cblxuICBzd2lwZUV2ZW50KCRldmVudDogYW55KTogdm9pZCB7XG4gICAgY29uc3QgaXNOZXh0ID0gJGV2ZW50LmRlbHRhWCA8IDA7XG4gICAgaWYgKGlzTmV4dCAmJiB0aGlzLmNhbk5leHQoKSkge1xuICAgICAgdGhpcy5uZXh0TW9udGgoKTtcbiAgICB9IGVsc2UgaWYgKCFpc05leHQgJiYgdGhpcy5jYW5CYWNrKCkpIHtcbiAgICAgIHRoaXMuYmFja01vbnRoKCk7XG4gICAgfVxuICB9XG5cbiAgX29uQ2hhbmdlZDogRnVuY3Rpb24gPSAoKSA9PiB7fTtcblxuICBfb25Ub3VjaGVkOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuXG4gIF9wYXlsb2FkVG9UaW1lTnVtYmVyKHZhbHVlOiBDYWxlbmRhckNvbXBvbmVudFBheWxvYWRUeXBlcyk6IG51bWJlciB7XG4gICAgbGV0IGRhdGU7XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGRhdGUgPSBtb21lbnQodmFsdWUsIHRoaXMuZm9ybWF0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0ZSA9IG1vbWVudCh2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRlLnZhbHVlT2YoKTtcbiAgfVxuXG4gIF9tb250aEZvcm1hdChkYXRlOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiBtb21lbnQoZGF0ZSkuZm9ybWF0KHRoaXMuX2QubW9udGhGb3JtYXQucmVwbGFjZSgveS9nLCAnWScpKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdE9wdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fb3B0aW9ucyAmJiB0eXBlb2YgdGhpcy5fb3B0aW9ucy5zaG93VG9nZ2xlQnV0dG9ucyA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICB0aGlzLnNob3dUb2dnbGVCdXR0b25zID0gdGhpcy5fb3B0aW9ucy5zaG93VG9nZ2xlQnV0dG9ucztcbiAgICB9XG4gICAgaWYgKHRoaXMuX29wdGlvbnMgJiYgdHlwZW9mIHRoaXMuX29wdGlvbnMuc2hvd01vbnRoUGlja2VyID09PSAnYm9vbGVhbicpIHtcbiAgICAgIHRoaXMuc2hvd01vbnRoUGlja2VyID0gdGhpcy5fb3B0aW9ucy5zaG93TW9udGhQaWNrZXI7XG4gICAgICBpZiAodGhpcy5fdmlldyAhPT0gJ2RheXMnICYmICF0aGlzLnNob3dNb250aFBpY2tlcikge1xuICAgICAgICB0aGlzLl92aWV3ID0gJ2RheXMnO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9kID0gdGhpcy5jYWxTdmMuc2FmZU9wdCh0aGlzLl9vcHRpb25zIHx8IHt9KTtcbiAgfVxuXG4gIGNyZWF0ZU1vbnRoKGRhdGU6IG51bWJlcik6IENhbGVuZGFyTW9udGgge1xuICAgIHJldHVybiB0aGlzLmNhbFN2Yy5jcmVhdGVNb250aHNCeVBlcmlvZChkYXRlLCAxLCB0aGlzLl9kKVswXTtcbiAgfVxuXG4gIF9jcmVhdGVDYWxlbmRhckRheSh2YWx1ZTogQ2FsZW5kYXJDb21wb25lbnRQYXlsb2FkVHlwZXMpOiBDYWxlbmRhckRheSB7XG4gICAgcmV0dXJuIHRoaXMuY2FsU3ZjLmNyZWF0ZUNhbGVuZGFyRGF5KHRoaXMuX3BheWxvYWRUb1RpbWVOdW1iZXIodmFsdWUpLCB0aGlzLl9kKTtcbiAgfVxuXG4gIF9oYW5kbGVUeXBlKHZhbHVlOiBudW1iZXIpOiBDYWxlbmRhckNvbXBvbmVudFBheWxvYWRUeXBlcyB7XG4gICAgY29uc3QgZGF0ZSA9IG1vbWVudCh2YWx1ZSk7XG4gICAgc3dpdGNoICh0aGlzLnR5cGUpIHtcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgIHJldHVybiBkYXRlLmZvcm1hdCh0aGlzLmZvcm1hdCk7XG4gICAgICBjYXNlICdqcy1kYXRlJzpcbiAgICAgICAgcmV0dXJuIGRhdGUudG9EYXRlKCk7XG4gICAgICBjYXNlICdtb21lbnQnOlxuICAgICAgICByZXR1cm4gZGF0ZTtcbiAgICAgIGNhc2UgJ3RpbWUnOlxuICAgICAgICByZXR1cm4gZGF0ZS52YWx1ZU9mKCk7XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICByZXR1cm4gZGF0ZS50b09iamVjdCgpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGRhdGU7XG4gICAgfVxuICB9XG5cbiAgd3JpdGVWYWx1ZShvYmo6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuX3dyaXRlVmFsdWUob2JqKTtcbiAgICBpZiAob2JqKSB7XG4gICAgICBpZiAodGhpcy5fY2FsZW5kYXJNb250aFZhbHVlWzBdKSB7XG4gICAgICAgIHRoaXMubW9udGhPcHQgPSB0aGlzLmNyZWF0ZU1vbnRoKHRoaXMuX2NhbGVuZGFyTW9udGhWYWx1ZVswXS50aW1lKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubW9udGhPcHQgPSB0aGlzLmNyZWF0ZU1vbnRoKG5ldyBEYXRlKCkuZ2V0VGltZSgpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoKSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMuX29uQ2hhbmdlZCA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHt9KTogdm9pZCB7XG4gICAgdGhpcy5fb25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBfd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgdGhpcy5fY2FsZW5kYXJNb250aFZhbHVlID0gW251bGwsIG51bGxdO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHN3aXRjaCAodGhpcy5fZC5waWNrTW9kZSkge1xuICAgICAgY2FzZSAnc2luZ2xlJzpcbiAgICAgICAgdGhpcy5fY2FsZW5kYXJNb250aFZhbHVlWzBdID0gdGhpcy5fY3JlYXRlQ2FsZW5kYXJEYXkodmFsdWUpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAncmFuZ2UnOlxuICAgICAgICBpZiAodmFsdWUuZnJvbSkge1xuICAgICAgICAgIHRoaXMuX2NhbGVuZGFyTW9udGhWYWx1ZVswXSA9IHZhbHVlLmZyb20gPyB0aGlzLl9jcmVhdGVDYWxlbmRhckRheSh2YWx1ZS5mcm9tKSA6IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlLnRvKSB7XG4gICAgICAgICAgdGhpcy5fY2FsZW5kYXJNb250aFZhbHVlWzFdID0gdmFsdWUudG8gPyB0aGlzLl9jcmVhdGVDYWxlbmRhckRheSh2YWx1ZS50bykgOiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdtdWx0aSc6XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgIHRoaXMuX2NhbGVuZGFyTW9udGhWYWx1ZSA9IHZhbHVlLm1hcChlID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jcmVhdGVDYWxlbmRhckRheShlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9jYWxlbmRhck1vbnRoVmFsdWUgPSBbbnVsbCwgbnVsbF07XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgfVxuICB9XG59XG4iXX0=