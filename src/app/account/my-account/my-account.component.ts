import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { LoginObject } from 'src/app/model/loginObject.model';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {

  constructor(private authService: AuthService, 
    private router: Router,
    private accountService: AccountService) {}

  firstName: string;
  lastName: string;
  email: string;
  loyaltyPoints: number;

  ngOnInit(): void {
    this.loadAccount();
  }

  private loadAccount() {
    const email = this.authService.userEmail.value; 
    const loginObject = new LoginObject();
    loginObject.email = email;

    // two values are dummy values 
    loginObject.password = '';
    loginObject.attempt = 1;

    this.accountService.loadAccount(loginObject).subscribe(data => {
      this.firstName = data.firstName;
      this.lastName = data.lastName;
      this.email = data.email;
      this.loyaltyPoints = data.loyaltyPoints;
    });
  }

  signOut() {
    this.authService.loggedIn.next(false);
    this.authService.userEmail.next('');

    this.router.navigate(['/']);
  }

}
