import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Manhattan Mansion',
      'In the heart of New York City.',
      'https://th.bing.com/th/id/OIP.JcSD0P7HSbLZmBhH-y7RZAHaFj?pid=ImgDet&rs=1',
      149.99
    ),
    new Place(
      'p2',
      "L'Amour Toujours",
      'A romantic place in Paris!',
      'https://th.bing.com/th/id/R.55255c74953601e4c54ab4efc969d7e8?rik=JDeE2jcOLI4Scw&riu=http%3a%2f%2fwww.travellerallaround.com%2fwp-content%2fuploads%2f2015%2f03%2feiffel.jpg&ehk=urZKy1oSR8VDMDTUCIl6mB0Ot0r7rEqQgRozHtEvQ6E%3d&risl=&pid=ImgRaw&r=0',
      189.99
    ),
    new Place(
      'p3',
      'The Foggy Palace',
      'Not your average city trip!',
      'https://th.bing.com/th/id/OIP.jF1u5b1QYwZUlEXWQMY0-AEyDM?pid=ImgDet&rs=1',
      99.99
    ),
  ];

  get places() {
    return [...this._places];
  }
  constructor() {}
}
