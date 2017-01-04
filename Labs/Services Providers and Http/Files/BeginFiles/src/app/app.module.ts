import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing.module';

/*

TODO 1: Import CoreModule

Import CoreModule below.

*/

import { LoginModule } from './login/login.module';
import { SharedModule }   from './shared/shared.module';

/*

TODO 2: Add CoreModule to the Imports Property

Add CoreModule into the NgModule decorator's imports property to make the services
provided by CoreModule available throughout the entire application.

*/
@NgModule({
  imports: [
    BrowserModule,
    LoginModule,          //Eager loaded since we may need to go here right away as browser loads based on route user enters
    AppRoutingModule,     //Main routes for application
    SharedModule          //Shared (multi-instance) objects
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }