import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

/*

TODO 1: Import DataService

Import DataService from ../shared/services/data.service

Import ICustomer and IOrder from ../shared/interfaces

*/



import { FilterTextboxComponent } from '../filterTextbox/filterTextbox.component';
import { CustomersCardComponent } from './customersCard.component';
import { CustomersGridComponent } from './customersGrid.component'


@Component({ 
  moduleId: module.id,
  selector: 'customers', 
  templateUrl: 'customers.component.html',
  directives: [ROUTER_DIRECTIVES, FilterTextboxComponent, 
               CustomersCardComponent, CustomersGridComponent]
})
export class CustomersComponent implements OnInit {

  title: string;
  filterText: string;
  customers: ICustomer[] = [];
  filteredCustomers: ICustomer[] = [];
  displayMode: DisplayModeEnum;
  displayModeEnum = DisplayModeEnum;

  /*

  TODO 2: Inject DataService

  Inject the DataService object into the constructor. Give the injected parameter 
  a name of "dataService" and make it private.

  */

  constructor() { }
  
  ngOnInit() {
    this.title = 'Customers';
    this.filterText = 'Filter Customers:';
    this.displayMode = DisplayModeEnum.Card;
    
    /*

    TODO 3: Subscribing to an Observable
    
    Add the following code below (in the onInit() function):
    
    this.dataService.getCustomers()

    Add code to subscribe to the Observable<ICustomer[]> returned from 
    this.dataService.getCustomers() by doing the following:

      1. After the getCustomers() function add a call to subscribe().
      
      2. The subscribe() function should use an arrow function that accepts
         customers: ICustomer[] as the type.
         
      3. The body of the arrow function should do the following 
         with the data it receives:
      
         this.customers = this.filteredCustomers = customers;
         
      Note: If you need help with this step refer to the course manual or 
            to lab's End folder for details on getting to the source code.

    */




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
