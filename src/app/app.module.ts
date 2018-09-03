import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import * as Directives from '../directives/index'


@NgModule({
  declarations: [
    AppComponent,
    Directives.AgeDirective,
    Directives.NumberRangeValidationDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
