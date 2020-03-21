import {AngularFirestore} from '@angular/fire/firestore';
import {Customer} from '../model/customer';
import {Injectable, NgZone} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import * as firebase from 'firebase';

@Injectable()
export class FirebaseService {

  constructor(public db: AngularFirestore, public afAuth: AngularFireAuth,
              public router: Router, public ngZone: NgZone) {}

  createUser(customer: Customer) {
    return this.afAuth.auth.createUserWithEmailAndPassword(customer.email, customer.password)
      .then(res => this.insertUserData(customer, res));
  }

  insertUserData(customer: Customer, res: firebase.auth.UserCredential) {
    this.db.collection('user').add({
      uid: res.user.uid,
      firstName: customer.firstName,
      lastName: customer.lastName,
      email: customer.email,
      password: customer.password
    });
  }

  login(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['']);
        });
        localStorage.setItem('user', JSON.stringify(result.user));
      }).catch((error) => {
        window.alert(error.message)
      })
  }
}
