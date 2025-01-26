import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipesService {
  constructor(private shoppingListService: ShoppingListService) {}
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [new Ingredients('Meat', 1), new Ingredients('French Fries', 20)]
    ),
    new Recipe(
      'Big Fat Burger',
      'What else you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [new Ingredients('Buns', 2), new Ingredients('Meat', 1)]
    ),
    new Recipe(
      'Spaghetti Bolognese',
      'Classic Italian pasta with a rich, meaty sauce.',
      'https://images.eatsmarter.de/sites/default/files/styles/max_size/public/spaghetti-bolognese-original-59303.jpg',
      [new Ingredients('Spaghetti', 1), new Ingredients('Ground Beef', 1)]
    ),
    new Recipe(
      'Caesar Salad',
      'A fresh and crispy Caesar salad.',
      'https://cookerdiary.com/wp-content/uploads/2025/01/1200800-test-6-4-1024x683.webp',
      [new Ingredients('Romaine Lettuce', 1), new Ingredients('Croutons', 20)]
    ),
    new Recipe(
      'Margherita Pizza',
      'Classic Margherita with fresh basil and mozzarella.',
      'https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg',
      [new Ingredients('Pizza Dough', 1), new Ingredients('Mozzarella', 1)]
    ),
    new Recipe(
      'Chicken Curry',
      'A rich and flavorful chicken curry.',
      'https://www.archanaskitchen.com/images/archanaskitchen/1-Author/priyanjali/shutterstock_111998606.jpg',
      [new Ingredients('Chicken', 1), new Ingredients('Curry Powder', 2)]
    ),
    new Recipe(
      'Vegetable Stir Fry',
      'A healthy and colorful vegetable stir fry.',
      'https://studiosquarebeergarden.com/wp-content/uploads/2025/01/Noodles-with-Veggie-Stir-Fry.jpg',
      [new Ingredients('Mixed Vegetables', 1), new Ingredients('Soy Sauce', 3)]
    ),
    new Recipe(
      'Pancakes',
      'Fluffy and delicious pancakes.',
      'https://th.bing.com/th/id/OIP.32bejkHRa3rohzszI_AvtwHaFj?rs=1&pid=ImgDetMain',
      [new Ingredients('Flour', 2), new Ingredients('Eggs', 2)]
    ),
    new Recipe(
      'Sushi Rolls',
      'Delicious sushi rolls with fresh fish and vegetables.',
      'https://th.bing.com/th/id/R.7bc7eadcf200b6ad208783d891736614?rik=evuVG0ynFK6mRw&pid=ImgRaw&r=0',
      [new Ingredients('Sushi Rice', 1), new Ingredients('Nori', 10)]
    ),
    new Recipe(
      'Chocolate Cake',
      'Rich and moist chocolate cake.',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Chocolate_cake_in_Tokyo.jpg/640px-Chocolate_cake_in_Tokyo.jpg',
      [new Ingredients('Flour', 2), new Ingredients('Cocoa Powder', 1)]
    ),
  ];
  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(id: number) {
    return this.recipes[id];
  }

  addIngredientToShoppingList(ingredients: Ingredients[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
