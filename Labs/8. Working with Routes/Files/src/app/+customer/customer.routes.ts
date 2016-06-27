import { RouterConfig } from '@angular/router';

import { CustomerComponent }   from './customer.component';
import { CustomerOrdersComponent } from './customerOrders.component';
import { CustomerDetailsComponent } from './customerDetails.component';
import { CustomerEditComponent } from './customerEdit.component';

/*

  TODO: Define Custom Routes

  1. Add the following route properties and values (as an object literal) 
  into the CustomerRoutes array below:

    path:         'customers/:id'
    component:    CustomerComponent
    children:     []

  2. Add the following child routes into the route's "children" property. Refer 
    to the course manual or this lab's end solution if you need help with this step.
  

     path         component
     ______________________________________  

     orders       CustomerOrdersComponent
     details      CustomerDetailsComponent
     edit         CustomerEditComponent
  
*/

export const CustomerRoutes: RouterConfig = [


];
