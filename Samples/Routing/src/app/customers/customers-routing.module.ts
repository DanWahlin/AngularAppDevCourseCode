import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomersListComponent } from '../customers-list/customers-list.component';
import { FilterTextboxComponent } from '../customers-list/filter-textbox.component';
import { CustomersComponent } from './customers.component';
import { CustomerOrdersComponent } from '../customer-orders/customer-orders.component';

const routes: Routes = [
    { path: 'customers', component: CustomersComponent }, 
    { path: 'orders/:id', component: CustomerOrdersComponent }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ], 
    exports: [ RouterModule ]
})
export class CustomersRoutingModule {
    static components = [ CustomersListComponent, FilterTextboxComponent, 
                          CustomersComponent, CustomerOrdersComponent ]
}