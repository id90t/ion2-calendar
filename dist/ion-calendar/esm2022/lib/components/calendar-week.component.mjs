import { Component, Input } from '@angular/core';
import { defaults } from '../config';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@ionic/angular";
function CalendarWeekComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const w_r1 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(w_r1);
} }
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
    static { this.ɵfac = function CalendarWeekComponent_Factory(t) { return new (t || CalendarWeekComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CalendarWeekComponent, selectors: [["ion-calendar-week"]], inputs: { color: "color", weekArray: "weekArray", weekStart: "weekStart" }, decls: 3, vars: 5, consts: [["no-border-top", ""], [4, "ngFor", "ngForOf"]], template: function CalendarWeekComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "ion-toolbar", 0)(1, "ul");
            i0.ɵɵtemplate(2, CalendarWeekComponent_li_2_Template, 2, 1, "li", 1);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵclassMap("week-toolbar ");
            i0.ɵɵadvance();
            i0.ɵɵclassMap("week-title " + ctx.color);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx._displayWeekArray);
        } }, dependencies: [i1.NgForOf, i2.IonToolbar], styles: ["[_nghost-%COMP%]   .toolbar-background-md[_ngcontent-%COMP%], [_nghost-%COMP%]   .toolbar-background-ios[_ngcontent-%COMP%]{background:transparent}[_nghost-%COMP%]   .week-toolbar[_ngcontent-%COMP%]{--padding-start: 0;--padding-end: 0;--padding-bottom: 0;--padding-top: 0}[_nghost-%COMP%]   .week-toolbar.primary[_ngcontent-%COMP%]{--background: var(--ion-color-primary)}[_nghost-%COMP%]   .week-toolbar.secondary[_ngcontent-%COMP%]{--background: var(--ion-color-secondary)}[_nghost-%COMP%]   .week-toolbar.danger[_ngcontent-%COMP%]{--background: var(--ion-color-danger)}[_nghost-%COMP%]   .week-toolbar.dark[_ngcontent-%COMP%]{--background: var(--ion-color-dark)}[_nghost-%COMP%]   .week-toolbar.light[_ngcontent-%COMP%]{--background: var(--ion-color-light)}[_nghost-%COMP%]   .week-toolbar.transparent[_ngcontent-%COMP%]{--background: transparent}[_nghost-%COMP%]   .week-toolbar.toolbar-md[_ngcontent-%COMP%]{min-height:44px}[_nghost-%COMP%]   .week-title[_ngcontent-%COMP%]{margin:0;height:44px;width:100%;padding:15px 0;font-size:.9em}[_nghost-%COMP%]   .week-title.light[_ngcontent-%COMP%], [_nghost-%COMP%]   .week-title.transparent[_ngcontent-%COMP%]{color:#9e9e9e}[_nghost-%COMP%]   .week-title[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style-type:none;display:block;float:left;width:14%;text-align:center;font-weight:700}[_nghost-%COMP%]   .week-title[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(7n), [_nghost-%COMP%]   .week-title[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(7n+1){width:15%}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CalendarWeekComponent, [{
        type: Component,
        args: [{ selector: 'ion-calendar-week', template: `
    <ion-toolbar [class]="'week-toolbar '" no-border-top>
      <ul [class]="'week-title ' + color">
        <li *ngFor="let w of _displayWeekArray">{{ w }}</li>
      </ul>
    </ion-toolbar>
  `, styles: [":host .toolbar-background-md,:host .toolbar-background-ios{background:transparent}:host .week-toolbar{--padding-start: 0;--padding-end: 0;--padding-bottom: 0;--padding-top: 0}:host .week-toolbar.primary{--background: var(--ion-color-primary)}:host .week-toolbar.secondary{--background: var(--ion-color-secondary)}:host .week-toolbar.danger{--background: var(--ion-color-danger)}:host .week-toolbar.dark{--background: var(--ion-color-dark)}:host .week-toolbar.light{--background: var(--ion-color-light)}:host .week-toolbar.transparent{--background: transparent}:host .week-toolbar.toolbar-md{min-height:44px}:host .week-title{margin:0;height:44px;width:100%;padding:15px 0;font-size:.9em}:host .week-title.light,:host .week-title.transparent{color:#9e9e9e}:host .week-title li{list-style-type:none;display:block;float:left;width:14%;text-align:center;font-weight:700}:host .week-title li:nth-of-type(7n),:host .week-title li:nth-of-type(7n+1){width:15%}\n"] }]
    }], () => [], { color: [{
            type: Input
        }], weekArray: [{
            type: Input
        }], weekStart: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CalendarWeekComponent, { className: "CalendarWeekComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItd2Vlay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvY2FsZW5kYXItd2Vlay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7Ozs7SUFRN0IsMEJBQXdDO0lBQUEsWUFBTztJQUFBLGlCQUFLOzs7SUFBWixjQUFPO0lBQVAsMEJBQU87O0FBS3ZELE1BQU0sT0FBTyxxQkFBcUI7SUFNaEM7UUFMQSxlQUFVLEdBQWEsUUFBUSxDQUFDLFlBQVksQ0FBQztRQUM3QyxzQkFBaUIsR0FBYSxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzlDLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFFZixVQUFLLEdBQXVCLFFBQVEsQ0FBQyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQUNoQixJQUNJLFNBQVMsQ0FBQyxLQUEyQjtRQUN2QyxJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNwQixDQUFDO0lBQ0gsQ0FBQztJQUVELElBQ0ksU0FBUyxDQUFDLEtBQXlCO1FBQ3JDLElBQUksS0FBSyxLQUFLLENBQUMsSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFLENBQUM7WUFDL0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDeEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3BCLENBQUM7SUFDSCxDQUFDO0lBRUQsVUFBVTtRQUNSLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxDQUFDLEVBQUUsQ0FBQztZQUMxQixNQUFNLGNBQWMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBUSxDQUFDO1lBQ25ELGNBQWMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7WUFDNUMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsR0FBRyxjQUFjLENBQUMsQ0FBQztRQUMvQyxDQUFDO2FBQU0sSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2hELENBQUM7SUFDSCxDQUFDO3NGQS9CVSxxQkFBcUI7b0VBQXJCLHFCQUFxQjtZQU41QixBQURGLHNDQUFxRCxTQUNmO1lBQ2xDLG9FQUF3QztZQUU1QyxBQURFLGlCQUFLLEVBQ087O1lBSkQsOEJBQXlCO1lBQ2hDLGNBQStCO1lBQS9CLHdDQUErQjtZQUNmLGNBQW9CO1lBQXBCLCtDQUFvQjs7O2lGQUtqQyxxQkFBcUI7Y0FYakMsU0FBUzsyQkFDRSxtQkFBbUIsWUFFbkI7Ozs7OztHQU1UO29CQU9ELEtBQUs7a0JBREosS0FBSztZQUlGLFNBQVM7a0JBRFosS0FBSztZQVNGLFNBQVM7a0JBRFosS0FBSzs7a0ZBZksscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZGVmYXVsdHMgfSBmcm9tICcuLi9jb25maWcnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpb24tY2FsZW5kYXItd2VlaycsXG4gIHN0eWxlVXJsczogWycuL2NhbGVuZGFyLXdlZWsuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8aW9uLXRvb2xiYXIgW2NsYXNzXT1cIid3ZWVrLXRvb2xiYXIgJ1wiIG5vLWJvcmRlci10b3A+XG4gICAgICA8dWwgW2NsYXNzXT1cIid3ZWVrLXRpdGxlICcgKyBjb2xvclwiPlxuICAgICAgICA8bGkgKm5nRm9yPVwibGV0IHcgb2YgX2Rpc3BsYXlXZWVrQXJyYXlcIj57eyB3IH19PC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9pb24tdG9vbGJhcj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJXZWVrQ29tcG9uZW50IHtcbiAgX3dlZWtBcnJheTogc3RyaW5nW10gPSBkZWZhdWx0cy5XRUVLU19GT1JNQVQ7XG4gIF9kaXNwbGF5V2Vla0FycmF5OiBzdHJpbmdbXSA9IHRoaXMuX3dlZWtBcnJheTtcbiAgX3dlZWtTdGFydCA9IDA7XG4gIEBJbnB1dCgpXG4gIGNvbG9yOiBzdHJpbmcgfCB1bmRlZmluZWQgPSBkZWZhdWx0cy5DT0xPUjtcbiAgY29uc3RydWN0b3IoKSB7fVxuICBASW5wdXQoKVxuICBzZXQgd2Vla0FycmF5KHZhbHVlOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS5sZW5ndGggPT09IDcpIHtcbiAgICAgIHRoaXMuX3dlZWtBcnJheSA9IFsuLi52YWx1ZV07XG4gICAgICB0aGlzLmFkanVzdFNvcnQoKTtcbiAgICB9XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgd2Vla1N0YXJ0KHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IDAgfHwgdmFsdWUgPT09IDEpIHtcbiAgICAgIHRoaXMuX3dlZWtTdGFydCA9IHZhbHVlO1xuICAgICAgdGhpcy5hZGp1c3RTb3J0KCk7XG4gICAgfVxuICB9XG5cbiAgYWRqdXN0U29ydCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fd2Vla1N0YXJ0ID09PSAxKSB7XG4gICAgICBjb25zdCBjYWNoZVdlZWtBcnJheSA9IFsuLi50aGlzLl93ZWVrQXJyYXldIGFzIGFueTtcbiAgICAgIGNhY2hlV2Vla0FycmF5LnB1c2goY2FjaGVXZWVrQXJyYXkuc2hpZnQoKSk7XG4gICAgICB0aGlzLl9kaXNwbGF5V2Vla0FycmF5ID0gWy4uLmNhY2hlV2Vla0FycmF5XTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX3dlZWtTdGFydCA9PT0gMCkge1xuICAgICAgdGhpcy5fZGlzcGxheVdlZWtBcnJheSA9IFsuLi50aGlzLl93ZWVrQXJyYXldO1xuICAgIH1cbiAgfVxufVxuIl19