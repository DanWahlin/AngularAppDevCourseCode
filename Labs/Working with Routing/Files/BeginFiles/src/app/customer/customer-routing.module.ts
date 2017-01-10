import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*

  TODO 1: Explore the Module Imports

  Take a moment to explore the imports below.  Notice that in addition to importing
  components we're also importing two route guards.

*/

import { CustomerComponent }   from './customer.component';
import { CustomerOrdersComponent } from './customer-orders.component';
import { CustomerDetailsComponent } from './customer-details.component';
import { CustomerEditComponent } from './customer-edit.component';
import { CanActivateGuard } from './can-activate.guard';
import { CanDeactivateGuard } from './can-deactivate.guard';

/*

  TODO 2: Defining a Root Route and Child Routes

  1. Add the following route definition into the routes constant below:

      { 
        path: '', 
        component: CustomerComponent,
        children: [

        ]
      }

  2. Add the following child routes into the children property array:

      { path:'orders',  component: CustomerOrdersComponent },
      { path:'details', component: CustomerDetailsComponent },

  3. Add the following child route after the previous ones (after 'details') inside
     of the children property:

      { 
        path:'edit', 
        component: CustomerEditComponent
      }  

     This route requires that the user logs in so it includes a "canActive" route guard. 
     If the user tries to leave the edit view without saving data it also includes a "canDeactivate" 
     guard to prompt the user about unsaved changes.

  4. Add CanActivateGuard and CanDeactivateGuard to the 'edit' route.

*/

const routes: Routes = [


];

/*

  TODO 3: Call RouterModule.forChild() 

  1. Add a call to RouterModule forChild() in the NgModule decorator's imports property array to reference
     the child routes defined earlier.

  2. Ensure that CanActivateGuard and CanDeactivateGuard have a provider defined in @NgModule.

*/

@NgModule({
  imports: [  ],
  exports: [ RouterModule ],

})
export class CustomerRoutingModule { 

  /*

    TODO 4: Defining Routing Components

    Note that the components property below contains all of the components used
    in the routes. This technique was shown earlier (in the customers routing) but as a review, the 
    components are defined here so that we don't have to import them again in the feature
    module (CustomerModule in this example).

  */

  static components = [ CustomerComponent, CustomerOrdersComponent, CustomerDetailsComponent, CustomerEditComponent ];
}

