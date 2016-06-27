import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DataService } from '../shared/services/data.service';
import { ICustomer, IState } from '../shared/interfaces';

@Component({
  moduleId: module.id,
  selector: 'customer-edit',
  templateUrl: 'customerEdit.component.html'
})
export class CustomerEditComponent implements OnInit {

  /*

  TODO 1: Exploring Component Properties

  1. Take a moment to look at the customer property below. Note the properties
     that it exposes such as firstName, lastName, address, etc.
     
  2. Notice that Router, ActivatedRoute and DataService objects are injected 
     into the constructor.

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
  
  constructor(private router: Router, 
              private route: ActivatedRoute, 
              private dataService: DataService) { }

  /*

  TODO 2: Retrieving a Customer Object

  1. Note that CustomerEditComponent implements OnInit.
  
  2. Add the following code into the ngOnInit() function to:

     a. Access the target customer id from the parent route
     b. Pass the customer id to the DataService's getCustomer() function
     c. Retrieve states
     
      const id = +this.router.routerState.parent(this.route).snapshot.params['id'];
      this.dataService.getCustomer(id).subscribe((customer: ICustomer) => {
        //Quick and dirty clone used in case user cancels out of form
        const cust = JSON.stringify(customer);
        this.customer = JSON.parse(cust);
      });
      

   3. Immediately AFTER the previous code (still in ngOnInit) add code to 
      do the following:
      
      a. Call dataService's getStates() function.

      b. Subscribe to the Observable that is returned from getStates(). When creating
         the subscribe use an arrow function that accepts the following parameter:
      
         states: IState[]

      c. Assign the states parameter value that's returned to the component's
         states property.

         Note: If you need help with the previous steps refer to the course manual 
         (the Http section) or to the lab's end solution code. The next TODO
         may also provide a hint to help with completing this step.
  
  */

  ngOnInit() {




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

  
  
  
  
  
  /*

  TODO 4: Navigating to the Root Route

  Add code into the onCancel() function to navigate to the "/"
  route using the router object's navigate() function.
  
  Hint: The navigate() function expects a parameter that is very
        similar to the routerLink directive value that you used
        in previous labs. Refer to the End solution or the Angular
        documentation if you need help (or the previous step :-)).
  
  */
  
  onCancel(event: Event) {
    event.preventDefault();
    
    //Add navigation code here



  }

}