//import {computedFrom} from 'aurelia-framework';

export class Home {
  heading = 'FOURSQUARE';
  subheadingFirst = "Find the best places to eat, drink, shop, or visit in any city in the world.";
  subheadingSecond = "Access over 75 million short tips from local experts.";
  findHint = "I'm looking for...";
  location = "London";

  menu = [
      {
        name: 'Food',
        image: 'img/food.png'
      },
      {
        name: 'Coffee',
        image: 'img/coffee.png'
      },
      {
        name: 'Nightlife',
        image: 'img/nightlife.png'
      },
      {
        name: 'Fun',
        image: 'img/fun.png'
      },
      {
        name: 'Shopping',
        image: 'img/shopping.png'
      }
    ];
}
