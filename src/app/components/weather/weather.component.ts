import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  @Input() weather;
  img_url: string;
  constructor() { }

  ngOnInit() {
    this.img_url = 'https://www.metaweather.com/static/img/weather/png/64/' + this.weather.weather_state_abbr + '.png';
    console.log(this.weather);
  }

}
