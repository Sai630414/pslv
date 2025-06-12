import { Component } from '@angular/core';

@Component({
  selector: 'app-plan2',
  imports: [],
  templateUrl: './plan2.html',
  styleUrl: './plan2.css'
})
export class Plan2 {
 ngAfterViewInit() {
    const elements = document.querySelectorAll('.scroll-right');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    });

    elements.forEach(el => observer.observe(el));
  }
}
