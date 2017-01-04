import { NgModule } from '@angular/core';

import { CapitalizePipe } from './capitalize.pipe';
import { Sorter } from './sorter';


@NgModule({
    declarations: [ CapitalizePipe ],
    providers: [ Sorter ],
    exports: [ CapitalizePipe ]
})
export class SharedModule { }