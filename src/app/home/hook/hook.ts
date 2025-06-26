import { Component } from '@angular/core';

@Component({
  selector: 'app-hook',
  imports: [],
  templateUrl: './hook.html',
  styleUrl: './hook.css'
})
export class Hook {
  hookText: string = '';

  private hooks: string[] = [
    "Transform your mindset, and your body will follow.",
    "Consistency beats motivation every time.",
    "Every rep takes you one step closer to your goal.",
    "Discipline is the bridge between goals and results.",
    "You don’t have to be extreme—just consistent.",
    "Fitness is not a destination, it’s a way of life."
  ];

  ngOnInit(): void {
    const index = Math.floor(Math.random() * this.hooks.length);
    this.hookText = this.hooks[index];
  }

  ngAfterViewInit() {
    const elements = document.querySelectorAll('.scroll-up');

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
