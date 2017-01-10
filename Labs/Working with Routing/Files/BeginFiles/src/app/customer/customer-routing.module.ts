import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerComponent }   from './customer.component';
import { CustomerOrdersComponent } from './customer-orders.component';
import { CustomerDetailsComponent } from './customer-details.component';
import { CustomerEditComponent } from './customer-edit.component';

/*

  TODO 1: Defining a Root Route and Child Routes

  1. Add the following route definition (which includes an "id" route parameter) into the 
     routes constant below:

      { 
        path: 'customers/:id', 
        component: CustomerComponent,
        children: [

        ]
      }

  2. Add the following child route paths and associated components into the children property array
     that you added in the previous step:

      Path        Component
      ____________________________________

      orders      CustomerOrdersComponent
      details     CustomerDetailsComponent 
      edit        CustomerEditComponent

      Hint: You define child routes using the same syntax as the route in step 1 above.

*/

const routes: Routes = [


];

/*

  TODO 3: Call RouterModule.forChild() 

  Add a call to RouterModule forChild() in the NgModule decorator's imports property array to reference
  the child routes defined earlier.

*/

@NgModule({
  imports: [  ],
  exports: [ RouterModule ]
})
export class CustomerRoutingModule { 

  /*

    TODO 4: Exploring Routing Components

    Note that the components property below contains all of the components used
    in the routes. This technique was shown earlier (in the customers routing) but as a review, the 
    components are defined here so that we don't have to import them again in the feature
    module (CustomerModule in this example).

  */

  static components = [ CustomerComponent, CustomerOrdersComponent, CustomerDetailsComponent, CustomerEditComponent ];
}

