import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { DataService } from './data.service';

@NgModule({
    imports: [ HttpModule ],
    providers: [ DataService ]
})
export class CoreModule { }