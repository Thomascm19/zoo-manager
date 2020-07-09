import { Routes } from '@angular/router';
import { HomeComponent } from '../app/components/home/home.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { GeographicalAreaComponent } from '../app/components/geographical-area/geographical-area.component';
import { AnimalComponent } from './components/animals/animal.component';
import { VetComponent } from './components/vet/vet.component';
import { PackageComponent } from './components/package/package.component';
import { ClientComponent } from './components/client/client.component';
import { ZooComponent } from './components/zoo/zoo.component';
import { DateComponent } from './components/date/date.component';

export const ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'employee', component: EmployeesComponent},
    {path: 'geographical', component: GeographicalAreaComponent},
    {path: 'animal', component: AnimalComponent},
    {path: 'vet', component: VetComponent},
    {path: 'package', component: PackageComponent},
    {path: 'client', component: ClientComponent},
    {path: 'zoo', component: ZooComponent},
    {path: 'date', component: DateComponent},

    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];
