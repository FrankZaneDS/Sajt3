import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { CardComponent } from '../../shared/card/card.component';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-browse-topics',
  standalone: true,
  imports: [NgbNavModule, CardComponent, CommonModule],
  templateUrl: './browse-topics.component.html',
  styleUrl: './browse-topics.component.css',
})
export class BrowseTopicsComponent {
  active: number = 1;
  categories = this.dataService.categories;

  constructor(private dataService: DataService) {}
}
