/*

TODO 1: Importing Symbols from Angular Modules

Import the following symbols from the respective modules:
        
Injectable                      @angular/core
HttpClient, HttpErrorResponse   @angular/common/http 

*/



/*

TODO 2: Exploring RxJS Imports

Take a moment to examine the RxJS related imports below. Notice that 
in addition to importing Observable, individual operators such as map
and catch are imported as well.

However, this can result in many unecessary objects being loaded which is why
the individual symbols and operators are imported below: 

*/

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ICustomer, IOrder, IState, IPagedResults, IApiResponse } from '../../shared/interfaces';
import { UtilitiesService } from './utilities.service';

/*

TODO 3: Add the Injectable Decorator 

Add the Injectable decorator above the DataService class. It's important to note that
since `providedIn: 'root'` isn't being used here the DataService class must be 
provided in the core.module.ts file.

*/


export class DataService {
    baseUrl = this.utilitiesService.getApiUrl();
    customersBaseUrl = this.baseUrl + '/api/customers';
    ordersBaseUrl = this.baseUrl + '/api/orders';
    orders: IOrder[] = [];
    states: IState[] = [];

    /*

    TODO 4: Inject HttpClient

    Inject the HttpClient object into the constructor shown below.
       
    Give the injected parameter a name of "http" and make it private so that a property is automatically created.
    You can add it before or after the utilitiesService parameter that is already in the constructor. Refer to the course manual
    if you need help with this step.

    */

    constructor(private utilitiesService: UtilitiesService) {  }

    /*

    TODO 5: Use the HttpClient Object to Retrieve a Page of Customers

    Perform the following tasks in the getCustomersPage() function below.

    1. Make a call to http.get<ICustomer[]>() as shown below:

        return this.http.get<ICustomer[]>(
                 `${this.customersBaseUrl}/page/${page}/${pageSize}`, 
                 {observe: 'response'})

        The { observe: response } value will allow us to get full access to the response
        object including headers (which we'll need due to paging).

    2. Add the following code after the http.get() call (this uses function chaining):

        .pipe(
            map(res => {

                
            }),
            catchError(this.handleError)
        );

    3. Add the following code into the map() function body:

        //Access paging header and convert total to a number
        const xInlineCount = res.headers.get('X-InlineCount');
        const totalRecords = Number(xInlineCount);

        //Access returned customer data
        const customers = res.body as ICustomer[];

        //Add up the order total for each customer
        this.calculateCustomersOrderTotal(customers);

        //Return a custom object containing the number of customers (for paging) and
        //the selected page of customers
        return {
            results: customers,
            totalRecords: totalRecords
        };


     4. Notice that the function returns an Observable<IPagedResults<ICustomer[]>>. You can 
        view the IPagedResults and ICustomer interfaces in the app/shared/interfaces.ts file.

    */

    getCustomersPage(page: number, pageSize: number): Observable<IPagedResults<ICustomer[]>> {





    }

    getCustomers(): Observable<ICustomer[]> {
        return this.http.get<ICustomer[]>(this.customersBaseUrl)
            .pipe(
                map(customers => {
                    this.calculateCustomersOrderTotal(customers);
                    return customers;
                }),
                catchError(this.handleError)
            );
    }

    /*

    TODO 6: Use the HttpClient Object to Retrieve a Single Customer

    This TODO will be similar to what you did in the previous one. In this TODO
    you'll add code to retrieve a single customer from the server using the HttpClient.

    1. Make a call to http.get<ICustomer>() and pass the following template string to it:

        this.customersBaseUrl + '/' + id

    2. Add the "return" keyword in front of the http.get<ICustomer>() call to return 
       the observable to the caller.

    3. Add the following code after the http.get() call (this uses function chaining):

        .pipe(
            map(customer => {

                
            }),
            catchError(this.handleError)
        );

    4. Add the following code into the map() function body:

        this.calculateCustomersOrderTotal([customer]);
        return customer;
        

    */

    getCustomer(id: number): Observable<ICustomer> {



    }

    /*

    TODO 7: Use the HttpClient Object to Insert/Update/Delete Data

    Take a moment to look at the insert, update and delete functions below.
    Notice how they use the HttpClient object's post(), put() and delete() functions
    respectively to send data to the server.

    */

    insertCustomer(customer: ICustomer): Observable<ICustomer> {
        return this.http.post<ICustomer>(this.customersBaseUrl, customer)
            .pipe(catchError(this.handleError));
    }

    updateCustomer(customer: ICustomer): Observable<boolean> {
        return this.http.put<IApiResponse>(this.customersBaseUrl + '/' + customer.id, customer)
            .pipe(
                map(res => res.status),
                catchError(this.handleError)
            );
    }

    deleteCustomer(id: number): Observable<boolean> {
        return this.http.delete<IApiResponse>(this.customersBaseUrl + '/' + id)
            .pipe(
                map(res => res.status),
                catchError(this.handleError)
            );
    }

    getStates(): Observable<IState[]> {
        return this.http.get<IState[]>(this.baseUrl + '/api/states')
            .pipe(catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse) {
        console.error('server error:', error);
        if (error.error instanceof Error) {
            const errMessage = error.error.message;
            return throwError(() => errMessage);
            // Use the following instead if using lite-server
            // return Observable.throw(err.text() || 'backend server error');
        }
        return throwError(() => error || 'Node.js server error');
    }

    calculateCustomersOrderTotal(customers: ICustomer[]) {
        for (const customer of customers) {
            if (customer && customer.orders) {
                let total = 0;
                for (const order of customer.orders) {
                    total += order.itemCost;
                }
                customer.orderTotal = total;
            }
        }
    }

    // Not using now but leaving since they show how to create
    // and work with custom observables

    // Would need following import added:
    // import { Observer } from 'rxjs';

    // createObservable(data: any): Observable<any> {
    //     return Observable.create((observer: Observer<any>) => {
    //         observer.next(data);
    //         observer.complete();
    //     });
    // }
    

}