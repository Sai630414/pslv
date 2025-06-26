import { Component } from '@angular/core';
import { Navbar } from "./navbar/navbar";
import { Hook } from "./hook/hook";
import { Plans } from "./plans/plans";
import { HealthMetrics } from "./health-metrics/health-metrics";
import { Plan2 } from "./plan2/plan2";
import { Add } from "./add/add";
import { Praveen } from "./praveen/praveen";
import { Footer } from "./footer/footer";




@Component({
  selector: 'app-home',
  imports: [Navbar, Hook, Plans, HealthMetrics, Plan2, Add, Praveen, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
