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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CalendarService, deps: [{ token: DEFAULT_CALENDAR_OPTIONS, optional: true }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CalendarService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CalendarService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [DEFAULT_CALENDAR_OPTIONS]
                }] }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvc2VydmljZXMvY2FsZW5kYXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBVTVCLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ2hELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDOztBQUV2RSxNQUFNLFNBQVMsR0FBRyxDQUFDLEtBQVUsRUFBRSxFQUFFLENBQUMsS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssS0FBSyxDQUFDO0FBR3BFLE1BQU0sT0FBTyxlQUFlO0lBRzFCLFlBQTBELFdBQWlDO1FBQ3pGLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxJQUFJLFlBQVk7UUFDZCxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFRCxPQUFPLENBQUMsa0JBQXVCLEVBQUU7UUFDL0IsTUFBTSxhQUFhLEdBQWEsRUFBRSxDQUFDO1FBQ25DLE1BQU0sV0FBVyxHQUFnQixFQUFFLENBQUM7UUFDcEMsSUFBSSxFQUNGLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxFQUNqQixFQUFFLEdBQUcsQ0FBQyxFQUNOLFNBQVMsR0FBRyxDQUFDLEVBQ2IsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQ3hCLEVBQUUsR0FBRyxFQUFFLEVBQ1AsUUFBUSxHQUFHLEVBQUUsRUFDYixVQUFVLEdBQUcsUUFBUSxFQUNyQixTQUFTLEdBQUcsTUFBTSxFQUNsQixXQUFXLEdBQUcsVUFBVSxFQUN4QixLQUFLLEdBQUcsVUFBVSxFQUNsQixZQUFZLEdBQUcsRUFBRSxF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QUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDckQsTUFBTTtZQUNSO2dCQUNFLE1BQU0sR0FBRyxRQUFRLENBQUM7UUFDdEIsQ0FBQztRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxXQUFXLENBQUMsSUFBWTtRQUN0QixNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsT0FBTztZQUNMLElBQUksRUFBRSxPQUFPLENBQUMsT0FBTyxFQUFFO1lBQ3ZCLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFFO1lBQ3BCLE9BQU8sRUFBRSxPQUFPLENBQUMsTUFBTSxFQUFFO1lBQ3pCLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUM7WUFDNUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxJQUFJLEVBQUU7WUFDckIsTUFBTSxFQUFFLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDO1lBQzNCLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFFO1NBQ3JCLENBQUM7SUFDSixDQUFDOytHQWpRVSxlQUFlLGtCQUdNLHdCQUF3QjttSEFIN0MsZUFBZTs7NEZBQWYsZUFBZTtrQkFEM0IsVUFBVTs7MEJBSUksUUFBUTs7MEJBQUksTUFBTTsyQkFBQyx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5cbmltcG9ydCB7XG4gIENhbGVuZGFyT3JpZ2luYWwsXG4gIENhbGVuZGFyRGF5LFxuICBDYWxlbmRhck1vbnRoLFxuICBDYWxlbmRhck1vZGFsT3B0aW9ucyxcbiAgQ2FsZW5kYXJSZXN1bHQsXG4gIERheUNvbmZpZyxcbn0gZnJvbSAnLi4vY2FsZW5kYXIubW9kZWwnO1xuaW1wb3J0IHsgZGVmYXVsdHMsIHBpY2tNb2RlcyB9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgeyBERUZBVUxUX0NBTEVOREFSX09QVElPTlMgfSBmcm9tICcuL2NhbGVuZGFyLW9wdGlvbnMucHJvdmlkZXInO1xuXG5jb25zdCBpc0Jvb2xlYW4gPSAoaW5wdXQ6IGFueSkgPT4gaW5wdXQgPT09IHRydWUgfHwgaW5wdXQgPT09IGZhbHNlO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJTZXJ2aWNlIHtcbiAgcHJpdmF0ZSByZWFkb25seSBkZWZhdWx0T3B0czogQ2FsZW5kYXJNb2RhbE9wdGlvbnM7XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEluamVjdChERUZBVUxUX0NBTEVOREFSX09QVElPTlMpIGRlZmF1bHRPcHRzOiBDYWxlbmRhck1vZGFsT3B0aW9ucykge1xuICAgIHRoaXMuZGVmYXVsdE9wdHMgPSBkZWZhdWx0T3B0cztcbiAgfVxuXG4gIGdldCBERUZBVUxUX1NURVAoKSB7XG4gICAgcmV0dXJuIDEyO1xuICB9XG5cbiAgc2FmZU9wdChjYWxlbmRhck9wdGlvbnM6IGFueSA9IHt9KTogQ2FsZW5kYXJNb2RhbE9wdGlvbnMge1xuICAgIGNvbnN0IF9kaXNhYmxlV2Vla3M6IG51bWJlcltdID0gW107XG4gICAgY29uc3QgX2RheXNDb25maWc6IERheUNvbmZpZ1tdID0gW107XG4gICAgbGV0IHtcbiAgICAgIGZyb20gPSBuZXcgRGF0ZSgpLFxuICAgICAgdG8gPSAwLFxuICAgICAgd2Vla1N0YXJ0ID0gMCxcbiAgICAgIHN0ZXAgPSB0aGlzLkRFRkFVTFRfU1RFUCxcbiAgICAgIGlkID0gJycsXG4gICAgICBjc3NDbGFzcyA9ICcnLFxuICAgICAgY2xvc2VMYWJlbCA9ICdDQU5DRUwnLFxuICAgICAgZG9uZUxhYmVsID0gJ0RPTkUnLFxuICAgICAgbW9udGhGb3JtYXQgPSAnTU1NIFlZWVknLFxuICAgICAgdGl0bGUgPSAnQ0FMRU5EQVInLFxuICAgICAgZGVmYXVsdFRpdGxlID0gJycsXG4gICAgICBkZWZhdWx0U3VidGl0bGUgPSAnJyxcbiAgICAgIGF1dG9Eb25lID0gZmFsc2UsXG4gICAgICBjYW5CYWNrd2FyZHNTZWxlY3RlZCA9IGZhbHNlLFxuICAgICAgY2xvc2VJY29uID0gZmFsc2UsXG4gICAgICBkb25lSWNvbiA9IGZhbHNlLFxuICAgICAgc2hvd1llYXJQaWNrZXIgPSBmYWxzZSxcbiAgICAgIGlzU2F2ZUhpc3RvcnkgPSBmYWxzZSxcbiAgICAgIHBpY2tNb2RlID0gcGlja01vZGVzLlNJTkdMRSxcbiAgICAgIGNvbG9yID0gZGVmYXVsdHMuQ09MT1IsXG4gICAgICB3ZWVrZGF5cyA9IGRlZmF1bHRzLldFRUtTX0ZPUk1BVCxcbiAgICAgIGRheXNDb25maWcgPSBfZGF5c0NvbmZpZyxcbiAgICAgIGRpc2FibGVXZWVrcyA9IF9kaXNhYmxlV2Vla3MsXG4gICAgICBzaG93QWRqYWNlbnRNb250aERheSA9IHRydWUsXG4gICAgICBkZWZhdWx0RW5kRGF0ZVRvU3RhcnREYXRlID0gZmFsc2UsXG4gICAgICBjbGVhckxhYmVsID0gbnVsbCxcbiAgICAgIG1heE11bHRpRGF0ZXMgPSBudWxsXG4gICAgfSA9IHsgLi4udGhpcy5kZWZhdWx0T3B0cywgLi4uY2FsZW5kYXJPcHRpb25zIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgaWQsXG4gICAgICBmcm9tLFxuICAgICAgdG8sXG4gICAgICBwaWNrTW9kZSxcbiAgICAgIGF1dG9Eb25lLFxuICAgICAgY29sb3IsXG4gICAgICBjc3NDbGFzcyxcbiAgICAgIHdlZWtTdGFydCxcbiAgICAgIGNsb3NlTGFiZWwsXG4gICAgICBjbG9zZUljb24sXG4gICAgICBkb25lTGFiZWwsXG4gICAgICBkb25lSWNvbixcbiAgICAgIGNhbkJhY2t3YXJkc1NlbGVjdGVkLFxuICAgICAgaXNTYXZlSGlzdG9yeSxcbiAgICAgIGRpc2FibGVXZWVrcyxcbiAgICAgIG1vbnRoRm9ybWF0LFxuICAgICAgdGl0bGUsXG4gICAgICB3ZWVrZGF5cyxcbiAgICAgIGRheXNDb25maWcsXG4gICAgICBzdGVwLFxuICAgICAgc2hvd1llYXJQaWNrZXIsXG4gICAgICBkZWZhdWx0VGl0bGUsXG4gICAgICBkZWZhdWx0U3VidGl0bGUsXG4gICAgICBkZWZhdWx0U2Nyb2xsVG86IGNhbGVuZGFyT3B0aW9ucy5kZWZhdWx0U2Nyb2xsVG8gfHwgZnJvbSxcbiAgICAgIGRlZmF1bHREYXRlOiBjYWxlbmRhck9wdGlvbnMuZGVmYXVsdERhdGUgfHwgbnVsbCxcbiAgICAgIGRlZmF1bHREYXRlczogY2FsZW5kYXJPcHRpb25zLmRlZmF1bHREYXRlcyB8fCBudWxsLFxuICAgICAgZGVmYXVsdERhdGVSYW5nZTogY2FsZW5kYXJPcHRpb25zLmRlZmF1bHREYXRlUmFuZ2UgfHwgbnVsbCxcbiAgICAgIHNob3dBZGphY2VudE1vbnRoRGF5LFxuICAgICAgZGVmYXVsdEVuZERhdGVUb1N0YXJ0RGF0ZSxcbiAgICAgIGNsZWFyTGFiZWwsXG4gICAgICBtYXhNdWx0aURhdGVzXG4gICAgfTtcbiAgfVxuXG4gIGNyZWF0ZU9yaWdpbmFsQ2FsZW5kYXIodGltZTogbnVtYmVyKTogQ2FsZW5kYXJPcmlnaW5hbCB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRpbWUpO1xuICAgIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG4gICAgY29uc3QgZmlyc3RXZWVrID0gbmV3IERhdGUoeWVhciwgbW9udGgsIDEpLmdldERheSgpO1xuICAgIGNvbnN0IGhvd01hbnlEYXlzID0gbW9tZW50KHRpbWUpLmRheXNJbk1vbnRoKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHllYXIsXG4gICAgICBtb250aCxcbiAgICAgIGZpcnN0V2VlayxcbiAgICAgIGhvd01hbnlEYXlzLFxuICAgICAgdGltZTogbmV3IERhdGUoeWVhciwgbW9udGgsIDEpLmdldFRpbWUoKSxcbiAgICAgIGRhdGU6IG5ldyBEYXRlKHRpbWUpLFxuICAgIH07XG4gIH1cblxuICBmaW5kRGF5Q29uZmlnKGRheTogYW55LCBvcHQ6IGFueSk6IGFueSB7XG4gICAgaWYgKCFvcHQuZGF5c0NvbmZpZyAmJiBvcHQuZGF5c0NvbmZpZy5sZW5ndGggPD0gMCkgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIG9wdC5kYXlzQ29uZmlnLmZpbmQoKG46IHsgZGF0ZTogYW55OyB9KSA9PiBkYXkuaXNTYW1lKG4uZGF0ZSwgJ2RheScpKTtcbiAgfVxuXG4gIGNyZWF0ZUNhbGVuZGFyRGF5KHRpbWU6IG51bWJlciwgb3B0OiBDYWxlbmRhck1vZGFsT3B0aW9ucywgbW9udGg/OiBudW1iZXIpOiBDYWxlbmRhckRheSB7XG4gICAgbGV0IF90aW1lID0gbW9tZW50KHRpbWUpO1xuICAgIGxldCBkYXRlID0gbW9tZW50KHRpbWUpO1xuICAgIGxldCBpc1RvZGF5ID0gbW9tZW50KCkuaXNTYW1lKF90aW1lLCAnZGF5cycpO1xuICAgIGxldCBkYXlDb25maWcgPSB0aGlzLmZpbmREYXlDb25maWcoX3RpbWUsIG9wdCk7XG4gICAgbGV0IF9yYW5nZUJlZyA9IG1vbWVudChvcHQuZnJvbSkudmFsdWVPZigpO1xuICAgIGxldCBfcmFuZ2VFbmQgPSBtb21lbnQob3B0LnRvKS52YWx1ZU9mKCk7XG4gICAgbGV0IGlzQmV0d2VlbiA9IHRydWU7XG4gICAgbGV0IGRpc2FibGVXZWUgPSBvcHQ/LmRpc2FibGVXZWVrcz8uaW5kZXhPZihfdGltZS50b0RhdGUoKS5nZXREYXkoKSkgIT09IC0xO1xuICAgIGlmIChfcmFuZ2VCZWcgPiAwICYmIF9yYW5nZUVuZCA+IDApIHtcbiAgICAgIGlmICghb3B0LmNhbkJhY2t3YXJkc1NlbGVjdGVkKSB7XG4gICAgICAgIGlzQmV0d2VlbiA9ICFfdGltZS5pc0JldHdlZW4oX3JhbmdlQmVnLCBfcmFuZ2VFbmQsICdkYXlzJywgJ1tdJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpc0JldHdlZW4gPSBtb21lbnQoX3RpbWUpLmlzQmVmb3JlKF9yYW5nZUJlZykgPyBmYWxzZSA6IGlzQmV0d2VlbjtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKF9yYW5nZUJlZyA+IDAgJiYgX3JhbmdlRW5kID09PSAwKSB7XG4gICAgICBpZiAoIW9wdC5jYW5CYWNrd2FyZHNTZWxlY3RlZCkge1xuICAgICAgICBsZXQgX2FkZFRpbWUgPSBfdGltZS5hZGQoMSwgJ2RheScpO1xuICAgICAgICBpc0JldHdlZW4gPSAhX2FkZFRpbWUuaXNBZnRlcihfcmFuZ2VCZWcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXNCZXR3ZWVuID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IF9kaXNhYmxlID0gZmFsc2U7XG5cbiAgICBpZiAoZGF5Q29uZmlnICYmIGlzQm9vbGVhbihkYXlDb25maWcuZGlzYWJsZSkpIHtcbiAgICAgIF9kaXNhYmxlID0gZGF5Q29uZmlnLmRpc2FibGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIF9kaXNhYmxlID0gZGlzYWJsZVdlZSB8fCBpc0JldHdlZW47XG4gICAgfVxuXG4gICAgbGV0IHRpdGxlID0gbmV3IERhdGUodGltZSkuZ2V0RGF0ZSgpLnRvU3RyaW5nKCk7XG4gICAgaWYgKGRheUNvbmZpZyAmJiBkYXlDb25maWcudGl0bGUpIHtcbiAgICAgIHRpdGxlID0gZGF5Q29uZmlnLnRpdGxlO1xuICAgIH0gZWxzZSBpZiAob3B0LmRlZmF1bHRUaXRsZSkge1xuICAgICAgdGl0bGUgPSBvcHQuZGVmYXVsdFRpdGxlO1xuICAgIH1cbiAgICBsZXQgc3ViVGl0bGUgPSAnJztcbiAgICBpZiAoZGF5Q29uZmlnICYmIGRheUNvbmZpZy5zdWJUaXRsZSkge1xuICAgICAgc3ViVGl0bGUgPSBkYXlDb25maWcuc3ViVGl0bGU7XG4gICAgfSBlbHNlIGlmIChvcHQuZGVmYXVsdFN1YnRpdGxlKSB7XG4gICAgICBzdWJUaXRsZSA9IG9wdC5kZWZhdWx0U3VidGl0bGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRpbWUsXG4gICAgICBpc1RvZGF5LFxuICAgICAgdGl0bGUsXG4gICAgICBzdWJUaXRsZSxcbiAgICAgIHNlbGVjdGVkOiBmYWxzZSxcbiAgICAgIGlzTGFzdE1vbnRoOiBkYXRlLm1vbnRoKCkgPCAobW9udGggPyBtb250aCA6IDApLFxuICAgICAgaXNOZXh0TW9udGg6IGRhdGUubW9udGgoKSA+IChtb250aCA/IG1vbnRoIDogMCksXG4gICAgICBtYXJrZWQ6IGRheUNvbmZpZyA/IGRheUNvbmZpZy5tYXJrZWQgfHwgZmFsc2UgOiBmYWxzZSxcbiAgICAgIGNzc0NsYXNzOiBkYXlDb25maWcgPyBkYXlDb25maWcuY3NzQ2xhc3MgfHwgJycgOiAnJyxcbiAgICAgIGRlbWFuZExldmVsOiBkYXlDb25maWcgPyBkYXlDb25maWcuZGVtYW5kTGV2ZWwgOiAnJyxcbiAgICAgIGRpc2FibGU6IF9kaXNhYmxlLFxuICAgICAgaXNGaXJzdDogZGF0ZS5kYXRlKCkgPT09IDEsXG4gICAgICBpc0xhc3Q6IGRhdGUuZGF0ZSgpID09PSBkYXRlLmRheXNJbk1vbnRoKCksXG4gICAgfTtcbiAgfVxuXG4gIGNyZWF0ZUNhbGVuZGFyTW9udGgob3JpZ2luYWw6IENhbGVuZGFyT3JpZ2luYWwsIG9wdDogQ2FsZW5kYXJNb2RhbE9wdGlvbnMpOiBDYWxlbmRhck1vbnRoIHtcbiAgICBsZXQgZGF5czogQXJyYXk8Q2FsZW5kYXJEYXk+ID0gbmV3IEFycmF5KDYpLmZpbGwobnVsbCk7XG4gICAgbGV0IGxlbiA9IG9yaWdpbmFsLmhvd01hbnlEYXlzO1xuICAgIGZvciAobGV0IGkgPSBvcmlnaW5hbC5maXJzdFdlZWs7IGkgPCBsZW4gKyBvcmlnaW5hbC5maXJzdFdlZWs7IGkrKykge1xuICAgICAgbGV0IGl0ZW1UaW1lID0gbmV3IERhdGUob3JpZ2luYWwueWVhciwgb3JpZ2luYWwubW9udGgsIGkgLSBvcmlnaW5hbC5maXJzdFdlZWsgKyAxKS5nZXRUaW1lKCk7XG4gICAgICBkYXlzW2ldID0gdGhpcy5jcmVhdGVDYWxlbmRhckRheShpdGVtVGltZSwgb3B0KTtcbiAgICB9XG5cbiAgICBsZXQgd2Vla1N0YXJ0ID0gb3B0LndlZWtTdGFydDtcblxuICAgIGlmICh3ZWVrU3RhcnQgPT09IDEpIHtcbiAgICAgIGlmIChkYXlzWzBdID09PSBudWxsKSB7XG4gICAgICAgIGRheXMuc2hpZnQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRheXMudW5zaGlmdCguLi5uZXcgQXJyYXkoNikuZmlsbChudWxsKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG9wdC5zaG93QWRqYWNlbnRNb250aERheSkge1xuICAgICAgY29uc3QgX2Jvb2xlYW5NYXAgPSBkYXlzLm1hcChlID0+ICEhZSk7XG4gICAgICBjb25zdCB0aGlzTW9udGggPSBtb21lbnQob3JpZ2luYWwudGltZSkubW9udGgoKTtcbiAgICAgIGxldCBzdGFydE9mZnNldEluZGV4ID0gX2Jvb2xlYW5NYXAuaW5kZXhPZih0cnVlKSAtIDE7XG4gICAgICBsZXQgZW5kT2Zmc2V0SW5kZXggPSBfYm9vbGVhbk1hcC5sYXN0SW5kZXhPZih0cnVlKSArIDE7XG4gICAgICBmb3IgKHN0YXJ0T2Zmc2V0SW5kZXg7IHN0YXJ0T2Zmc2V0SW5kZXggPj0gMDsgc3RhcnRPZmZzZXRJbmRleC0tKSB7XG4gICAgICAgIGNvbnN0IGRheUJlZm9yZSA9IG1vbWVudChkYXlzW3N0YXJ0T2Zmc2V0SW5kZXggKyAxXS50aW1lKVxuICAgICAgICAgIC5jbG9uZSgpXG4gICAgICAgICAgLnN1YnRyYWN0KDEsICdkJyk7XG4gICAgICAgIGRheXNbc3RhcnRPZmZzZXRJbmRleF0gPSB0aGlzLmNyZWF0ZUNhbGVuZGFyRGF5KGRheUJlZm9yZS52YWx1ZU9mKCksIG9wdCwgdGhpc01vbnRoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCEoX2Jvb2xlYW5NYXAubGVuZ3RoICUgNyA9PT0gMCAmJiBfYm9vbGVhbk1hcFtfYm9vbGVhbk1hcC5sZW5ndGggLSAxXSkpIHtcbiAgICAgICAgZm9yIChlbmRPZmZzZXRJbmRleDsgZW5kT2Zmc2V0SW5kZXggPCBkYXlzLmxlbmd0aCArIChlbmRPZmZzZXRJbmRleCAlIDcpOyBlbmRPZmZzZXRJbmRleCsrKSB7XG4gICAgICAgICAgY29uc3QgZGF5QWZ0ZXIgPSBtb21lbnQoZGF5c1tlbmRPZmZzZXRJbmRleCAtIDFdLnRpbWUpXG4gICAgICAgICAgICAuY2xvbmUoKVxuICAgICAgICAgICAgLmFkZCgxLCAnZCcpO1xuICAgICAgICAgIGRheXNbZW5kT2Zmc2V0SW5kZXhdID0gdGhpcy5jcmVhdGVDYWxlbmRhckRheShkYXlBZnRlci52YWx1ZU9mKCksIG9wdCwgdGhpc01vbnRoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBkYXlzLFxuICAgICAgb3JpZ2luYWw6IG9yaWdpbmFsLFxuICAgIH07XG4gIH1cblxuICBjcmVhdGVNb250aHNCeVBlcmlvZChzdGFydFRpbWU6IG51bWJlciwgbW9udGhzTnVtOiBudW1iZXIsIG9wdDogQ2FsZW5kYXJNb2RhbE9wdGlvbnMpOiBBcnJheTxDYWxlbmRhck1vbnRoPiB7XG4gICAgbGV0IF9hcnJheTogQXJyYXk8Q2FsZW5kYXJNb250aD4gPSBbXTtcblxuICAgIGxldCBfc3RhcnQgPSBuZXcgRGF0ZShzdGFydFRpbWUpO1xuICAgIGxldCBfc3RhcnRNb250aCA9IG5ldyBEYXRlKF9zdGFydC5nZXRGdWxsWWVhcigpLCBfc3RhcnQuZ2V0TW9udGgoKSwgMSkuZ2V0VGltZSgpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb250aHNOdW07IGkrKykge1xuICAgICAgbGV0IHRpbWUgPSBtb21lbnQoX3N0YXJ0TW9udGgpXG4gICAgICAgIC5hZGQoaSwgJ00nKVxuICAgICAgICAudmFsdWVPZigpO1xuICAgICAgbGV0IG9yaWdpbmFsQ2FsZW5kYXIgPSB0aGlzLmNyZWF0ZU9yaWdpbmFsQ2FsZW5kYXIodGltZSk7XG4gICAgICBfYXJyYXkucHVzaCh0aGlzLmNyZWF0ZUNhbGVuZGFyTW9udGgob3JpZ2luYWxDYWxlbmRhciwgb3B0KSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9hcnJheTtcbiAgfVxuXG4gIHdyYXBSZXN1bHQob3JpZ2luYWw6IENhbGVuZGFyRGF5W10sIHBpY2tNb2RlOiBzdHJpbmcpIHtcbiAgICBsZXQgcmVzdWx0OiBhbnk7XG4gICAgc3dpdGNoIChwaWNrTW9kZSkge1xuICAgICAgY2FzZSBwaWNrTW9kZXMuU0lOR0xFOlxuICAgICAgICByZXN1bHQgPSB0aGlzLm11bHRpRm9ybWF0KG9yaWdpbmFsWzBdLnRpbWUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgcGlja01vZGVzLlJBTkdFOlxuICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgZnJvbTogdGhpcy5tdWx0aUZvcm1hdChvcmlnaW5hbFswXS50aW1lKSxcbiAgICAgICAgICB0bzogdGhpcy5tdWx0aUZvcm1hdCgob3JpZ2luYWxbMV0gfHwgb3JpZ2luYWxbMF0pLnRpbWUpLFxuICAgICAgICB9O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgcGlja01vZGVzLk1VTFRJOlxuICAgICAgICByZXN1bHQgPSBvcmlnaW5hbC5tYXAoZSA9PiB0aGlzLm11bHRpRm9ybWF0KGUudGltZSkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJlc3VsdCA9IG9yaWdpbmFsO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgbXVsdGlGb3JtYXQodGltZTogbnVtYmVyKTogQ2FsZW5kYXJSZXN1bHQge1xuICAgIGNvbnN0IF9tb21lbnQgPSBtb21lbnQodGltZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpbWU6IF9tb21lbnQudmFsdWVPZigpLFxuICAgICAgdW5peDogX21vbWVudC51bml4KCksXG4gICAgICBkYXRlT2JqOiBfbW9tZW50LnRvRGF0ZSgpLFxuICAgICAgc3RyaW5nOiBfbW9tZW50LmZvcm1hdChkZWZhdWx0cy5EQVRFX0ZPUk1BVCksXG4gICAgICB5ZWFyczogX21vbWVudC55ZWFyKCksXG4gICAgICBtb250aHM6IF9tb21lbnQubW9udGgoKSArIDEsXG4gICAgICBkYXRlOiBfbW9tZW50LmRhdGUoKSxcbiAgICB9O1xuICB9XG59XG4iXX0=