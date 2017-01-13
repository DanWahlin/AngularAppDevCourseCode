/*

TODO 1: Importing Symbols from Angular Modules

Import the following objects from the respective modules:
        
Injectable      @angular/core
Http, Response  @angular/http 

*/



/*

TODO 2: Exploring RxJS Imports

Take a moment to examine the RxJS related imports below. Notice that 
in addition to importing Observable, individual operators such as map
and catch are imported as well.

All of the functionality provided by RxJS could be imported using:

"import 'rxjs/Rx';"

However, this can result in many unecessary objects being loaded which is why
the individual symbols and operators are imported here. 

*/

//Grab everything with import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';

import { ICustomer, IOrder, IState, IPagedResults } from '../../shared/interfaces';

/*

TODO 3: Add the Injectable Decorator 

Add the Injectable decorator above the DataService class.

*/


export class DataService {
  
    customersBaseUrl: string = '/api/customers';
    ordersBaseUrl: string = '/api/orders';
    orders: IOrder[];
    states: IState[];

    /*

    TODO 4: Inject Http

    Inject the Http object into the constructor. Give the injected parameter 
    a name of "http" and make it private so that a property is automatically created.

    */

    constructor() { }

    /*

    TODO 5: Use the Http Object to Retrieve a Page of Customers

    Perform the following tasks in the getCustomersPage() function below.

    1. Make a call to http.get() and pass the following template string to it:

        `${this.customersBaseUrl}/page/${page}/${pageSize}`

    2. Add the "return" keyword in front of the http.get() call to return the observable to the caller.

    3. Add a map() function call after the http.get() call (chain it) that looks like the following:

        .map((res: Response) => {

        })

    4. Add a catch() function call after the map() function (chain it). Pass the following into catch():

        this.handleError

    5. Add the following code into the map() function body:

        //Access paging header and convert value to a number
        const totalRecords = +res.headers.get('X-InlineCount');

        //Access returned customer data
        let customers = res.json();

        //Add up the order total for each customer
        this.calculateCustomersOrderTotal(customers);

        //Return a custom object containing the number of customers (for paging) and
        //the selected page of customers
        return {
            results: customers,
            totalRecords: totalRecords
        };

     6. Notice that the function returns an Observable<IPagedResults<ICustomer[]>>. You can 
        view the IPagedResults and ICustomer interfaces in the app/shared/interfaces.ts file.

    */

    getCustomersPage(page: number, pageSize: number) : Observable<IPagedResults<ICustomer[]>> {

                   

    }
    

    /*

    TODO 6: Use the Http Object to Retrieve a Single Customer

    This TODO will be quite similar to what you did in the previous one. In this TODO
    you'll add code to retrieve a single customer from the server using the Http client.

    1. Make a call to http.get() and pass the following template string to it:

        this.customersBaseUrl + '/' + id

    2. Add the "return" keyword in front of the http.get() call to return the observable to the caller.

    3. Add a map() function call after the http.get() call (chain it) that looks like the following:

        .map((res: Response) => {

        })

    4. Add a catch() function call after the map() function (chain it). Pass the following into catch():

        this.handleError

    5. Add the following code into the map() function body:

        let customer = res.json();
        this.calculateCustomersOrderTotal([customer]);
        return customer;

    6. Add Observable<ICustomer> as the function's return type.

    */
    
    getCustomer(id: number) {


    }

    getCustomers() : Observable<ICustomer[]> {
        return this.http.get(this.customersBaseUrl)
                    .map((res: Response) => {
                        let customers = res.json();
                        this.calculateCustomersOrderTotal(customers);
                        return customers;
                    })
                    .catch(this.handleError);
    }

    /*

    TODO 7: Use the Http Object to Insert/Update/Delete Data

    Take a moment to look at the insert, update and delete functions below.
    Notice how they use the Http object's post(), put() and delete() functions
    respectively to send data to the server.

    */

    insertCustomer(customer: ICustomer) : Observable<ICustomer> {
        return this.http.post(this.customersBaseUrl, customer)
                   .map((res: Response) => res.json())
                   .catch(this.handleError);
    }
    
    updateCustomer(customer: ICustomer) : Observable<boolean> {
        return this.http.put(this.customersBaseUrl + '/' + customer.id, customer)
                   .map((res: Response) => res.json())
                   .catch(this.handleError);  
    }

    deleteCustomer(id: number) : Observable<boolean> {
        return this.http.delete(this.customersBaseUrl + '/' + id)
                   .map((res: Response) => res.json().status)
                   .catch(this.handleError);
    }
    
    getStates(): Observable<IState[]> {
        return this.http.get('/api/states')
                   .map((res: Response) => res.json())
                   .catch(this.handleError); 
    }
    
    handleError(error: any) {
        console.error('server error:', error); 
        if (error instanceof Response) {
          let errMessage = '';
          try {
            errMessage = error.json().error;
          } catch(err) {
            errMessage = error.statusText;
          }
          return Observable.throw(errMessage);
        }
        return Observable.throw(error || 'Node.js server error');
    }

    //Not using now but leaving since they show how to create
    //and work with custom observables
       
    createObservable(data: any) : Observable<any> {
        return Observable.create((observer: Observer<any>) => {
            observer.next(data);
            observer.complete();
        });
    }

    calculateCustomersOrderTotal(customers: ICustomer[]) {
        for (let customer of customers) {
            if (customer && customer.orders) {
                let total = 0;
                for (let order of customer.orders) {
                    total += order.itemCost;
                }
                customer.orderTotal = total;
            }
        }
    }

}
