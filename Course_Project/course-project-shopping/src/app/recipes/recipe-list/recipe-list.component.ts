import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe 1', 'This is simply a test 1', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmfmATYg0fThPC88aQEdHVzvXkJDMZ51etG-FtkNbSW__ODsmhJQ'),
    new Recipe('A Test Recipe 2', 'This is simply a test 2', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmfmATYg0fThPC88aQEdHVzvXkJDMZ51etG-FtkNbSW__ODsmhJQ')
  ];
  // recipeDetails = [{ recipeName: '', recipeDesc: '', recipeIngre: ''}];
  // @Output() recipeEmit = new EventEmitter<{ recipeName: string, recipeDesc: string, recipeIngredient: string }>();
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onRecipeEmit(recipeData: { recipeName: string, recipeDesc: string, recipeIngredient: string }) {
    // this.recipeDetails.push({
    //   recipeName: recipeData.recipeName,
    //   recipeDesc: recipeData.recipeDesc,
    //   recipeIngre: recipeData.recipeIngredient
    // });
    // this.recipeEmit.emit({ recipeName: recipeData.recipeName, recipeDesc: recipeData.recipeDesc, recipeIngredient: recipeData.recipeIngredient} );
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
