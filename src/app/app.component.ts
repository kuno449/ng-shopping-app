import { Component } from '@angular/core';
import {Customer} from './model/customer';
import {Router} from '@angular/router';
import {AuthenticationService} from './service/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  curCustomer: Customer;

  constructor(private router: Router, private authService: AuthenticationService) {
    this.authService.curCustomer.subscribe(x => this.curCustomer = x);
  }
}
