import { Injectable } from '@angular/core';
import {catchError, map} from 'rxjs/operators';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {
  url = 'http://localhost/weather.php?';
  constructor(
    private http: Http
  ) { }

  search(keyword) {
    const ep = this.url + 'command=search&keyword=' + keyword;
    return this.http.get(ep);
  }

  location(woeid: string) {
    const ep = this.url + 'command=location&woeid=' + woeid;
    return this.http.get(ep).
    map((response) => response.json());
  }

}
