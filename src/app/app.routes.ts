import {Routes, ExtraOptions} from '@angular/router';
//
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent, title: 'Home'},
  {path: 'about', component: AboutComponent, title: 'About'},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];

export const routeOptions: ExtraOptions = {
  enableTracing: true
};
