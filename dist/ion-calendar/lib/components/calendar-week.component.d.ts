import * as i0 from "@angular/core";
export declare class CalendarWeekComponent {
    _weekArray: string[];
    _displayWeekArray: string[];
    _weekStart: number;
    color: string | undefined;
    constructor();
    set weekArray(value: string[] | undefined);
    set weekStart(value: number | undefined);
    adjustSort(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CalendarWeekComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CalendarWeekComponent, "ion-calendar-week", never, { "color": { "alias": "color"; "required": false; }; "weekArray": { "alias": "weekArray"; "required": false; }; "weekStart": { "alias": "weekStart"; "required": false; }; }, {}, never, never, false, never>;
}
