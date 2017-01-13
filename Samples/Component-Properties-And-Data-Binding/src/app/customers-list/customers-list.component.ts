import { Component, Input, OnInit } from '@angular/core';

import { ICustomer } from '../shared/interfaces';
import { Sorter } from '../shared/sorter';

@Component({
    moduleId: module.id,
    selector: 'customers-list',
    templateUrl: 'customers-list.component.html'
})
export class CustomersListComponent implements OnInit {

    title: string;
    @Input() customers: ICustomer[];
    filteredCustomers: ICustomer[];
    customersOrderTotal: number = 0;
    currencyCode: string = 'USD';

    constructor(private sorter: Sorter) { }

    ngOnInit() { 
        this.title = 'Customers';

        this.customers.forEach((cust: ICustomer) => {
            this.customersOrderTotal += cust.orderTotal;
        });
        this.filteredCustomers = this.customers;
    }

    filter(data: string) {
        if (data) {
            this.filteredCustomers = this.customers.filter((cust: ICustomer) => {
                return cust.name.toLowerCase().indexOf(data.toLowerCase()) > -1;
            });
        } else {
            this.filteredCustomers = this.customers;
        }
    }

    sort(prop: string) {
        this.sorter.sort(this.filteredCustomers, prop);
    }

}