import { AuthenticationService } from './../auth/authentication.service';
import { Subject } from 'rxjs';
import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.mode';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Http, Headers, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class RecipeService {
  recipeChange = new Subject<Recipe[]>();

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

  constructor(
    private shoppingListService: ShoppingListService,
    private http: Http,
    private authenticationService: AuthenticationService
  ) {}

  addRecipe(newRecipe: Recipe) {
    this.recipes.push(newRecipe);
    this.recipeChange.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChange.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChange.next(this.recipes.slice());
  }

  getRecipe() {
    return this.recipes.slice();
  }

  getRecipeByIndex(index: number) {
    return this.recipes[index];
  }

  onAddToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.onAddToShoppingList(ingredients);
  }

  storeRecipes() {
    return this.http.put(
      'https://ng-recipe-book-7c810.firebaseio.com/recipes.json?auth=' +
        this.authenticationService.token,
      this.getRecipe()
    );
  }

  fetchRecipes() {
    return this.http
      .get(
        'https://ng-recipe-book-7c810.firebaseio.com/recipes.json?auth=' +
          this.authenticationService.token
      )
      .pipe(
        map((response: Response) => {
          const recipes: Recipe[] = response.json();
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            } else {
              this.shoppingListService.onAddToShoppingList(recipe.ingredients);
            }
          }
          return recipes;
        })
      )
      .subscribe((recipes: Recipe[]) => {
        this.recipes = recipes;
        this.recipeChange.next(this.recipes.slice());
      });
  }
}
