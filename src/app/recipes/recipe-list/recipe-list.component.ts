import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  standalone: false,

  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'This is a test Recipe',
      'https://wallpaperaccess.com/full/2917213.jpg'
    ),
    new Recipe(
      'Another Test Recipe',
      'This is a test Recipe',
      'https://wallpaperaccess.com/full/2917213.jpg'
    ),
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
