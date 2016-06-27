import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { CapitalizePipe } from '../shared/pipes/capitalize.pipe';
import { TrimPipe } from '../shared/pipes/trim.pipe';
import { ICustomer } from '../shared/interfaces';
import { TrackByService } from '../shared/services/trackby.service';

/*

TODO 1: Add an Input Property to the Class

1. Import the Input decorator from the @angular/core module (you can add it above).

2. Add an input property (ensure that you use the @Input() decorator)
   into the CustomersCardComponent class below using the following information:
   
Property Name:          customers
Property Type:          ICustomer[]
Default Property Value: []

*/

@Component({ 
  moduleId: module.id,
  selector: 'customers-card', 
  templateUrl: 'customersCard.component.html',
  directives: [ROUTER_DIRECTIVES],
  pipes: [CapitalizePipe, TrimPipe],
  //When using OnPush detectors, then the framework will check an OnPush 
  //component when any of its input properties changes, when it fires 
  //an event, or when an observable fires an event ~ Victor Savkin (Angular Team)
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class CustomersCardComponent implements OnInit {

  //Add input property here
  
  
  constructor(public trackby: TrackByService) { }
  
  ngOnInit() {

  }

}

