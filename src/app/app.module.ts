import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Reg1Component } from './reg1/reg1.component';
import { Reg2Component } from './reg2/reg2.component';
import { Reg3Component } from './reg3/reg3.component';
import { Reg4Component } from './reg4/reg4.component';

@NgModule({
  declarations: [
    AppComponent,
    Reg1Component,
    Reg2Component,
    Reg3Component,
    Reg4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
