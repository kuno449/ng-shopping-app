import {Customer} from '../model/customer';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthenticationService {
  private curCustomerSubject: BehaviorSubject<Customer>;
  public curCustomer: Observable<Customer>;

  constructor() {
    this.curCustomerSubject = new BehaviorSubject<Customer>(JSON.parse(localStorage.getItem('curCustomer')));
    this.curCustomer = this.curCustomerSubject.asObservable();
  }

  public get currentUserValue(): Customer {
    return this.curCustomerSubject.value;
  }
}
