import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, CommonModule, FooterComponent],
  template: `
      <main class="main">
        <div class="content">
            <div *ngIf="sessionToken">
                <app-navbar ></app-navbar>
                <app-footer></app-footer>
            </div>
            <router-outlet />
        </div>
      </main>
    `,
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'recipe-book';
  constructor(private cookieService: CookieService) {}

  get sessionToken(): string {
    return this.cookieService.get('sessionToken');
  }
}
