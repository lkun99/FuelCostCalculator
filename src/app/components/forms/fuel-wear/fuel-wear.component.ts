import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fuel-wear',
  templateUrl: './fuel-wear.component.html',
  styleUrls: ['./fuel-wear.component.css']
})
export class FuelWearComponent implements OnInit {

  @Output()
  wearOut: EventEmitter<number> = new EventEmitter();
  public wear: number;

  constructor() { }

  ngOnInit() {
  }

  getPrice() {
    this.wearOut.emit(this.wear);
  }
}
