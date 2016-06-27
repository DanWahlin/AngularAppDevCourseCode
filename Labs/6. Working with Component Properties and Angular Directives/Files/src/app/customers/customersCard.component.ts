import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

/*

TODO 1: Importing Custom Pipes

Import the following pipes below this comment:

   CapitalizePipe   ../shared/pipes/capitalize.pipe
   TrimPipe         ../shared/pipes/trim.pipe

*/

import { ICustomer } from '../shared/interfaces';
import { TrackByService } from '../shared/services/trackby.service';

/*

TODO 2: Add Custom Pipes into the Component Decorator

Add CapitalizePipe and TrimPipe into the component using the pipes property.

*/

@Component({ 
  moduleId: module.id,
  selector: 'customers-card', 
  templateUrl: 'customersCard.component.html',
  directives: [ ROUTER_DIRECTIVES ],

  //When using OnPush detectors, then the framework will check an OnPush 
  //component when any of its input properties changes, when it fires 
  //an event, or when an observable fires an event ~ Victor Savkin (Angular Team)
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class CustomersCardComponent implements OnInit {

  @Input() customers: ICustomer[] = [];
  
  constructor(public trackby: TrackByService) { }
  
  ngOnInit() {

  }

}

