import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { DataService } from '../shared/services/data.service';
import { FilterTextboxComponent } from '../filterTextbox/filterTextbox.component';
import { CustomersCardComponent } from './customersCard.component';
import { CustomersGridComponent } from './customersGrid.component'
import { ICustomer, IOrder } from '../shared/interfaces';

/*

TODO 1: Modifying the CustomersComponent Class

1. Take a moment to look through the existing code in the file.

2. Import OnInit from the @angular/core module. 
   Hint: The module is already defined above so you can use it for this task.
   
3. Take a moment to examine the @Component decorator properties:
   a. The moduleId is set to module.id so that Angular knows the 
      relative path for the component (simplifies the template path)
   b. The selector is set to 'customers' which means <customers></customers> is used
   c. Custom components and directives used by the component are defined so that
      the template/view renders everything correctly.
   
4. Implement the OnInit interface on the CustomersComponent class below.
   This requires performing the following steps:
   a. Use the implements keyword on the class definition to implement the interface.
   b. Add the ngOnInit() function into the class
   
5. Add a templateUrl property into the @Component decorator with the following value:
  
   customers.component.html

6. Add the following code into the ngOnInit() function to initialize property values
   and retrieve data (more on retrieving data later in the course - we need this
   code for now to get the app working):

    this.title = 'Customers';
    this.filterText = 'Filter Customers:';
    this.displayMode = DisplayModeEnum.Card;

    this.dataService.getCustomers()
        .subscribe((customers: ICustomer[]) => {
          this.customers = this.filteredCustomers = customers;
        });

*/

@Component({ 
  moduleId: module.id,
  selector: 'customers', 

  directives: [ROUTER_DIRECTIVES, FilterTextboxComponent, 
               CustomersCardComponent, CustomersGridComponent]
})
export class CustomersComponent  {

  title: string;
  filterText: string;
  customers: ICustomer[] = [];
  filteredCustomers: ICustomer[] = [];
  displayMode: DisplayModeEnum;
  displayModeEnum = DisplayModeEnum;

  constructor(private dataService: DataService) { }
  
  

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
