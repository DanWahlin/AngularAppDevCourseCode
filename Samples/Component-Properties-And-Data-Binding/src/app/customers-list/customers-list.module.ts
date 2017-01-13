import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CustomersListComponent } from './customers-list.component';
import { SharedModule } from '../shared/shared.module';
import { FilterTextboxComponent } from './filter-textbox.component';

@NgModule({
    imports: [ CommonModule, FormsModule, SharedModule ],
    declarations: [ CustomersListComponent, FilterTextboxComponent ],
    exports: [ CustomersListComponent ]
})
export class CustomersListModule { }