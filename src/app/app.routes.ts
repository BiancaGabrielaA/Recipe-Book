import { Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AuthComponent } from "./auth/auth.component";
import { ProfileComponent } from "./profile/profile.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { authGuard } from "./auth.guard";

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',  
      },
      {
        path: 'home',
        component: HomeComponent,
        title: 'Home',
        canActivate: [authGuard]
      },
      {
        path: 'auth',
        component: AuthComponent,
        title: 'Authenticate'
      },
      {
        path: 'profile',
        component: ProfileComponent,
        title: 'Profile',
        canActivate: [authGuard]
      },
      {
        path: 'recipes',
        component: RecipesComponent,
        title: 'Find Recipes',
        canActivate: [authGuard]
      }
];
