import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './authentication-routing.module';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [SignupComponent, SigninComponent],
  imports: [CommonModule, FormsModule, AuthRoutingModule]
})
export class AuthenticationModule {}
