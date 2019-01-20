import { TestBed, ComponentFixture, getTestBed, async } from '@angular/core/testing';
import { LocationStrategy } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CustomersComponent } from './customers.component';
import { DataService } from '../core/data.service';
import { CustomersListComponent } from '../customers-list/customers-list.component';
import { FilterTextboxComponent } from '../customers-list/filter-textbox.component';
import { CapitalizePipe } from '../shared/capitalize.pipe';
import { SorterService } from '../core/sorter.service';

describe('Customers Component...', () => {
  let dataService: DataService;
  let httpMock: HttpTestingController;
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
        SorterService
      ],
      imports: [HttpClientTestingModule, FormsModule, RouterTestingModule]
    });

    httpMock = TestBed.get(HttpTestingController);
    fixture = TestBed.createComponent(CustomersComponent);
    TestBed.compileComponents();
    dataService = TestBed.get(DataService);
  });

  it('creates a CustomersComponent instance', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('people is filled by default', () => {
    // Trigger ngOnInit() for this scenario
    fixture.detectChanges();

    // Setup mock HTTP call/data
    const mockReq = httpMock.expectOne(dataService.baseUrl + 'customers.json');
    // Pass in mock data
    mockReq.flush(customers);

    // Ensure that people property matches with the mock data
    expect(fixture.componentInstance.people).toBe(customers);
    httpMock.verify();
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