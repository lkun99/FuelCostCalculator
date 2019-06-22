import { Component, OnInit, Input } from '@angular/core';
import {Datas} from '../../../models/Datas';
import { FuelPriceComponent } from '../../forms/fuel-price/fuel-price.component';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  @Input()
  private price;
  @Input()
  private warn;
  @Input()
  private distance;

  private data: Array<Datas>;

  constructor() { }

  ngOnInit() {
  }

  getData(){

  }
}
