import { Routes } from '@angular/router';
import DashboardComponent from './components/dashboard/dashboard.component';
import AuthComponent from './components/auth/auth.component';
import CrudComponent from './components/crud/crud.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    {path:'', component:DashboardComponent},    
    {path:'auth', component:AuthComponent},
    {path:'crud', component:CrudComponent},
    {path:'login',component:LoginComponent},    
    {path:'', redirectTo:'', pathMatch:'full'}
];
