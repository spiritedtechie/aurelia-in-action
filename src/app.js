export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: '', redirect: 'home' },
      { route: 'home',    name: 'home',      moduleId: 'home',    nav: true,    title: 'Home' },
      { route: 'checkin', name: 'checkin',   moduleId: 'home',    nav: true,    title: 'Check In' }
    ]);

    this.router = router;
  }
}
