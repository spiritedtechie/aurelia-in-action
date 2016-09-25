//import {computedFrom} from 'aurelia-framework';

export class Home {
  heading = 'FOURSQUARE';
  subheadingFirst = "Find the best places to eat, drink, shop, or visit in any city in the world.";
  subheadingSecond = "Access over 75 million short tips from local experts.";
  findHint = "I'm looking for...";
  location = "London";

  configureRouter(config, router) {
    config.map([
      { route: ['', 'food'],  name: 'food',  moduleId: 'food/food',  nav: true, title: 'Food', settings: {image: 'img/food.png'} },
      { route: 'coffee',  name: 'coffee',  moduleId: 'coffee/coffee',  nav: true, title: 'Coffee', settings: {image: 'img/coffee.png'} },
      { route: 'nightlife',  name: 'nightlife',  moduleId: 'nightlife/nightlife',  nav: true, title: 'Nightlife', settings: {image: 'img/nightlife.png'} },
      { route: 'fun',  name: 'fun',  moduleId: 'fun/fun',  nav: true, title: 'Fun', settings: {image: 'img/fun.png'} },
      { route: 'shopping',  name: 'shopping',  moduleId: 'shopping/shopping',  nav: true, title: 'Shopping', settings: {image: 'img/shopping.png'} }
    ]);

    this.router = router;
  }
}
