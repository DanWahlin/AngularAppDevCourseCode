import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { LoginModule } from './login/login.module';
import { CoreModule }   from './core/core.module';
import { SharedModule }   from './shared/shared.module';
import { AboutModule } from './about/about.module';
import { OrdersModule } from './orders/orders.module';
import { CustomerModule } from './customer/customer.module';
import { CustomersModule } from './customers/customers.module';

@NgModule({
  imports: [
    BrowserModule,
    LoginModule,         
    AboutModule,
    OrdersModule,
    CustomerModule,
    CustomersModule,
    AppRoutingModule,     
    CoreModule,           //Singleton objects (services, components that are loaded only once, etc.)
    SharedModule          //Shared (multi-instance) objects
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }