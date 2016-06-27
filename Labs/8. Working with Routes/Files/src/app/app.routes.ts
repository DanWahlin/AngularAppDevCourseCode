/*

  TODO 1: Import Routing Objects

  Import provideRouter and RouterConfig from @angular/router
  Import CustomersRoutes from ./customers/customers.routes
  Import CustomerRoutes from  ./+customer/customer.routes

*/




/*

  TODO 2: Add Custom Routes to the appRoutes Array

  1. Add the CustomersRoutes and CustomerRoutes objects into the
     appRoutes array below. 
  
  2. Add the ES6 "spread" operator (hint: ...) in front of each object name within the array.

*/


const appRoutes: RouterConfig = [

];


/*

  TODO 3: Explore the provideRouter() Function

  Note how the appRoutes array is passed into Angular's provideRouter()
  function to define routes for the application. The resulting object is made a 
  part of the APP_ROUTER_PROVIDERS array which will be passed into bootstrap().

*/

export const APP_ROUTER_PROVIDERS = [
  provideRouter(appRoutes)
];