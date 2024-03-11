import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HeaderComponent } from '../header/header.component';
import { RatingComponent } from '../shared/rating/rating.component';
import { SearchComponent } from '../shared/search/search.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
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
  ],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent {}
