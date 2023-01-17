import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor() { }

  existingCustomer = true;

  ngOnInit(): void {
  }

  toggleTab(existingCustomer: boolean) {
    this.existingCustomer = existingCustomer ? true : false;
  }

}
