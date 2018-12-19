import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  // Commented code is my own assignment solution.

  // @Output() emitNumber = new EventEmitter<{ numType: string, numValue: number }>();
  @Output() emitNumSoln = new EventEmitter<number>();
  basenumber = 0;
  numberEmitter;

  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
    // this.numberEmitter = window.setInterval( function() {
    //   this.something();
    // }.bind(this), 1000);
    this.numberEmitter = setInterval( () => {
      this.emitNumSoln.emit( this.basenumber + 1 );
    this.basenumber++;
    }, 1000);
  }

  // fucntion something(): void {
  //   this.basenumber++;
  //   if ((this.basenumber % 2) === 0) {
  //     this.emitNumber.emit({ numType: 'even', numValue: this.basenumber });
  //   } else {
  //     this.emitNumber.emit({ numType: 'odd', numValue: this.basenumber });
  //   }
  // }

  onPauseGame() {
    clearInterval(this.numberEmitter);
  }
}
