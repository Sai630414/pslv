import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add',
  imports: [CurrencyPipe,CommonModule,DatePipe],
  templateUrl: './add.html',
  styleUrl: './add.css'
})
export class Add {
  amount=2999;
  amount1=4999;
  amount2=1499;
  dat = new Date(2025, 6, 31);
  
  
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




