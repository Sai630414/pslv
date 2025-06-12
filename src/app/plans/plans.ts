import { Component } from '@angular/core';

@Component({
  selector: 'app-plans',
  imports: [],
  templateUrl: './plans.html',
  styleUrl: './plans.css'
})
export class Plans  {
 ngAfterViewInit() {
    const elements = document.querySelectorAll('.scroll-left');

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
