import {Component, Input, OnInit} from '@angular/core';
import {WeatherService} from '../../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weather: any;
  img_url: string;
  @Input() woeid: string;
  @Input() more: boolean;
  constructor(
    private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.location(this.woeid).subscribe( (value => {
      this.weather = value;
      console.log(this.weather);
      this.img_url = 'https://www.metaweather.com/static/img/weather/png/64/' + this.weather.consolidated_weather[0].weather_state_abbr + '.png';
    }));
  }

}
