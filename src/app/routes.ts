import { Route } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AuthComponent } from "./auth/auth.component";
import { NewsComponent } from "./news/news.component";
import { ProfileComponent } from "./profile/profile.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { authGuard } from "./auth.guard";

const routeConfig: Route[] = [
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
      path: 'news',
      component: NewsComponent,
      title: 'News',
      canActivate: [authGuard]
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

export default routeConfig;