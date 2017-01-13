/*

TODO 1: Importing Symbols

Import the following symbols from the respective modules. Place the import statements below
this TODO task.

NgModule            @angular/core
BrowserModule       @angular/platform-browser
AppComponent        ./app.component
AppRoutingModule    ./app-routing.module

*/



/*

TODO 2: Exploring Modules

This module (the application's "root" module) relies on several other modules 
for functionality. Pick one of the modules that are imported below, open it in 
the editor and take a moment to explore what it contains. The location of the module
is shown in the "from" portion of the import statement.

*/

import { LoginModule }  from './login/login.module';
import { CoreModule }   from './core/core.module';
import { SharedModule } from './shared/shared.module';

/*

TODO 3: Declare and Bootstrap AppComponent

  1. Notice that the modules imported above using "import" are imported into this root
     module using the @NgModule "imports" property so that the functionality they provide 
     is available throughout the app.

  2. AppComponent needs to be declared in this module so that its selector can be used.
     It also needs to be marked as the bootstrap (startup) component. To accomplish this add AppComponent
     into the "declarations" and "bootstrap"" properties below (inside of the existing array brackets)

*/

@NgModule({
  imports: [
    BrowserModule,
    LoginModule,          //Eager loaded since we may need to go here right away as browser loads based on route user enters
    AppRoutingModule,     //Main routes for application
    CoreModule,           //Singleton objects (services, components that are loaded only once, etc.)
    SharedModule          //Shared (multi-instance) objects
  ],
  declarations: [  ],
  bootstrap:    [  ]
})
export class AppModule { }