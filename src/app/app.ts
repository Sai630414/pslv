import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from "./home/home";
import { Navbar } from "./home/navbar/navbar";
import { Footer } from "./home/footer/footer";




@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, Home, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})



export class App {
  protected title = 'pslv';
}
