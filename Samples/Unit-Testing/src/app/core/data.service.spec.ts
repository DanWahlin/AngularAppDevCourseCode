import { TestBed, async, fakeAsync, getTestBed, inject } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';
import {
  Headers, BaseRequestOptions, Response, ResponseOptions,
  HttpModule, Http, XHRBackend, RequestMethod
} from '@angular/http';

import { DataService } from './data.service';
import { ICustomer } from '../shared/interfaces';

describe('DataService Tests', () => {
  let mockBackend: MockBackend;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DataService,
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
      imports: [HttpModule]
    });

    mockBackend = TestBed.get(MockBackend);

  });

function provideCustomersToMockBackend() {
      mockBackend.connections.subscribe((connection: MockConnection) => {
      connection.mockRespond(new Response(
        new ResponseOptions({
          body: customers
        })
      ));
    });
}

  it('should be created', inject([DataService], (service: DataService) => {
    expect(service).toBeTruthy();
  }));

  it('should use HTTP call in getCustomers()',
    inject([DataService, MockBackend], fakeAsync((service: DataService, backend: MockBackend) => {

      backend.connections.subscribe((connection: MockConnection) => {
        expect(connection.request.method).toBe(RequestMethod.Get);
        expect(connection.request.url).toBe('assets/customers.json');
      });

      service.getCustomers();
    })));

  it('should use HTTP call in getOrders()',
    inject([DataService, MockBackend], fakeAsync((service: DataService, backend: MockBackend) => {

      backend.connections.subscribe((connection: MockConnection) => {
        expect(connection.request.method).toBe(RequestMethod.Get);
        expect(connection.request.url).toBe('assets/orders.json');
      });

      service.getOrders(1);
    })));

  it('should get customers async',
    async(inject([DataService], (service) => {
      provideCustomersToMockBackend();

      service.getCustomers().subscribe(
        (data) => {
          expect(data.length).toBe(4);
          expect(data[0].id).toBe(1);
          expect(data[0].name).toBe('Ted James');
        });
    })));

  it('should get a single customer async',
    async(inject([DataService], (service) => {
      provideCustomersToMockBackend();

      service.getCustomer(3).subscribe(
        (data) => {
          expect(data.id).toBe(3);
          expect(data.name).toBe('James Thomas');
        });
    })));

  it('should insert new customer async',
    async(inject([DataService], (service) => {
      mockBackend.connections.subscribe((connection: MockConnection) => {
        expect(connection.request.method).toBe(RequestMethod.Post);
        connection.mockRespond(new Response(new ResponseOptions({ status: 201 })));
      });

      const customer: ICustomer = {
        "id": 1,
        "name": "Ted James",
        "city": "Phoenix"
      };

      service.insertCustomer(customer).subscribe((result) => {
          expect(result).toBeDefined();
          expect(result.status).toBe(201);
        });
    })));

  //Examples of using a spy
  it('spy should monitor CustomersService.getCustomer to check parameter',
    async(inject([DataService], (service) => {
      let customerId = 1;
      service.getCustomer = jasmine.createSpy('getCustomer');
      service.getCustomer(customerId);

      expect(service.getCustomer).toHaveBeenCalledWith(customerId);
    })));

  it('spy should monitor CustomersService.getCustomer and check return value',
    async(inject([DataService], (service) => {
      let customer = customers[0];
      service.getCustomer = jasmine.createSpy('getCustomer').and.returnValue(customer);
      service.getCustomer(1);

      expect(service.getCustomer.calls.mostRecent().returnValue).toBe(customer);
    })));

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

