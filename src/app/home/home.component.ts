import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  standalone: true,
  template: `
    <main class="home">
        <section class="home__intro">
            <div class="home__intro__text"> 
                <span>Welcome to our international kitcken</span>
                <p>Your Kitchen. Our Recipes. Endless Possibilities.</p>
                <button>Start Cooking – Find or Add Recipes <i>&rarr;</i></button>
            </div>
            <div class="home__intro__img">
                <img src="/assets/home-img.jpg" alt="Home Image" aria-hidden="true" />
            </div>
        </section>
        <section class="home__details">
           <div class="home__details__graphic">
             
           </div>
           <div class="home__details__number">
              +5000 users
           </div>
           <div class="home__details__geographic">
             +15 countries
           </div>
        </section>
    </main>
  `,
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
