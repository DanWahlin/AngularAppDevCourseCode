  
import { Component, OnInit, ViewChild, 
  ViewContainerRef, ComponentFactoryResolver, ComponentRef } from '@angular/core';



/*

TODO 1: Import DataService and Custom Interfaces

1. Import DataService from ../core/services/data.service

2. Import ICustomer and IPagedResults from ../shared/interfaces

*/


import { FilterService } from '../core/services/filter.service';
import { LoggerService } from '../core/services/logger.service';

@Component({ 
  selector: 'cm-customers', 
  templateUrl: './customers.component.html'
})
export class CustomersComponent implements OnInit {

  title: string = '';
  filterText: string = '';
  customers: ICustomer[] = [];
  displayMode: DisplayModeEnum = DisplayModeEnum.Card;
  displayModeEnum = DisplayModeEnum;
  totalRecords = 0;
  pageSize = 10;
  mapComponentRef: ComponentRef<any> = {} as ComponentRef<any>;
  _filteredCustomers: ICustomer[] = [];

  get filteredCustomers() {
    return this._filteredCustomers;
  }

  set filteredCustomers(value: ICustomer[]) {
    this._filteredCustomers = value;
    this.updateMapComponentDataPoints();
  }

  @ViewChild('mapsContainer', { read: ViewContainerRef }) 
  private mapsViewContainerRef: ViewContainerRef = {} as ViewContainerRef;


  /*

  TODO 2: Inject DataService

  Inject the DataService object into the constructor. Give the injected parameter 
  a name of "dataService" and make it private.

  */

 constructor(private componentFactoryResolver: ComponentFactoryResolver,
  private filterService: FilterService,
  private logger: LoggerService) { }
  
  ngOnInit() {
    this.title = 'Customers';
    this.filterText = 'Filter Customers:';
    this.displayMode = DisplayModeEnum.Card;

    this.getCustomersPage(1);
  }

  changeDisplayMode(mode: DisplayModeEnum) {
      this.displayMode = mode;
  }

  pageChanged(page: number) {
    this.getCustomersPage(page);
  }

    /*

    TODO 3: Subscribing to an Observable
    
    1. Add the following code into the getCustomersPage() function below to call
       into DataService:
    
        this.dataService.getCustomersPage((page - 1) * this.pageSize, this.pageSize)

    2. After the getCustomersPage() function add a call to subscribe()
       that looks like the following:

         .subscribe((response: IPagedResults<ICustomer[]>) => {

         },

    3. Add the following code into the body of the arrow function:

         this.customers = this.filteredCustomers = response.results;
         this.totalRecords = response.totalRecords;

      This code accesses the returned customer results and assigns them to the component's
      customers and filteredCustomers properties. It also updates the totalRecords property
      with the total number of customers (a value returned by the server using a custom header).

    4. Add the following code after the subscribe() function to log any errors
       and also log a message each time getCustomersPage() is called:
      
        (err: any) => this.logger.log(err),
        () => this.logger.log('getCustomersPage() retrieved customers for page: ' + page));

    */

  getCustomersPage(page: number) {




  }

  filterChanged(data: string) {
    if (data && this.customers) {
        data = data.toUpperCase();
        const props = ['firstName', 'lastName', 'city', 'state.name'];
        this.filteredCustomers = this.filterService.filter<ICustomer>(this.customers, data, props);
    } else {
      this.filteredCustomers = this.customers;
    }
  }

  async lazyLoadMapComponent() {
    this.changeDisplayMode(DisplayModeEnum.Map);
    if (!this.mapsViewContainerRef.length) {
      // Lazy load MapComponent
      const { MapComponent } = await import('../shared/map/map.component');
      console.log('Lazy loaded map component!');
      this.mapComponentRef = this.mapsViewContainerRef.createComponent(MapComponent);
      this.mapComponentRef.instance.zoom = 2;
      this.mapComponentRef.instance.dataPoints = this.filteredCustomers;
      this.mapComponentRef.instance.enabled = true;
    }
  }

  updateMapComponentDataPoints() {
    if (this.mapComponentRef && this.mapComponentRef.instance) {
      this.mapComponentRef.instance.dataPoints = this.filteredCustomers;
    }
  }


}

enum DisplayModeEnum {
  Card = 0,
  Grid = 1,
  Map = 2
}