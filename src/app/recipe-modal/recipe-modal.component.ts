import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RecipeType } from '../recipe-type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
     <div class="modal-overlay" (click)="closeModal()">
        <div class="modal-content" (click)="$event.stopPropagation()" *ngIf="recipe">
          <button class="close-button" (click)="closeModal()">×</button>

          <h2>{{ recipe.name }}</h2>

          <img *ngIf="recipe.imageURL" [src]="recipe.imageURL" [alt]="recipe.name" />

          <p *ngIf="recipe.description">{{ recipe.description }}</p>
           <p *ngIf="recipe.steps">{{ recipe.steps }}</p>

          <p><strong>Location:</strong> {{ recipe.location }}</p>
        </div>
      </div>
  `,
  styleUrls: ['./recipe-modal.component.scss']
})
export class RecipeModalComponent {
  @Input() recipe: RecipeType | null = null;
  @Output() close = new EventEmitter<void>();

  closeModal(): void {
    this.close.emit();
  }
}
