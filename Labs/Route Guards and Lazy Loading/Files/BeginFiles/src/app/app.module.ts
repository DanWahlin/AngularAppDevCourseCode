import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing.module';

/*

  TODO 1: Removing Imports

  1. Remove the following import statements since they're no longer needed
     due to lazy loading the modules.

     AboutModule
     OrdersModule
     CustomerModule
     CustomersModule

*/

import { LoginModule } from './login/login.module';
import { CoreModule }   from './core/core.module';
import { SharedModule }   from './shared/shared.module';

import { AboutModule } from './about/about.module';
import { OrdersModule } from './orders/orders.module';
import { CustomerModule } from './customer/customer.module';
import { CustomersModule } from './customers/customers.module';

/*

  TODO 2: Removing Modules

  1. Remove the following modules from the @NgModule's imports property below since 
     they're no longer needed due to lazy loading:

     AboutModule
     OrdersModule
     CustomersModule
     CustomerModule

*/
@NgModule({
  imports: [
    BrowserModule,
    LoginModule,         
    AboutModule,
    OrdersModule,
    CustomersModule,
    CustomerModule,
    AppRoutingModule,     
    CoreModule,           //Singleton objects (services, components that are loaded only once, etc.)
    SharedModule          //Shared (multi-instance) objects
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }