/// <reference path="../../node_modules/@types/node/index.d.ts" />
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SerialComponent } from './app.component';

@NgModule({
  declarations: [
    SerialComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [SerialComponent]
})
export class AppModule { }
