import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDj38cWu1L3iKmHBhbmP437RU1HL6b5Dac',
      authDomain: 'ng-recipe-book-7c810.firebaseapp.com'
    });
    if (localStorage.getItem('user') != null) {
    }
    console.log(localStorage);
  }
}
