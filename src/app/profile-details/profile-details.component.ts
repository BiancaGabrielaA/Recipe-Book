import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile-details',
  imports: [FormsModule, CommonModule],
  standalone: true, 
  template: `
    <section class="profile-details">
      <div class="profile-details__field">
        <label>Username</label>
        <input [readonly]="!editMode" [(ngModel)]="user.username" />
      </div>
      <div class="profile-details__field">
        <label>Age</label>
        <input [readonly]="!editMode" type="number" [(ngModel)]="user.age" />
      </div>
      <div class="profile-details__field">
        <label>Profession</label>
        <input [readonly]="!editMode" [(ngModel)]="user.profession" />
      </div>
      <div class="profile-details__field">
        <label>Location</label>
        <input [readonly]="!editMode" [(ngModel)]="user.location" />
      </div>
      <div class="profile-details__field">
        <label>Description</label>
        <textarea [readonly]="!editMode" [(ngModel)]="user.description"></textarea>
      </div>

      <button (click)="toggleEdit()">
        {{ editMode ? 'Save Details' : 'Edit Details' }}
      </button>
    </section>
  `,
  styleUrl: './profile-details.component.scss'
})
export class ProfileDetailsComponent {
    editMode = false;

    user = {
      username: 'bianca123',
      age: 25,
      profession: 'Web Developer',
      location: 'Bucharest',
      description: 'Full-stack dev passionate about UI and security.'
    };

    toggleEdit() {
      if (this.editMode) {
        // TODO: Save logic here, like a backend API call
        console.log('Saved user:', this.user);
      }
      this.editMode = !this.editMode;
    }
}
