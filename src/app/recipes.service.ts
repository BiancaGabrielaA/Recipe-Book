import { Injectable } from '@angular/core';
import { RecipeType } from './recipe-type';
import recipeList from '../assets/recipesList.json';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  protected recipesList: RecipeType[] = recipeList;

  constructor() { }

  getAllRecipes() : RecipeType[] {
    return this.recipesList;
  }

  getRecipeById(id: Number) : RecipeType | undefined {
    return this.recipesList.find(recipe => recipe.id === id);
  }
}
