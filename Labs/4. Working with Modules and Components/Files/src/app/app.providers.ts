import { bind } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { FORM_PROVIDERS, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ROUTER_PROVIDERS } from '@angular/router';

/*

TODO 1: Importing Custom Objects From Modules

Import the following objects from their respective modules. 
Put the import statements below this TODO comment.

Hint: Use the same import syntax that is shown above.
        
Sorter          ./shared/utils/sorter
DataService     ./shared/services/data.service
TrackByService  ./shared/services/trackby.service

*/




/*

TODO 2: Add Custom Objects into the Providers Array

Add the newly imported objects into the APP_PROVIDERS array below
to make them available throughout the application.

*/


export const APP_PROVIDERS = [
    FORM_PROVIDERS,
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    //bind(LocationStrategy).toClass(HashLocationStrategy)
];