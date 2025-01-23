import { Component, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipesService } from '../../recipes.service';

@Component({
  selector: 'app-recipe-item',
  standalone: false,
  templateUrl: './recipe-item.component.html',
})
export class RecipeItemComponent {
  constructor(private recipesService: RecipesService) {}
  @Input() recipe: Recipe;
  onSelected() {
    this.recipesService.recipeSelected.emit(this.recipe);
  }
}
