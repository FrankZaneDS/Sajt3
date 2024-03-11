import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  activeClass = 'container';
  register() {
    this.activeClass = 'container active';
  }
  login() {
    this.activeClass = 'container';
  }
}
