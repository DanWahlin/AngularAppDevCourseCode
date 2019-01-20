import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DataService } from './data.service';
import { ICustomer } from '../shared/interfaces';

describe('DataService Tests', () => {
  let dataService: DataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService]
    });

    httpMock = TestBed.get(HttpTestingController);
    dataService = TestBed.get(DataService);

  });

  function getCustomersMockRequest() {
    return httpMock.expectOne(dataService.baseUrl + 'customers.json');
  }

  it('should be created', () => {
    expect(dataService).toBeTruthy();
  });

  // Another way we could get to DataService (via injection)
  it('should be created with inject', inject([DataService], (service: DataService) => {        
    expect(service).toBeTruthy();  
  })); 

  it('should use HTTP call in getCustomers()', () => {
    dataService.getCustomers().subscribe(data => {
      expect(data.length).toEqual(4);
    });
    const mockReq = getCustomersMockRequest();
    expect(mockReq.cancelled).toBeFalsy();
    expect(mockReq.request.responseType).toEqual('json');
    mockReq.flush(customers);
    httpMock.verify();
  });

  it('should use HTTP call in getOrders()', () => {
    dataService.getOrders(1).subscribe(data => {
      expect(data.length).toEqual(1);
    });
    const mockReq = httpMock.expectOne(dataService.baseUrl + 'orders.json');
    expect(mockReq.cancelled).toBeFalsy();
    expect(mockReq.request.responseType).toEqual('json');
    // Pass in mock data
    mockReq.flush(orders);
    httpMock.verify();
  });

  it('should get customers', () => {
    dataService.getCustomers().subscribe(
      (data) => {
        expect(data.length).toBe(4);
        expect(data[0].id).toBe(1);
        expect(data[0].name).toBe('Ted James');
      });
    const mockReq = getCustomersMockRequest();
    mockReq.flush(customers);
    httpMock.verify();
  });

  it('should get a single customer', () => {
    dataService.getCustomer(3).subscribe(
      (data) => {
        expect(data.id).toBe(3);
        expect(data.name).toBe('James Thomas');
      });
    const mockReq = getCustomersMockRequest();
    mockReq.flush(customers);
    httpMock.verify();
  });

  it('should insert new customer', () => {
    const customer: ICustomer = {
      "id": 1,
      "name": "Ted James",
      "city": "Phoenix"
    };

    dataService.insertCustomer(customer).subscribe(data => {
      expect(data).toBeDefined();
      expect(data.id).toEqual(customer.id);
    });

    const mockReq = httpMock.expectOne(dataService.baseUrl + 'customers');
    mockReq.flush(customer);
    httpMock.verify();
  });

  //Examples of using a spy
  it('spy should monitor CustomersService.getCustomer to check parameter', () => {
    let customerId = 1;
    dataService.getCustomer = jasmine.createSpy('getCustomer');
    dataService.getCustomer(customerId);

    expect(dataService.getCustomer).toHaveBeenCalledWith(customerId);
  });

  it('spy should monitor CustomersService.getCustomer and check return value', () => {
    const customer = customers[0];
    const customerId = 1;
    let service = dataService;
    service.getCustomer = jasmine.createSpy('getCustomer').and.returnValue(customer);
    service.getCustomer(customerId);

    expect(service.getCustomer).toHaveBeenCalledWith(customerId);
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

const orders = [
  {
    "customerId": 1,
    "orderItems": [
      { "id": 1, "productName": "Baseball", "itemCost": 9.99 },
      { "id": 2, "productName": "Bat", "itemCost": 19.99 }
    ]
  },
  {
    "customerId": 2,
    "orderItems": [
      { "id": 3, "productName": "Basketball", "itemCost": 7.99 },
      { "id": 4, "productName": "Shoes", "itemCost": 199.99 }
    ]
  },
  {
    "customerId": 3,
    "orderItems": [
      { "id": 5, "productName": "Frisbee", "itemCost": 2.99 },
      { "id": 6, "productName": "Hat", "itemCost": 5.99 }
    ]
  },
  {
    "customerId": 4,
    "orderItems": [
      { "id": 7, "productName": "Boomerang", "itemCost": 29.99 },
      { "id": 8, "productName": "Helmet", "itemCost": 19.99 },
      { "id": 9, "productName": "Kangaroo Saddle", "itemCost": 179.99 }
    ]
  },
  {
    "customerId": 5,
    "orderItems": [
      { "id": 10, "productName": "Budgie Smugglers", "itemCost": 19.99 },
      { "id": 11, "productName": "Swimming Cap", "itemCost": 5.49 }
    ]
  },
  {
    "customerId": 6,
    "orderItems": [
      { "id": 12, "productName": "Bow", "itemCost": 399.99 },
      { "id": 13, "productName": "Arrows", "itemCost": 69.99 }
    ]
  },
  {
    "customerId": 7,
    "orderItems": [
      { "id": 14, "productName": "Baseball", "itemCost": 9.99 },
      { "id": 15, "productName": "Bat", "itemCost": 19.99 }
    ]
  },
  {
    "customerId": 8,
    "orderItems": [
      { "id": 16, "productName": "Surfboard", "itemCost": 299.99 },
      { "id": 17, "productName": "Wax", "itemCost": 5.99 },
      { "id": 18, "productName": "Shark Repellent", "itemCost": 15.99 }
    ]
  },
  {
    "customerId": 9,
    "orderItems": [
      { "id": 19, "productName": "Saddle", "itemCost": 599.99 },
      { "id": 20, "productName": "Riding cap", "itemCost": 79.99 }
    ]
  },
  {
    "customerId": 10,
    "orderItems": [
      { "id": 21, "productName": "Baseball", "itemCost": 9.99 },
      { "id": 22, "productName": "Bat", "itemCost": 19.99 }
    ]
  }
]

