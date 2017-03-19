import { Component, OnInit } from '@angular/core';
import { DisplayFeederService } from '../../services/display-feeder/display-feeder.service';

interface IData {
  [key: string]: any;
}

@Component({
  selector: 'display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  measurementValue: any;
  measurementType: any;
  private typesTable: IData = {
    'vdc\r': 'DC Volt'
  };

  constructor(private displayFeederService: DisplayFeederService) {
    this.displayFeederService.displayData$.subscribe(data => {
      this.measurementValue = data.val;
      this.measurementType = this.typesTable[data.type];
    })
  }

  ngOnInit() {
  }

}
