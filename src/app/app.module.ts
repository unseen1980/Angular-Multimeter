/// <reference path="../../node_modules/@types/node/index.d.ts" />
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
// import { DcComponent } from './components/dc/dc.component';
import { DisplayComponent } from './components/display/display.component';
import { ControlPanelComponent } from './components/control-panel/control-panel.component';

import { SerialService } from './services/serial-communication/serial-communication.service';
import { DisplayFeederService } from './services/display-feeder/display-feeder.service';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    // DcComponent,
    DisplayComponent,
    ControlPanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [
    SerialService,
    DisplayFeederService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
