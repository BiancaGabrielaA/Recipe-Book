import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header class="navbar">
        <img class="navbar__logo" [src]="logoPath" alt="logo" aria-hidden="true" />
        <div class="navbar__menu">
            <a routerLink="/home">Home</a>
            <a routerLink="/recipes">Find recipes</a>
            <a routerLink="/news">News</a>
        </div>
        <div class="navbar__auth">
          <button *ngIf="sessionToken" (click)="gotoProfile()">My account</button>
           <button *ngIf="!sessionToken" (click)="gotoAuth()">Login</button>
        </div>
    </header>
  `,
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
    auth = true;
    logoPath = '/assets/logo-transparent.png';
    
    constructor(private cookieService: CookieService, private router: Router) {}

    gotoAuth() {
      this.router.navigate(['/auth']);
    }

    gotoProfile() {
      this.router.navigate(['/profile']);
    }

    get sessionToken(): string {
      return this.cookieService.get('sessionToken');
    }
}
