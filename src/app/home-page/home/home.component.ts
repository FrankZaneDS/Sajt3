import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { SearchComponent } from '../../shared/search/search.component';
import { CategoryComponent } from '../../shared/category/category.component';
import { BrowseTopicsComponent } from '../browse-topics/browse-topics.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    SearchComponent,
    CategoryComponent,
    BrowseTopicsComponent,
    CommonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
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
      class: 'large',
    },
  ];
}
