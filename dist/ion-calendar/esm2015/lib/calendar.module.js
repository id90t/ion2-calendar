import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule, ModalController } from '@ionic/angular';
import { CalendarController } from './calendar.controller';
import { DEFAULT_CALENDAR_OPTIONS } from './services/calendar-options.provider';
import { CalendarService } from './services/calendar.service';
import { CALENDAR_COMPONENTS } from './components';
import * as i0 from "@angular/core";
import * as i1 from "./components/calendar.modal";
import * as i2 from "./components/calendar-week.component";
import * as i3 from "./components/month.component";
import * as i4 from "./components/calendar.component";
import * as i5 from "./components/month-picker.component";
export function calendarController(modalCtrl, calSvc) {
    return new CalendarController(modalCtrl, calSvc);
}
export class CalendarModule {
    static forRoot(defaultOptions = {}) {
        return {
            ngModule: CalendarModule,
            providers: [
                { provide: DEFAULT_CALENDAR_OPTIONS, useValue: defaultOptions }
            ]
        };
    }
}
CalendarModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CalendarModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CalendarModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CalendarModule, declarations: [i1.CalendarModal, i2.CalendarWeekComponent, i3.MonthComponent, i4.CalendarComponent, i5.MonthPickerComponent], imports: [CommonModule, IonicModule, FormsModule], exports: [i1.CalendarModal, i2.CalendarWeekComponent, i3.MonthComponent, i4.CalendarComponent, i5.MonthPickerComponent] });
CalendarModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CalendarModule, providers: [
        CalendarService,
        {
            provide: CalendarController,
            useFactory: calendarController,
            deps: [ModalController, CalendarService],
        },
    ], imports: [[CommonModule, IonicModule, FormsModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CalendarModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, IonicModule, FormsModule],
                    declarations: CALENDAR_COMPONENTS,
                    exports: CALENDAR_COMPONENTS,
                    entryComponents: CALENDAR_COMPONENTS,
                    providers: [
                        CalendarService,
                        {
                            provide: CalendarController,
                            useFactory: calendarController,
                            deps: [ModalController, CalendarService],
                        },
                    ],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9jYWxlbmRhci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxzQkFBc0IsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDdEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTlELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzNELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7Ozs7QUFFbkQsTUFBTSxVQUFVLGtCQUFrQixDQUFDLFNBQTBCLEVBQUUsTUFBdUI7SUFDcEYsT0FBTyxJQUFJLGtCQUFrQixDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNuRCxDQUFDO0FBaUJELE1BQU0sT0FBTyxjQUFjO0lBQ3pCLE1BQU0sQ0FBQyxPQUFPLENBQUMsaUJBQXVDLEVBQUU7UUFDdEQsT0FBTztZQUNMLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFNBQVMsRUFBRTtnQkFDVCxFQUFFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFO2FBQ2hFO1NBQ0YsQ0FBQztJQUNKLENBQUM7OzRHQVJVLGNBQWM7NkdBQWQsY0FBYywwSUFkZixZQUFZLEVBQUUsV0FBVyxFQUFFLFdBQVc7NkdBY3JDLGNBQWMsYUFWZDtRQUNULGVBQWU7UUFDZjtZQUNFLE9BQU8sRUFBRSxrQkFBa0I7WUFDM0IsVUFBVSxFQUFFLGtCQUFrQjtZQUM5QixJQUFJLEVBQUUsQ0FBQyxlQUFlLEVBQUUsZUFBZSxDQUFDO1NBQ3pDO0tBQ0YsWUFYUSxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsV0FBVyxDQUFDOzRGQWN0QyxjQUFjO2tCQWYxQixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsV0FBVyxDQUFDO29CQUNqRCxZQUFZLEVBQUUsbUJBQW1CO29CQUNqQyxPQUFPLEVBQUUsbUJBQW1CO29CQUM1QixlQUFlLEVBQUUsbUJBQW1CO29CQUNwQyxTQUFTLEVBQUU7d0JBQ1QsZUFBZTt3QkFDZjs0QkFDRSxPQUFPLEVBQUUsa0JBQWtCOzRCQUMzQixVQUFVLEVBQUUsa0JBQWtCOzRCQUM5QixJQUFJLEVBQUUsQ0FBQyxlQUFlLEVBQUUsZUFBZSxDQUFDO3lCQUN6QztxQkFDRjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztpQkFDbEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW9uaWNNb2R1bGUsIE1vZGFsQ29udHJvbGxlciB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7IENhbGVuZGFyTW9kYWxPcHRpb25zIH0gZnJvbSAnLi9jYWxlbmRhci5tb2RlbCc7XG5pbXBvcnQgeyBDYWxlbmRhckNvbnRyb2xsZXIgfSBmcm9tICcuL2NhbGVuZGFyLmNvbnRyb2xsZXInO1xuaW1wb3J0IHsgREVGQVVMVF9DQUxFTkRBUl9PUFRJT05TIH0gZnJvbSAnLi9zZXJ2aWNlcy9jYWxlbmRhci1vcHRpb25zLnByb3ZpZGVyJztcbmltcG9ydCB7IENhbGVuZGFyU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvY2FsZW5kYXIuc2VydmljZSc7XG5pbXBvcnQgeyBDQUxFTkRBUl9DT01QT05FTlRTIH0gZnJvbSAnLi9jb21wb25lbnRzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGVuZGFyQ29udHJvbGxlcihtb2RhbEN0cmw6IE1vZGFsQ29udHJvbGxlciwgY2FsU3ZjOiBDYWxlbmRhclNlcnZpY2UpIHtcbiAgcmV0dXJuIG5ldyBDYWxlbmRhckNvbnRyb2xsZXIobW9kYWxDdHJsLCBjYWxTdmMpO1xufVxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBJb25pY01vZHVsZSwgRm9ybXNNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IENBTEVOREFSX0NPTVBPTkVOVFMsXG4gIGV4cG9ydHM6IENBTEVOREFSX0NPTVBPTkVOVFMsXG4gIGVudHJ5Q29tcG9uZW50czogQ0FMRU5EQVJfQ09NUE9ORU5UUyxcbiAgcHJvdmlkZXJzOiBbXG4gICAgQ2FsZW5kYXJTZXJ2aWNlLFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IENhbGVuZGFyQ29udHJvbGxlcixcbiAgICAgIHVzZUZhY3Rvcnk6IGNhbGVuZGFyQ29udHJvbGxlcixcbiAgICAgIGRlcHM6IFtNb2RhbENvbnRyb2xsZXIsIENhbGVuZGFyU2VydmljZV0sXG4gICAgfSxcbiAgXSxcbiAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdLFxufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhck1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KGRlZmF1bHRPcHRpb25zOiBDYWxlbmRhck1vZGFsT3B0aW9ucyA9IHt9KTogTW9kdWxlV2l0aFByb3ZpZGVyczxDYWxlbmRhck1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQ2FsZW5kYXJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgeyBwcm92aWRlOiBERUZBVUxUX0NBTEVOREFSX09QVElPTlMsIHVzZVZhbHVlOiBkZWZhdWx0T3B0aW9ucyB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19