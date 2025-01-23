import { Component } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  standalone: false,

  templateUrl: './shopping-list.component.html',
})
export class ShoppingListComponent {
  ingredients: Ingredients[] = [
    new Ingredients('Apples', 5),
    new Ingredients('Tomatoes', 10),
  ];
  onIngredientAdded(ingredient: Ingredients) {
    this.ingredients.push(ingredient);
  }
}
