import { ModuleWithProviders } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CalendarModalOptions } from './calendar.model';
import { CalendarController } from './calendar.controller';
import { CalendarService } from './services/calendar.service';
import * as i0 from "@angular/core";
import * as i1 from "./components/calendar.modal";
import * as i2 from "./components/calendar-week.component";
import * as i3 from "./components/month.component";
import * as i4 from "./components/calendar.component";
import * as i5 from "./components/month-picker.component";
import * as i6 from "./components/calendar-demand.component";
import * as i7 from "@angular/common";
import * as i8 from "@ionic/angular";
import * as i9 from "@angular/forms";
export declare function calendarController(modalCtrl: ModalController, calSvc: CalendarService): CalendarController;
export declare class CalendarModule {
    static forRoot(defaultOptions?: CalendarModalOptions): ModuleWithProviders<CalendarModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CalendarModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<CalendarModule, [typeof i1.CalendarModal, typeof i2.CalendarWeekComponent, typeof i3.MonthComponent, typeof i4.CalendarComponent, typeof i5.MonthPickerComponent, typeof i6.CalendarDemandModal], [typeof i7.CommonModule, typeof i8.IonicModule, typeof i9.FormsModule], [typeof i1.CalendarModal, typeof i2.CalendarWeekComponent, typeof i3.MonthComponent, typeof i4.CalendarComponent, typeof i5.MonthPickerComponent, typeof i6.CalendarDemandModal]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<CalendarModule>;
}
