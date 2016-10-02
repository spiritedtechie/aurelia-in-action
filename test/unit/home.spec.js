import { Home } from '../../src/home';
import { TestData } from './mockedFoursquareResponse';

var testData = new TestData();

class HttpStub {

  mockedResponse = "";

  constructor(response) {
    this.mockedResponse = response;
  }

  jsonp(url, callback) {
    this.url = url;
    this.config = {};
    return new Promise((resolve) => {
      resolve(
        {
          response: this.mockedResponse
        }
      );
    });
  }

  configure(func) {}
}

describe('the Home module', () => {
  it('sets fetch response to Venues', (done) => {
    var http = new HttpStub(testData.json);
    var sut = new Home(http);

    sut.getVenues().then(() => {
      expect(sut.results).not.toBe(null);
      expect(sut.results[0].venue.name).toBe("Homeslice");
      done();
    });
  });
});
