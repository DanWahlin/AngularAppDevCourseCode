import { TestBed, ComponentFixture, getTestBed, async } from '@angular/core/testing';
import {
  HttpModule, ResponseOptions, Response, RequestMethod, Http,
  BaseRequestOptions, XHRBackend
} from '@angular/http';
import { LocationStrategy } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { CustomersComponent } from './customers.component';
import { DataService } from '../core/data.service';
import { CustomersListComponent } from '../customers-list/customers-list.component';
import { FilterTextboxComponent } from '../customers-list/filter-textbox.component';
import { CapitalizePipe } from '../shared/capitalize.pipe';
import { SorterService } from '../core/sorter.service';

describe('Customers Component...', () => {
  let mockBackend: MockBackend;
  let fixture: ComponentFixture<CustomersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        CustomersComponent,
        CustomersListComponent,
        FilterTextboxComponent,
        CapitalizePipe
      ],
      providers: [
        DataService,
        SorterService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          deps: [MockBackend, BaseRequestOptions],
          useFactory: (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          }
        }
      ],
      imports: [HttpModule, FormsModule, RouterTestingModule]
    });

    mockBackendFunctions();
    fixture = TestBed.createComponent(CustomersComponent);
    TestBed.compileComponents();
  });

  function mockBackendFunctions() {
    mockBackend = TestBed.get(MockBackend);
    mockBackend.connections.subscribe(
      (connection: MockConnection) => {
        connection.mockRespond(new Response(
          new ResponseOptions({
            body: customers
          })
        ));
      });
  }

  it('creates a CustomersComponent instance', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('people is filled by default', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance.people).toBe(customers);
  });

});

const customers = [
  {
    "id": 1,
    "name": "Ted James",
    "city": " Phoenix ",
    "orderTotal": 40.99
  },
  {
    "id": 2,
    "name": "Michelle Thompson",
    "city": "Los Angeles ",
    "orderTotal": 89.99
  },
  {
    "id": 3,
    "name": "James Thomas",
    "city": " Las Vegas ",
    "orderTotal": 29.99
  },
  {
    "id": 4,
    "name": "Tina Adams",
    "city": "Seattle",
    "orderTotal": 15.99
  }
];

//If you want to ignore unknown directives (such as routerLink) you can do the following:
//  import { NO_ERRORS_SCHEMA } from '@angular/core';
//  TestBed.configureTestingModule({
//    declarations: [
//      ....
//    ],
//    schemas: [ NO_ERRORS_SCHEMA ]
//  });