import { Component, OnInit } from '@angular/core';

import { ICustomer } from '../shared/interfaces';
import { DataService } from '../core/data.service';

@Component({
    moduleId: module.id,
    selector: 'co-customers',
    templateUrl: 'customers.component.html'
})
export class CustomersComponent implements OnInit {

    people: ICustomer[];

    constructor(private dataservice: DataService) { }

    ngOnInit() { 
      this.dataservice.getCustomers()
          .subscribe((customers: ICustomer[]) => this.people = customers);
    }

}