import {App} from '../../src/app';

class RouterStub {
  configure(handler) {
    handler(this);
  }

  map(routes) {
    this.routes = routes;
  }
}

describe('the App module', () => {
  var sut;
  var mockedRouter;

  beforeEach(() => {
    mockedRouter = new RouterStub();
    sut = new App();
    sut.configureRouter(mockedRouter, mockedRouter);
  });

  it('contains a router property', () => {
    expect(sut.router).toBeDefined();
  });

  it('configures the router title', () => {
    expect(sut.router.title).toEqual('Aurelia');
  });

  it('should have a home route', () => {
    expect(sut.router.routes).toContain({ route: 'home', name: 'home',  moduleId: 'home', nav: true, title: 'Home' });
  });

  it('should have a checkin route', () => {
    expect(sut.router.routes).toContain({ route: 'checkin', name: 'checkin', moduleId: 'home', nav: true, title: 'Check In' });
  });
});
