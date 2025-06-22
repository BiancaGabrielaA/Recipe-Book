import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecipesService } from '../recipes.service';
import { RecipeType } from '../recipe-type';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <main class="recipes">
      <section class="recipes__header">
        <div class="recipes__header__text">
          <p>Find new recipes</p>
          <span>
          Discover thousands of recipes from all over the globe. Whether you’re looking to try something new, find classic favorites, 
          or create your own culinary masterpiece, you’ll find inspiration here. Start your delicious journey today!
          </span>
        </div>
        <div class="recipes__header__filters">
          <input type="text" placeholder="Search a recipe" [(ngModel)]="filter.text" />
          
          <select [(ngModel)]="filter.name">
            <option value="" disabled selected>Order alphabetically</option>
            <option *ngFor="let option of nameFilter" [value]="option">{{ option }}</option>
          </select>

          <select [(ngModel)]="filter.location">
            <option value="" disabled selected>Order by location</option>
            <option *ngFor="let option of locationFilter" [value]="option">{{ option }}</option>
          </select>

          <button class="primary" type="button" (click)="search()">Search</button>
        </div>

        <div class="recipes__header__body">
          <div *ngFor="let recipe of filteredRecipes" class="recipes__header__body__recipe-card">
            <img [src]="recipe.imageURL" [alt]="recipe.name" />
            <p>{{ recipe.name }}</p>
            <span>{{ recipe.description }}</span>
            <div>
              <span>{{ recipe.location }}</span>
              <button (click)="showDetails(recipe)">Details</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  `,
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent {
  recipesList: RecipeType[] = [];
  filteredRecipes: RecipeType[] = [];

  nameFilter = ["Alphabetically from A to Z", "Alphabetically from Z to A"];
  locationFilter = ["All", "Italy", "Japan", "Mexico", "India", "France", "Thailand", "China", "USA", "Poland", "Middle East"];

  filter = {
    text: '',
    name: '',
    location: ''
  };

  private recipesService = inject(RecipesService);

  constructor() {
    this.recipesList = this.recipesService.getAllRecipes();
    this.filteredRecipes = [...this.recipesList];
  }

  search() {
    const searchText = this.filter.text.trim().toLowerCase();
  
    this.filteredRecipes = this.recipesList.filter(recipe => {
      // Match search text in name or description
      const matchesText = !searchText ||
        recipe.name.toLowerCase().includes(searchText) ||
        recipe.description.toLowerCase().includes(searchText);
  
      // Match location filter (allow empty or 'All' as no filter)
      const matchesLocation = !this.filter.location || this.filter.location === 'All' || recipe.location === this.filter.location;
  
      return matchesText && matchesLocation;
    });
  
    // Sort alphabetically if filter.name matches
    if (this.filter.name === "Alphabetically from A to Z") {
      this.filteredRecipes.sort((a, b) => a.name.localeCompare(b.name));
    } else if (this.filter.name === "Alphabetically from Z to A") {
      this.filteredRecipes.sort((a, b) => b.name.localeCompare(a.name));
    }
  }

  showDetails(recipe: RecipeType) {
    // Implement your logic to show recipe details here
    console.log('Show details for:', recipe);
  }
}
