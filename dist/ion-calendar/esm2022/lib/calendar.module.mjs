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
import * as i6 from "./components/calendar-demand.component";
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
    static { this.ɵfac = function CalendarModule_Factory(t) { return new (t || CalendarModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: CalendarModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
            CalendarService,
            {
                provide: CalendarController,
                useFactory: calendarController,
                deps: [ModalController, CalendarService],
            },
        ], imports: [CommonModule, IonicModule, FormsModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CalendarModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, IonicModule, FormsModule],
                declarations: CALENDAR_COMPONENTS,
                exports: CALENDAR_COMPONENTS,
                providers: [
                    CalendarService,
                    {
                        provide: CalendarController,
                        useFactory: calendarController,
                        deps: [ModalController, CalendarService],
                    },
                ],
                schemas: [CUSTOM_ELEMENTS_SCHEMA]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CalendarModule, { declarations: [i1.CalendarModal, i2.CalendarWeekComponent, i3.MonthComponent, i4.CalendarComponent, i5.MonthPickerComponent, i6.CalendarDemandModal], imports: [CommonModule, IonicModule, FormsModule], exports: [i1.CalendarModal, i2.CalendarWeekComponent, i3.MonthComponent, i4.CalendarComponent, i5.MonthPickerComponent, i6.CalendarDemandModal] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9jYWxlbmRhci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxzQkFBc0IsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDdEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTlELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzNELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7Ozs7O0FBRW5ELE1BQU0sVUFBVSxrQkFBa0IsQ0FBQyxTQUEwQixFQUFFLE1BQXVCO0lBQ3BGLE9BQU8sSUFBSSxrQkFBa0IsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDbkQsQ0FBQztBQWdCRCxNQUFNLE9BQU8sY0FBYztJQUN6QixNQUFNLENBQUMsT0FBTyxDQUFDLGlCQUF1QyxFQUFFO1FBQ3RELE9BQU87WUFDTCxRQUFRLEVBQUUsY0FBYztZQUN4QixTQUFTLEVBQUU7Z0JBQ1QsRUFBRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRTthQUNoRTtTQUNGLENBQUM7SUFDSixDQUFDOytFQVJVLGNBQWM7bUVBQWQsY0FBYzt3RUFWZDtZQUNULGVBQWU7WUFDZjtnQkFDRSxPQUFPLEVBQUUsa0JBQWtCO2dCQUMzQixVQUFVLEVBQUUsa0JBQWtCO2dCQUM5QixJQUFJLEVBQUUsQ0FBQyxlQUFlLEVBQUUsZUFBZSxDQUFDO2FBQ3pDO1NBQ0YsWUFWUyxZQUFZLEVBQUUsV0FBVyxFQUFFLFdBQVc7O2lGQWFyQyxjQUFjO2NBZDFCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLFdBQVcsQ0FBQztnQkFDakQsWUFBWSxFQUFFLG1CQUFtQjtnQkFDakMsT0FBTyxFQUFFLG1CQUFtQjtnQkFDNUIsU0FBUyxFQUFFO29CQUNULGVBQWU7b0JBQ2Y7d0JBQ0UsT0FBTyxFQUFFLGtCQUFrQjt3QkFDM0IsVUFBVSxFQUFFLGtCQUFrQjt3QkFDOUIsSUFBSSxFQUFFLENBQUMsZUFBZSxFQUFFLGVBQWUsQ0FBQztxQkFDekM7aUJBQ0Y7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsc0JBQXNCLENBQUM7YUFDbEM7O3dGQUNZLGNBQWMsb0tBYmYsWUFBWSxFQUFFLFdBQVcsRUFBRSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IElvbmljTW9kdWxlLCBNb2RhbENvbnRyb2xsZXIgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5pbXBvcnQgeyBDYWxlbmRhck1vZGFsT3B0aW9ucyB9IGZyb20gJy4vY2FsZW5kYXIubW9kZWwnO1xuaW1wb3J0IHsgQ2FsZW5kYXJDb250cm9sbGVyIH0gZnJvbSAnLi9jYWxlbmRhci5jb250cm9sbGVyJztcbmltcG9ydCB7IERFRkFVTFRfQ0FMRU5EQVJfT1BUSU9OUyB9IGZyb20gJy4vc2VydmljZXMvY2FsZW5kYXItb3B0aW9ucy5wcm92aWRlcic7XG5pbXBvcnQgeyBDYWxlbmRhclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2NhbGVuZGFyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ0FMRU5EQVJfQ09NUE9ORU5UUyB9IGZyb20gJy4vY29tcG9uZW50cyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxlbmRhckNvbnRyb2xsZXIobW9kYWxDdHJsOiBNb2RhbENvbnRyb2xsZXIsIGNhbFN2YzogQ2FsZW5kYXJTZXJ2aWNlKSB7XG4gIHJldHVybiBuZXcgQ2FsZW5kYXJDb250cm9sbGVyKG1vZGFsQ3RybCwgY2FsU3ZjKTtcbn1cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgSW9uaWNNb2R1bGUsIEZvcm1zTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBDQUxFTkRBUl9DT01QT05FTlRTLFxuICBleHBvcnRzOiBDQUxFTkRBUl9DT01QT05FTlRTLFxuICBwcm92aWRlcnM6IFtcbiAgICBDYWxlbmRhclNlcnZpY2UsXG4gICAge1xuICAgICAgcHJvdmlkZTogQ2FsZW5kYXJDb250cm9sbGVyLFxuICAgICAgdXNlRmFjdG9yeTogY2FsZW5kYXJDb250cm9sbGVyLFxuICAgICAgZGVwczogW01vZGFsQ29udHJvbGxlciwgQ2FsZW5kYXJTZXJ2aWNlXSxcbiAgICB9LFxuICBdLFxuICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV1cbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChkZWZhdWx0T3B0aW9uczogQ2FsZW5kYXJNb2RhbE9wdGlvbnMgPSB7fSk6IE1vZHVsZVdpdGhQcm92aWRlcnM8Q2FsZW5kYXJNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IENhbGVuZGFyTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHsgcHJvdmlkZTogREVGQVVMVF9DQUxFTkRBUl9PUFRJT05TLCB1c2VWYWx1ZTogZGVmYXVsdE9wdGlvbnMgfVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==