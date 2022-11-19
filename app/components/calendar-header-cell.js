import Component from '@glimmer/component';
import { isSameDate } from 'ember-automated-visual-testing/utils/date-utils';

export default class CalendarHeaderCellComponent extends Component {
  get isCurrentDay() {
    const currentDate = new Date();
    return isSameDate(currentDate, this.args.day);
  }

  get dayOfMonth() {
    return this.args.day.getDate();
  }
}
