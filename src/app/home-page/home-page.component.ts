import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { BrowseTopicsComponent } from './browse-topics/browse-topics.component';
import { DescriptionComponent } from './description/description.component';
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    HomeComponent,
    BrowseTopicsComponent,
    DescriptionComponent,
    FooterComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {}
