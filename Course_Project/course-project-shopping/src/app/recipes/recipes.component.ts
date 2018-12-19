import { Recipe } from './recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipeDetails = { recipeName: '', recipeDesc: '', recipeIngre: ''};
  selectedRecipe: Recipe;


  constructor() { }

  ngOnInit() {
  }

  onRecipeEmit(recipeData: {recipeName: string, recipeDesc: string, recipeIngredient: string}) {
    this.recipeDetails.recipeDesc = recipeData.recipeDesc;
    this.recipeDetails.recipeName = recipeData.recipeName;
    this.recipeDetails.recipeIngre = recipeData.recipeIngredient;
    // console.log(this.recipeDetails);
  }

}
