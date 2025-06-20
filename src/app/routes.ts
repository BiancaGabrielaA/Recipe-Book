import { Route } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AuthComponent } from "./auth/auth.component";
import { NewsComponent } from "./news/news.component";
import { ProfileComponent } from "./profile/profile.component";
import { RecipesComponent } from "./recipes/recipes.component";

const routeConfig: Route[] = [
    {
      path: 'home',
      component: HomeComponent,
      title: 'Home'
    },
    {
      path: 'auth',
      component: AuthComponent,
      title: 'Authenticate'
    },
    {
      path: 'news',
      component: NewsComponent,
      title: 'News'
    },
    {
      path: 'profile',
      component: ProfileComponent,
      title: 'Profile'
    },
    {
      path: 'recipes',
      component: RecipesComponent,
      title: 'Find Recipes'
    }
  ];

export default routeConfig;