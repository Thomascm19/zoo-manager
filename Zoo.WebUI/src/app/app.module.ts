import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// Rutas
import { ROUTES } from './app.routes';

// Componentes
import { AppComponent } from './app.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { GeographicalAreaComponent } from './components/geographical-area/geographical-area.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    GeographicalAreaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
