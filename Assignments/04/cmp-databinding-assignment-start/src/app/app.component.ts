import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //Init values for test
  // numberElements = [{ type: 'odd', value: 5}, { type: 'even', value: 6}, { type: 'even', value: 6}];
  numberElements = [{ type: '', value: 0}];
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];



  onEmitNumber(numebrData: { numType: string, numValue: number}) {
    this.numberElements.push({
      type: numebrData.numType,
      value: numebrData.numValue
    });
    // console.log(this.numberElements);
  }

  onEmitNumberSoln(numberDataSoln: number) {
    if (numberDataSoln % 2 === 0) {
      this.evenNumbers.push(numberDataSoln);
    } else {
      this.oddNumbers.push(numberDataSoln);
    }
    console.log(numberDataSoln);
  }
}
