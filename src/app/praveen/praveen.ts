import { Component } from '@angular/core';

@Component({
  selector: 'app-praveen',
  imports: [],
  templateUrl: './praveen.html',
  styleUrl: './praveen.css'
})
export class Praveen {
 ngAfterViewInit() {
    const elements = document.querySelectorAll('.scroll-animate');

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
