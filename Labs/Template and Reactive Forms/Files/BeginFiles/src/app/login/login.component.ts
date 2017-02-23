import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
/*

TODO 1: Import Reactive Forms Symbols and a Custom Validation Service

1. Import the following from @angular/forms:

    FormBuilder
    FormGroup
    Validators

2. Import ValidationService from '../core/services/validation.service'

ValidationService contains different validation functions that can check for a valid 
email address, credit card number, password, etc. Take a moment to explore the service.

*/



import { AuthService } from '../core/services/auth.service';
import { IUserLogin } from '../shared/interfaces';
import { GrowlerService, GrowlerMessageType } from '../core/growler/growler.service';

@Component({
    moduleId: module.id,
    selector: 'cm-login',
    templateUrl: 'login.component.html',
    styleUrls: [ 'login.component.css' ]
})
export class LoginComponent implements OnInit {

/*

TODO 2: Defining a FormGroup Property

Add a new property named loginForm that is of type FormGroup below.

*/



    errorMessage: string;

/*

TODO 3: Inject FormBuilder into the Constructor

Inject FormBuilder into the constructor. Give the injected parameter a name of "formBuilder", 
a type of FormBuilder and mark it as private.

*/

    constructor(private router: Router, 
                private authService: AuthService,
                private growler: GrowlerService) { }

    /*

    TODO 4: Creating a Custom FormGroup

    1. Note that the ngOnInit() function makes a call to buildForm().

    2. Add the following code into the buildForm() function to create a custom
       form group:

        this.loginForm = this.formBuilder.group({


        });

    3. Add the following form controls into the form group object literal:

        email:      ['', [ Validators.required, ValidationService.emailValidator ]],
        password:   ['', [ Validators.required, ValidationService.passwordValidator ]]

        Note that each form control has specific validators associated with it. Both controls
        are required to have values since Validators.required is defined. The email property must have a 
        valid email address pattern which is enforced by including ValidationService.emailValidator.
        The password must be between 6 and 100 characters and have at least one number (and no spaces) 
        which is enforced by including ValidationService.passwordValidator.

    */

    ngOnInit() { 
        this.buildForm();
    }

    buildForm() {


    }

    /*

    TODO 5: Accessing Reactive Form Control Values

    1. When the form is submitted the submit() function below will be called (it'll be bound to the ngSubmit 
       directive later in this lab). Note that it accepts a "userLogin" object (of type IUserLogin) as well as 
       a boolean property named "valid" that can be used to determine if the form is valid or not. The userLogin 
       object will contain the email and password values that are part of the form group created earlier.

       Add the following parameters into the submit() function parenthesis:

       { value, valid }: { value: IUserLogin, valid: boolean }

    2. A call to authService.login() is made and the userLogin object is passed to it. This calls into the
       data service which then calls the server and determines if the user credentials are valid or not.

    */

    submit() {
        this.authService.login(value)
            .subscribe((status: boolean) => {
                if (status) {
                    this.growler.growl('Logged in', GrowlerMessageType.Info);
                    if (this.authService.redirectUrl) {
                        const redirectUrl = this.authService.redirectUrl;
                        this.authService.redirectUrl = '';
                        this.router.navigate([redirectUrl]);
                    } else {
                        this.router.navigate(['/customers']);
                    }
                } else {
                    const loginError = 'Unable to login';
                    this.errorMessage = loginError;
                    this.growler.growl(loginError, GrowlerMessageType.Danger);
                }
            },
            (err: any) => console.log(err));
    }

}