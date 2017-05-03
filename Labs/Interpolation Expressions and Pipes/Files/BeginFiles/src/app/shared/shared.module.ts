import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/*

TODO 1: Importing Reusable Modules

Notice the 3 custom modules below that are imported into this shared module. Features provided by
these modules are used in the customers component view and elsewhere in the application.

*/

import { FilterTextboxModule } from './filter-textbox/filter-textbox.module';
import { MapModule } from './map/map.module';
import { PaginationModule } from './pagination/pagination.module';

/*

TODO 2: Import CapitalizePipe and TrimPipe

Import CapitalizePipe and TrimPipe below the TODO task.

*/



import { SortByDirective } from './directives/sortby.directive';

/*

TODO 3: Add CapitalizePipe and TrimPipe to the Module's Exports and Declarations

Add CapitalizePipe and TrimPipe into the module's exports and declarations properties below.

By exporting CapitalizePipe and TrimPipe, any other modules that import SharedModule can 
use the pipes and the other exported objects.

*/

@NgModule({
  imports: [CommonModule, MapModule, FilterTextboxModule, PaginationModule ],
  exports: [ CommonModule, FormsModule, HttpModule, SortByDirective,
             MapModule, FilterTextboxModule, PaginationModule ],
  declarations: [ SortByDirective ]
})
export class SharedModule { }
