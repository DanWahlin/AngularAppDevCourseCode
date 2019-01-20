import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ICustomer, IOrder } from '../../app/shared/interfaces';


@Injectable()
export class DataService {

    baseUrl: string = 'assets/';
    
    constructor(private http: HttpClient) { }

    getCustomers() : Observable<ICustomer[]> {
      return this.http.get<ICustomer[]>(this.baseUrl + 'customers.json')
        .pipe(
          catchError(this.handleError)
        );
    }

    getCustomer(id: number) : Observable<ICustomer> {
      return this.http.get(this.baseUrl + 'customers.json')
        .pipe(
          map((res: ICustomer[]) => {
            let customer = res.filter((cust: ICustomer) => cust.id === id);
            return (customer && customer.length) ? customer[0] : null;
          }),
          catchError(this.handleError)
        );
    }

    getOrders(id: number) : Observable<IOrder[]> {
      return this.http.get(this.baseUrl + 'orders.json')
        .pipe(
          map((res: IOrder[]) => {
            let orders = res.filter((order: IOrder) => order.customerId === id);
            return orders;
          }),
          catchError(this.handleError)
        );
    }

    //Only used for unit test (not used in actual app)
    insertCustomer(customer: ICustomer) : Observable<ICustomer> {
      return this.http.post<ICustomer>(this.baseUrl + 'customers', customer)
        .pipe(
          catchError(this.handleError)
        );
    }
  
    private handleError(error: HttpErrorResponse) {
      console.error('server error:', error);
      if (error.error instanceof Error) {
          const errMessage = error.error.message;
          return Observable.throw(errMessage);
          // Use the following instead if using lite-server
          // return Observable.throw(err.text() || 'backend server error');
      }
      return Observable.throw(error || 'Server error');
  }
}