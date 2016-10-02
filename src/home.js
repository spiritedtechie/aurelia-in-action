import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import 'fetch';
import qs from 'querystring';

@inject(HttpClient)
export class Home {
  heading = 'FOURSQUARE';
  subheadingFirst = "Find the best places to eat, drink, shop, or visit in any city in the world.";
  subheadingSecond = "Access over 75 million short tips from local experts.";
  findHint = "I'm looking for...";
  locationHint = "London";

  // suggestions menu
  menu = [{
    name: 'Food',
    image: 'img/food.png'
  }, {
    name: 'Coffee',
    image: 'img/coffee.png'
  }, {
    name: 'Nightlife',
    image: 'img/nightlife.png'
  }, {
    name: 'Fun',
    image: 'img/fun.png'
  }, {
    name: 'Shopping',
    image: 'img/shopping.png'
  }];

  // Venue results
  results = [];

  // Foursquare API
  foursquare = {
    baseUrl : 'https://api.foursquare.com/v2/',
    client_id :'C2D4SQZNACXTLE14I3M020IAJAVP2O2AUI1ZXKCTMLGLS35K',
    client_secret :'SVGMKDVNJ41FEFAKZV0YZU551ZYHLL0LBICF4J4X4NYFYWVY'
  }

  constructor(http) {
    http.configure(config => this.configureHttp(config));
    this.http = http;
  }

  configureHttp(config) {
    config.withBaseUrl(this.foursquare.baseUrl)
  }

  created() {
    this.changeMenuItem(this.menu[0]);
  }

  getVenues = function(find, near) {
    var searchParameters = {
        client_id: this.foursquare.client_id,
        client_secret: this.foursquare.client_secret,
        v: '20161001',
        query: find,
        near: near
    };

    var paramURL = qs.stringify(searchParameters);

    return this.http.jsonp("venues/explore?" + paramURL, 'callback')
          .then(response => response.response.response)
          .then(response => this.results = response.groups[0].items)
          .then(x => this.results = this.results.slice(0, 20))
          .catch(error => this.results = []);
  }

  submit = function() {
      this.getVenues(this.find, this.near);
  }

  changeMenuItem = function(menuItem) {
    if (this.near == null || this.near == undefined) {
      this.near = this.locationHint;
    }
    this.getVenues(menuItem.name, this.near);
  }

  tipHasPhoto = function(tip) {
    return tip != undefined && tip.photo != undefined;
  }

  tipHasUser = function(tip) {
    return tip != undefined && tip.user != undefined;
  }
}
