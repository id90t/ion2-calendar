import { Component, EventEmitter, Input, Output } from '@angular/core';
import { defaults } from '../config';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class MonthPickerComponent {
    constructor() {
        this.color = defaults.COLOR;
        this.select = new EventEmitter();
        this._thisMonth = new Date();
        this._monthFormat = defaults.MONTH_FORMAT;
        this.MONTH_FORMAT = 'MMMM';
    }
    set monthFormat(value) {
        if (Array.isArray(value) && value.length === 12) {
            this._monthFormat = value;
        }
    }
    get monthFormat() {
        return this._monthFormat;
    }
    _onSelect(month) {
        this.select.emit(month);
    }
    getDate(month) {
        return new Date(this._thisMonth.getFullYear(), month, 1);
    }
}
MonthPickerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MonthPickerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MonthPickerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: MonthPickerComponent, selector: "ion-calendar-month-picker", inputs: { month: "month", color: "color", monthFormat: "monthFormat" }, outputs: { select: "select" }, ngImport: i0, template: `
    <div [class]="'month-picker ' + color">
      <div class="month-packer-item"
           [class.this-month]=" i === _thisMonth.getMonth() && month.original?.year === _thisMonth.getFullYear()"
           *ngFor="let item of _monthFormat; let i = index">
        <button type="button" (click)="_onSelect(i)" [attr.aria-label]="getDate(i) | date:MONTH_FORMAT">{{ item }}</button>
      </div>
    </div>
  `, isInline: true, styles: [":host .month-picker{margin:20px 0;display:inline-block;width:100%}:host .month-packer-item{width:25%;box-sizing:border-box;float:left;height:50px;padding:5px}:host .month-packer-item button{border-radius:32px;width:100%;height:100%;font-size:.9em;background-color:transparent}:host .month-picker.primary .month-packer-item.this-month button{border:1px solid var(--ion-color-primary)}:host .month-picker.primary .month-packer-item.active button{background-color:var(--ion-color-primary);color:#fff}:host .month-picker.secondary .month-packer-item.this-month button{border:1px solid var(--ion-color-secondary)}:host .month-picker.secondary .month-packer-item.active button{background-color:var(--ion-color-secondary);color:#fff}:host .month-picker.danger .month-packer-item.this-month button{border:1px solid var(--ion-color-danger)}:host .month-picker.danger .month-packer-item.active button{background-color:var(--ion-color-danger);color:#fff}:host .month-picker.dark .month-packer-item.this-month button{border:1px solid var(--ion-color-dark)}:host .month-picker.dark .month-packer-item.active button{background-color:var(--ion-color-dark);color:#fff}:host .month-picker.light .month-packer-item.this-month button{border:1px solid var(--ion-color-light)}:host .month-picker.light .month-packer-item.active button{background-color:var(--ion-color-light);color:#9e9e9e}:host .month-picker.transparent{background-color:transparent}:host .month-picker.transparent .month-packer-item.this-month button{border:1px solid var(--ion-color-light)}:host .month-picker.transparent .month-packer-item.active button{background-color:var(--ion-color-light);color:#9e9e9e}:host .month-picker.cal-color .month-packer-item.this-month button{border:1px solid}:host .month-picker.cal-color .month-packer-item.active button{color:#fff}\n"], directives: [{ type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], pipes: { "date": i1.DatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MonthPickerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ion-calendar-month-picker',
                    styleUrls: ['./month-picker.component.scss'],
                    template: `
    <div [class]="'month-picker ' + color">
      <div class="month-packer-item"
           [class.this-month]=" i === _thisMonth.getMonth() && month.original?.year === _thisMonth.getFullYear()"
           *ngFor="let item of _monthFormat; let i = index">
        <button type="button" (click)="_onSelect(i)" [attr.aria-label]="getDate(i) | date:MONTH_FORMAT">{{ item }}</button>
      </div>
    </div>
  `,
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { month: [{
                type: Input
            }], color: [{
                type: Input
            }], select: [{
                type: Output
            }], monthFormat: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGgtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9tb250aC1waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7O0FBZXJDLE1BQU0sT0FBTyxvQkFBb0I7SUF1Qi9CO1FBbkJBLFVBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBRXZCLFdBQU0sR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNsRCxlQUFVLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUN4QixpQkFBWSxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUM7UUFFckMsaUJBQVksR0FBRyxNQUFNLENBQUM7SUFhUCxDQUFDO0lBWGhCLElBQ0ksV0FBVyxDQUFDLEtBQWU7UUFDN0IsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssRUFBRSxFQUFFO1lBQy9DLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1NBQzNCO0lBQ0gsQ0FBQztJQUVELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDO0lBSUQsU0FBUyxDQUFDLEtBQWE7UUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELE9BQU8sQ0FBQyxLQUFhO1FBQ25CLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7a0hBL0JVLG9CQUFvQjtzR0FBcEIsb0JBQW9CLHdLQVZyQjs7Ozs7Ozs7R0FRVDs0RkFFVSxvQkFBb0I7a0JBYmhDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7b0JBQzVDLFFBQVEsRUFBRTs7Ozs7Ozs7R0FRVDtpQkFDRjswRUFHQyxLQUFLO3NCQURKLEtBQUs7Z0JBR04sS0FBSztzQkFESixLQUFLO2dCQUdOLE1BQU07c0JBREwsTUFBTTtnQkFRSCxXQUFXO3NCQURkLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FsZW5kYXJNb250aCB9IGZyb20gJy4uL2NhbGVuZGFyLm1vZGVsJztcbmltcG9ydCB7IGRlZmF1bHRzIH0gZnJvbSAnLi4vY29uZmlnJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaW9uLWNhbGVuZGFyLW1vbnRoLXBpY2tlcicsXG4gIHN0eWxlVXJsczogWycuL21vbnRoLXBpY2tlci5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgW2NsYXNzXT1cIidtb250aC1waWNrZXIgJyArIGNvbG9yXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibW9udGgtcGFja2VyLWl0ZW1cIlxuICAgICAgICAgICBbY2xhc3MudGhpcy1tb250aF09XCIgaSA9PT0gX3RoaXNNb250aC5nZXRNb250aCgpICYmIG1vbnRoLm9yaWdpbmFsPy55ZWFyID09PSBfdGhpc01vbnRoLmdldEZ1bGxZZWFyKClcIlxuICAgICAgICAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBfbW9udGhGb3JtYXQ7IGxldCBpID0gaW5kZXhcIj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cIl9vblNlbGVjdChpKVwiIFthdHRyLmFyaWEtbGFiZWxdPVwiZ2V0RGF0ZShpKSB8IGRhdGU6TU9OVEhfRk9STUFUXCI+e3sgaXRlbSB9fTwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIE1vbnRoUGlja2VyQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgbW9udGg6IENhbGVuZGFyTW9udGggfCBhbnk7XG4gIEBJbnB1dCgpXG4gIGNvbG9yID0gZGVmYXVsdHMuQ09MT1I7XG4gIEBPdXRwdXQoKVxuICBzZWxlY3Q6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBfdGhpc01vbnRoID0gbmV3IERhdGUoKTtcbiAgX21vbnRoRm9ybWF0ID0gZGVmYXVsdHMuTU9OVEhfRk9STUFUO1xuXG4gIE1PTlRIX0ZPUk1BVCA9ICdNTU1NJztcblxuICBASW5wdXQoKVxuICBzZXQgbW9udGhGb3JtYXQodmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA9PT0gMTIpIHtcbiAgICAgIHRoaXMuX21vbnRoRm9ybWF0ID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG1vbnRoRm9ybWF0KCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5fbW9udGhGb3JtYXQ7XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgX29uU2VsZWN0KG1vbnRoOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdC5lbWl0KG1vbnRoKTtcbiAgfVxuXG4gIGdldERhdGUobW9udGg6IG51bWJlcikge1xuICAgIHJldHVybiBuZXcgRGF0ZSh0aGlzLl90aGlzTW9udGguZ2V0RnVsbFllYXIoKSwgbW9udGgsIDEpO1xuICB9XG59XG4iXX0=