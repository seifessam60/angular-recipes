import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  standalone: false,
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent {
  recipes: Recipe[];
  constructor(private recipesService: RecipesService) {
    this.recipes = this.recipesService.getRecipes();
  }
}
