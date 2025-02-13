import { ElementRef, ChangeDetectorRef, Renderer2, OnInit, AfterViewInit } from '@angular/core';
import { ModalController, IonContent } from '@ionic/angular';
import { CalendarDay, CalendarMonth, CalendarModalOptions, DayConfig } from '../calendar.model';
import { CalendarService } from '../services/calendar.service';
import DemandCalendarService from '../models/deman-calendar-service.Interface';
import * as i0 from "@angular/core";
export declare class CalendarDemandModal implements OnInit, AfterViewInit {
    private _renderer;
    _elementRef: ElementRef;
    modalCtrl: ModalController;
    ref: ChangeDetectorRef;
    calSvc: CalendarService;
    content: IonContent | any;
    monthsEle: ElementRef | any;
    ionPage: boolean;
    options: CalendarModalOptions | any;
    demandCalendarService: DemandCalendarService | null;
    latitude: string;
    longitude: string;
    cheaperText: string;
    averageText: string;
    higherText: string;
    loading: boolean;
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
    initDemandCalendar(): Promise<void>;
    buildDays(items: any[]): DayConfig[];
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
    repaintDOM(): any;
    findInitMonthNumber(date: Date): number;
    getDayTime(date: any): number;
    monthFormat(date: any): string;
    getDayFormatted(data: any): string | null;
    trackByIndex(index: number, momentDate: CalendarMonth): number;
    static ɵfac: i0.ɵɵFactoryDeclaration<CalendarDemandModal, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CalendarDemandModal, "ion-calendar-demand-modal", never, { "options": { "alias": "options"; "required": false; }; "demandCalendarService": { "alias": "demandCalendarService"; "required": false; }; "latitude": { "alias": "latitude"; "required": false; }; "longitude": { "alias": "longitude"; "required": false; }; "cheaperText": { "alias": "cheaperText"; "required": false; }; "averageText": { "alias": "averageText"; "required": false; }; "higherText": { "alias": "higherText"; "required": false; }; }, {}, never, ["[sub-header]"], false, never>;
}
