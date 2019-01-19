import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onAddUser(name: string, status: string) {
    this.userService.onAddUser(name, status);
  }

}
