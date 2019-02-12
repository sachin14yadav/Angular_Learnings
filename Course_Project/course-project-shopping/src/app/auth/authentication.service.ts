import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {
  token: string;

  constructor(private router: Router) {}
  signUpUser(mail: string, password: string) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(mail, password)
      .catch(error => console.log(error));
  }

  signInUser(mail: string, password: string) {
    firebase
      .auth()
      .signInWithEmailAndPassword(mail, password)
      .then(response => {
        this.router.navigate(['/']);
        firebase
          .auth()
          .currentUser.getIdToken()
          .then((token: string) => {
            this.token = token;
            localStorage.setItem('user', this.token);
          });
      })
      .catch(error => console.log(error));
    // console.log(this.token);
    // console.log(
    //   firebase
    //     .auth()
    //     .currentUser.getIdToken()
    //     .then(data => console.log(data))
    // );
  }

  getToken() {
    firebase
      .auth()
      .currentUser.getIdToken()
      .then((token: string) => (this.token = token));
    return firebase.auth().currentUser.getIdToken();
  }

  isAuthenticated() {
    if (localStorage.getItem('user') != null) {
      this.token = localStorage.getItem('user');
      return true;
    }
    return this.token != null;
  }

  logout() {
    // console.log(this.token);
    // console.log(firebase.auth().currentUser.getIdToken());
    firebase.auth().signOut();
    localStorage.clear();
    this.token = null;
  }
}
