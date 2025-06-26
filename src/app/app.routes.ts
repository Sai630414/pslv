import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Home } from './home/home';
import { Signup } from './login/signup/signup';




export const routes: Routes = [
    {
        path:"login",
        component:Login
    },{
        path:"signup",component:Signup
    },
    {
        path:'',component:Home,
    }
];
