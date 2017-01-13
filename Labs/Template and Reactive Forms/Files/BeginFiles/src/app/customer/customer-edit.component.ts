import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';

import { DataService } from '../core/services/data.service';
import { ModalService, IModalContent } from '../core/modal/modal.service';
import { ICustomer, IState } from '../shared/interfaces';
import { GrowlerService, GrowlerMessageType } from '../core/growler/growler.service';

@Component({
  moduleId: module.id,
  selector: 'cm-customer-edit',
  templateUrl: 'customer-edit.component.html',
  styleUrls: [ 'customer-edit.component.css' ]
})
export class CustomerEditComponent implements OnInit {

  /*

  TODO 1: Exploring Component Properties

  1. Take a moment to look at the customer property below. Note the properties
     that it exposes such as firstName, lastName, address, etc.

  2. Locate the states property which has a type of IStates[]. You'll be adding
     code that calls the server to retrieve a list of states (US states)
     later in the exercise. The states will be displayed in a <select> control.

  */

  customer: ICustomer = 
  {
    id: 0,
    firstName: '',
    lastName: '',
    gender: '',
    address: '',
    city: '',
    state: {
        abbreviation: '',
        name: ''
    }
  };
  states: IState[];
  errorMessage: string;
  deleteMessageEnabled: boolean;
  operationText: string = 'Insert';

 /*

   TODO 2: The customerForm property
  
   Locate the customerForm property of type NgForm. Notice that is has a @ViewChild decorator in
   front of it that is passed a value of "customerForm". This will be used to dynamically 
   locate a customerForm local template variable that you'll be adding into the form. The property
   will be used to track when the user has changed the form (made the form "dirty").

 */
  @ViewChild('customerForm') customerForm: NgForm;

  /*

  TODO 3: Exploring Injected Parameters
     
  Notice that Router, ActivatedRoute and DataService (in addition to other services)
  are injected into the constructor and added as properties of the component.

  The GrowlerService is used to display messages ("growl notifications" or "toasts") 
  to a user and the ModalService is used to display modal dialogs.

  */
  
  constructor(private router: Router, 
              private route: ActivatedRoute, 
              private dataService: DataService,
              private growler: GrowlerService,
              private modalService: ModalService) { }

  /*

  TODO 4: Retrieving a Customer Object to Bind to the Form

  1. Add the following code into the ngOnInit() function below:
     
      this.route.parent.params.subscribe((params: Params) => {
        let id = +params['id'];
        if (id !== 0) {
          this.operationText = 'Update';
          this.getCustomer(id);
        }
      });

      This code is similar to code you wrote in the routing lab. It accesses
      a route parameter named "id" that is on the parent route.

   2. Immediately AFTER the previous code (still in ngOnInit) add code to 
      do the following:
      
      a. Call dataService's getStates() function.

      b. Subscribe to the Observable that is returned from getStates(). When creating
         the subscribe use an arrow function that accepts the following parameter:
      
         states: IState[]

      c. Assign the states parameter value that's returned to the component's
         states property.

         Note: If you need help with the previous steps refer to the course manual 
         (the Http section) or to the lab's end solution code. The next TODO
         may also provide a hint to help with completing this step.
  
  */

  ngOnInit() {



  }

  getCustomer(id: number) {
      this.dataService.getCustomer(id).subscribe((customer: ICustomer) => {
        this.customer = customer;
      });
  }

  submit() {
      if (this.customer.id === 0) {
        this.dataService.insertCustomer(this.customer)
          .subscribe((insertedCustomer: ICustomer) => {
            if (insertedCustomer) {
              //Mark form as pristine so that CanDeactivateGuard won't prompt before navigation
              this.customerForm.form.markAsPristine();
              this.router.navigate(['/customers']);
            } else {
              const msg = 'Unable to insert customer';
              this.growler.growl(msg, GrowlerMessageType.Danger);
              this.errorMessage = msg;
            }
          },
          (err: any) => console.log(err));

      } else {
        /*

        TODO 5: Updating a Customer Object
       
        1. Add the following code into immediately below the TODO comment to pass
          the customer object to DataService's updateCustomer() function.
        
          this.dataService.updateCustomer(this.customer)
            .subscribe((status: boolean) => {
              if (status) {


              }
              else {
                const msg = 'Unable to update customer';
                this.growler.growl(msg, GrowlerMessageType.Danger);
                this.errorMessage = msg;
              }
          },
          (err: any) => console.log(err));

        2. Within the "if (status) { }" code you added in the previous task, add the following code to 
           mark the form as pristine and use a growler service (a message display service) to display
           a message to the user:

            //Mark form as pristine so that CanDeactivateGuard won't prompt before navigation
            this.customerForm.form.markAsPristine();
            this.growler.growl('Operation performed successfully.', GrowlerMessageType.Success);

           Why are we marking the form as pristine? The canDeactivate guard
           discussed in the routing chapter calls into the component to check if there is any 
           dirty data. If there is it prompts the user to leave. Since we're updating a 
           customer here we don't want to prompt the user. 
        
        */




      }
  }

  /*

  TODO 6: Navigating to the Root Route

  Add code into the cancel() function below to navigate to the "/customers"
  route using the router object's navigate() function. "router" is injected into
  the component's constructor.
  
  Hint: The navigate() function expects an array with the route name inside of it.
  Refer to the End solution, course manual or the Angular documentation if you need 
  help (or the code in the delete() function below).
  
  */
  
  cancel(event: Event) {
    event.preventDefault();

    //Add route navigation here


  }

  delete(event: Event) {
    event.preventDefault();
    this.dataService.deleteCustomer(this.customer.id)
        .subscribe((status: boolean) => {
          if (status) {
            this.router.navigate(['/customers']);
          }
          else {
            this.errorMessage = 'Unable to delete customer';
          }
        },
        (err) => console.log(err));
  }

  /*

  TODO 7: Determining if the User Can Leave the Form
  
  1. Open ./can-deactivate.guard.ts and note that it calls into the CustomerEditComponent's
     canDeactivate() function (defined below) to determine if it's OK to leave the view. If the
     form is dirty and has unsaved changes we want to prompt the user before navigating to another route.

  2. Add the following code ABOVE the existing code in canDeactive() to let the route guard know if the 
     form is dirty or not:

    if (!this.customerForm.dirty) {
      return true;
    }

  3. Note that the remaining code in the canDeactivate() function displays a modal dialog to the user using the 
     modalService if the form is dirty and the user tries to navigate to a different route.

  */

  canDeactivate(): Promise<boolean> | boolean {

    //Add code here



    //Dirty show display modal dialog to user to confirm leaving
    const modalContent: IModalContent = {
      header: 'Lose Unsaved Changes?',
      body: 'You have unsaved changes! Would you like to leave the page and lose them?',
      cancelButtonText: 'Cancel',
      OKButtonText: 'Leave'
    }
    return this.modalService.show(modalContent);
  }

}