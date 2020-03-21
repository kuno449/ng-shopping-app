import {Customer} from '../model/customer';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject';

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
