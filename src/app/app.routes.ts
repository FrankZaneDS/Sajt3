import { Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },

  {
    path: 'categories',
    component: CategoriesComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];
