import { bootstrap } from '@angular/platform-browser-dynamic';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

import { AppComponent } from './app.component';

/*

  TODO 1: Import APP_ROUTER_PROVIDERS

  Import APP_ROUTER_PROVIDERS from ./app.routes

*/



/*

  TODO 2: Add APP_ROUTER_PROVIDERS to bootstrap()

  Add the APP_ROUTER_PROVIDERS object to the array passed to the bootstrap() function.

*/

bootstrap(AppComponent,[ 
    disableDeprecatedForms(),
    provideForms()
])
.then(
    success => console.log('AppComponent bootstrapped!'),
    error => console.log(error)
);