import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../../services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  weather: any;
  constructor(
    private weatherService: WeatherService
  ) { }

  ngOnInit() {
    this.weatherService.location('2487956').subscribe(value => {
      console.log(value);
      this.weather = value;
    });
  }

}
