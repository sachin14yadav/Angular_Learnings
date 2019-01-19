import { CounterService } from './counter.service';
import { UserService } from './user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { InactiveUsersComponent } from './inactive-users/inactive-users.component';
import { AddUsersComponent } from './add-users/add-users.component';

@NgModule({
   declarations: [
      AppComponent,
      ActiveUsersComponent,
      InactiveUsersComponent,
      AddUsersComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      HttpModule
   ],
   providers: [
      UserService,
      CounterService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
