import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { customersRouting } from './customers.routing';

@NgModule({
    imports: [ CommonModule, FormsModule, SharedModule, customersRouting.routes ],
    declarations: [ customersRouting.components ]
})
export class CustomersModule { }