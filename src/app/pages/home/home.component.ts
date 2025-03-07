import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  public scrollToSection = (sectionId: string): void => {
    const section = document.querySelector(`#${sectionId}`);
    if (section) { section.scrollIntoView({ behavior: 'smooth' })}; 
  }
}
