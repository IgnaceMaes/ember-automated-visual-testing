import Component from '@glimmer/component';
import { cached } from '@glimmer/tracking';
import { isSameYearAndMonth } from 'ember-automated-visual-testing/utils/date-utils';

export default class CalendarComponent extends Component {
  static getAllDaysInMonth(year, month) {
    const date = new Date(year, month, 1);

    const dates = [];
    while (date.getMonth() === month) {
      dates.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }

    return dates;
  }

  get monthAsDate() {
    return new Date(this.args.month);
  }

  get days() {
    const currentYear = this.monthAsDate.getFullYear();
    const currentMonth = this.monthAsDate.getMonth();
    return CalendarComponent.getAllDaysInMonth(currentYear, currentMonth);
  }

  get monthName() {
    return new Date(this.args.month).toLocaleString('en-US', {
      month: 'long',
      year: 'numeric',
    });
  }

  @cached
  get holidaysMatrix() {
    const holidaysPerUserPerDay = {};

    this.args.holidays
      .filter((holiday) =>
        isSameYearAndMonth(new Date(holiday.date), this.monthAsDate)
      )
      .forEach((holiday) => {
        const dayOfHoliday = new Date(holiday.date).getDate();
        holidaysPerUserPerDay[holiday.user_id] =
          holidaysPerUserPerDay[holiday.user_id] ?? {};
        holidaysPerUserPerDay[holiday.user_id][dayOfHoliday] = [
          ...(holidaysPerUserPerDay[holiday.user_id][dayOfHoliday] ?? []),
          holiday,
        ];
      });

    return holidaysPerUserPerDay;
  }
}
