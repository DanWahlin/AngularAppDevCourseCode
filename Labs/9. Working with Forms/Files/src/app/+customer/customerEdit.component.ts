import { Component, OnInit } from '@angular/core';
import { Router, RouteSegment, RouteTree, OnActivate } from '@angular/router';

import { DataService } from '../shared/services/data.service';
import { ICustomer, IState } from '../shared/interfaces';

@Component({
  moduleId: module.id,
  selector: 'customer-edit',
  templateUrl: 'customerEdit.component.html'
})
export class CustomerEditComponent implements OnActivate {

  /*

  TODO 1: Exploring Component Properties

  1. Take a moment to look at the customer property below. Note the properties
     that it exposes such as firstName, lastName, address, etc.
     
  2. Notice that Router and DataService objects are injected into the constructor.

  */

  customer: ICustomer = 
  {
    id: 0,
    firstName: '',
    lastName: '',
    gender: '',
    address: '',
    city: '',
    state: {
        abbreviation: '',
        name: ''
    }
  };
  states: IState[];
  
  constructor(private router: Router, private dataService: DataService) { }

  /*

  TODO 2: Retrieving a Customer Object

  1. Note that CustomerEditComponent implements OnActivate.
  
  2. Add the following code into the routerOnActivate() function to:
     a. Access the target customer id from the parent route
     b. Pass the customer id to the DataService's getCustomer() function
     c. Retrieve states
     
      const id = +currTree.parent(current).getParam('id');
      this.dataService.getCustomer(id).subscribe((customer: ICustomer) => {
        //Quick and dirty clone used in case user cancels out of form
        const cust = JSON.stringify(customer);
        this.customer = JSON.parse(cust);
      });
      this.dataService.getStates().subscribe((states: IState[]) => this.states = states);
  
  */

  routerOnActivate(current: RouteSegment, prev?: RouteSegment,
      currTree?: RouteTree, prevTree?: RouteTree) {

      const id = +currTree.parent(current).getParam('id');
      this.dataService.getCustomer(id).subscribe((customer: ICustomer) => {
        //Quick and dirty clone used in case user cancels out of form
        const cust = JSON.stringify(customer);
        this.customer = JSON.parse(cust);
      });
      this.dataService.getStates().subscribe((states: IState[]) => this.states = states);
  }
  
  /*

  TODO 3: Saving a Customer Object

  1. Create a new function named onSubmit()
  
  2. Add the following code into onSubmit() to pass
     the customer object to DataService's updateCustomer() function.
  
     this.dataService.updateCustomer(this.customer)
       .subscribe((status: boolean) => {
         this.router.navigate(['/']);
     });
  
  */

  onSubmit() {
     this.dataService.updateCustomer(this.customer)
       .subscribe((status: boolean) => {
         this.router.navigate(['/']);
     });
  }


  /*

  TODO 4: Saving a Customer Object

  1. Create a new function named onSubmit()
  
  2. Add the following code into onSubmit() to pass
     the customer object to DataService's updateCustomer() function.
  
     this.dataService.updateCustomer(this.customer)
       .subscribe((status: boolean) => {
         this.router.navigate(['/']);
     });
  
  */
  
  
  
  
  
  /*

  TODO 5: Navigating to the Root Route

  Add code into the onCancel() function to navigate to the "/"
  route using the router object's navigate() function.
  
  Hint: The navigate() function expects a parameter that is very
        similar to the routerLink directive value that you used
        in previous labs. Refer to the End solution or the Angular
        documentation if you need help.
  
  */
  
  onCancel(event: Event) {
    event.preventDefault();
    
    //Add navigation code here



  }

}