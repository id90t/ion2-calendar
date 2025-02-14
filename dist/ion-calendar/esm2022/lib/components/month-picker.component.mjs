import { Component, EventEmitter, Input, Output } from '@angular/core';
import { defaults } from '../config';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class MonthPickerComponent {
    set monthFormat(value) {
        if (Array.isArray(value) && value.length === 12) {
            this._monthFormat = value;
        }
    }
    get monthFormat() {
        return this._monthFormat;
    }
    constructor() {
        this.color = defaults.COLOR;
        this.select = new EventEmitter();
        this._thisMonth = new Date();
        this._monthFormat = defaults.MONTH_FORMAT;
        this.MONTH_FORMAT = 'MMMM';
    }
    _onSelect(month) {
        this.select.emit(month);
    }
    getDate(month) {
        return new Date(this._thisMonth.getFullYear(), month, 1);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: MonthPickerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: MonthPickerComponent, selector: "ion-calendar-month-picker", inputs: { month: "month", color: "color", monthFormat: "monthFormat" }, outputs: { select: "select" }, ngImport: i0, template: `
    <div [class]="'month-picker ' + color">
      <div class="month-packer-item"
           [class.this-month]=" i === _thisMonth.getMonth() && month.original?.year === _thisMonth.getFullYear()"
           *ngFor="let item of _monthFormat; let i = index">
        <button type="button" (click)="_onSelect(i)" [attr.aria-label]="getDate(i) | date:MONTH_FORMAT">{{ item }}</button>
      </div>
    </div>
  `, isInline: true, styles: [":host .month-picker{margin:20px 0;display:inline-block;width:100%}:host .month-packer-item{width:25%;box-sizing:border-box;float:left;height:50px;padding:5px}:host .month-packer-item button{border-radius:32px;width:100%;height:100%;font-size:.9em;background-color:transparent}:host .month-picker.primary .month-packer-item.this-month button{border:1px solid var(--ion-color-primary)}:host .month-picker.primary .month-packer-item.active button{background-color:var(--ion-color-primary);color:#fff}:host .month-picker.secondary .month-packer-item.this-month button{border:1px solid var(--ion-color-secondary)}:host .month-picker.secondary .month-packer-item.active button{background-color:var(--ion-color-secondary);color:#fff}:host .month-picker.danger .month-packer-item.this-month button{border:1px solid var(--ion-color-danger)}:host .month-picker.danger .month-packer-item.active button{background-color:var(--ion-color-danger);color:#fff}:host .month-picker.dark .month-packer-item.this-month button{border:1px solid var(--ion-color-dark)}:host .month-picker.dark .month-packer-item.active button{background-color:var(--ion-color-dark);color:#fff}:host .month-picker.light .month-packer-item.this-month button{border:1px solid var(--ion-color-light)}:host .month-picker.light .month-packer-item.active button{background-color:var(--ion-color-light);color:#9e9e9e}:host .month-picker.transparent{background-color:transparent}:host .month-picker.transparent .month-packer-item.this-month button{border:1px solid var(--ion-color-light)}:host .month-picker.transparent .month-packer-item.active button{background-color:var(--ion-color-light);color:#9e9e9e}:host .month-picker.cal-color .month-packer-item.this-month button{border:1px solid}:host .month-picker.cal-color .month-packer-item.active button{color:#fff}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "pipe", type: i1.DatePipe, name: "date" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: MonthPickerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ion-calendar-month-picker', template: `
    <div [class]="'month-picker ' + color">
      <div class="month-packer-item"
           [class.this-month]=" i === _thisMonth.getMonth() && month.original?.year === _thisMonth.getFullYear()"
           *ngFor="let item of _monthFormat; let i = index">
        <button type="button" (click)="_onSelect(i)" [attr.aria-label]="getDate(i) | date:MONTH_FORMAT">{{ item }}</button>
      </div>
    </div>
  `, styles: [":host .month-picker{margin:20px 0;display:inline-block;width:100%}:host .month-packer-item{width:25%;box-sizing:border-box;float:left;height:50px;padding:5px}:host .month-packer-item button{border-radius:32px;width:100%;height:100%;font-size:.9em;background-color:transparent}:host .month-picker.primary .month-packer-item.this-month button{border:1px solid var(--ion-color-primary)}:host .month-picker.primary .month-packer-item.active button{background-color:var(--ion-color-primary);color:#fff}:host .month-picker.secondary .month-packer-item.this-month button{border:1px solid var(--ion-color-secondary)}:host .month-picker.secondary .month-packer-item.active button{background-color:var(--ion-color-secondary);color:#fff}:host .month-picker.danger .month-packer-item.this-month button{border:1px solid var(--ion-color-danger)}:host .month-picker.danger .month-packer-item.active button{background-color:var(--ion-color-danger);color:#fff}:host .month-picker.dark .month-packer-item.this-month button{border:1px solid var(--ion-color-dark)}:host .month-picker.dark .month-packer-item.active button{background-color:var(--ion-color-dark);color:#fff}:host .month-picker.light .month-packer-item.this-month button{border:1px solid var(--ion-color-light)}:host .month-picker.light .month-packer-item.active button{background-color:var(--ion-color-light);color:#9e9e9e}:host .month-picker.transparent{background-color:transparent}:host .month-picker.transparent .month-packer-item.this-month button{border:1px solid var(--ion-color-light)}:host .month-picker.transparent .month-packer-item.active button{background-color:var(--ion-color-light);color:#9e9e9e}:host .month-picker.cal-color .month-packer-item.this-month button{border:1px solid}:host .month-picker.cal-color .month-packer-item.active button{color:#fff}\n"] }]
        }], ctorParameters: () => [], propDecorators: { month: [{
                type: Input
            }], color: [{
                type: Input
            }], select: [{
                type: Output
            }], monthFormat: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGgtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9tb250aC1waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7O0FBZXJDLE1BQU0sT0FBTyxvQkFBb0I7SUFZL0IsSUFDSSxXQUFXLENBQUMsS0FBZTtRQUM3QixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxFQUFFLEVBQUUsQ0FBQztZQUNoRCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUM1QixDQUFDO0lBQ0gsQ0FBQztJQUVELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDO0lBRUQ7UUFuQkEsVUFBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFFdkIsV0FBTSxHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xELGVBQVUsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3hCLGlCQUFZLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQztRQUVyQyxpQkFBWSxHQUFHLE1BQU0sQ0FBQztJQWFQLENBQUM7SUFFaEIsU0FBUyxDQUFDLEtBQWE7UUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELE9BQU8sQ0FBQyxLQUFhO1FBQ25CLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDM0QsQ0FBQzsrR0EvQlUsb0JBQW9CO21HQUFwQixvQkFBb0Isd0tBVnJCOzs7Ozs7OztHQVFUOzs0RkFFVSxvQkFBb0I7a0JBYmhDLFNBQVM7K0JBQ0UsMkJBQTJCLFlBRTNCOzs7Ozs7OztHQVFUO3dEQUlELEtBQUs7c0JBREosS0FBSztnQkFHTixLQUFLO3NCQURKLEtBQUs7Z0JBR04sTUFBTTtzQkFETCxNQUFNO2dCQVFILFdBQVc7c0JBRGQsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYWxlbmRhck1vbnRoIH0gZnJvbSAnLi4vY2FsZW5kYXIubW9kZWwnO1xuaW1wb3J0IHsgZGVmYXVsdHMgfSBmcm9tICcuLi9jb25maWcnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpb24tY2FsZW5kYXItbW9udGgtcGlja2VyJyxcbiAgc3R5bGVVcmxzOiBbJy4vbW9udGgtcGlja2VyLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBbY2xhc3NdPVwiJ21vbnRoLXBpY2tlciAnICsgY29sb3JcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtb250aC1wYWNrZXItaXRlbVwiXG4gICAgICAgICAgIFtjbGFzcy50aGlzLW1vbnRoXT1cIiBpID09PSBfdGhpc01vbnRoLmdldE1vbnRoKCkgJiYgbW9udGgub3JpZ2luYWw/LnllYXIgPT09IF90aGlzTW9udGguZ2V0RnVsbFllYXIoKVwiXG4gICAgICAgICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIF9tb250aEZvcm1hdDsgbGV0IGkgPSBpbmRleFwiPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwiX29uU2VsZWN0KGkpXCIgW2F0dHIuYXJpYS1sYWJlbF09XCJnZXREYXRlKGkpIHwgZGF0ZTpNT05USF9GT1JNQVRcIj57eyBpdGVtIH19PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTW9udGhQaWNrZXJDb21wb25lbnQge1xuICBASW5wdXQoKVxuICBtb250aDogQ2FsZW5kYXJNb250aCB8IGFueTtcbiAgQElucHV0KClcbiAgY29sb3IgPSBkZWZhdWx0cy5DT0xPUjtcbiAgQE91dHB1dCgpXG4gIHNlbGVjdDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIF90aGlzTW9udGggPSBuZXcgRGF0ZSgpO1xuICBfbW9udGhGb3JtYXQgPSBkZWZhdWx0cy5NT05USF9GT1JNQVQ7XG5cbiAgTU9OVEhfRk9STUFUID0gJ01NTU0nO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBtb250aEZvcm1hdCh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID09PSAxMikge1xuICAgICAgdGhpcy5fbW9udGhGb3JtYXQgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBnZXQgbW9udGhGb3JtYXQoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLl9tb250aEZvcm1hdDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBfb25TZWxlY3QobW9udGg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0LmVtaXQobW9udGgpO1xuICB9XG5cbiAgZ2V0RGF0ZShtb250aDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKHRoaXMuX3RoaXNNb250aC5nZXRGdWxsWWVhcigpLCBtb250aCwgMSk7XG4gIH1cbn1cbiJdfQ==