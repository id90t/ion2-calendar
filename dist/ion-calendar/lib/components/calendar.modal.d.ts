import { ElementRef, ChangeDetectorRef, Renderer2, OnInit, AfterViewInit } from '@angular/core';
import { ModalController, IonContent } from '@ionic/angular';
import { CalendarDay, CalendarMonth, CalendarModalOptions } from '../calendar.model';
import { CalendarService } from '../services/calendar.service';
import * as i0 from "@angular/core";
export declare class CalendarModal implements OnInit, AfterViewInit {
    private _renderer;
    _elementRef: ElementRef;
    modalCtrl: ModalController;
    ref: ChangeDetectorRef;
    calSvc: CalendarService;
    content: IonContent | any;
    monthsEle: ElementRef | any;
    ionPage: boolean;
    options: CalendarModalOptions | any;
    datesTemp: Array<CalendarDay> | any;
    calendarMonths: Array<CalendarMonth> | any;
    step: number | any;
    showYearPicker: boolean | any;
    year: number | any;
    years: Array<number> | any;
    _scrollLock: boolean;
    _d: any;
    actualFirstTime: number | any;
    constructor(_renderer: Renderer2, _elementRef: ElementRef, modalCtrl: ModalController, ref: ChangeDetectorRef, calSvc: CalendarService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    init(): void;
    initDefaultDate(): void;
    findCssClass(): void;
    onChange(data: any): void;
    onCancel(): void;
    done(): void;
    canDone(): boolean;
    clear(): void;
    canClear(): boolean;
    nextMonth(event: any): void;
    backwardsMonth(): void;
    scrollToDate(date: Date): void;
    scrollToDefaultDate(): void;
    onScroll($event: any): void;
    /**
     * In some older Safari versions (observed at Mac's Safari 10.0), there is an issue where style updates to
     * shadowRoot descendants don't cause a browser repaint.
     * See for more details: https://github.com/Polymer/polymer/issues/4701
     */
    repaintDOM(): any;
    findInitMonthNumber(date: Date): number;
    _getDayTime(date: any): number;
    _monthFormat(date: any): string;
    _getDayFormatted(data: any): string | null;
    trackByIndex(index: number, momentDate: CalendarMonth): number;
    static ɵfac: i0.ɵɵFactoryDeclaration<CalendarModal, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CalendarModal, "ion-calendar-modal", never, { "options": { "alias": "options"; "required": false; }; }, {}, never, ["[sub-header]"], false, never>;
}
