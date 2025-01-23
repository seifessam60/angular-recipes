import { Component } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  standalone: false,
  providers: [RecipesService],
  templateUrl: './recipes.component.html',
})
export class RecipesComponent {
  selectedRecipe: Recipe;
  constructor(private recipesService: RecipesService) {
    this.recipesService.recipeSelected.subscribe((recipe: Recipe) => {
      this.selectedRecipe = recipe;
    });
  }
}
