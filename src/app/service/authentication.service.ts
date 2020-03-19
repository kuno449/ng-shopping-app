import {Customer} from '../model/customer';

import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject';


@Injectable()
export class AuthenticationService {
  private curCustomerSubject: BehaviorSubject<Customer>;
  public curCustomer: Observable<Customer>;

  constructor(private http: HttpClient) {
    this.curCustomerSubject = new BehaviorSubject<Customer>(JSON.parse(localStorage.getItem('curCustomer')));
    this.curCustomer = this.curCustomerSubject.asObservable();
  }

  public get currentUserValue(): Customer {
    return this.curCustomerSubject.value;
  }

  login(username, password) {
    return this.http.post<any>(`http://localhost:4200/users/authenticate`, { username, password })
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('curCustomer', JSON.stringify(user));
        // this.curCustomerSubject.next(user);
        return user;
      }));
  }
}
