import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  
  existingCustomer = true;
  submissionForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {

    this.submissionForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      password: ['', [Validators.required, Validators.min(4), Validators.max(15)]]
    });
  }

  toggleTab(existingCustomer: boolean) {
    this.existingCustomer = existingCustomer ? true : false;

    if (existingCustomer) {
      this.submissionForm.get('firstName')?.clearValidators();
      this.submissionForm.get('lastName')?.clearValidators();
    } else {
      this.submissionForm.get('firstName')?.addValidators([Validators.required, Validators.max(30)]);
      this.submissionForm.get('lastName')?.addValidators([Validators.required, Validators.max(30)]);

    }
  }

  handleLogin() {
    console.log('this.submissionForm')
    console.log(this.submissionForm);
    // handle username/password validation with service, in addition add CanActivate guard
    if (this.submissionForm.valid) {
      this.router.navigate(['/my-account']);      
    }
  }

}
