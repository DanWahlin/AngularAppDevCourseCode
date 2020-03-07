import { Component, OnInit, ComponentRef, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ICustomer } from '../../shared/interfaces';
import { DataService } from '../../core/services/data.service';

/*

  TODO 1: Exploring Imported Routing Symbols

  Note that ActivatedRoute and Params are imported from @angular/router above.
  These items will be used to retrieve a route parameter from the URL.

*/


@Component({
  selector: 'cm-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: [ './customer-details.component.css' ]
})
export class CustomerDetailsComponent implements OnInit {

  customer: ICustomer;
  mapEnabled: boolean;
  mapComponentRef: ComponentRef<any>;

  @ViewChild('mapsContainer', { read: ViewContainerRef }) 
  private mapsViewContainerRef: ViewContainerRef;

  /*

    TODO 2: Inject ActivatedRoute

    Inject ActivatedRoute into the contructor. Give the constructor parameter 
    a name of "route" and make it private.

  */

  constructor( 
    private dataService: DataService,
    private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
      /*

        TODO 3: Retrieve a Route Parameter and Call a Service

        1. Add the following code below the comment (within ngOnInit) to subscribe to
           the route parameters on the parent route:

            this.route.parent.params.subscribe((params: Params) => {

            });

        2. Add the following code INSIDE of the arrow function you created in the previous step to 
           retrieve the "id" route parameter:

            let id = +params['id'];

           Note that the + at the front is a short-cut syntax that will convert the value 
           to an integer.

        3. Add the following code immediately after the previous code you added in the 
           array function to retrieve the customer using the id route parameter value:

            if (id) {
              this.dataService.getCustomer(id)
                .subscribe((customer: ICustomer) => {
                  this.customer = customer;
                  if (this.customer && this.customer.latitude) {
                    this.lazyLoadMapComponent();
                  }
                });
            }

      */



  }

  async lazyLoadMapComponent() {
    if (!this.mapsViewContainerRef.length) {
      // Lazy load MapComponent
      const { MapComponent } = await import('../../shared/map/map.component');
      console.log('Lazy loaded map component!');
      const component = this.componentFactoryResolver.resolveComponentFactory(MapComponent);
      this.mapComponentRef = this.mapsViewContainerRef.createComponent(component);
      this.mapComponentRef.instance.zoom = 10;
      this.mapComponentRef.instance.customer = this.customer;
      this.mapComponentRef.instance.enabled = true;
    }
  }

}