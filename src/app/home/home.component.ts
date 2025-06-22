import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  standalone: true,
  template: `
    <main class="home">
        <section class="home__intro">
            <div class="home__intro__text"> 
                <span>Welcome to our international kitcken</span>
                <p>Your Kitchen. Our Recipes. Endless Possibilities.</p>
                <button (click)="redirectToRecipes()">Start Cooking – Find or Add Recipes <i>&rarr;</i></button>
            </div>
            <div class="home__intro__img">
                <img src="/assets/home-img.jpg" alt="Home Image" aria-hidden="true" />
            </div>
        </section>
        <section class="home__details">
           <div class="home__details__graphic">
              Number of Users from Top 10 culinary countries
           </div>
           <div class="home__details__number">
              <p>+ {{ usersCount }} users </p>
              <span>of our app</span>
            </div>
            <div class="home__details__number">
              <p>+ {{ countriesCount }} countries</p>
              <span>where you can discover cuisine</span>
            </div>
        </section>
    </main>
  `,
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  usersCount = 0;
  countriesCount = 0;

  constructor(private router: Router) {}

  ngOnInit() {
    this.animateCount('users');
    this.animateCount('countries');
  }

  animateCount(type: 'users' | 'countries') {
    let target = type === 'users' ? 5000 : 15;
    let count = 0;
    let step = target / 100; // number of increments

    const interval = setInterval(() => {
      count += step;
      if (count >= target) {
        count = target;
        clearInterval(interval);
      }
      if (type === 'users') {
        this.usersCount = Math.floor(count);
      } else {
        this.countriesCount = Math.floor(count);
      }
    }, 20); 

  }
  
  redirectToRecipes() {
    console.log('redirect');
    this.router.navigate(['recipes'])
  }
}
