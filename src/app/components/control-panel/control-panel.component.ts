import { Component, OnInit, OnDestroy } from '@angular/core';
import { SerialService } from '../../services/serial-communication/serial-communication.service';
import { DisplayFeederService } from '../../services/display-feeder/display-feeder.service'
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {
  message = <any>{};
  connection;

  constructor(private serialService: SerialService, private displayFeederService: DisplayFeederService) {
  }

  ngOnInit() {
    this.connection = this.serialService.getSerial()
      .subscribe(msg => {
        this.message = msg;
        this.displayFeederService.publishData(this.message);
      });
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }

  measure(val) {
    if (val === 'dc') {
      this.serialService.getDC();
    }
    else if (val == 'resistance') {
      this.serialService.getResistance();
    }
    else if (val === 'temperature') {
      this.serialService.getTemperature();
    }
  }

}
