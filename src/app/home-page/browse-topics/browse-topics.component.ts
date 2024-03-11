import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoryComponent } from '../../shared/category/category.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-browse-topics',
  standalone: true,
  imports: [NgbNavModule, CategoryComponent, CommonModule],
  templateUrl: './browse-topics.component.html',
  styleUrl: './browse-topics.component.css',
})
export class BrowseTopicsComponent {
  active: number = 1;
  categories = [
    {
      title: 'Card Title',
      imgUrl: '',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque ad ut quo deserunt quod ab animi, aperiam, vero sed natus, velit fugiat sunt saepe rerum? Voluptatem deleniti rerum repellendus consectetur!',
      class: 'small',
    },
    {
      title: 'Card Title',
      imgUrl: '',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque ad ut quo deserunt quod ab animi, aperiam, vero sed natus, velit fugiat sunt saepe rerum? Voluptatem deleniti rerum repellendus consectetur!',
      class: 'small',
    },
    {
      title: 'Card Title',
      imgUrl: '',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque ad ut quo deserunt quod ab animi, aperiam, vero sed natus, velit fugiat sunt saepe rerum? Voluptatem deleniti rerum repellendus consectetur!',
      class: 'small',
    },
  ];
}
