import {AngularFirestore} from '@angular/fire/firestore';
import {Customer} from '../model/customer';
import {Injectable} from '@angular/core';

@Injectable()
export class FirebaseService {

  constructor(public db: AngularFirestore) {}

  createUser(value: Customer) {
    return this.db.collection('customer').add({
      firstName: value.firstName,
      lastName: value.lastName,
      email: value.email,
      password: value.password
    });
  }
}
