import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyRecipesComponent } from '../my-recipes/my-recipes.component';
import { ProfileDetailsComponent } from '../profile-details/profile-details.component';

@Component({
  selector: 'app-profile',
  imports: [MyRecipesComponent, ProfileDetailsComponent, CommonModule],
  standalone: true,
  template: `
    <main class="profile">
       <section class="profile__menu">
          <div class="profile__menu__details">
              <img/>
              <p>User Name</p>
          </div>
          <div class="profile__menu__options">
              <button (click)="changeTab('details')">View Details</button>
              <button (click)="changeTab('recipes')">My Recipies</button>
              <button (click)="logout()">Logout</button>
          </div>
       </section>
       <section class="profile__information">
          <div *ngIf="tab === 'details'">
              <app-profile-details></app-profile-details>
          </div>
          <div *ngIf="tab === 'recipes'">
              <app-my-recipes></app-my-recipes>
          </div>
       </section>
    </main>
  `,
  styleUrl: './profile.component.scss'
})

export class ProfileComponent {
    tab = 'details'

    changeTab(newTab: string) {
       this.tab = newTab;
    }

    logout() {
      console.log('logout');
    }
}
