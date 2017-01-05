import { Component, OnInit } from '@angular/core';

/*

  TODO 1: Exploring Imported Routing Symbols

  Note that ActivatedRoute and Params are imported from @angular/router.
  These items will be used to retrieve a route parameter from the URL.

*/
import { ActivatedRoute, Params } from '@angular/router';

import { ICustomer } from '../shared/interfaces';
import { DataService } from '../core/services/data.service';

@Component({
  moduleId: module.id,
  selector: 'cm-customer-details',
  templateUrl: 'customer-details.component.html',
  styleUrls: [ 'customer-details.component.css' ]
})
export class CustomerDetailsComponent implements OnInit {

  customer: ICustomer;
  mapEnabled: boolean;

  /*

    TODO 2: Inject ActivatedRoute

    Inject ActivatedRoute into the contructor. Give the constructor parameter 
    a name of "route" and make it private.

  */

  constructor(private dataService: DataService) { }

  ngOnInit() {
      /*

        TODO 3: Retrieve a Route Parameter and Call a Service

        1. Add the following code below the comment (within ngOnInit) to subscribe to
           the route parameters on the parent route:

            this.route.parent.params.subscribe((params: Params) => {

            });

        2. Add the following code inside of the arrow function to retrieve the "id" 
           route parameter:

            let id = +params['id'];

           Note that the + at the front is a short-cut syntax that will convert the value 
           to an integer.

        3. Add the following code immediately after the previous code you added in the 
           array function to retrieve the customer using the id route parameter value:

             this.dataService.getCustomer(id)
                 .subscribe((customer: ICustomer) => {
                   this.customer = customer;
                   this.mapEnabled = true;
                 });

      */



  }


}