import { NgModule } from '@angular/core';

/*

  TODO 1: Import Routing Symbols

  Import PreloadAllModules from @angular/router   

*/

import { RouterModule, Routes } from '@angular/router';

/*

  TODO 2: Defining "customers" Lazy Loaded Routes

  Add the following routes into the app_routes constant below. Ensure that you add them 
  AFTER the first path: '' route.

  { path: 'customers', loadChildren: 'app/customers/customers.module#CustomersModule' },
  { path: 'customers/:id', loadChildren: 'app/customer/customer.module#CustomerModule' },

  The loadChildren property will cause these routes to "lazy load" the associated modules and 
  avoid blocking the homepage while the module scripts load. We'll load them in the background
  (more on this in the next TODO!).

*/

const app_routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: '/customers' },
  //Add new routes here


  { path: 'orders', loadChildren: 'app/orders/orders.module#OrdersModule' },
  { path: 'about', loadChildren: 'app/about/about.module#AboutModule' },
  { path: '**', pathMatch:'full', redirectTo: '/customers' } //catch any unfound routes and redirect to home page
];

/*

  TODO 3: Adding Routes into the Module

  Add the following code into the NgModule decorator's imports property array:

    RouterModule.forRoot(app_routes, { preloadingStrategy: PreloadAllModules })

  If no preloadingStrategy is defined then feature modules will be loaded as they're needed 
  in the background (as the user clicks a link to view orders for example). By giving a preloadStrategy 
  of "PreloadAllModules" the app will preload all modules in the background. 

*/
@NgModule({
  imports: [  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
