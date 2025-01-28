import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  standalone: false,
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  subscription: Subscription;
  constructor(
    private recipesService: RecipesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.subscription = this.recipesService.recipesChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );
    this.recipes = this.recipesService.getRecipes();
  }
  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
