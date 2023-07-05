import { Component, Input } from '@angular/core';
import { defaults } from '../config';
import * as i0 from "@angular/core";
import * as i1 from "@ionic/angular";
import * as i2 from "@angular/common";
export class CalendarWeekComponent {
    constructor() {
        this._weekArray = defaults.WEEKS_FORMAT;
        this._displayWeekArray = this._weekArray;
        this._weekStart = 0;
        this.color = defaults.COLOR;
    }
    set weekArray(value) {
        if (value && value.length === 7) {
            this._weekArray = [...value];
            this.adjustSort();
        }
    }
    set weekStart(value) {
        if (value === 0 || value === 1) {
            this._weekStart = value;
            this.adjustSort();
        }
    }
    adjustSort() {
        if (this._weekStart === 1) {
            const cacheWeekArray = [...this._weekArray];
            cacheWeekArray.push(cacheWeekArray.shift());
            this._displayWeekArray = [...cacheWeekArray];
        }
        else if (this._weekStart === 0) {
            this._displayWeekArray = [...this._weekArray];
        }
    }
}
CalendarWeekComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CalendarWeekComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
CalendarWeekComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: CalendarWeekComponent, selector: "ion-calendar-week", inputs: { color: "color", weekArray: "weekArray", weekStart: "weekStart" }, ngImport: i0, template: `
    <ion-toolbar [class]="'week-toolbar '" no-border-top>
      <ul [class]="'week-title ' + color">
        <li *ngFor="let w of _displayWeekArray">{{ w }}</li>
      </ul>
    </ion-toolbar>
  `, isInline: true, styles: [":host .toolbar-background-md,:host .toolbar-background-ios{background:transparent}:host .week-toolbar{--padding-start: 0;--padding-end: 0;--padding-bottom: 0;--padding-top: 0}:host .week-toolbar.primary{--background: var(--ion-color-primary)}:host .week-toolbar.secondary{--background: var(--ion-color-secondary)}:host .week-toolbar.danger{--background: var(--ion-color-danger)}:host .week-toolbar.dark{--background: var(--ion-color-dark)}:host .week-toolbar.light{--background: var(--ion-color-light)}:host .week-toolbar.transparent{--background: transparent}:host .week-toolbar.toolbar-md{min-height:44px}:host .week-title{margin:0;height:44px;width:100%;padding:15px 0;font-size:.9em}:host .week-title.light,:host .week-title.transparent{color:#9e9e9e}:host .week-title li{list-style-type:none;display:block;float:left;width:14%;text-align:center;font-weight:bold}:host .week-title li:nth-of-type(7n),:host .week-title li:nth-of-type(7n + 1){width:15%}\n"], components: [{ type: i1.IonToolbar, selector: "ion-toolbar", inputs: ["color", "mode"] }], directives: [{ type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CalendarWeekComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ion-calendar-week',
                    styleUrls: ['./calendar-week.component.scss'],
                    template: `
    <ion-toolbar [class]="'week-toolbar '" no-border-top>
      <ul [class]="'week-title ' + color">
        <li *ngFor="let w of _displayWeekArray">{{ w }}</li>
      </ul>
    </ion-toolbar>
  `,
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { color: [{
                type: Input
            }], weekArray: [{
                type: Input
            }], weekStart: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItd2Vlay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvY2FsZW5kYXItd2Vlay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7OztBQWFyQyxNQUFNLE9BQU8scUJBQXFCO0lBT2hDO1FBTkEsZUFBVSxHQUFhLFFBQVEsQ0FBQyxZQUFZLENBQUM7UUFDN0Msc0JBQWlCLEdBQWEsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUM5QyxlQUFVLEdBQUcsQ0FBQyxDQUFDO1FBRWYsVUFBSyxHQUF1QixRQUFRLENBQUMsS0FBSyxDQUFDO0lBRTVCLENBQUM7SUFFaEIsSUFDSSxTQUFTLENBQUMsS0FBMkI7UUFDdkMsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDL0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ25CO0lBQ0gsQ0FBQztJQUVELElBQ0ksU0FBUyxDQUFDLEtBQXlCO1FBQ3JDLElBQUksS0FBSyxLQUFLLENBQUMsSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFO1lBQzlCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNuQjtJQUNILENBQUM7SUFFRCxVQUFVO1FBQ1IsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLENBQUMsRUFBRTtZQUN6QixNQUFNLGNBQWMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBUSxDQUFDO1lBQ25ELGNBQWMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7WUFDNUMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsR0FBRyxjQUFjLENBQUMsQ0FBQztTQUM5QzthQUFNLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxDQUFDLEVBQUU7WUFDaEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDL0M7SUFDSCxDQUFDOzttSEFqQ1UscUJBQXFCO3VHQUFyQixxQkFBcUIscUlBUnRCOzs7Ozs7R0FNVDs0RkFFVSxxQkFBcUI7a0JBWGpDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7b0JBQzdDLFFBQVEsRUFBRTs7Ozs7O0dBTVQ7aUJBQ0Y7MEVBTUMsS0FBSztzQkFESixLQUFLO2dCQU1GLFNBQVM7c0JBRFosS0FBSztnQkFTRixTQUFTO3NCQURaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBkZWZhdWx0cyB9IGZyb20gJy4uL2NvbmZpZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lvbi1jYWxlbmRhci13ZWVrJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2FsZW5kYXItd2Vlay5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxpb24tdG9vbGJhciBbY2xhc3NdPVwiJ3dlZWstdG9vbGJhciAnXCIgbm8tYm9yZGVyLXRvcD5cbiAgICAgIDx1bCBbY2xhc3NdPVwiJ3dlZWstdGl0bGUgJyArIGNvbG9yXCI+XG4gICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgdyBvZiBfZGlzcGxheVdlZWtBcnJheVwiPnt7IHcgfX08L2xpPlxuICAgICAgPC91bD5cbiAgICA8L2lvbi10b29sYmFyPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhcldlZWtDb21wb25lbnQge1xuICBfd2Vla0FycmF5OiBzdHJpbmdbXSA9IGRlZmF1bHRzLldFRUtTX0ZPUk1BVDtcbiAgX2Rpc3BsYXlXZWVrQXJyYXk6IHN0cmluZ1tdID0gdGhpcy5fd2Vla0FycmF5O1xuICBfd2Vla1N0YXJ0ID0gMDtcbiAgQElucHV0KClcbiAgY29sb3I6IHN0cmluZyB8IHVuZGVmaW5lZCA9IGRlZmF1bHRzLkNPTE9SO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBASW5wdXQoKVxuICBzZXQgd2Vla0FycmF5KHZhbHVlOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS5sZW5ndGggPT09IDcpIHtcbiAgICAgIHRoaXMuX3dlZWtBcnJheSA9IFsuLi52YWx1ZV07XG4gICAgICB0aGlzLmFkanVzdFNvcnQoKTtcbiAgICB9XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgd2Vla1N0YXJ0KHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IDAgfHwgdmFsdWUgPT09IDEpIHtcbiAgICAgIHRoaXMuX3dlZWtTdGFydCA9IHZhbHVlO1xuICAgICAgdGhpcy5hZGp1c3RTb3J0KCk7XG4gICAgfVxuICB9XG5cbiAgYWRqdXN0U29ydCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fd2Vla1N0YXJ0ID09PSAxKSB7XG4gICAgICBjb25zdCBjYWNoZVdlZWtBcnJheSA9IFsuLi50aGlzLl93ZWVrQXJyYXldIGFzIGFueTtcbiAgICAgIGNhY2hlV2Vla0FycmF5LnB1c2goY2FjaGVXZWVrQXJyYXkuc2hpZnQoKSk7XG4gICAgICB0aGlzLl9kaXNwbGF5V2Vla0FycmF5ID0gWy4uLmNhY2hlV2Vla0FycmF5XTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX3dlZWtTdGFydCA9PT0gMCkge1xuICAgICAgdGhpcy5fZGlzcGxheVdlZWtBcnJheSA9IFsuLi50aGlzLl93ZWVrQXJyYXldO1xuICAgIH1cbiAgfVxufVxuIl19