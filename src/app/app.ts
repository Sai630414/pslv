import { Component,AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { Navbar } from "./navbar/navbar";
import { Plans } from "./plans/plans";
import { Add } from "./add/add";
import { Praveen } from "./praveen/praveen";
import { Plan2 } from "./plan2/plan2";
import { Footer } from "./footer/footer";
import { Hook } from "./hook/hook";
import { HealthMetrics } from "./health-metrics/health-metrics";


@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, Navbar, Plans, Add, Praveen, Plan2, Footer, Hook, HealthMetrics],
  templateUrl: './app.html',
  styleUrl: './app.css'
})



export class App {
  protected title = 'pslv';
}
