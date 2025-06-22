import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  imports: [CommonModule, FormsModule],
  standalone: true,
  template: `
    <main class="auth">
      <section class="auth__body">
        <div class="auth__body__options"> 
          <button (click)="updateForm('login')" [ngClass]="{ 'active': formState === 'login' }">Login</button>
          <button (click)="updateForm('register')" [ngClass]="{ 'active': formState === 'register' }">Register</button>
        </div>
        <form #authForm="ngForm" (ngSubmit)="onSubmit(authForm)" novalidate>
            <section *ngIf="formState === 'login'" class="auth__body__form">
              <div class="auth__body__form__header">
                  <img src="/assets/logo-transparent.png" alt="logo" aria-hidden="true"/>
                  <p>Welcome Back!</p>
              </div>
            
              <div>
                <span> 
                  <label>Email</label>
                  <input placeholder="Email" [(ngModel)]="user.email" name="loginEmail" #loginEmail="ngModel" required email/>
                  <div *ngIf="loginEmail.invalid && loginEmail.touched" class="error">
                    Valid email is required.
                  </div>
                </span>
                <span>
                  <label>Password</label>
                  <input placeholder="Password" type="password" [(ngModel)]="user.password" name="loginPassword" #loginPassword="ngModel" required minlength="6"/>
                  <div *ngIf="loginPassword.invalid && loginPassword.touched" class="error">
                    Password must be at least 6 characters.
                  </div>
                </span>
              </div>
            </section>

            <section *ngIf="formState === 'register'" class="auth__body__form">
              <div class="auth__body__form__header">
                  <img src="/assets/logo-transparent.png" alt="logo" aria-hidden="true"/>
                  <p>Welcome!</p>
              </div>
              <div>
                <span>
                  <label>Email</label>
                  <input placeholder="Email" [(ngModel)]="user.email" name="registerEmail" #registerEmail="ngModel" required email/>
                  <div *ngIf="registerEmail.invalid && registerEmail.touched" class="error">
                    Valid email is required.
                  </div>
                </span>
                <span>
                  <label>Username</label>
                  <input placeholder="Username" name="registerUsername" [(ngModel)]="user.username" #registerUsername="ngModel" required minlength="6"/>
                  <div *ngIf="registerUsername.invalid && registerUsername.touched" class="error">
                    Valid username must have minimum 6 characters.
                  </div>
                </span>
                <span>
                  <label>Password</label>
                  <input placeholder="Password" type="password" [(ngModel)]="user.password" name="registerPassword" #registerPassword="ngModel" required minlength="6"/>
                  <div *ngIf="registerPassword.invalid && registerPassword.touched" class="error">
                    Password must be at least 6 characters.
                  </div>
                </span>
                <span>
                  <label>Confirm Password</label>
                  <input placeholder="Confirm Password" type="password" [(ngModel)]="user.confirmPassword"  name="confirmPassword" #confirmPassword="ngModel" required/>
                  <div *ngIf="user.confirmPassword !== user.password && confirmPassword.touched" class="error">
                    Passwords do not match.
                  </div>
                </span>
                <div class="agree-checkbox">
                  <input type="checkbox"/>
                  <label>I agree terms and conditions</label>
                </div>
              </div>
            </section>
            <section class="auth__body__actions">
              <button [disabled]="!authForm.valid || (formState === 'register' && user.password !== user.confirmPassword)" >
                   {{ formState === 'login' ? 'Sign In' : 'Sign Up' }}
              </button>
            </section>
            </form>
         </section>
    </main>
  `,
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

  formState = 'login';
  sessionToken = "";
  user = {
    email: "",
    username: "",
    password: "",
    confirmPassword: ""
  }

  constructor( private cookieService: CookieService, private router: Router) {}

  updateForm(form: string){
    this.formState = form;
    this.user = {
      email: "",
      username: "",
      password: "",
      confirmPassword: ""
    }
  }

  generateRegexToken(length: number = 16): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';
    for (let i = 0; i < length; i++) {
      token += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return token;
  }

  onSubmit(form: any) {
    if (form.invalid) return;
  
    if (this.formState === 'register' && this.user.password !== this.user.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
  
    this.sessionToken = this.generateRegexToken();

    if (this.formState === 'login') {
      console.log('Logging in...', this.user);
      this.cookieService.set('sessionToken', this.sessionToken, 1);
      this.router.navigate(['/home']);
    } else {
      console.log('Registering...', this.user);
      this.cookieService.set('sessionToken', this.sessionToken, 1);
      this.router.navigate(['/home']);
    }
  }
}
