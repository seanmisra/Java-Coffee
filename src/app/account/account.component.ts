import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbDropdownMenu } from '@ng-bootstrap/ng-bootstrap';
import { first } from 'rxjs';
import { UserAccount } from '../model/userAccount.model';
import { AccountService } from './account.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  
  existingCustomer = true;
  submissionForm: FormGroup;

  constructor(private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private toastService: ToastrService,
    private accountService: AccountService) { 
      if (authService.loggedIn.value) {
        this.router.navigate(['/my-account']);
      }
    }

  ngOnInit(): void {

    this.submissionForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      password: ['', [Validators.required, Validators.min(4), Validators.max(15)]]
    });
  }

  toggleTab(existingCustomer: boolean) {
    this.submissionForm.reset();
    this.existingCustomer = existingCustomer ? true : false;

    const firstName = this.submissionForm.get('firstName');
    const lastName = this.submissionForm.get('lastName')

    if (existingCustomer) {
      firstName.clearValidators();
      lastName.clearValidators();
      firstName.setErrors(null);
      lastName.setErrors(null);
      this.submissionForm.updateValueAndValidity();
    } else {
      this.submissionForm.get('firstName').addValidators([Validators.required, Validators.max(30)]);
      this.submissionForm.get('lastName').addValidators([Validators.required, Validators.max(30)]);
      this.submissionForm.updateValueAndValidity();

    }
  }

  // handles both new accounts and existing accounts
  handleLogin() {
    this.authService.loggedIn.next(false);
    this.authService.userEmail.next("");

    // handle username/password validation with service, in addition add CanActivate guard
    if (this.submissionForm.valid) {

      const firstName = this.submissionForm.value.firstName;
      const lastName = this.submissionForm.value.lastName;
      const email = this.submissionForm.value.email;
      const password = this.submissionForm.value.password;

      if (this.existingCustomer) {
        let loginSuccess: boolean;
        
        this.accountService.validateUser(email, password).subscribe(result => {
          loginSuccess = result;

          if (loginSuccess) {
            this.authService.loggedIn.next(true);
            this.authService.userEmail.next(email);
            this.router.navigate(['/my-account']);      
          } else {
            this.toastService.error("Password is incorrect or account does not exist!", null, {
              timeOut: 10000
            });
          }
        })
      } else {
        const userAccount = new UserAccount();
        userAccount.firstName = firstName
        userAccount.lastName = lastName;
        userAccount.email = email;
        userAccount.password = password;

        this.accountService.createAccount(userAccount).subscribe(result => {
          if (!result.message.includes('ERROR')) {
            this.authService.loggedIn.next(true);
            this.authService.userEmail.next(email);
            this.toastService.success(result.message);
            setTimeout(() => {
              this.router.navigate(['/my-account']);      
            }, 2500);
          } else {
            this.toastService.error(result.message);
          }
        })
      }
    }
  }

}
