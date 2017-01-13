import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers.component';
import { CustomersCardComponent } from './customers-card.component';
import { CustomersGridComponent } from './customers-grid.component';

/*

  TODO: Modifying a Route to Support Lazy Loading

  Change the existing route path from path: 'customers' to path: '' since the feature
  module will be lazy loaded by the application and the route path will
  be defined in the root routing module.

*/

const routes : Routes = [
  { path: 'customers', component: CustomersComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class CustomersRoutingModule {
  static components = [ CustomersComponent, CustomersCardComponent, CustomersGridComponent ];
}