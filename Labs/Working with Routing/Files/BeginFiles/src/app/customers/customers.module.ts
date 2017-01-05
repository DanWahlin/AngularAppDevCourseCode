import { NgModule }      from '@angular/core';

/*

  TODO: Importing the CustomersRoutingModule

  1. Import CustomersRoutingModule

  2. Add CustomersRoutingModule into the NgModule decorator's imports array.

  3. Add CustomersRoutingModule.components into the NgModule decorator's declarations array.

  By defining the customers routing components and related child components in 
  CustomersRoutingModule's "components" property we can easily access those in any other 
  module that imports CustomersRoutingModule. This saves us from writing all of the import 
  statements again in this module.

*/


import { SharedModule }   from '../shared/shared.module';

@NgModule({
  imports:      [ SharedModule ],
  declarations: [  ]
})
export class CustomersModule { }