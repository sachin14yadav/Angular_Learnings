import { Http } from '@angular/http';
import { AuthenticationService } from './../auth/authentication.service';
import { Ingredient } from './../shared/ingredient.mode';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class ShoppingListService {
  ingeredientChanged = new Subject<Ingredient[]>();
  shopingListEdit = new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 5)
  ];

  constructor(
    private authenticationService: AuthenticationService,
    private http: Http
  ) {}
  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  onAddItem(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingeredientChanged.next(this.ingredients);
  }

  onAddToShoppingList(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingeredientChanged.next(this.ingredients);
  }

  onUpdateItem(index: number, updatedIngredient: Ingredient) {
    this.ingredients[index] = updatedIngredient;
    this.ingeredientChanged.next(this.ingredients.slice());
  }

  onDeleteItem(index: number) {
    this.ingredients.splice(index, 1);
    this.ingeredientChanged.next(this.ingredients.slice());
  }
}
