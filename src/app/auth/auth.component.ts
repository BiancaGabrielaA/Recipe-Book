import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
              <button>{{ formState === 'login' ? 'Sign In' : 'Sign Up' }}</button>
            </section>
            </form>
         </section>
    </main>
  `,
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

  formState = 'login';
  user = {
    email: "",
    username: "",
    password: "",
    confirmPassword: ""
  }

  updateForm(form: string){
    this.formState = form;
    this.user = {
      email: "",
      username: "",
      password: "",
      confirmPassword: ""
    }
  }

  onSubmit(form: any) {
    if (form.invalid) return;
  
    if (this.formState === 'register' && this.user.password !== this.user.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
  
    if (this.formState === 'login') {
      console.log('Logging in...', this.user);
    } else {
      console.log('Registering...', this.user);
    }
  }
}
