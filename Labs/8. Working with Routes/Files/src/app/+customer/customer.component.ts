import { Component, OnInit } from '@angular/core';

/*

  TODO 1: Importing Routing Objects

  Import the following objects from the @angular/router module. 
          
  Router, Routes, ROUTER_DIRECTIVES, RouteSegment, OnActivate, RouteTree

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

/*

  TODO 3: Define Child Routes

  Define the following child routes using the Routes decorator:

  Path            Component

  /orders         CustomerOrdersComponent
  /details        CustomerDetailsComponent
  /edit           CustomerEditComponent

*/




/*

  TODO 4: Implement the OnActivate Interface on a Component Class

  Implement the OnActivate interface on the CustomerComponent class.

*/
export class CustomerComponent {
  
    displayMode: CustomerDisplayModeEnum;
    displayModeEnum = CustomerDisplayModeEnum;
  
  
    /*

      TODO 5: Inject Router

      Inject Router into the contructor. Give the constructor parameter 
      a name of "router" and make it private.
      
      Note: Router isn't currently being used. However, by injecting it 
      we can easily use it to do redirects if needed in the future.

    */
    constructor() { }
    
    /*

      TODO 6: Inspect the routerOnActivate() Function

      Take a moment to look at the code in the routerOnActivate()
      function below. 
      
      The currTree.children(current)[0].stringifiedUrlSegments;
      code allows us to retrieve the name of the child route and then set
      the appropriate display mode to show customer details, orders or the 
      edit screen.

    */
    
    routerOnActivate(current: RouteSegment, prev?: RouteSegment,
      currTree?: RouteTree, prevTree?: RouteTree) {
      var path = currTree.children(current)[0].stringifiedUrlSegments;
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
