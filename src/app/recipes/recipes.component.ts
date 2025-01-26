import { Component } from '@angular/core';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  standalone: false,
  providers: [RecipesService],
  templateUrl: './recipes.component.html',
})
export class RecipesComponent {
}
