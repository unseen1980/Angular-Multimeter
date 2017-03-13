import { Component, OnInit, OnDestroy } from '@angular/core';
import { SerialService } from '../../services/serial-communication/serial-communication.service';
import { DisplayFeederService } from '../../services/display-feeder/display-feeder.service' 
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';

@Component({
  moduleId: module.id,
  selector: 'dc',
  template: `<div>
      <h2>{{message.val}}</h2>
      <button (click)="dc()">DC Volt</button>
    </div>`,
  providers: [SerialService]
})
export class DcComponent implements OnInit, OnDestroy {
  message = <any>{};
  connection;

  constructor(private serialService: SerialService, private displayFeederService: DisplayFeederService) {
  }

  ngOnInit() {
    this.connection = this.serialService.getSerial()
    .subscribe(msg => {
      this.message = msg;
      this.displayFeederService.publishData(this.message);
    })
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }

  dc(){
    this.serialService.getDC();
  }
}


