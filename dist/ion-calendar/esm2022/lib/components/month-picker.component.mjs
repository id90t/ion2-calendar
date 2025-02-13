import { Component, EventEmitter, Input, Output } from '@angular/core';
import { defaults } from '../config';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function MonthPickerComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1)(1, "button", 2);
    i0.ɵɵpipe(2, "date");
    i0.ɵɵlistener("click", function MonthPickerComponent_div_1_Template_button_click_1_listener() { const i_r2 = i0.ɵɵrestoreView(_r1).index; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2._onSelect(i_r2)); });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("this-month", i_r2 === ctx_r2._thisMonth.getMonth() && (ctx_r2.month.original == null ? null : ctx_r2.month.original.year) === ctx_r2._thisMonth.getFullYear());
    i0.ɵɵadvance();
    i0.ɵɵattribute("aria-label", i0.ɵɵpipeBind2(2, 4, ctx_r2.getDate(i_r2), ctx_r2.MONTH_FORMAT));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r4);
} }
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
    static { this.ɵfac = function MonthPickerComponent_Factory(t) { return new (t || MonthPickerComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MonthPickerComponent, selectors: [["ion-calendar-month-picker"]], inputs: { month: "month", color: "color", monthFormat: "monthFormat" }, outputs: { select: "select" }, decls: 2, vars: 3, consts: [["class", "month-packer-item", 3, "this-month", 4, "ngFor", "ngForOf"], [1, "month-packer-item"], ["type", "button", 3, "click"]], template: function MonthPickerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵtemplate(1, MonthPickerComponent_div_1_Template, 4, 7, "div", 0);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassMap("month-picker " + ctx.color);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx._monthFormat);
        } }, dependencies: [i1.NgForOf, i1.DatePipe], styles: ["[_nghost-%COMP%]   .month-picker[_ngcontent-%COMP%]{margin:20px 0;display:inline-block;width:100%}[_nghost-%COMP%]   .month-packer-item[_ngcontent-%COMP%]{width:25%;box-sizing:border-box;float:left;height:50px;padding:5px}[_nghost-%COMP%]   .month-packer-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border-radius:32px;width:100%;height:100%;font-size:.9em;background-color:transparent}[_nghost-%COMP%]   .month-picker.primary[_ngcontent-%COMP%]   .month-packer-item.this-month[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:1px solid var(--ion-color-primary)}[_nghost-%COMP%]   .month-picker.primary[_ngcontent-%COMP%]   .month-packer-item.active[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:var(--ion-color-primary);color:#fff}[_nghost-%COMP%]   .month-picker.secondary[_ngcontent-%COMP%]   .month-packer-item.this-month[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:1px solid var(--ion-color-secondary)}[_nghost-%COMP%]   .month-picker.secondary[_ngcontent-%COMP%]   .month-packer-item.active[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:var(--ion-color-secondary);color:#fff}[_nghost-%COMP%]   .month-picker.danger[_ngcontent-%COMP%]   .month-packer-item.this-month[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:1px solid var(--ion-color-danger)}[_nghost-%COMP%]   .month-picker.danger[_ngcontent-%COMP%]   .month-packer-item.active[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:var(--ion-color-danger);color:#fff}[_nghost-%COMP%]   .month-picker.dark[_ngcontent-%COMP%]   .month-packer-item.this-month[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:1px solid var(--ion-color-dark)}[_nghost-%COMP%]   .month-picker.dark[_ngcontent-%COMP%]   .month-packer-item.active[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:var(--ion-color-dark);color:#fff}[_nghost-%COMP%]   .month-picker.light[_ngcontent-%COMP%]   .month-packer-item.this-month[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:1px solid var(--ion-color-light)}[_nghost-%COMP%]   .month-picker.light[_ngcontent-%COMP%]   .month-packer-item.active[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:var(--ion-color-light);color:#9e9e9e}[_nghost-%COMP%]   .month-picker.transparent[_ngcontent-%COMP%]{background-color:transparent}[_nghost-%COMP%]   .month-picker.transparent[_ngcontent-%COMP%]   .month-packer-item.this-month[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:1px solid var(--ion-color-light)}[_nghost-%COMP%]   .month-picker.transparent[_ngcontent-%COMP%]   .month-packer-item.active[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:var(--ion-color-light);color:#9e9e9e}[_nghost-%COMP%]   .month-picker.cal-color[_ngcontent-%COMP%]   .month-packer-item.this-month[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:1px solid}[_nghost-%COMP%]   .month-picker.cal-color[_ngcontent-%COMP%]   .month-packer-item.active[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#fff}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MonthPickerComponent, [{
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
    }], () => [], { month: [{
            type: Input
        }], color: [{
            type: Input
        }], select: [{
            type: Output
        }], monthFormat: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MonthPickerComponent, { className: "MonthPickerComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGgtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9tb250aC1waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7Ozs7SUFVN0IsQUFIRiw4QkFFc0QsZ0JBQzRDOztJQUExRSxtTUFBUyxzQkFBWSxLQUFDO0lBQW9ELFlBQVU7SUFDNUcsQUFENEcsaUJBQVMsRUFDL0c7Ozs7O0lBSEQsOEtBQXNHO0lBRTVELGNBQWtEOztJQUFDLGVBQVU7SUFBViw2QkFBVTs7QUFLbEgsTUFBTSxPQUFPLG9CQUFvQjtJQVkvQixJQUNJLFdBQVcsQ0FBQyxLQUFlO1FBQzdCLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLEVBQUUsRUFBRSxDQUFDO1lBQ2hELElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzVCLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7SUFFRDtRQW5CQSxVQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQztRQUV2QixXQUFNLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEQsZUFBVSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDeEIsaUJBQVksR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDO1FBRXJDLGlCQUFZLEdBQUcsTUFBTSxDQUFDO0lBYVAsQ0FBQztJQUVoQixTQUFTLENBQUMsS0FBYTtRQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsT0FBTyxDQUFDLEtBQWE7UUFDbkIsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMzRCxDQUFDO3FGQS9CVSxvQkFBb0I7b0VBQXBCLG9CQUFvQjtZQVQ3QiwyQkFBdUM7WUFDckMscUVBRXNEO1lBR3hELGlCQUFNOztZQU5ELDBDQUFpQztZQUdkLGNBQWlCO1lBQWpCLDBDQUFpQjs7O2lGQU1oQyxvQkFBb0I7Y0FiaEMsU0FBUzsyQkFDRSwyQkFBMkIsWUFFM0I7Ozs7Ozs7O0dBUVQ7b0JBSUQsS0FBSztrQkFESixLQUFLO1lBR04sS0FBSztrQkFESixLQUFLO1lBR04sTUFBTTtrQkFETCxNQUFNO1lBUUgsV0FBVztrQkFEZCxLQUFLOztrRkFaSyxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FsZW5kYXJNb250aCB9IGZyb20gJy4uL2NhbGVuZGFyLm1vZGVsJztcbmltcG9ydCB7IGRlZmF1bHRzIH0gZnJvbSAnLi4vY29uZmlnJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaW9uLWNhbGVuZGFyLW1vbnRoLXBpY2tlcicsXG4gIHN0eWxlVXJsczogWycuL21vbnRoLXBpY2tlci5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgW2NsYXNzXT1cIidtb250aC1waWNrZXIgJyArIGNvbG9yXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibW9udGgtcGFja2VyLWl0ZW1cIlxuICAgICAgICAgICBbY2xhc3MudGhpcy1tb250aF09XCIgaSA9PT0gX3RoaXNNb250aC5nZXRNb250aCgpICYmIG1vbnRoLm9yaWdpbmFsPy55ZWFyID09PSBfdGhpc01vbnRoLmdldEZ1bGxZZWFyKClcIlxuICAgICAgICAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBfbW9udGhGb3JtYXQ7IGxldCBpID0gaW5kZXhcIj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cIl9vblNlbGVjdChpKVwiIFthdHRyLmFyaWEtbGFiZWxdPVwiZ2V0RGF0ZShpKSB8IGRhdGU6TU9OVEhfRk9STUFUXCI+e3sgaXRlbSB9fTwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIE1vbnRoUGlja2VyQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgbW9udGg6IENhbGVuZGFyTW9udGggfCBhbnk7XG4gIEBJbnB1dCgpXG4gIGNvbG9yID0gZGVmYXVsdHMuQ09MT1I7XG4gIEBPdXRwdXQoKVxuICBzZWxlY3Q6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBfdGhpc01vbnRoID0gbmV3IERhdGUoKTtcbiAgX21vbnRoRm9ybWF0ID0gZGVmYXVsdHMuTU9OVEhfRk9STUFUO1xuXG4gIE1PTlRIX0ZPUk1BVCA9ICdNTU1NJztcblxuICBASW5wdXQoKVxuICBzZXQgbW9udGhGb3JtYXQodmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA9PT0gMTIpIHtcbiAgICAgIHRoaXMuX21vbnRoRm9ybWF0ID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG1vbnRoRm9ybWF0KCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5fbW9udGhGb3JtYXQ7XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgX29uU2VsZWN0KG1vbnRoOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdC5lbWl0KG1vbnRoKTtcbiAgfVxuXG4gIGdldERhdGUobW9udGg6IG51bWJlcikge1xuICAgIHJldHVybiBuZXcgRGF0ZSh0aGlzLl90aGlzTW9udGguZ2V0RnVsbFllYXIoKSwgbW9udGgsIDEpO1xuICB9XG59XG4iXX0=