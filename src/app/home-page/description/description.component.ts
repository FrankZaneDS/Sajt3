import { Component } from '@angular/core';
import { DiscComponent } from './disc/disc.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [DiscComponent, CommonModule],
  templateUrl: './description.component.html',
  styleUrl: './description.component.css',
})
export class DescriptionComponent {
  items = [
    {
      title: 'Something Something',
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id iste, a dolorum, laboriosam illo eos consectetur architecto omnis in reiciendis commodi vel, natus aspernatur corporis optio sit enim beatae rerum.',
    },
    {
      title: 'Something Something',
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id iste, a dolorum, laboriosam illo eos consectetur architecto omnis in reiciendis commodi vel, natus aspernatur corporis optio sit enim beatae rerum.',
    },
    {
      title: 'Something Something',
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id iste, a dolorum, laboriosam illo eos consectetur architecto omnis in reiciendis commodi vel, natus aspernatur corporis optio sit enim beatae rerum.',
    },
    {
      title: 'Something Something',
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id iste, a dolorum, laboriosam illo eos consectetur architecto omnis in reiciendis commodi vel, natus aspernatur corporis optio sit enim beatae rerum.',
    },
  ];
}
