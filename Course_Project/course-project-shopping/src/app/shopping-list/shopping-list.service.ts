import { Ingredient } from './../shared/ingredient.mode';
import { Subject } from 'rxjs';

export class ShoppingListService {
  ingeredientChanged = new Subject<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 5)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  onAddItem(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingeredientChanged.next(this.ingredients);
  }

  onAddToShoppingList(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingeredientChanged.next(this.ingredients);
  }
}
