import Component from '@glimmer/component';
import { isWeekend } from 'ember-automated-visual-testing/utils/date-utils';

export default class CalendarDayCellComponent extends Component {
  get isWeekend() {
    return isWeekend(this.args.day);
  }
}
