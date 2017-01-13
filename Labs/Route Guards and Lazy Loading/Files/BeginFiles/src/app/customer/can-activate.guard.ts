import { Injectable } from '@angular/core';
/*

  TODO 1: Import CanActivate

  Add code to import CanActivate from the @angular/router module (note that 
  @angular/router is already defined below).

*/
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../core/services/auth.service';

/*

  TODO 2: Implement CanActivate

  Add code to implement CanActivate on the CanActivateGuard class below.

*/
@Injectable()
export class CanActivateGuard {

/*

  TODO 3: AuthService and Router are Injected

  This route guard relies on AuthService to determine if a user is able to navigate to 
  the route that the guard will be associated with. Note that AuthService is injected into the 
  constructor along with Router.

*/
  constructor(private authService: AuthService, private router: Router) { } 

  /*

  TODO 4: Add a canActivate() Function

  1. Add a canActivate() function. Refer to the Angular docs or to the course manual for details
     on the function signature. 
     
     Hint: If your're using the VS Code editor you can right-click on CanActivate above and 
           select "Peek Definition" from the menu. This will show you the proper function
           signature to use.

  2. Add the following code into the canActivate() function to check AuthService to see if the 
     user has logged in or not. If they haven't logged in they'll be redirected to the /login route.

    if (this.authService.isAuthenticated) { 
        return true;
    }

    //Track URL user is trying to go to so we can send them there after logging in
    this.authService.redirectUrl = state.url;
    this.router.navigate(['/login']);
    return false;  

  */



}