import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserAccount } from '../model/userAccount.model';
import { LoginObject } from '../model/loginObject.model';
import { UserResponse } from '../model/userReponse.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  rootUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  createAccount (userAccount: UserAccount): Observable<UserResponse> {
    return this.http.post<UserResponse>(this.rootUrl + 'createAccount', userAccount);
  }

  validateUser(email: string, password: string, loginAttempt = 1): Observable<boolean> {
    const loginObj = new LoginObject();
    loginObj.attempt = loginAttempt;
    loginObj.email = email;
    loginObj.password = password;

    return this.http.post<boolean>(this.rootUrl + 'validateUser', loginObj);
  }

  loadAccount (loginAttempt: LoginObject): Observable<UserAccount> {
    return this.http.post<UserAccount>(this.rootUrl + 'loadAccount', loginAttempt);
  }


}
