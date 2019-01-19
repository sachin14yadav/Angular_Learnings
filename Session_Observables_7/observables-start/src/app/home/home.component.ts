import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, Observer, interval } from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  numberObsSubs: Subscription;
  myCustommObsSubs: Subscription;

  constructor() {}

  ngOnInit() {
    const myNumbers = interval(1000).pipe(map((data: number)=> {
      return data * 2;
    }));
    this .numberObsSubs = myNumbers.subscribe(
      (num: number) => {
        console.log(num);
      }
    );
    const myOb = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('first package');
      }, 2000);
      setTimeout(() => {
        observer.next('second package');
      }, 4000);
      setTimeout(() => {
        // observer.error('Error!');
        observer.complete();
      }, 5000);
      setTimeout(() => {
        // observer.error('Error!');
        observer.next('third package');
      }, 6000);
    });
    this.myCustommObsSubs = myOb.subscribe(
      (data: string) => {
        console.log(data);
      },
      (error: string) => {
        console.log(error);
      },
      () => {
        console.log('completed!');
      }
    );
  }

  ngOnDestroy() {
    this.numberObsSubs.unsubscribe();
    this.myCustommObsSubs.unsubscribe();
  }
}
