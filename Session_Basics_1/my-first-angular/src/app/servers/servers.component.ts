import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  selector: `app-servers`,
  // selector: `.app-servers`,
  // template: `
  //   <app-server></app-server>
  //   <hr>
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Initial server value';
  serverCreated = false;
  servers =  [ 'Testserver', 'Testserver 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },
    2000);
  }

  ngOnInit() {
  }

  onClickOfAddServer() {
  // this.allowNewServer = false;
  // this.serverCreationStatus = 'Server was created!';
  this.serverCreated=true;
  this.serverCreationStatus = 'Server was created and Name is ' + this.serverName;
  this.servers.push(this.serverName);
  }

  onUpdateServerName(event: Event) {
    // console.log(event); //to check console and see what event holds.
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
