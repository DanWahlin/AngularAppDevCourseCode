import { Component, OnInit } from '@angular/core';

import { ICustomer } from '../shared/interfaces';

@Component({
    moduleId: module.id,
    selector: 'customers-list',
    templateUrl: 'customers-list.component.html'
})
export class CustomersListComponent implements OnInit {

    title: string;
    customers: ICustomer[];
    customersOrderTotal: number = 0;
    currencyCode: string = 'USD';

    constructor() { }

    ngOnInit() { 
        this.title = 'Customers';
        this.customers = [
            { id: 1, name: 'john Doe', city: 'Phoenix', orderTotal: 9.99, customerSince: new Date(2014, 7, 10) },
            { id: 2, name: 'Jane Doe', city: 'Chandler', orderTotal: 19.99, customerSince: new Date(2017, 2, 22)},
            { id: 3, name: 'Michelle Thomas', city: 'Seattle', orderTotal: 99.99, customerSince: new Date(2002, 10, 31)},
        ];
        this.customers.forEach((cust: ICustomer) => {
            this.customersOrderTotal += cust.orderTotal;
        });
    }

}