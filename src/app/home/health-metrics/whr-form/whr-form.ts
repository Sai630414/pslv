import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-whr-form',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './whr-form.html',
  styleUrl: './whr-form.css'
})
export class WhrForm {
  whrForm: FormGroup;
  whrValue: number | null = null;
  status: string = '';

  constructor(private fb: FormBuilder) {
    this.whrForm = this.fb.group({
      waist: ['', [Validators.required, Validators.min(30)]],
      hip: ['', [Validators.required, Validators.min(30)]],
      gender: ['', Validators.required]
    });
  }

  calculateWHR() {
    const { waist, hip, gender } = this.whrForm.value;
    if (waist && hip && gender) {
      const whr = waist / hip;
      this.whrValue = parseFloat(whr.toFixed(2));

      if (gender === 'male') {
        this.status = whr > 0.90 ? 'High Risk' : 'Low Risk';
      } else if (gender === 'female') {
        this.status = whr > 0.85 ? 'High Risk' : 'Low Risk';
      }
    }
  }
}