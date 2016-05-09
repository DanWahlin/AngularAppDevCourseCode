import { bind } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { FORM_PROVIDERS, LocationStrategy, HashLocationStrategy } from '@angular/common';

/*

TODO 1: Importing ROUTER_PROVIDERS 

Import the following object from the @angular/router module. 
        
ROUTER_PROVIDERS 

*/



import { Sorter } from './shared/utils/sorter';
import { DataService } from './shared/services/data.service';
import { TrackByService } from './shared/services/trackby.service';

/*

TODO 2: Add ROUTER_PROVIDERS to the Application's Providers

Add ROUTER_PROVIDERS into the APP_PROVIDERS array.

*/

export const APP_PROVIDERS = [
    Sorter,
    DataService,
    TrackByService,
    FORM_PROVIDERS,
    HTTP_PROVIDERS,
    //bind(LocationStrategy).toClass(HashLocationStrategy)
];