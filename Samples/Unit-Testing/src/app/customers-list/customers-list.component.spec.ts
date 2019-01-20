import { TestBed, ComponentFixture, getTestBed } from '@angular/core/testing';
import { LocationStrategy } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DataService } from '../core/data.service';
import { CustomersListComponent } from '../customers-list/customers-list.component';
import { FilterTextboxComponent } from '../customers-list/filter-textbox.component';
import { CapitalizePipe } from '../shared/capitalize.pipe';
import { SorterService } from '../core/sorter.service';

describe('CustomersList Component...', () => {
    let httpMock: HttpTestingController;
    let fixture: ComponentFixture<CustomersListComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
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

        let testBed = getTestBed();
        httpMock = TestBed.get(HttpTestingController);
        fixture = TestBed.createComponent(CustomersListComponent);
        TestBed.compileComponents();

    });

    it('customers is empty array by default', () => {
        fixture.detectChanges();

        expect(fixture.componentInstance.filteredCustomers).toEqual([]);
    });

    it('filteredCustomers input property has a value', () => {
        fixture.componentInstance.filteredCustomers = customers;
        fixture.detectChanges();

        expect(fixture.componentInstance.filteredCustomers.length).toBe(4);
    });

    it('should render 4 customer rows', () => {
        fixture.componentInstance.filteredCustomers = customers;
        fixture.detectChanges();

        let rows = fixture.nativeElement.querySelectorAll('tr');
        expect(rows.length).toBe(6); //header + 4 rows + footer
    });

    it('should have first data row with value of Ted James', () => {
        fixture.componentInstance.filteredCustomers = customers;

        fixture.detectChanges();

        let rows = fixture.nativeElement.querySelectorAll('tr');
        let nameTd = rows[1].cells[0].querySelector('a').textContent;
        expect(nameTd).toContain('Ted James');
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