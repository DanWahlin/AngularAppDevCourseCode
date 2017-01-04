import { Component, OnInit } from '@angular/core';

/*

  TODO 1: Importing Routing Objects

  Import the following object from the @angular/router module. 
          
  Router, ROUTER_DIRECTIVES

*/



import { IOrder, IOrderItem } from '../shared/interfaces';
import { CustomerOrdersComponent } from './customerOrders.component';
import { CustomerDetailsComponent } from './customerDetails.component';
import { CustomerEditComponent } from './customerEdit.component';

/*

  TODO 2: Add ROUTER_DIRECTIVES

  Add ROUTER_DIRECTIVES into the Component decorator's 
  directives property.

*/

@Component({ 
  moduleId: module.id,
  selector: 'orders',
  templateUrl: 'customer.component.html'
})
export class CustomerComponent {
  
    displayMode: CustomerDisplayModeEnum;
    displayModeEnum = CustomerDisplayModeEnum;
  
  
    /*

      TODO 3: Inject Router

      Inject Router into the contructor. Give the constructor parameter 
      a name of "router" and make it private.

    */
    constructor() { }
    
    /*

      TODO 4: Inspect the ngOnInit() Function

      Take a moment to look at the code in the ngOnInit()
      function below. 
      
      The this.router.url.split('/')[3]; code allows us to retrieve the 
      name of the child route and then set the appropriate display mode 
      to show customer details, orders or the edit screen.

    */
    
    ngOnInit() {
      const path = this.router.url.split('/')[3];
      switch (path) {
        case 'details':
          this.displayMode = CustomerDisplayModeEnum.Details;
          break;
        case 'orders':
          this.displayMode = CustomerDisplayModeEnum.Orders;
          break;
        case 'edit':
          this.displayMode = CustomerDisplayModeEnum.Edit;
          break;
      }
    }
}

enum CustomerDisplayModeEnum {
  Details=0,
  Orders=1,
  Edit=2
}
