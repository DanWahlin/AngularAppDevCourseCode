import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CustomersListComponent } from './customers-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [ CommonModule, SharedModule ],
    declarations: [ CustomersListComponent ],
    exports: [ CustomersListComponent ]
})
export class CustomersListModule { }