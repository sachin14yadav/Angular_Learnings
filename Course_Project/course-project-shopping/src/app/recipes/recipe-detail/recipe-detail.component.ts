import { Recipe } from './../recipe.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  // @Input() recipeDetail: { recipeName: string, recipeDesc: string, recipeIngre: string };
  @Input() recipe: Recipe;
  constructor() { }

  ngOnInit() {
    console.log(this.recipe);
  }
}
