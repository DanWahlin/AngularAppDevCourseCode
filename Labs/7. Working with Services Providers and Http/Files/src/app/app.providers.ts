/*

TODO 1: Importing Http Providers

Import the following object from the @angular/http module. 
        
HTTP_PROVIDERS

*/

import { bind } from '@angular/core';
import { FORM_PROVIDERS, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ROUTER_PROVIDERS } from '@angular/router';

import { Sorter } from './shared/utils/sorter';
import { DataService } from './shared/services/data.service';
import { TrackByService } from './shared/services/trackby.service';

/*

TODO 2: Adding HTTP_PROVIDERS into APP_PROVIDERS

Add the HTTP_PROVIDERS object into the APP_PROVIDERS array.

*/

export const APP_PROVIDERS = [
    Sorter,
    DataService,
    TrackByService,
    FORM_PROVIDERS,
    ROUTER_PROVIDERS,
    //bind(LocationStrategy).toClass(HashLocationStrategy)
];