import { Component, OnInit } from '@angular/core';
import { DisplayFeederService } from '../../services/display-feeder/display-feeder.service'

@Component({
  selector: 'display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  measurement: any;

  constructor(private displayFeederService: DisplayFeederService) {
    this.displayFeederService.displayData$.subscribe(data => {
      this.measurement = data.val;
    })
  }

  ngOnInit() {
  }

}
