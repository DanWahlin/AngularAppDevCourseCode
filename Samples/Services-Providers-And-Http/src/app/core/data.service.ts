import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';

import { ICustomer } from '../../app/shared/interfaces';

@Injectable()
export class DataService {

    baseUrl: string = '';
    
    constructor(private http: Http) { }

    getCustomers() : Observable<ICustomer[]> {
        return this.http.get(this.baseUrl + '/customers.json')
                   .map((res: Response) => res.json())
                   .catch(this.handleError);
    }

    private handleError(error: any) {
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

}