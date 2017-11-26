import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/*

TODO 1: Importing HttpClientModule

Import HttpClientModule and HTTP_INTERCEPTORS from @angular/common/http

*/



/*

TODO 2: Importing DataService

Import DataService from ./services/data.service

Note that several other services are already imported below such as FilterService,
SorterService, AuthService, TrackByService and more.

*/


import { GrowlerModule } from './growler/growler.module';
import { ModalModule } from './modal/modal.module';
import { OverlayModule } from './overlay/overlay.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FilterService } from './services/filter.service';
import { SorterService } from './services/sorter.service';
import { TrackByService } from './services/trackby.service';
import { DialogService } from './services/dialog.service';
import { EnsureModuleLoadedOnceGuard } from './ensureModuleLoadedOnceGuard';
import { AuthService } from'./services/auth.service';
import { EventBusService } from './services/event-bus.service';
import { AuthInterceptor } from './interceptors/auth.interceptor';

/*

TODO 3: Adding HttpClientModule and DataService into CoreModule

1. Add HttpClientModule into the NgModule decorator's imports and exports property values.
   This will allow it to be used in this module and by any other modules that import CoreModule.

2. Add DataService into the NgModule decorator's providers property values so that it can be injected
   into other services and components in the application.

*/

@NgModule({
  imports: [ CommonModule, RouterModule, GrowlerModule, ModalModule, OverlayModule ],
  exports: [ GrowlerModule, RouterModule, ModalModule, OverlayModule, NavbarComponent ],
  declarations: [ NavbarComponent ],
  providers: [ SorterService, FilterService, TrackByService, 
               DialogService, AuthService, EventBusService,
               {
                 provide: HTTP_INTERCEPTORS,
                 useClass: AuthInterceptor,
                 multi: true,
               } 
              ] // these should be singleton
})
/*

TODO 4: What Role Does EnsureModuleLoadedOnceGuard Play?

The CoreModule class extends a custom class named EnsureModuleLoadedOnceGuard. This class
ensures that CoreModule is only loaded once by any other modules in the application. This
gaurantees that services defined in the module will be singletons.

*/
export class CoreModule extends EnsureModuleLoadedOnceGuard {    //Ensure that CoreModule is only loaded into AppModule

  //Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }  

}



