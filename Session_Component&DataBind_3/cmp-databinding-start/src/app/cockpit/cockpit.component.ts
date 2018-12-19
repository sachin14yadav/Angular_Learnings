import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output('bpcreated') blueprintCreated = new EventEmitter<{ blueprintName: string, blueprintContent: string }>();

  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContetnInput') contentElementInput: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput: HTMLInputElement, contentInput: HTMLInputElement) {
    // this.serverCreated.emit({ serverName: this.newServerName, serverContent: this.newServerContent });
    this.serverCreated.emit({ serverName: nameInput.value, serverContent: this.contentElementInput.nativeElement.value });
    // console.log(this.contentElementInput.nativeElement.value);
    // this.serverElements.push({
    //   type: 'server',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
  }

  onAddBlueprint(nameInput: HTMLInputElement, contentInput: HTMLInputElement) {
    // this.blueprintCreated.emit({ blueprintName: this.newServerName, blueprintContent: this.newServerContent });
    this.blueprintCreated.emit({ blueprintName: nameInput.value, blueprintContent: contentInput.value });
    //   this.serverElements.push({
    //     type: 'blueprint',
    //     name: this.newServerName,
    //     content: this.newServerContent
    //   });
    // }
  }
}
