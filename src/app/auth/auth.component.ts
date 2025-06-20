import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  imports: [CommonModule],
  standalone: true,
  template: `
    <main class="auth">
      <section class="auth__body">
        <div class="auth__body__options"> 
          <button (click)="updateForm('login')" [ngClass]="{ 'active': formState === 'login' }">Login</button>
          <button (click)="updateForm('register')" [ngClass]="{ 'active': formState === 'register' }">Register</button>
        </div>
        <section *ngIf="formState === 'login'" class="auth__body__form">
          <div class="auth__body__form__header">
              <img src="/assets/logo-transparent.png" alt="logo" aria-hidden="true"/>
               <p>Welcome Back!</p>
          </div>
         
          <div>
            <span> 
              <label>Email</label>
              <input placeholder="Email" />
            </span>
            <span>
              <label>Password</label>
              <input placeholder="Password" type="password" />
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
              <input placeholder="Email" />
            </span>
            <span>
              <label>Username</label>
              <input placeholder="Username" />
            </span>
            <span>
              <label>Password</label>
              <input placeholder="Password" type="password" />
            </span>
            <span>
              <label>Confirm Password</label>
              <input placeholder="Confirm Password" type="password" />
            </span>
            <div>
               <input type="checkbox"/>
               <label>I agree terms and conditions</label>
            </div>
          </div>
        </section>
        <section class="auth__body__actions">
          <button>{{ formState === 'login' ? 'Sign In' : 'Sign Up' }}</button>
        </section>
      </section>
    </main>
  `,
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

  formState = 'login'
  updateForm(form: string){
    this.formState = form;
  }
}
