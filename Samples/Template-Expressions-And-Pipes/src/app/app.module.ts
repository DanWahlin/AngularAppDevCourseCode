import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CustomersListModule } from './customers-list/customers-list.module';
import { AppComponent }  from './app.component';
//Import { CustomersListComponent } from './customers-list/customers-list.component';

@NgModule({
  imports:      [ BrowserModule, CustomersListModule ],
  declarations: [ AppComponent /*,CustomersListComponent*/ ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }