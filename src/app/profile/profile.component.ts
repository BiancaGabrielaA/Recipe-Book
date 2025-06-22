import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileDetailsComponent } from '../profile-details/profile-details.component';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [ProfileDetailsComponent, CommonModule],
  standalone: true,
  template: `
    <main class="profile">
       <section class="profile__menu">
          <div class="profile__menu__details">
              <img/>
              <p>User Name</p>
          </div>
          <div class="profile__menu__options">
              <button (click)="logout()">Logout</button>
          </div>
       </section>
       <section class="profile__information">
          <app-profile-details></app-profile-details>
       </section>
    </main>
  `,
  styleUrl: './profile.component.scss'
})

export class ProfileComponent {

    constructor( private cookieService: CookieService, private router: Router) {}

    logout() {
      this.cookieService.delete('sessionToken', '/');
      this.router.navigate(['/auth']);
    }
}
