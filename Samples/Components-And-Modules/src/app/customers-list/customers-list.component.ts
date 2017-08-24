import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'customers-list',
    templateUrl: './customers-list.component.html'
})
export class CustomersListComponent implements OnInit {

	 title: string;

    constructor() { }

    ngOnInit() { 
		this.title = 'Customers';
    }

}