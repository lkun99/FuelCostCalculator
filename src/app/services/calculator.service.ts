import { Injectable } from '@angular/core';
import { Datas } from '../models/Datas';
import { Bars } from '../models/Bars';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }

  calculate(data: Datas): number {
    const realWear = (data.fuelWear * data.distance) / 100;
    const cost: number = realWear * data.fuelPrice;
    this.dashboard(data);
    return cost;
  }
  dashboard(data: Datas): Bars {
    let priceFac = (data.fuelPrice - 4.8);
    let wearFac = (data.fuelWear - 2) / 10;
    let distanceFac = data.distance / 50;
    priceFac = this.control(priceFac);
    wearFac = this.control(wearFac);
    distanceFac = this.control(distanceFac);
    const out: Bars = {
      priceFactor: priceFac,
      wearFactor: wearFac,
      distanceFactor: distanceFac
    };
   // console.log(out);
    return out;
  }
  control(item: number): number {
    if(item > 1) {
      item = 1;
    } else if(item < 0) {
      item = 0.005;
    }
    return item;
  }

}
