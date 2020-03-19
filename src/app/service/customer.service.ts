import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Customer} from '../model/customer';

@Injectable({ providedIn: 'root' })
export class CustomerService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Customer[]>(`http://localhost:4200/users`);
  }

  register(user: Customer) {
    return this.http.post(`http://localhost:4200/users/register`, user);
  }

  delete(id: number) {
    return this.http.delete(`http://localhost:4200/users/${id}`);
  }
}
