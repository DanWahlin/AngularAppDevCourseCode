import { Component } from '@angular/core';

/*

  TODO 1: Import Router Objects

  Import ROUTER_DIRECTIVES from @angular/router: 

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
export class AppComponent {

  
}
