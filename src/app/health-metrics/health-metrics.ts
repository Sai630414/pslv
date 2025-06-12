import { Component } from '@angular/core';

@Component({
  selector: 'app-health-metrics',
  imports: [],
  templateUrl: './health-metrics.html',
  styleUrl: './health-metrics.css'
})
export class HealthMetrics { name: string = '';

  submitForm() {
    console.log("Submitted Name:", this.name);
  }
}
