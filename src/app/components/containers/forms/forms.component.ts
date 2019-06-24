import { Component, OnInit, Input, Output } from '@angular/core';
import {Datas} from '../../../models/Datas';
import { CalculatorService } from 'src/app/services/calculator.service';
import { Bars } from 'src/app/models/Bars';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  @Input()
  public price: number;
  @Input()
  public wear: number;
  @Input()
  public distance: number;

  private data: Datas;
  public cost: number;
  public dashboard: Bars;

  constructor(private calculator: CalculatorService) { }

  ngOnInit() {
  }
  getPrice(event) {
    this.price = event;
  }
    getWear(event) {
    this.wear = event;
  }
    getDistance(event) {
    this.distance = event;
  }
  getData() {
    this.data = {
      fuelPrice: this.price,
      fuelWear: this.wear,
      distance: this.distance
    };
    const res = this.calculator.calculate(this.data);
    this.cost = res;
  }
  getDashboard() {
    this.dashboard = this.calculator.dashboard(this.data);
    }
    scrollToElement(): void {
      const element = document.querySelector("#result");
      if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' })    }
}
