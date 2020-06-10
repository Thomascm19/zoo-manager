import { Routes } from '@angular/router';
import { HomeComponent } from '../app/components/home/home.component';
import { EmployeesComponent } from '../app/components/employees/employees.component';
import { GeographicalAreaComponent } from '../app/components/geographical-area/geographical-area.component';
import { ClientsComponent } from './components/clients/clients.component';

export const ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'employee', component: EmployeesComponent},
    {path: 'geographical', component: GeographicalAreaComponent},
    {path: 'client', component: ClientsComponent},

    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];
