import { Injectable } from '@angular/core';
import {catchError, map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class WeatherService {
  url = 'http://localhost/weather.php?';
  constructor(
    private httpClient: HttpClient,
  ) { }

  search(keyword) {
    const ep = this.url + 'command=search&keyword=' + keyword;
    return this.httpClient.get(ep);
  }

  location(woeid: string) {
    const ep = this.url + 'command=location&woeid=' + woeid;
    return this.httpClient.get(ep);
  }

}
