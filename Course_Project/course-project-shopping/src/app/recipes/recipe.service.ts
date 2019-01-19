import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.mode';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe 1',
      'This is simply a test 1',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmfmATYg0fThPC88aQEdHVzvXkJDMZ51etG-FtkNbSW__ODsmhJQ',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      'A Test Recipe 2',
      'This is simply a test 2',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmfmATYg0fThPC88aQEdHVzvXkJDMZ51etG-FtkNbSW__ODsmhJQ',
      [new Ingredient('Bun', 2), new Ingredient('Meat', 2)]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) {}
  getRecipe() {
    return this.recipes.slice();
  }

  getRecipeByIndex(index: number) {
    return this.recipes[index];
  }

  onAddToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.onAddToShoppingList(ingredients);
  }
}
