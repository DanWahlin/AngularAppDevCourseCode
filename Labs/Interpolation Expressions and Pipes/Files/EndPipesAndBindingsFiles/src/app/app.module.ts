import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashReplacerPipe } from './dash-replacer.pipe';

@NgModule({
  declarations: [ AppComponent, DashReplacerPipe ],
  imports: [ BrowserModule, AppRoutingModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }