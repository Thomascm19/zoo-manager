import { Routes } from '@angular/router';
import { HomeComponent } from '../app/components/home/home.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { GeographicalAreaComponent } from '../app/components/geographical-area/geographical-area.component';
import { AnimalComponent } from './components/animals/animal.component';
import { VetComponent } from './components/vet/vet.component';

export const ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'employee', component: EmployeesComponent},
    {path: 'geographical', component: GeographicalAreaComponent},
    {path: 'animal', component: AnimalComponent},
    {path: 'vet', component: VetComponent},

    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];
