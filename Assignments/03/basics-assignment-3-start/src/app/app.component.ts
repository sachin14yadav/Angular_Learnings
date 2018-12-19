import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 counter: number = 0;
 displays: number[]= new Array();
 showContent = false;
 log = [];

 onDisplayClick(){
  this.showContent = !this.showContent;
  this.displays.push(this.counter);
  this.counter++;
  // console.log(this.displays);
 }

 getBackgroundColor() {
   return this.counter > 4 ? 'blue' : 'white';
 }

 getForegroundColor(){
  return this.counter > 4 ? 'white' : 'black';
 }

 onDispkay() {
  this.showContent = !this.showContent;
  // this.log.push(this.log.length + 1);
  this.log.push(new Date());
 }

}
