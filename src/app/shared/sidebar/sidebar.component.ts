import { Component } from '@angular/core';
import { RatingComponent } from '../rating/rating.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RatingComponent, MatSidenavModule, NgbDropdownModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  chosenExp: string = 'Choose exp';
  exp: string[] = ['junior', 'medior', 'senior'];
  onClick(i) {
    this.chosenExp = this.exp[i];
    console.log(this.exp[2]);
  }
}
