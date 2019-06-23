import { Component, OnInit, Input } from '@angular/core';
import { Bars } from 'src/app/models/Bars';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @Input()
  cost: number;
  @Input()
  dashboard: Bars;


  constructor() { }

  ngOnInit() {

    }

}
