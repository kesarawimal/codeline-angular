import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {WoeidComponent} from './components/woeid/woeid.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'weather/:woeid',
    component: WoeidComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
