import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import {Bars} from '../../../models/Bars'

@Component({
  selector: 'app-bars',
  templateUrl: './bars.component.html',
  styleUrls: ['./bars.component.css']
})
export class BarsComponent implements OnInit {
  @Input()
  dashboard: Bars;

  private priceWidth = '50%';
  private wearWidth = '50%';
  private distanceWidth = '50%';
  private priceColor = 'tranparent';
  private wearColor = 'tranparent';
  private distanceColor = 'tranparent';
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.dashboard !== undefined) {
      this.priceColor = this.getColor(this.dashboard.priceFactor);
      this.wearColor = this.getColor(this.dashboard.wearFactor);
      this.distanceColor = this.getColor(this.dashboard.distanceFactor);
      this.priceWidth = Number(this.dashboard.priceFactor * 100).toFixed(2) + '%';
      this.wearWidth = Number(this.dashboard.wearFactor * 100).toFixed(2) + '%';
      this.distanceWidth = Number(this.dashboard.distanceFactor * 100).toFixed(2) + '%';
  }
}

  ngOnInit() {
    //this.priceWidth = this.dashboard.priceFactor * 100 + '%';

    /*const wearWidth = this.dashboard.wearFactor * 100;
    const distanceWidth = this.dashboard.distanceFactor * 100;
    //this.priceClass = this.createClass(priceWidth);
    this.wearClass = this.createClass(wearWidth);
    this.distanceClass = this.createClass(distanceWidth);*/
  }
  getColor(widthParam) {
    if (widthParam <= 0.3) {
      var colorParam = 'green';
    } else if (widthParam > 0.3 && widthParam <= 0.6) {
      var colorParam = 'yellow';
    } else if(widthParam > 0.6 && widthParam <=0.8) {
      var colorParam = 'darkorange';
    }
     else {
      var colorParam = 'red';
    }
    return colorParam;
  }

}
