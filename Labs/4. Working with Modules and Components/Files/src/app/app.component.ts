import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes, Router } from '@angular/router';

/*

TODO 1: Import Custom Components from Modules

Import the following objects from their respective modules. 
Put the import statements below this TODO task.
        
CustomersComponent    ./customers/customers.component
CustomerComponent     ./+customer/customer.component
APP_PROVIDERS         ./app.providers

*/




/*

TODO 2: Adding a Component Decorator

1. Add a Component decorator below this TODO task.

2. Add the following properties into the decorator:
        
moduleId:   module.id
selector:   'app-container'
template:   '<router-outlet></router-outlet>'
directives: [ROUTER_DIRECTIVES]
providers:  [APP_PROVIDERS]

*/





/*

TODO 3: Adding a Class and Constructor

1. Create a class named AppComponent (ensure that you export it!) 
   below this TODO task.
2. Add the following constructor into the class:
        
  constructor(private router: Router) {

  }
  
3. Add the following Routes decorator immediately ABOVE the AppComponent class:

@Routes([
  { path: '/', component: CustomersComponent },
  { path: '/customer/:id', component: CustomerComponent },
  { path: '*', component: CustomerComponent }
])

*/


