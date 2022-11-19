import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
  queryParams = {
    month: {
      refreshModel: true,
    },
  };

  async model() {
    const holidays = await fetch('/holidays.json');
    return holidays.json();
  }
}
