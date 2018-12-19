import { Ingredient } from './../../shared/ingredient.mode';
import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('quanityInput') quanityInputRef: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
    // console.log(this.nameInput.nativeElement.value);
    this.ingredientAdded.emit(new Ingredient(this.nameInputRef.nativeElement.value, this.quanityInputRef.nativeElement.value));
  }
}
