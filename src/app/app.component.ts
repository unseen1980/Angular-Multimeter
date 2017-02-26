// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'app works!!!!!!!!!!!!!!!!!!!!!!!';
// }

/// <reference path="../../node_modules/@types/node/index.d.ts" />



import { Component, OnInit, OnDestroy } from '@angular/core';
import { SerialService } from './serial-service.service';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';

@Component({
  moduleId: module.id,
  selector: 'serial',
  template: `<div>
      <h2>{{message.val}}</h2>
      <button (click)="dc()">DC Volt</button>
    </div>`,
  providers: [SerialService]
})
export class SerialComponent implements OnInit, OnDestroy {
  message = <any>{};
  connection;

  constructor(private serialService: SerialService) {
  }

  ngOnInit() {
    this.connection = this.serialService.getSerial()
    .subscribe(msg => {
      this.message = msg;
      //console.log(this.message.val)
    })
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }

  dc(){
    this.serialService.getDC();
  }
}


