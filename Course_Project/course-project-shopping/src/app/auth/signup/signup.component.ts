import { AuthenticationService } from './../authentication.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {}

  onSignUp(signupForm: NgForm) {
    const emmail = signupForm.value.email;
    const password = signupForm.value.password;
    this.authenticationService.signUpUser(emmail, password);
  }

}
