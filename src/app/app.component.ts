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
      <main class="page-wrapper">
        <div class="content">
            <div *ngIf="sessionToken">
                <app-navbar ></app-navbar>
            </div>
            <div class="page-content">
                 <router-outlet />
            </div>
        </div>
      </main>
       <div *ngIf="sessionToken">
            <app-footer></app-footer>
        </div>
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
