import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { WeatherService } from './services/weather.service';
import { WeatherComponent } from './components/weather/weather.component';
import { HomeComponent } from './components/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { WoeidComponent } from './components/woeid/woeid.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    HomeComponent,
    WoeidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
