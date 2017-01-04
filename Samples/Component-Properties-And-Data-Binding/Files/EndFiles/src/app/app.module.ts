import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CustomersListModule } from './customers-list/customers-list.module';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, CustomersListModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }