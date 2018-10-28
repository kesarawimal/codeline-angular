import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {WoeidComponent} from './components/woeid/woeid.component';
import {SearchResultsComponent} from './components/search-results/search-results.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'weather/:woeid',
    component: WoeidComponent
  },
  {
    path: 'search/:keyword',
    component: SearchResultsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
