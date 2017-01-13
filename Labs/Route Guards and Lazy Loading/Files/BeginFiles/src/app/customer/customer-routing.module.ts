import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerComponent }   from './customer.component';
import { CustomerOrdersComponent } from './customer-orders.component';
import { CustomerDetailsComponent } from './customer-details.component';
import { CustomerEditComponent } from './customer-edit.component';
import { CanActivateGuard } from './can-activate.guard';
import { CanDeactivateGuard } from './can-deactivate.guard';

/*

  TODO 1: Modifying a Route to Support Lazy Loading

  1. Change the existing route path from path: 'customers/:id' to path: '' since the feature
     module will be lazy loaded by the application and the route path will be defined 
     in the root routing module.

  2. Add CanActivateGuard and CanDeactivateGuard to the 'edit' child route below.

     IMPORTANT: Each route guard property requires an array for the value even if a single value is passed.

*/

const routes: Routes = [
      { 
        path: 'customers/:id', 
        component: CustomerComponent,
        children: [
            { path: 'orders', component: CustomerOrdersComponent },
            { path: 'details', component: CustomerDetailsComponent },
            { path: 'edit', component: CustomerEditComponent }
        ]
      }

];


/*

  TODO 2: Add Providers for the Route Guards

  Ensure that CanActivateGuard and CanDeactivateGuard have a provider defined in @NgModule.

*/
@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
 
})
export class CustomerRoutingModule { 
  static components = [ CustomerComponent, CustomerOrdersComponent, CustomerDetailsComponent, CustomerEditComponent ];
}

