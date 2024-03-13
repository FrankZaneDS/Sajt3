import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() category;
}
