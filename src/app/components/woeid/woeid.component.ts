import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-woeid',
  templateUrl: './woeid.component.html',
  styleUrls: ['./woeid.component.css']
})
export class WoeidComponent implements OnInit {
  woeid: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.woeid = this.route.snapshot.paramMap.get('woeid');
  }

}
