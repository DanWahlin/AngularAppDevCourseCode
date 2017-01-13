import { Component } from '@angular/core';

/*

TODO 1: Exploring the Code and Importing a Symbol

1. Take a moment to look through the existing code in the file.

2. Import OnInit from the @angular/core module. 
   Hint: The module is already defined above so you can use it for this task.

*/

import { DataService } from '../core/services/data.service';
import { ICustomer, IPagedResults } from '../shared/interfaces';
import { FilterService } from '../core/services/filter.service';

/*

TODO 2: Modifying the CustomersComponent Class
   
1. Take a moment to examine the @Component decorator properties:
   a. The moduleId is set to module.id so that Angular knows the 
      relative path for the component (it simplifies the template path).
   b. The selector is set to 'cm-customers'.

2. Add a templateUrl property into the @Component decorator with the following value:
  
   customers.component.html
   
3. Implement the OnInit abstract class on the CustomersComponent class below.
   This requires performing the following steps:
   a. Use the "implements" keyword on the class definition to implement the interface.
   b. Add the ngOnInit() function into the class

4. Add the following code into the ngOnInit() function to initialize property values
   and retrieve data (more on retrieving data later in the course - we need this
   code for now to get the app working):

    this.title = 'Customers';
    this.filterText = 'Filter Customers:';
    this.displayMode = DisplayModeEnum.Card;

    this.getCustomersPage(1);

*/

@Component({ 
  moduleId: module.id,
  selector: 'cm-customers'
})
export class CustomersComponent  {

  title: string;
  filterText: string;
  customers: ICustomer[] = [];
  filteredCustomers: ICustomer[] = [];
  displayMode: DisplayModeEnum;
  displayModeEnum = DisplayModeEnum;
  totalRecords: number = 0;
  pageSize: number = 10;

  constructor(private dataService: DataService, private filterService: FilterService) { }
  
  //Add ngOnInit() here





  changeDisplayMode(mode: DisplayModeEnum) {
      this.displayMode = mode;
  }

  pageChanged(page: number) {
    this.getCustomersPage(page);
  }

  getCustomersPage(page: number) {
    this.dataService.getCustomersPage((page - 1) * this.pageSize, this.pageSize)
        .subscribe((response: IPagedResults<ICustomer[]>) => {
          this.customers = this.filteredCustomers = response.results;
          this.totalRecords = response.totalRecords;
        },
        (err: any) => console.log(err),
        () => console.log('getCustomersPage() retrieved customers for page: ' + page));
  }

  filterChanged(data: string) {
    if (data && this.customers) {
        data = data.toUpperCase();
        const props = ['firstName', 'lastName', 'city', 'state.name'];
        this.filteredCustomers = this.filterService.filter<ICustomer>(this.customers, data, props);
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
