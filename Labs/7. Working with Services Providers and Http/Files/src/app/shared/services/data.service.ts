/*

TODO 1: Importing 

Import the following objects from the respective modules:
        
Injectable      @angular/core
Http, Response  @angular/http 

*/



import { Observable } from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';

import { ICustomer, IOrder, IState } from '../interfaces';

/*

TODO 2: Add the Injectable Decorator 

Add the Injectable decorator above the DataService class.

*/


export class DataService {
  
    _baseUrl: string = '';
    customers: ICustomer[];
    orders: IOrder[];
    states: IState[];

    /*

    TODO 3: Inject Http

    Inject the Http object into the constructor. Give the injected parameter 
    a name of "http" and make it private.

    */

    constructor() { }
    
    getCustomers() : Observable<ICustomer[]> {
        if (!this.customers) {
            
            /*

            TODO 4: Use the Http Object to Call the Server

            Add the following code immediately below the TODO comment
            to call Http's get() function, access the customer data 
            and return it as an observable:

            return this.http.get(this._baseUrl + 'customers.json')
                       .map((res: Response) => {
                            this.customers = res.json();
                            return this.customers;
                       })
                       .catch(this.handleError);

            */
            
            
            

        }
        else {
            //return cached data
            return this.createObservable(this.customers);
        }
    }
    
    getCustomer(id: number) : Observable<ICustomer> {
        if (this.customers) {
            //filter using cached data
            return this.findCustomerObservable(id);
        } else {
            //Query the existing customers to find the target customer
            return Observable.create((observer: Observer<ICustomer>) => {
                    this.getCustomers().subscribe((customers: ICustomer[]) => {
                        this.customers = customers;                
                        const cust = this.filterCustomers(id);
                        observer.next(cust);
                        observer.complete();
                })
            })
            .catch(this.handleError);
        }
    }

    /*

    TODO 5: Defining a Function Return Type

    Change the return type of getOrders() to Observable<IOrder[]> so
    that functions that subscribe to it know what type they're subscribing to.

    */
    
    getOrders(id: number) {
        
      /*

      TODO 6: Use the Http Object to Call the Server

      Add the following code immediately below the TODO comment
      to call Http's get() function, access the orders data 
      and return it as an observable:

      return this.http.get(this._baseUrl + 'orders.json')
            .map((res: Response) => {
                this.orders = res.json();
                return this.orders.filter((order: IOrder) => order.customerId === id);
            })
            .catch(this.handleError);

      */
    
    
    
        
               
    }
    
    updateCustomer(customer: ICustomer) : Observable<boolean> {
        return Observable.create((observer: Observer<boolean>) => {
            this.customers.forEach((cust: ICustomer, index: number) => {
               if (cust.id === customer.id) {
                   const state = this.filterStates(customer.state.abbreviation);
                   customer.state.abbreviation = state.abbreviation;
                   customer.state.name = state.name;
                   this.customers[index] = customer;
               } 
            });
            observer.next(true);
            observer.complete();
        });
    }
    
    getStates(): Observable<IState[]> {
        if (this.states) {
            return Observable.create((observer: Observer<IState[]>) => {
                observer.next(this.states);
                observer.complete();
            });
        } else {
            return this.http.get(this._baseUrl + 'states.json').map((response: Response) => {
                this.states = response.json();
                return this.states;
            })
            .catch(this.handleError);
        }
    }
    
    private findCustomerObservable(id: number) : Observable<ICustomer> {        
        return this.createObservable(this.filterCustomers(id));
    }
    
    private filterCustomers(id: number) : ICustomer {
        const custs = this.customers.filter((cust) => cust.id === id);
        return (custs.length) ? custs[0] : null;
    }
    
    private createObservable(data: any) : Observable<any> {
        return Observable.create((observer: Observer<any>) => {
            observer.next(data);
            observer.complete();
        });
    }
    
    private filterStates(stateAbbreviation: string) {
        const filteredStates = this.states.filter((state) => state.abbreviation === stateAbbreviation);
        return (filteredStates.length) ? filteredStates[0] : null;
    }
    
    private handleError(error: any) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
