import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataCardComponent } from './data-card/data-card.component';
import { DisplayFiltersComponent } from './display-filters/display-filters.component';
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ScrollingModule} from "@angular/cdk/scrolling";

@NgModule({
  declarations: [
    AppComponent,
    DataCardComponent,
    DisplayFiltersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ScrollingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
