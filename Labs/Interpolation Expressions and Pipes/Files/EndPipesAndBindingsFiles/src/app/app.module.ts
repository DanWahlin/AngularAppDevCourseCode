import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { DashReplacerPipe } from './dash-replacer.pipe';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, DashReplacerPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }