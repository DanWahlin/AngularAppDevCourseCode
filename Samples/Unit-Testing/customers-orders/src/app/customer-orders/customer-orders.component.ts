import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { DataService } from '../core/data.service';
import { ICustomer, IOrder, IOrderItem } from '../shared/interfaces';

@Component({
  moduleId: module.id,
  selector: 'co-customer-orders',
  templateUrl: 'customer-orders.component.html'
})
export class CustomerOrdersComponent implements OnInit {

  orders: IOrder[] = [];
  customer: ICustomer;

  constructor(private dataService: DataService, 
              private route: ActivatedRoute) { }

  ngOnInit() {
    let id = +this.route.snapshot.params['id'];
    this.dataService.getOrders(id).subscribe((orders: IOrder[]) => {
      this.orders = orders;
    });
    this.dataService.getCustomer(id).subscribe((customer: ICustomer) => {
      this.customer = customer;
    });
  }

}