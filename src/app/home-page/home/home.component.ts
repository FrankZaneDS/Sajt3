import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { SearchComponent } from '../../shared/search/search.component';
import { CategoryComponent } from '../../shared/category/category.component';
import { BrowseTopicsComponent } from '../browse-topics/browse-topics.component';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';

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
  categories = this.dataService.categories;

  constructor(private dataService: DataService) {}
}
