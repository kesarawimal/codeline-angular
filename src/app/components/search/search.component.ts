import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search: string;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  search_go() {
    // this.router.navigate(['/search/', this.search]);
    document.location.href = '/search/' + this.search;
  }

}
