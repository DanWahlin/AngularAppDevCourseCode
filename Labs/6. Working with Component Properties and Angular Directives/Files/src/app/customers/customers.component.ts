import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
//import { Observable } from 'rxjs/Observable';

import { DataService } from '../shared/services/data.service';
import { FilterTextboxComponent } from '../filterTextbox/filterTextbox.component';
import { ICustomer, IOrder } from '../shared/interfaces';

/*

TODO 1: Import CustomersCardComponent and CustomersGridComponent 

Import the following custom components immediately after the TODO comment:

CustomersCardComponent    ./customersCard.component
CustomersGridComponent    ./customersGrid.component

*/




/*

TODO 2: Add CustomersCardComponent and CustomersGridComponent as a Child Components

Add CustomersCardComponent and CustomersGridComponent to the directives 
property array in the Component decorator so that they're available to use
in the template.

*/

@Component({ 
  moduleId: module.id,
  selector: 'customers', 
  templateUrl: 'customers.component.html',
  directives: [ ROUTER_DIRECTIVES, FilterTextboxComponent ]
})
export class CustomersComponent implements OnInit {

  title: string;
  filterText: string;
  customers: ICustomer[] = [];
  filteredCustomers: ICustomer[] = [];
  displayMode: DisplayModeEnum;
  displayModeEnum = DisplayModeEnum;

  constructor(private dataService: DataService) { }
  
  ngOnInit() {
    this.title = 'Customers';
    this.filterText = 'Filter Customers:';
    this.displayMode = DisplayModeEnum.Card;

    this.dataService.getCustomers()
        .subscribe((customers: ICustomer[]) => {
          this.customers = this.filteredCustomers = customers;
        });

  }

  changeDisplayMode(mode: DisplayModeEnum) {
      this.displayMode = mode;
  }

  filterChanged(data: string) {
    if (data && this.customers) {
        data = data.toUpperCase();
        let props = ['firstName', 'lastName', 'address', 'city', 'orderTotal'];
        let filtered = this.customers.filter(item => {
            let match = false;
            for (let prop of props) {
                //console.log(item[prop] + ' ' + item[prop].toUpperCase().indexOf(data));
                if (item[prop].toString().toUpperCase().indexOf(data) > -1) {
                  match = true;
                  break;
                }
            };
            return match;
        });
        this.filteredCustomers = filtered;
    }
    else {
      this.filteredCustomers = this.customers;
    }
  }

}

enum DisplayModeEnum {
  Card = 0,
  Grid = 1,
  Map = 2
}
