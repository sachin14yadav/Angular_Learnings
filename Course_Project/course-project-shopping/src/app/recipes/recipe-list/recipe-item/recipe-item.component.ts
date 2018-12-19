import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input('recp') recipe: Recipe;
  // @Output() recipeEmit = new EventEmitter<{ recipeName: string, recipeDesc: string, recipeIngredient: string }>();
  @Output() recipeSelected = new EventEmitter<void>();
constructor() { }

ngOnInit() {
}

onSelectRecipe(recipe: Recipe) {
  // this.recipeEmit.emit({ recipeName: recipe.name, recipeDesc: recipe.description, recipeIngredient: 'Some Ingredients'} );
  this.recipeSelected.emit();
}

}
