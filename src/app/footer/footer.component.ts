import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true, 
  imports: [CommonModule],
  template: `
     <footer class="footer">
        <p>© 2025 Your Company Name. All rights reserved.</p>
        <p>
          <a href="#">Privacy Policy</a> | 
          <a href="#">Terms of Service</a> | 
          <a href="#">Contact</a>
        </p>
      </footer>
  `,
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
