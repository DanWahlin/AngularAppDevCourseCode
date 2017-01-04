import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from './core/core.module';
import { CustomersListModule } from './customers-list/customers-list.module';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, CoreModule, CustomersListModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }