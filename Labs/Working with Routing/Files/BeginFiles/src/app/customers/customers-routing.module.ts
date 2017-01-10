/*

  TODO 1: Import Routing and Component Symbols

  1. Import NgModule from @angular/core

  2. Import RouterModule and Routes from @angular/router

  3. Import the following components:

  CustomersComponent      ./customers.component
  CustomersCardComponent  ./customers-card.component
  CustomersGridComponent  ./customers-grid.component

*/




/*

  TODO 2: Defining Routes

  1. Add a constant (const) named routes that is of type Routes below the TODO comment. 
     It should be assigned an empty array value: []

  2. Add the following inside of the array to define a route that will load the CustomersComponent

     { path: 'customers', component: CustomersComponent }


*/



/*

  TODO 3: Adding Routes and Components into the Routing Module

  1. Add the following code into the NgModule decorator's imports array:

     RouterModule.forChild(routes)

  2. Add RouterModule (imported earlier) into the NgModule decorator's exports property array.

*/


@NgModule({
  imports: [  ],
  exports: [  ]
})
export class CustomersRoutingModule {

  /*

  TODO 4: Adding Components

  To avoid having to import CustomersComponent and its supporting child components again in the 
  Customers feature module (CustomersModule) you'll define them here so they can easily be 
  accessed.

  Add CustomersComponent, CustomersCardComponent, CustomersGridComponent to the static
  components array value below. You'll see how CustomersRoutingModule's components property is
  used later in this lab.

  */

  static components = [  ];
}