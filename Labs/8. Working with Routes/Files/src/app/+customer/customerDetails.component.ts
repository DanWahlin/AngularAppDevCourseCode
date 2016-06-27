import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';

import { ICustomer } from '../shared/interfaces';
import { DataService } from '../shared/services/data.service';
import { CapitalizePipe } from '../shared/pipes/capitalize.pipe';

@Component({
  moduleId: module.id,
  selector: 'customer-details',
  templateUrl: 'customerDetails.component.html',
  directives: [ ROUTER_DIRECTIVES ],
  pipes: [ CapitalizePipe ]
})
export class CustomerDetailsComponent implements OnInit {

  customer: ICustomer;

  /*

    TODO 1: Inject Router and ActivatedRoute

    1. Inject Router into the contructor. Give the constructor parameter 
    a name of "router" and make it private.

    2. Inject ActivatedRoute into the contructor. Give the constructor parameter 
    a name of "route" and make it private.

  */

  constructor(private dataService: DataService) { }

  ngOnInit() {
      /*

        TODO 2: Retrieve a Route Parameter and Call a Service

        1. Add the following code below (within ngOnInit) to retrieve
           the id route parameter from the parent route:

           const id = +this.router.routerState.parent(this.route).snapshot.params['id'];

           Note: The + at the front is a short-cut syntax that will convert the value 
           to an integer.

        2. Immediately below the previous code, call the dataService object's 
           getCustomer() function and pass the id value to it as a parameter.

        3. Subscribe to the observable returned by the service's getCustomer() function 
           by adding the following code immediately after the function call.
           
           .subscribe((customer: ICustomer) => this.customer = customer);

      */




  }
}