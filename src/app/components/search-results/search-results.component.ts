import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WeatherService} from '../../services/weather.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  keyword: string;
  data: any;
  nodata: boolean;
  constructor(private route: ActivatedRoute, private weatherService: WeatherService) { }

  ngOnInit() {
    this.keyword = this.route.snapshot.paramMap.get('keyword');
    this.weatherService.search(this.keyword).subscribe( (value => {
      console.log(value);
      this.data = value;
      if (value.length <= 0 || value === 'e') {
        this.nodata = true;
      }
    }));
  }

}
