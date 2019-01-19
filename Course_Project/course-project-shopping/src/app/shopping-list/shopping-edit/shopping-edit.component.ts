import { Ingredient } from './../../shared/ingredient.mode';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('quanityInput') quanityInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {}

  onAddItem() {
    this.shoppingListService.onAddItem(
      new Ingredient(
        this.nameInputRef.nativeElement.value,
        this.quanityInputRef.nativeElement.value
      )
    );
  }
}
