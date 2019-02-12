import { Ingredient } from './../shared/ingredient.mode';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  subscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.subscription = this.shoppingListService.ingeredientChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  getShoppingDetails(ingredientData: Ingredient) {
    this.ingredients.push(ingredientData);
  }

  onEditItem(index: number){
    this.shoppingListService.shopingListEdit.next(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
