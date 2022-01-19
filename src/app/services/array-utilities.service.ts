import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArrayUtilitiesService {

  constructor() { }

  public remove_element(elements: Array<string>, element: string) {

    var index = elements.indexOf(element);

    if (index > -1) {
       elements.splice(index, 1);
    }
  }
}
