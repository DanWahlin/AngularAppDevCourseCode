import { RouterModule, Routes } from '@angular/router';

import { CustomersListComponent } from '../customers-list/customers-list.component';
import { FilterTextboxComponent } from '../customers-list/filter-textbox.component';
import { CustomersComponent } from './customers.component';
import { CustomerOrdersComponent } from '../customer-orders/customer-orders.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/customers'},
    { path: 'customers', component: CustomersComponent },
    { path: 'orders/:id', component: CustomerOrdersComponent }
];

export const customersRouting = {
    routes: RouterModule.forRoot(routes),
    components: [ CustomersComponent, CustomerOrdersComponent,
                  CustomersListComponent, FilterTextboxComponent ]
};