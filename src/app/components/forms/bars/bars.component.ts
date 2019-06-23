import { Component, OnInit, Input } from '@angular/core';
import {Bars} from '../../../models/Bars'
@Component({
  selector: 'app-bars',
  templateUrl: './bars.component.html',
  styleUrls: ['./bars.component.css']
})
export class BarsComponent implements OnInit {
  @Input()
  dashboard: Bars = {
    priceFactor: 0.5,
    wearFactor: 0.5,
    distanceFactor: 0.5
  };
  private priceWidth = this.dashboard.priceFactor * 100;
  private wearWidth = this.dashboard.wearFactor * 100;
  private distanceWidth = this.dashboard.distanceFactor * 100;
  constructor() { }

  ngOnInit() {
  }

}
