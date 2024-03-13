import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HeaderComponent } from '../header/header.component';
import { RatingComponent } from '../shared/rating/rating.component';
import { SearchComponent } from '../shared/search/search.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { CardComponent } from '../shared/card/card.component';
import { DataService } from '../services/data.service';
import { CommonModule } from '@angular/common';
import { FilterPipe } from '../pipes/filter.pipe';
@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    HeaderComponent,
    RatingComponent,
    SearchComponent,
    SidebarComponent,
    CardComponent,
    CommonModule,
    FilterPipe,
  ],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent implements OnInit {
  searchText = this.dataService.searchText$.getValue();
  categories = this.dataService.categories;
  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.dataService.searchText$.subscribe(
      (searchText) => (this.searchText = searchText)
    );
  }
}
