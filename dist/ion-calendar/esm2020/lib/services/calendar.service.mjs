import { Inject, Injectable, Optional } from '@angular/core';
import moment from 'moment';
import { defaults, pickModes } from '../config';
import { DEFAULT_CALENDAR_OPTIONS } from './calendar-options.provider';
import * as i0 from "@angular/core";
const isBoolean = (input) => input === true || input === false;
export class CalendarService {
    constructor(defaultOpts) {
        this.defaultOpts = defaultOpts;
    }
    get DEFAULT_STEP() {
        return 12;
    }
    safeOpt(calendarOptions = {}) {
        const _disableWeeks = [];
        const _daysConfig = [];
        let { from = new Date(), to = 0, weekStart = 0, step = this.DEFAULT_STEP, id = '', cssClass = '', closeLabel = 'CANCEL', doneLabel = 'DONE', monthFormat = 'MMM YYYY', title = 'CALENDAR', defaultTitle = '', defaultSubtitle = '', autoDone = false, canBackwardsSelected = false, closeIcon = false, doneIcon = false, showYearPicker = false, isSaveHistory = false, pickMode = pickModes.SINGLE, color = defaults.COLOR, weekdays = defaults.WEEKS_FORMAT, daysConfig = _daysConfig, disableWeeks = _disableWeeks, showAdjacentMonthDay = true, defaultEndDateToStartDate = false, clearLabel = null, maxMultiDates = null } = { ...this.defaultOpts, ...calendarOptions };
        return {
            id,
            from,
            to,
            pickMode,
            autoDone,
            color,
            cssClass,
            weekStart,
            closeLabel,
            closeIcon,
            doneLabel,
            doneIcon,
            canBackwardsSelected,
            isSaveHistory,
            disableWeeks,
            monthFormat,
            title,
            weekdays,
            daysConfig,
            step,
            showYearPicker,
            defaultTitle,
            defaultSubtitle,
            defaultScrollTo: calendarOptions.defaultScrollTo || from,
            defaultDate: calendarOptions.defaultDate || null,
            defaultDates: calendarOptions.defaultDates || null,
            defaultDateRange: calendarOptions.defaultDateRange || null,
            showAdjacentMonthDay,
            defaultEndDateToStartDate,
            clearLabel,
            maxMultiDates
        };
    }
    createOriginalCalendar(time) {
        const date = new Date(time);
        const year = date.getFullYear();
        const month = date.getMonth();
        const firstWeek = new Date(year, month, 1).getDay();
        const howManyDays = moment(time).daysInMonth();
        return {
            year,
            month,
            firstWeek,
            howManyDays,
            time: new Date(year, month, 1).getTime(),
            date: new Date(time),
        };
    }
    findDayConfig(day, opt) {
        if (!opt.daysConfig && opt.daysConfig.length <= 0)
            return null;
        return opt.daysConfig.find((n) => day.isSame(n.date, 'day'));
    }
    createCalendarDay(time, opt, month) {
        let _time = moment(time);
        let date = moment(time);
        let isToday = moment().isSame(_time, 'days');
        let dayConfig = this.findDayConfig(_time, opt);
        let _rangeBeg = moment(opt.from).valueOf();
        let _rangeEnd = moment(opt.to).valueOf();
        let isBetween = true;
        let disableWee = opt?.disableWeeks?.indexOf(_time.toDate().getDay()) !== -1;
        if (_rangeBeg > 0 && _rangeEnd > 0) {
            if (!opt.canBackwardsSelected) {
                isBetween = !_time.isBetween(_rangeBeg, _rangeEnd, 'days', '[]');
            }
            else {
                isBetween = moment(_time).isBefore(_rangeBeg) ? false : isBetween;
            }
        }
        else if (_rangeBeg > 0 && _rangeEnd === 0) {
            if (!opt.canBackwardsSelected) {
                let _addTime = _time.add(1, 'day');
                isBetween = !_addTime.isAfter(_rangeBeg);
            }
            else {
                isBetween = false;
            }
        }
        let _disable = false;
        if (dayConfig && isBoolean(dayConfig.disable)) {
            _disable = dayConfig.disable;
        }
        else {
            _disable = disableWee || isBetween;
        }
        let title = new Date(time).getDate().toString();
        if (dayConfig && dayConfig.title) {
            title = dayConfig.title;
        }
        else if (opt.defaultTitle) {
            title = opt.defaultTitle;
        }
        let subTitle = '';
        if (dayConfig && dayConfig.subTitle) {
            subTitle = dayConfig.subTitle;
        }
        else if (opt.defaultSubtitle) {
            subTitle = opt.defaultSubtitle;
        }
        return {
            time,
            isToday,
            title,
            subTitle,
            selected: false,
            isLastMonth: date.month() < (month ? month : 0),
            isNextMonth: date.month() > (month ? month : 0),
            marked: dayConfig ? dayConfig.marked || false : false,
            cssClass: dayConfig ? dayConfig.cssClass || '' : '',
            demandLevel: dayConfig ? dayConfig.demandLevel : '',
            disable: _disable,
            isFirst: date.date() === 1,
            isLast: date.date() === date.daysInMonth(),
        };
    }
    createCalendarMonth(original, opt) {
        let days = new Array(6).fill(null);
        let len = original.howManyDays;
        for (let i = original.firstWeek; i < len + original.firstWeek; i++) {
            let itemTime = new Date(original.year, original.month, i - original.firstWeek + 1).getTime();
            days[i] = this.createCalendarDay(itemTime, opt);
        }
        let weekStart = opt.weekStart;
        if (weekStart === 1) {
            if (days[0] === null) {
                days.shift();
            }
            else {
                days.unshift(...new Array(6).fill(null));
            }
        }
        if (opt.showAdjacentMonthDay) {
            const _booleanMap = days.map(e => !!e);
            const thisMonth = moment(original.time).month();
            let startOffsetIndex = _booleanMap.indexOf(true) - 1;
            let endOffsetIndex = _booleanMap.lastIndexOf(true) + 1;
            for (startOffsetIndex; startOffsetIndex >= 0; startOffsetIndex--) {
                const dayBefore = moment(days[startOffsetIndex + 1].time)
                    .clone()
                    .subtract(1, 'd');
                days[startOffsetIndex] = this.createCalendarDay(dayBefore.valueOf(), opt, thisMonth);
            }
            if (!(_booleanMap.length % 7 === 0 && _booleanMap[_booleanMap.length - 1])) {
                for (endOffsetIndex; endOffsetIndex < days.length + (endOffsetIndex % 7); endOffsetIndex++) {
                    const dayAfter = moment(days[endOffsetIndex - 1].time)
                        .clone()
                        .add(1, 'd');
                    days[endOffsetIndex] = this.createCalendarDay(dayAfter.valueOf(), opt, thisMonth);
                }
            }
        }
        return {
            days,
            original: original,
        };
    }
    createMonthsByPeriod(startTime, monthsNum, opt) {
        let _array = [];
        let _start = new Date(startTime);
        let _startMonth = new Date(_start.getFullYear(), _start.getMonth(), 1).getTime();
        for (let i = 0; i < monthsNum; i++) {
            let time = moment(_startMonth)
                .add(i, 'M')
                .valueOf();
            let originalCalendar = this.createOriginalCalendar(time);
            _array.push(this.createCalendarMonth(originalCalendar, opt));
        }
        return _array;
    }
    wrapResult(original, pickMode) {
        let result;
        switch (pickMode) {
            case pickModes.SINGLE:
                result = this.multiFormat(original[0].time);
                break;
            case pickModes.RANGE:
                result = {
                    from: this.multiFormat(original[0].time),
                    to: this.multiFormat((original[1] || original[0]).time),
                };
                break;
            case pickModes.MULTI:
                result = original.map(e => this.multiFormat(e.time));
                break;
            default:
                result = original;
        }
        return result;
    }
    multiFormat(time) {
        const _moment = moment(time);
        return {
            time: _moment.valueOf(),
            unix: _moment.unix(),
            dateObj: _moment.toDate(),
            string: _moment.format(defaults.DATE_FORMAT),
            years: _moment.year(),
            months: _moment.month() + 1,
            date: _moment.date(),
        };
    }
}
CalendarService.ɵfac = function CalendarService_Factory(t) { return new (t || CalendarService)(i0.ɵɵinject(DEFAULT_CALENDAR_OPTIONS, 8)); };
CalendarService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CalendarService, factory: CalendarService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CalendarService, [{
        type: Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [DEFAULT_CALENDAR_OPTIONS]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvc2VydmljZXMvY2FsZW5kYXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBVTVCLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ2hELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDOztBQUV2RSxNQUFNLFNBQVMsR0FBRyxDQUFDLEtBQVUsRUFBRSxFQUFFLENBQUMsS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssS0FBSyxDQUFDO0FBR3BFLE1BQU0sT0FBTyxlQUFlO0lBRzFCLFlBQTBELFdBQWlDO1FBQ3pGLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxJQUFJLFlBQVk7UUFDZCxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFRCxPQUFPLENBQUMsa0JBQXVCLEVBQUU7UUFDL0IsTUFBTSxhQUFhLEdBQWEsRUFBRSxDQUFDO1FBQ25DLE1BQU0sV0FBVyxHQUFnQixFQUFFLENBQUM7UUFDcEMsSUFBSSxFQUNGLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxFQUNqQixFQUFFLEdBQUcsQ0FBQyxFQUNOLFNBQVMsR0FBRyxDQUFDLEVBQ2IsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQ3hCLEVBQUUsR0FBRyxFQUFFLEVBQ1AsUUFBUSxHQUFHLEVBQUUsRUFDYixVQUFVLEdBQUcsUUFBUSxFQUNyQixTQUFTLEdBQUcsTUFBTSxFQUNsQixXQUFXLEdBQUcsVUFBVSxFQUN4QixLQUFLLEdBQUcsVUFBVSxFQUNsQixZQUFZLEdBQUcsRUFBRSxF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Q0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixPQUFPO1lBQ0wsSUFBSSxFQUFFLE9BQU8sQ0FBQyxPQUFPLEVBQUU7WUFDdkIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJLEVBQUU7WUFDcEIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFDekIsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQztZQUM1QyxLQUFLLEVBQUUsT0FBTyxDQUFDLElBQUksRUFBRTtZQUNyQixNQUFNLEVBQUUsT0FBTyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUM7WUFDM0IsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJLEVBQUU7U0FDckIsQ0FBQztJQUNKLENBQUM7OzhFQWpRVSxlQUFlLGNBR00sd0JBQXdCO3FFQUg3QyxlQUFlLFdBQWYsZUFBZTt1RkFBZixlQUFlO2NBRDNCLFVBQVU7O3NCQUlJLFFBQVE7O3NCQUFJLE1BQU07dUJBQUMsd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG5pbXBvcnQge1xuICBDYWxlbmRhck9yaWdpbmFsLFxuICBDYWxlbmRhckRheSxcbiAgQ2FsZW5kYXJNb250aCxcbiAgQ2FsZW5kYXJNb2RhbE9wdGlvbnMsXG4gIENhbGVuZGFyUmVzdWx0LFxuICBEYXlDb25maWcsXG59IGZyb20gJy4uL2NhbGVuZGFyLm1vZGVsJztcbmltcG9ydCB7IGRlZmF1bHRzLCBwaWNrTW9kZXMgfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHsgREVGQVVMVF9DQUxFTkRBUl9PUFRJT05TIH0gZnJvbSAnLi9jYWxlbmRhci1vcHRpb25zLnByb3ZpZGVyJztcblxuY29uc3QgaXNCb29sZWFuID0gKGlucHV0OiBhbnkpID0+IGlucHV0ID09PSB0cnVlIHx8IGlucHV0ID09PSBmYWxzZTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyU2VydmljZSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgZGVmYXVsdE9wdHM6IENhbGVuZGFyTW9kYWxPcHRpb25zO1xuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBJbmplY3QoREVGQVVMVF9DQUxFTkRBUl9PUFRJT05TKSBkZWZhdWx0T3B0czogQ2FsZW5kYXJNb2RhbE9wdGlvbnMpIHtcbiAgICB0aGlzLmRlZmF1bHRPcHRzID0gZGVmYXVsdE9wdHM7XG4gIH1cblxuICBnZXQgREVGQVVMVF9TVEVQKCkge1xuICAgIHJldHVybiAxMjtcbiAgfVxuXG4gIHNhZmVPcHQoY2FsZW5kYXJPcHRpb25zOiBhbnkgPSB7fSk6IENhbGVuZGFyTW9kYWxPcHRpb25zIHtcbiAgICBjb25zdCBfZGlzYWJsZVdlZWtzOiBudW1iZXJbXSA9IFtdO1xuICAgIGNvbnN0IF9kYXlzQ29uZmlnOiBEYXlDb25maWdbXSA9IFtdO1xuICAgIGxldCB7XG4gICAgICBmcm9tID0gbmV3IERhdGUoKSxcbiAgICAgIHRvID0gMCxcbiAgICAgIHdlZWtTdGFydCA9IDAsXG4gICAgICBzdGVwID0gdGhpcy5ERUZBVUxUX1NURVAsXG4gICAgICBpZCA9ICcnLFxuICAgICAgY3NzQ2xhc3MgPSAnJyxcbiAgICAgIGNsb3NlTGFiZWwgPSAnQ0FOQ0VMJyxcbiAgICAgIGRvbmVMYWJlbCA9ICdET05FJyxcbiAgICAgIG1vbnRoRm9ybWF0ID0gJ01NTSBZWVlZJyxcbiAgICAgIHRpdGxlID0gJ0NBTEVOREFSJyxcbiAgICAgIGRlZmF1bHRUaXRsZSA9ICcnLFxuICAgICAgZGVmYXVsdFN1YnRpdGxlID0gJycsXG4gICAgICBhdXRvRG9uZSA9IGZhbHNlLFxuICAgICAgY2FuQmFja3dhcmRzU2VsZWN0ZWQgPSBmYWxzZSxcbiAgICAgIGNsb3NlSWNvbiA9IGZhbHNlLFxuICAgICAgZG9uZUljb24gPSBmYWxzZSxcbiAgICAgIHNob3dZZWFyUGlja2VyID0gZmFsc2UsXG4gICAgICBpc1NhdmVIaXN0b3J5ID0gZmFsc2UsXG4gICAgICBwaWNrTW9kZSA9IHBpY2tNb2Rlcy5TSU5HTEUsXG4gICAgICBjb2xvciA9IGRlZmF1bHRzLkNPTE9SLFxuICAgICAgd2Vla2RheXMgPSBkZWZhdWx0cy5XRUVLU19GT1JNQVQsXG4gICAgICBkYXlzQ29uZmlnID0gX2RheXNDb25maWcsXG4gICAgICBkaXNhYmxlV2Vla3MgPSBfZGlzYWJsZVdlZWtzLFxuICAgICAgc2hvd0FkamFjZW50TW9udGhEYXkgPSB0cnVlLFxuICAgICAgZGVmYXVsdEVuZERhdGVUb1N0YXJ0RGF0ZSA9IGZhbHNlLFxuICAgICAgY2xlYXJMYWJlbCA9IG51bGwsXG4gICAgICBtYXhNdWx0aURhdGVzID0gbnVsbFxuICAgIH0gPSB7IC4uLnRoaXMuZGVmYXVsdE9wdHMsIC4uLmNhbGVuZGFyT3B0aW9ucyB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGlkLFxuICAgICAgZnJvbSxcbiAgICAgIHRvLFxuICAgICAgcGlja01vZGUsXG4gICAgICBhdXRvRG9uZSxcbiAgICAgIGNvbG9yLFxuICAgICAgY3NzQ2xhc3MsXG4gICAgICB3ZWVrU3RhcnQsXG4gICAgICBjbG9zZUxhYmVsLFxuICAgICAgY2xvc2VJY29uLFxuICAgICAgZG9uZUxhYmVsLFxuICAgICAgZG9uZUljb24sXG4gICAgICBjYW5CYWNrd2FyZHNTZWxlY3RlZCxcbiAgICAgIGlzU2F2ZUhpc3RvcnksXG4gICAgICBkaXNhYmxlV2Vla3MsXG4gICAgICBtb250aEZvcm1hdCxcbiAgICAgIHRpdGxlLFxuICAgICAgd2Vla2RheXMsXG4gICAgICBkYXlzQ29uZmlnLFxuICAgICAgc3RlcCxcbiAgICAgIHNob3dZZWFyUGlja2VyLFxuICAgICAgZGVmYXVsdFRpdGxlLFxuICAgICAgZGVmYXVsdFN1YnRpdGxlLFxuICAgICAgZGVmYXVsdFNjcm9sbFRvOiBjYWxlbmRhck9wdGlvbnMuZGVmYXVsdFNjcm9sbFRvIHx8IGZyb20sXG4gICAgICBkZWZhdWx0RGF0ZTogY2FsZW5kYXJPcHRpb25zLmRlZmF1bHREYXRlIHx8IG51bGwsXG4gICAgICBkZWZhdWx0RGF0ZXM6IGNhbGVuZGFyT3B0aW9ucy5kZWZhdWx0RGF0ZXMgfHwgbnVsbCxcbiAgICAgIGRlZmF1bHREYXRlUmFuZ2U6IGNhbGVuZGFyT3B0aW9ucy5kZWZhdWx0RGF0ZVJhbmdlIHx8IG51bGwsXG4gICAgICBzaG93QWRqYWNlbnRNb250aERheSxcbiAgICAgIGRlZmF1bHRFbmREYXRlVG9TdGFydERhdGUsXG4gICAgICBjbGVhckxhYmVsLFxuICAgICAgbWF4TXVsdGlEYXRlc1xuICAgIH07XG4gIH1cblxuICBjcmVhdGVPcmlnaW5hbENhbGVuZGFyKHRpbWU6IG51bWJlcik6IENhbGVuZGFyT3JpZ2luYWwge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0aW1lKTtcbiAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xuICAgIGNvbnN0IGZpcnN0V2VlayA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCAxKS5nZXREYXkoKTtcbiAgICBjb25zdCBob3dNYW55RGF5cyA9IG1vbWVudCh0aW1lKS5kYXlzSW5Nb250aCgpO1xuICAgIHJldHVybiB7XG4gICAgICB5ZWFyLFxuICAgICAgbW9udGgsXG4gICAgICBmaXJzdFdlZWssXG4gICAgICBob3dNYW55RGF5cyxcbiAgICAgIHRpbWU6IG5ldyBEYXRlKHllYXIsIG1vbnRoLCAxKS5nZXRUaW1lKCksXG4gICAgICBkYXRlOiBuZXcgRGF0ZSh0aW1lKSxcbiAgICB9O1xuICB9XG5cbiAgZmluZERheUNvbmZpZyhkYXk6IGFueSwgb3B0OiBhbnkpOiBhbnkge1xuICAgIGlmICghb3B0LmRheXNDb25maWcgJiYgb3B0LmRheXNDb25maWcubGVuZ3RoIDw9IDApIHJldHVybiBudWxsO1xuICAgIHJldHVybiBvcHQuZGF5c0NvbmZpZy5maW5kKChuOiB7IGRhdGU6IGFueTsgfSkgPT4gZGF5LmlzU2FtZShuLmRhdGUsICdkYXknKSk7XG4gIH1cblxuICBjcmVhdGVDYWxlbmRhckRheSh0aW1lOiBudW1iZXIsIG9wdDogQ2FsZW5kYXJNb2RhbE9wdGlvbnMsIG1vbnRoPzogbnVtYmVyKTogQ2FsZW5kYXJEYXkge1xuICAgIGxldCBfdGltZSA9IG1vbWVudCh0aW1lKTtcbiAgICBsZXQgZGF0ZSA9IG1vbWVudCh0aW1lKTtcbiAgICBsZXQgaXNUb2RheSA9IG1vbWVudCgpLmlzU2FtZShfdGltZSwgJ2RheXMnKTtcbiAgICBsZXQgZGF5Q29uZmlnID0gdGhpcy5maW5kRGF5Q29uZmlnKF90aW1lLCBvcHQpO1xuICAgIGxldCBfcmFuZ2VCZWcgPSBtb21lbnQob3B0LmZyb20pLnZhbHVlT2YoKTtcbiAgICBsZXQgX3JhbmdlRW5kID0gbW9tZW50KG9wdC50bykudmFsdWVPZigpO1xuICAgIGxldCBpc0JldHdlZW4gPSB0cnVlO1xuICAgIGxldCBkaXNhYmxlV2VlID0gb3B0Py5kaXNhYmxlV2Vla3M/LmluZGV4T2YoX3RpbWUudG9EYXRlKCkuZ2V0RGF5KCkpICE9PSAtMTtcbiAgICBpZiAoX3JhbmdlQmVnID4gMCAmJiBfcmFuZ2VFbmQgPiAwKSB7XG4gICAgICBpZiAoIW9wdC5jYW5CYWNrd2FyZHNTZWxlY3RlZCkge1xuICAgICAgICBpc0JldHdlZW4gPSAhX3RpbWUuaXNCZXR3ZWVuKF9yYW5nZUJlZywgX3JhbmdlRW5kLCAnZGF5cycsICdbXScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXNCZXR3ZWVuID0gbW9tZW50KF90aW1lKS5pc0JlZm9yZShfcmFuZ2VCZWcpID8gZmFsc2UgOiBpc0JldHdlZW47XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChfcmFuZ2VCZWcgPiAwICYmIF9yYW5nZUVuZCA9PT0gMCkge1xuICAgICAgaWYgKCFvcHQuY2FuQmFja3dhcmRzU2VsZWN0ZWQpIHtcbiAgICAgICAgbGV0IF9hZGRUaW1lID0gX3RpbWUuYWRkKDEsICdkYXknKTtcbiAgICAgICAgaXNCZXR3ZWVuID0gIV9hZGRUaW1lLmlzQWZ0ZXIoX3JhbmdlQmVnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlzQmV0d2VlbiA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBfZGlzYWJsZSA9IGZhbHNlO1xuXG4gICAgaWYgKGRheUNvbmZpZyAmJiBpc0Jvb2xlYW4oZGF5Q29uZmlnLmRpc2FibGUpKSB7XG4gICAgICBfZGlzYWJsZSA9IGRheUNvbmZpZy5kaXNhYmxlO1xuICAgIH0gZWxzZSB7XG4gICAgICBfZGlzYWJsZSA9IGRpc2FibGVXZWUgfHwgaXNCZXR3ZWVuO1xuICAgIH1cblxuICAgIGxldCB0aXRsZSA9IG5ldyBEYXRlKHRpbWUpLmdldERhdGUoKS50b1N0cmluZygpO1xuICAgIGlmIChkYXlDb25maWcgJiYgZGF5Q29uZmlnLnRpdGxlKSB7XG4gICAgICB0aXRsZSA9IGRheUNvbmZpZy50aXRsZTtcbiAgICB9IGVsc2UgaWYgKG9wdC5kZWZhdWx0VGl0bGUpIHtcbiAgICAgIHRpdGxlID0gb3B0LmRlZmF1bHRUaXRsZTtcbiAgICB9XG4gICAgbGV0IHN1YlRpdGxlID0gJyc7XG4gICAgaWYgKGRheUNvbmZpZyAmJiBkYXlDb25maWcuc3ViVGl0bGUpIHtcbiAgICAgIHN1YlRpdGxlID0gZGF5Q29uZmlnLnN1YlRpdGxlO1xuICAgIH0gZWxzZSBpZiAob3B0LmRlZmF1bHRTdWJ0aXRsZSkge1xuICAgICAgc3ViVGl0bGUgPSBvcHQuZGVmYXVsdFN1YnRpdGxlO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB0aW1lLFxuICAgICAgaXNUb2RheSxcbiAgICAgIHRpdGxlLFxuICAgICAgc3ViVGl0bGUsXG4gICAgICBzZWxlY3RlZDogZmFsc2UsXG4gICAgICBpc0xhc3RNb250aDogZGF0ZS5tb250aCgpIDwgKG1vbnRoID8gbW9udGggOiAwKSxcbiAgICAgIGlzTmV4dE1vbnRoOiBkYXRlLm1vbnRoKCkgPiAobW9udGggPyBtb250aCA6IDApLFxuICAgICAgbWFya2VkOiBkYXlDb25maWcgPyBkYXlDb25maWcubWFya2VkIHx8IGZhbHNlIDogZmFsc2UsXG4gICAgICBjc3NDbGFzczogZGF5Q29uZmlnID8gZGF5Q29uZmlnLmNzc0NsYXNzIHx8ICcnIDogJycsXG4gICAgICBkZW1hbmRMZXZlbDogZGF5Q29uZmlnID8gZGF5Q29uZmlnLmRlbWFuZExldmVsIDogJycsXG4gICAgICBkaXNhYmxlOiBfZGlzYWJsZSxcbiAgICAgIGlzRmlyc3Q6IGRhdGUuZGF0ZSgpID09PSAxLFxuICAgICAgaXNMYXN0OiBkYXRlLmRhdGUoKSA9PT0gZGF0ZS5kYXlzSW5Nb250aCgpLFxuICAgIH07XG4gIH1cblxuICBjcmVhdGVDYWxlbmRhck1vbnRoKG9yaWdpbmFsOiBDYWxlbmRhck9yaWdpbmFsLCBvcHQ6IENhbGVuZGFyTW9kYWxPcHRpb25zKTogQ2FsZW5kYXJNb250aCB7XG4gICAgbGV0IGRheXM6IEFycmF5PENhbGVuZGFyRGF5PiA9IG5ldyBBcnJheSg2KS5maWxsKG51bGwpO1xuICAgIGxldCBsZW4gPSBvcmlnaW5hbC5ob3dNYW55RGF5cztcbiAgICBmb3IgKGxldCBpID0gb3JpZ2luYWwuZmlyc3RXZWVrOyBpIDwgbGVuICsgb3JpZ2luYWwuZmlyc3RXZWVrOyBpKyspIHtcbiAgICAgIGxldCBpdGVtVGltZSA9IG5ldyBEYXRlKG9yaWdpbmFsLnllYXIsIG9yaWdpbmFsLm1vbnRoLCBpIC0gb3JpZ2luYWwuZmlyc3RXZWVrICsgMSkuZ2V0VGltZSgpO1xuICAgICAgZGF5c1tpXSA9IHRoaXMuY3JlYXRlQ2FsZW5kYXJEYXkoaXRlbVRpbWUsIG9wdCk7XG4gICAgfVxuXG4gICAgbGV0IHdlZWtTdGFydCA9IG9wdC53ZWVrU3RhcnQ7XG5cbiAgICBpZiAod2Vla1N0YXJ0ID09PSAxKSB7XG4gICAgICBpZiAoZGF5c1swXSA9PT0gbnVsbCkge1xuICAgICAgICBkYXlzLnNoaWZ0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkYXlzLnVuc2hpZnQoLi4ubmV3IEFycmF5KDYpLmZpbGwobnVsbCkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChvcHQuc2hvd0FkamFjZW50TW9udGhEYXkpIHtcbiAgICAgIGNvbnN0IF9ib29sZWFuTWFwID0gZGF5cy5tYXAoZSA9PiAhIWUpO1xuICAgICAgY29uc3QgdGhpc01vbnRoID0gbW9tZW50KG9yaWdpbmFsLnRpbWUpLm1vbnRoKCk7XG4gICAgICBsZXQgc3RhcnRPZmZzZXRJbmRleCA9IF9ib29sZWFuTWFwLmluZGV4T2YodHJ1ZSkgLSAxO1xuICAgICAgbGV0IGVuZE9mZnNldEluZGV4ID0gX2Jvb2xlYW5NYXAubGFzdEluZGV4T2YodHJ1ZSkgKyAxO1xuICAgICAgZm9yIChzdGFydE9mZnNldEluZGV4OyBzdGFydE9mZnNldEluZGV4ID49IDA7IHN0YXJ0T2Zmc2V0SW5kZXgtLSkge1xuICAgICAgICBjb25zdCBkYXlCZWZvcmUgPSBtb21lbnQoZGF5c1tzdGFydE9mZnNldEluZGV4ICsgMV0udGltZSlcbiAgICAgICAgICAuY2xvbmUoKVxuICAgICAgICAgIC5zdWJ0cmFjdCgxLCAnZCcpO1xuICAgICAgICBkYXlzW3N0YXJ0T2Zmc2V0SW5kZXhdID0gdGhpcy5jcmVhdGVDYWxlbmRhckRheShkYXlCZWZvcmUudmFsdWVPZigpLCBvcHQsIHRoaXNNb250aCk7XG4gICAgICB9XG5cbiAgICAgIGlmICghKF9ib29sZWFuTWFwLmxlbmd0aCAlIDcgPT09IDAgJiYgX2Jvb2xlYW5NYXBbX2Jvb2xlYW5NYXAubGVuZ3RoIC0gMV0pKSB7XG4gICAgICAgIGZvciAoZW5kT2Zmc2V0SW5kZXg7IGVuZE9mZnNldEluZGV4IDwgZGF5cy5sZW5ndGggKyAoZW5kT2Zmc2V0SW5kZXggJSA3KTsgZW5kT2Zmc2V0SW5kZXgrKykge1xuICAgICAgICAgIGNvbnN0IGRheUFmdGVyID0gbW9tZW50KGRheXNbZW5kT2Zmc2V0SW5kZXggLSAxXS50aW1lKVxuICAgICAgICAgICAgLmNsb25lKClcbiAgICAgICAgICAgIC5hZGQoMSwgJ2QnKTtcbiAgICAgICAgICBkYXlzW2VuZE9mZnNldEluZGV4XSA9IHRoaXMuY3JlYXRlQ2FsZW5kYXJEYXkoZGF5QWZ0ZXIudmFsdWVPZigpLCBvcHQsIHRoaXNNb250aCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgZGF5cyxcbiAgICAgIG9yaWdpbmFsOiBvcmlnaW5hbCxcbiAgICB9O1xuICB9XG5cbiAgY3JlYXRlTW9udGhzQnlQZXJpb2Qoc3RhcnRUaW1lOiBudW1iZXIsIG1vbnRoc051bTogbnVtYmVyLCBvcHQ6IENhbGVuZGFyTW9kYWxPcHRpb25zKTogQXJyYXk8Q2FsZW5kYXJNb250aD4ge1xuICAgIGxldCBfYXJyYXk6IEFycmF5PENhbGVuZGFyTW9udGg+ID0gW107XG5cbiAgICBsZXQgX3N0YXJ0ID0gbmV3IERhdGUoc3RhcnRUaW1lKTtcbiAgICBsZXQgX3N0YXJ0TW9udGggPSBuZXcgRGF0ZShfc3RhcnQuZ2V0RnVsbFllYXIoKSwgX3N0YXJ0LmdldE1vbnRoKCksIDEpLmdldFRpbWUoKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbW9udGhzTnVtOyBpKyspIHtcbiAgICAgIGxldCB0aW1lID0gbW9tZW50KF9zdGFydE1vbnRoKVxuICAgICAgICAuYWRkKGksICdNJylcbiAgICAgICAgLnZhbHVlT2YoKTtcbiAgICAgIGxldCBvcmlnaW5hbENhbGVuZGFyID0gdGhpcy5jcmVhdGVPcmlnaW5hbENhbGVuZGFyKHRpbWUpO1xuICAgICAgX2FycmF5LnB1c2godGhpcy5jcmVhdGVDYWxlbmRhck1vbnRoKG9yaWdpbmFsQ2FsZW5kYXIsIG9wdCkpO1xuICAgIH1cblxuICAgIHJldHVybiBfYXJyYXk7XG4gIH1cblxuICB3cmFwUmVzdWx0KG9yaWdpbmFsOiBDYWxlbmRhckRheVtdLCBwaWNrTW9kZTogc3RyaW5nKSB7XG4gICAgbGV0IHJlc3VsdDogYW55O1xuICAgIHN3aXRjaCAocGlja01vZGUpIHtcbiAgICAgIGNhc2UgcGlja01vZGVzLlNJTkdMRTpcbiAgICAgICAgcmVzdWx0ID0gdGhpcy5tdWx0aUZvcm1hdChvcmlnaW5hbFswXS50aW1lKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHBpY2tNb2Rlcy5SQU5HRTpcbiAgICAgICAgcmVzdWx0ID0ge1xuICAgICAgICAgIGZyb206IHRoaXMubXVsdGlGb3JtYXQob3JpZ2luYWxbMF0udGltZSksXG4gICAgICAgICAgdG86IHRoaXMubXVsdGlGb3JtYXQoKG9yaWdpbmFsWzFdIHx8IG9yaWdpbmFsWzBdKS50aW1lKSxcbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHBpY2tNb2Rlcy5NVUxUSTpcbiAgICAgICAgcmVzdWx0ID0gb3JpZ2luYWwubWFwKGUgPT4gdGhpcy5tdWx0aUZvcm1hdChlLnRpbWUpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXN1bHQgPSBvcmlnaW5hbDtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIG11bHRpRm9ybWF0KHRpbWU6IG51bWJlcik6IENhbGVuZGFyUmVzdWx0IHtcbiAgICBjb25zdCBfbW9tZW50ID0gbW9tZW50KHRpbWUpO1xuICAgIHJldHVybiB7XG4gICAgICB0aW1lOiBfbW9tZW50LnZhbHVlT2YoKSxcbiAgICAgIHVuaXg6IF9tb21lbnQudW5peCgpLFxuICAgICAgZGF0ZU9iajogX21vbWVudC50b0RhdGUoKSxcbiAgICAgIHN0cmluZzogX21vbWVudC5mb3JtYXQoZGVmYXVsdHMuREFURV9GT1JNQVQpLFxuICAgICAgeWVhcnM6IF9tb21lbnQueWVhcigpLFxuICAgICAgbW9udGhzOiBfbW9tZW50Lm1vbnRoKCkgKyAxLFxuICAgICAgZGF0ZTogX21vbWVudC5kYXRlKCksXG4gICAgfTtcbiAgfVxufVxuIl19