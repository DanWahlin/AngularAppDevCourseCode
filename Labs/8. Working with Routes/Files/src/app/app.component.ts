import { Component } from '@angular/core';

/*

  TODO 1: Importing Router Objects

  Import the following objects from @angular/router: 
          
  ROUTER_DIRECTIVES  
  Routes
  Router

*/


import { CustomersComponent } from './customers/customers.component';
import { CustomerComponent } from './+customer/customer.component';
import { APP_PROVIDERS } from './app.providers';

/*

  TODO 2: Add <router-outlet> and ROUTER_DIRECTIVES into 
        the Component Decorator

  1. Add <router-outlet></router-outlet> into the 
     Component decorator's template property.
    
  2. Add ROUTER_DIRECTIVES into the Component decorator's 
     directives property.

     Hint: Use the directives property in Component.

*/

@Component({ 
  moduleId: module.id,
  selector: 'app-container',
  providers: [ APP_PROVIDERS ]
})

/*

TODO 3: Define Routes

  Define the following application routes using the Routes decorator:

  Path            Component

  /               CustomersComponent
  /customer/:id   CustomerComponent
  '*'             CustomersComponent

*/


export class AppComponent {
  
  /*

    TODO 4: Inject the Router

    Inject Router into the contructor. Give the constructor parameter 
    a name of "router" and make it private.
    
    Note: Router isn't currently being used. However, by injecting it 
    we can easily use it to do redirects if needed in the future.
  

  */
  constructor() {

  }
  
}
