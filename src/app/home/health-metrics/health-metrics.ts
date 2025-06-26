import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {FormControl,FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { BmiForm } from './bmi-form/bmi-form';
import { WhrForm } from './whr-form/whr-form';
import { CommonModule } from '@angular/common';
import {
  ElementRef,
  ViewChild,
  HostListener,
  AfterViewInit,
} from '@angular/core';



@Component({
  selector: 'app-health-metrics',
  imports: [ReactiveFormsModule, NgIf, BmiForm, WhrForm,CommonModule],
  templateUrl: './health-metrics.html',
  standalone: true,
  styleUrl: './health-metrics.css'
})
export class HealthMetrics { 
      @ViewChild('statusSection') statusSection!: ElementRef;
  inView: boolean = false;

  ngAfterViewInit() {
    this.checkVisibility(); // Initial check in case it's already in view
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkVisibility();
  }

  checkVisibility() {
    const rect = this.statusSection.nativeElement.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top <= windowHeight * 0.8) {
      this.inView = true;
    }
  }

  showBmiForm = false;
  showWhrForm = false;

  toggleForm(type: string) {
    this.showBmiForm = type === 'bmi';
    this.showWhrForm = type === 'whr';
  }
}
