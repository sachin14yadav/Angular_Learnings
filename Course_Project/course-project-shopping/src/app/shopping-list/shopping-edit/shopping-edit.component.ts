import { Subscription } from 'rxjs';
import { Ingredient } from './../../shared/ingredient.mode';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  editedItemIndex: number;
  editMode = false;
  editedItem: Ingredient;
  @ViewChild('shoppingForm') shoppingForm: NgForm;
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.subscription = this.shoppingListService.shopingListEdit.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingListService.getIngredient(
          this.editedItemIndex
        );
        this.shoppingForm.setValue({
          name: this.editedItem.name,
          quantity: this.editedItem.quantity
        });
      }
    );
  }

  onAddItem(formData: NgForm) {
    const formValue = formData.value;
    if (this.editMode) {
      this.shoppingListService.onUpdateItem(
        this.editedItemIndex,
        new Ingredient(formValue.name, formValue.quantity)
      );
    } else {
      this.shoppingListService.onAddItem(
        new Ingredient(formValue.name, formValue.quantity)
      );
    }
    this.clearForm();
  }

  clearForm() {
    this.shoppingForm.reset();
    this.editMode = false;
  }

  onDelete() {
    console.log(this.editedItemIndex);
    this.shoppingListService.onDeleteItem(this.editedItemIndex);
    this.clearForm();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
