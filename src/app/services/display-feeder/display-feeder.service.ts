import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DisplayFeederService {

  private displayData = new Subject<any>();
  
  displayData$ = this.displayData.asObservable();

  publishData(data: any) {
    this.displayData.next(data);
  }

}
