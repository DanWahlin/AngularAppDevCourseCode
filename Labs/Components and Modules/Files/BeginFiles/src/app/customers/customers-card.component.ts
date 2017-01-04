import { Component, OnInit, ChangeDetectionStrategy,
         trigger, state, style, transition, animate } from '@angular/core';

import { ICustomer } from '../shared/interfaces';
import { TrackByService } from '../core/services/trackby.service';

/*

TODO 1: Add an Input Property to the Class

1. Import the Input decorator from the @angular/core module (you can add it above).

2. Open customers-card.component.html in the editor and take a moment to look at the HTML.
   This file is responsible for rendering the cards that you see on the "homepage" of the app.

3. Add an input property (ensure that you add the @Input() decorator in front of the property name)
   into the CustomersCardComponent class below using the following information:
   
    Property Name:          customers
    Property Type:          ICustomer[]
    Default Property Value: []

   This property will be used to pass customer objects into this component (more on this later).

*/

@Component({ 
  moduleId: module.id,
  selector: 'cm-customers-card', 
  templateUrl: 'customers-card.component.html',
  styleUrls: [ 'customers-card.component.css' ],
  //When using OnPush detectors, then the framework will check an OnPush 
  //component when any of its input properties changes, when it fires 
  //an event, or when an observable fires an event ~ Victor Savkin (Angular Team)
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class CustomersCardComponent implements OnInit {

  //Add Input property here


  
  constructor(private trackbyService: TrackByService) { }
  
  ngOnInit() {

  }

}

