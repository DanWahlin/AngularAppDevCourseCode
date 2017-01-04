import { Component, Input, OnInit } from '@angular/core';

import { ICustomer } from '../shared/interfaces';

@Component({
    moduleId: module.id,
    selector: 'customers-list',
    templateUrl: 'customers-list.component.html'
})
export class CustomersListComponent implements OnInit {

    title: string;
    @Input() customers: ICustomer[];
    customersOrderTotal: number = 0;
    currencyCode: string = 'USD';
    nameFilter: string = '';

    constructor() { }

    ngOnInit() { 
        this.title = 'Customers';

        this.customers.forEach((cust: ICustomer) => {
            this.customersOrderTotal += cust.orderTotal;
        });
    }

    filter() {
        //filter data based on this.nameFilter

    }

}