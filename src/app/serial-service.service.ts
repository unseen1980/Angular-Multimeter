// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
// import * as io from 'socket.io-client';
// import 'rxjs/add/observable/fromEvent';
// import 'rxjs/add/operator/throttle';
// import 'rxjs/add/observable/interval';


// @Injectable()
// export class SerialService {

//   private url = 'http://192.168.192.49:5000';
//   private socket;

//   constructor() { }

//   getSerial() {
//     // let observable = new Observable(observer => {
//     //   this.socket = io(this.url);
//     //   this.socket.on('serial-read', (data) => {
//     //     console.log(data)
//     //     observer.next(data);
//     //   });
//     //   return () => {
//     //     this.socket.disconnect();
//     //   };
//     // })
//     // return observable;
//     this.socket = io(this.url);
//     return Observable
//       .fromEvent(this.socket, 'serial-read')
//       .throttle(ev => Observable.interval(500));
//   }

//   getDC() {
//     this.socket.emit('get-dc');
//   }
// }


//     // this.socket = io('http://192.168.192.49:5000');
//     // let listener = Observable.fromEvent(this.socket, 'message');
//     // listener.subscribe((payload) => {
//     //   console.log(payload);
//     // })