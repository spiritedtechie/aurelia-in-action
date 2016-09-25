export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: '', redirect: 'home' },
      { route: 'home', name: 'home',      moduleId: 'home',      nav: true, title: 'Home' }
    ]);

    this.router = router;
  }
}
