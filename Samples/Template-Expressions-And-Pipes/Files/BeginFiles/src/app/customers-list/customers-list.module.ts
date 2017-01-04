import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CustomersListComponent } from './customers-list.component';

@NgModule({
    imports: [ CommonModule ],
    declarations: [ CustomersListComponent ],
    exports: [ CustomersListComponent ]
})
export class CustomersListModule { }