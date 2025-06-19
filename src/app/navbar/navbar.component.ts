import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="navbar">
        <img class="navbar__logo" [src]="logoPath" alt="logo" aria-hidden="true" />
        <div class="navbar__menu">
            <a>Home</a>
            <a>Find recipes</a>
            <a>News</a>
        </div>
        <div class="navbar__auth">
           <button *ngIf="auth">My account</button>
           <button *ngIf="!auth">Login</button>
        </div>
    </header>
  `,
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
    auth = false;
    logoPath = '/assets/logo-transparent.png';
}
