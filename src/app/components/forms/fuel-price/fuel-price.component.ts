import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fuel-price',
  templateUrl: './fuel-price.component.html',
  styleUrls: ['./fuel-price.component.css']
})
export class FuelPriceComponent implements OnInit {

  constructor() { }

  @Output()
  priceOut: EventEmitter<number> = new EventEmitter();
  public price: number;

  ngOnInit() {
  }

  getPrice() {
    this.priceOut.emit(this.price);
  }
}
