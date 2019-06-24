import { Component, OnInit, Input,SimpleChanges } from '@angular/core';
import { Bars } from 'src/app/models/Bars';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @Input()
  cost: number = 0;
  @Input()
  dashboard: Bars;

  private costIn: number = 0;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void  {
    console.log(this.cost);
    if(this.cost !== undefined) {
      
      this.costIn = this.cost;
    }
  }
  ngOnInit() {
    
    }

}
