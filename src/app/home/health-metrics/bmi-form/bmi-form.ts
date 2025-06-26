import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bmi-form',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './bmi-form.html',
  styleUrl: './bmi-form.css'
})
export class BmiForm {
 bmiForm: FormGroup;
  result: string = '';
  bmiValue: number | null = null;

  constructor(private fb: FormBuilder) {
    this.bmiForm = this.fb.group({
      height: ['', [Validators.required, Validators.min(50)]], // height in cm
      weight: ['', [Validators.required, Validators.min(10)]]
    });
  }

  calculateBMI() {
    const { height, weight } = this.bmiForm.value;
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmi = weight / (heightInMeters * heightInMeters);
      this.bmiValue = parseFloat(bmi.toFixed(2));

      if (bmi < 18.5) {
        this.result = 'Underweight';
      } else if (bmi < 25) {
        this.result = 'Normal weight';
      } else if (bmi < 30) {
        this.result = 'Overweight';
      } else {
        this.result = 'Obese';
      }
    }
  }
}