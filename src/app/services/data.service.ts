import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  searchText$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  categories = [
    {
      title: 'First Category',
      imgUrl: '',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque ad ut quo deserunt quod ab animi, aperiam, vero sed natus, velit fugiat sunt saepe rerum? Voluptatem deleniti rerum repellendus consectetur!',
      class: 'small',
    },
    {
      title: 'Second Category',
      imgUrl: '',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque ad ut quo deserunt quod ab animi, aperiam, vero sed natus, velit fugiat sunt saepe rerum? Voluptatem deleniti rerum repellendus consectetur!',
      class: 'large',
    },
  ];
  constructor() {}
}
