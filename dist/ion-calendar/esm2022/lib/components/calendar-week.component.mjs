import { Component, Input } from '@angular/core';
import { defaults } from '../config';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@ionic/angular";
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CalendarWeekComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: CalendarWeekComponent, selector: "ion-calendar-week", inputs: { color: "color", weekArray: "weekArray", weekStart: "weekStart" }, ngImport: i0, template: `
    <ion-toolbar [class]="'week-toolbar '" no-border-top>
      <ul [class]="'week-title ' + color">
        <li *ngFor="let w of _displayWeekArray">{{ w }}</li>
      </ul>
    </ion-toolbar>
  `, isInline: true, styles: [":host .toolbar-background-md,:host .toolbar-background-ios{background:transparent}:host .week-toolbar{--padding-start: 0;--padding-end: 0;--padding-bottom: 0;--padding-top: 0}:host .week-toolbar.primary{--background: var(--ion-color-primary)}:host .week-toolbar.secondary{--background: var(--ion-color-secondary)}:host .week-toolbar.danger{--background: var(--ion-color-danger)}:host .week-toolbar.dark{--background: var(--ion-color-dark)}:host .week-toolbar.light{--background: var(--ion-color-light)}:host .week-toolbar.transparent{--background: transparent}:host .week-toolbar.toolbar-md{min-height:44px}:host .week-title{margin:0;height:44px;width:100%;padding:15px 0;font-size:.9em}:host .week-title.light,:host .week-title.transparent{color:#9e9e9e}:host .week-title li{list-style-type:none;display:block;float:left;width:14%;text-align:center;font-weight:700}:host .week-title li:nth-of-type(7n),:host .week-title li:nth-of-type(7n+1){width:15%}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i2.IonToolbar, selector: "ion-toolbar", inputs: ["color", "mode"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CalendarWeekComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ion-calendar-week', template: `
    <ion-toolbar [class]="'week-toolbar '" no-border-top>
      <ul [class]="'week-title ' + color">
        <li *ngFor="let w of _displayWeekArray">{{ w }}</li>
      </ul>
    </ion-toolbar>
  `, styles: [":host .toolbar-background-md,:host .toolbar-background-ios{background:transparent}:host .week-toolbar{--padding-start: 0;--padding-end: 0;--padding-bottom: 0;--padding-top: 0}:host .week-toolbar.primary{--background: var(--ion-color-primary)}:host .week-toolbar.secondary{--background: var(--ion-color-secondary)}:host .week-toolbar.danger{--background: var(--ion-color-danger)}:host .week-toolbar.dark{--background: var(--ion-color-dark)}:host .week-toolbar.light{--background: var(--ion-color-light)}:host .week-toolbar.transparent{--background: transparent}:host .week-toolbar.toolbar-md{min-height:44px}:host .week-title{margin:0;height:44px;width:100%;padding:15px 0;font-size:.9em}:host .week-title.light,:host .week-title.transparent{color:#9e9e9e}:host .week-title li{list-style-type:none;display:block;float:left;width:14%;text-align:center;font-weight:700}:host .week-title li:nth-of-type(7n),:host .week-title li:nth-of-type(7n+1){width:15%}\n"] }]
        }], ctorParameters: () => [], propDecorators: { color: [{
                type: Input
            }], weekArray: [{
                type: Input
            }], weekStart: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItd2Vlay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvY2FsZW5kYXItd2Vlay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7OztBQWFyQyxNQUFNLE9BQU8scUJBQXFCO0lBTWhDO1FBTEEsZUFBVSxHQUFhLFFBQVEsQ0FBQyxZQUFZLENBQUM7UUFDN0Msc0JBQWlCLEdBQWEsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUM5QyxlQUFVLEdBQUcsQ0FBQyxDQUFDO1FBRWYsVUFBSyxHQUF1QixRQUFRLENBQUMsS0FBSyxDQUFDO0lBQzVCLENBQUM7SUFDaEIsSUFDSSxTQUFTLENBQUMsS0FBMkI7UUFDdkMsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUUsQ0FBQztZQUNoQyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDcEIsQ0FBQztJQUNILENBQUM7SUFFRCxJQUNJLFNBQVMsQ0FBQyxLQUF5QjtRQUNyQyxJQUFJLEtBQUssS0FBSyxDQUFDLElBQUksS0FBSyxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQy9CLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNwQixDQUFDO0lBQ0gsQ0FBQztJQUVELFVBQVU7UUFDUixJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssQ0FBQyxFQUFFLENBQUM7WUFDMUIsTUFBTSxjQUFjLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQVEsQ0FBQztZQUNuRCxjQUFjLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBQzVDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLEdBQUcsY0FBYyxDQUFDLENBQUM7UUFDL0MsQ0FBQzthQUFNLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxDQUFDLEVBQUUsQ0FBQztZQUNqQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNoRCxDQUFDO0lBQ0gsQ0FBQzsrR0EvQlUscUJBQXFCO21HQUFyQixxQkFBcUIscUlBUnRCOzs7Ozs7R0FNVDs7NEZBRVUscUJBQXFCO2tCQVhqQyxTQUFTOytCQUNFLG1CQUFtQixZQUVuQjs7Ozs7O0dBTVQ7d0RBT0QsS0FBSztzQkFESixLQUFLO2dCQUlGLFNBQVM7c0JBRFosS0FBSztnQkFTRixTQUFTO3NCQURaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBkZWZhdWx0cyB9IGZyb20gJy4uL2NvbmZpZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lvbi1jYWxlbmRhci13ZWVrJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2FsZW5kYXItd2Vlay5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxpb24tdG9vbGJhciBbY2xhc3NdPVwiJ3dlZWstdG9vbGJhciAnXCIgbm8tYm9yZGVyLXRvcD5cbiAgICAgIDx1bCBbY2xhc3NdPVwiJ3dlZWstdGl0bGUgJyArIGNvbG9yXCI+XG4gICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgdyBvZiBfZGlzcGxheVdlZWtBcnJheVwiPnt7IHcgfX08L2xpPlxuICAgICAgPC91bD5cbiAgICA8L2lvbi10b29sYmFyPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhcldlZWtDb21wb25lbnQge1xuICBfd2Vla0FycmF5OiBzdHJpbmdbXSA9IGRlZmF1bHRzLldFRUtTX0ZPUk1BVDtcbiAgX2Rpc3BsYXlXZWVrQXJyYXk6IHN0cmluZ1tdID0gdGhpcy5fd2Vla0FycmF5O1xuICBfd2Vla1N0YXJ0ID0gMDtcbiAgQElucHV0KClcbiAgY29sb3I6IHN0cmluZyB8IHVuZGVmaW5lZCA9IGRlZmF1bHRzLkNPTE9SO1xuICBjb25zdHJ1Y3RvcigpIHt9XG4gIEBJbnB1dCgpXG4gIHNldCB3ZWVrQXJyYXkodmFsdWU6IHN0cmluZ1tdIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICYmIHZhbHVlLmxlbmd0aCA9PT0gNykge1xuICAgICAgdGhpcy5fd2Vla0FycmF5ID0gWy4uLnZhbHVlXTtcbiAgICAgIHRoaXMuYWRqdXN0U29ydCgpO1xuICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCB3ZWVrU3RhcnQodmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gMCB8fCB2YWx1ZSA9PT0gMSkge1xuICAgICAgdGhpcy5fd2Vla1N0YXJ0ID0gdmFsdWU7XG4gICAgICB0aGlzLmFkanVzdFNvcnQoKTtcbiAgICB9XG4gIH1cblxuICBhZGp1c3RTb3J0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl93ZWVrU3RhcnQgPT09IDEpIHtcbiAgICAgIGNvbnN0IGNhY2hlV2Vla0FycmF5ID0gWy4uLnRoaXMuX3dlZWtBcnJheV0gYXMgYW55O1xuICAgICAgY2FjaGVXZWVrQXJyYXkucHVzaChjYWNoZVdlZWtBcnJheS5zaGlmdCgpKTtcbiAgICAgIHRoaXMuX2Rpc3BsYXlXZWVrQXJyYXkgPSBbLi4uY2FjaGVXZWVrQXJyYXldO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fd2Vla1N0YXJ0ID09PSAwKSB7XG4gICAgICB0aGlzLl9kaXNwbGF5V2Vla0FycmF5ID0gWy4uLnRoaXMuX3dlZWtBcnJheV07XG4gICAgfVxuICB9XG59XG4iXX0=