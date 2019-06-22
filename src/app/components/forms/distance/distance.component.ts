import { Component, OnInit, Output, EventEmitter} from '@angular/core';
@Component({
  selector: 'app-distance',
  templateUrl: './distance.component.html',
  styleUrls: ['./distance.component.css']
})
export class DistanceComponent implements OnInit {

  @Output()
  distanceOut: EventEmitter<number> = new EventEmitter();
  public distance: number;



  constructor() { }

  getDistance() {
    this.distanceOut.emit(this.distance);
  }

  ngOnInit() {

  }

}
