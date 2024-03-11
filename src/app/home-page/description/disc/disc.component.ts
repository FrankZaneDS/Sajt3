import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-disc',
  standalone: true,
  imports: [],
  templateUrl: './disc.component.html',
  styleUrl: './disc.component.css',
})
export class DiscComponent {
  @Input() item;
}
