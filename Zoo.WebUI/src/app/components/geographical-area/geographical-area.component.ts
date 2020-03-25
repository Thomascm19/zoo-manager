import { Component, OnInit } from '@angular/core';
import { GeographicalAreaService } from '../../services/geographical-area.service';
import { EmployeeService } from '../../services/employee.service';
import { EmployeesComponent } from '../employees/employees.component';
import { GeographicalArea } from '../../models/geographical-area.model';
import { NgForm, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-geographical-area',
  templateUrl: './geographical-area.component.html',
  providers: [GeographicalAreaService]
})
export class GeographicalAreaComponent implements OnInit {

  employeeComponent: EmployeesComponent;
  constructor(public geographicalAreaService: GeographicalAreaService, public employeeService: EmployeeService) {
    this.employeeComponent = new EmployeesComponent(this.employeeService);
  }

  ngOnInit() {
    this.getGeographicalArea();
    this.employeeComponent.getEmployees();
  }

  getGeographicalArea() {
    this.geographicalAreaService.getGeographicalArea()
      .subscribe(res => {
        console.log(this.geographicalAreaService.geographicalArea = res as GeographicalArea[]);
      });
  }

  addGeographicalArea(form?: NgForm) {
    if (form.value._id) {
    this.geographicalAreaService.putGeographicalArea(form.value)
      .subscribe(res => {
        this.getGeographicalArea();
        this.resetForm();
      });
    } else {
      this.geographicalAreaService.postGeographicalArea(form.value)
        .subscribe(res => {
          this.getGeographicalArea();
          this.resetForm();
        });
    }
  }

  editGeographicalArea(geographicalArea: GeographicalArea) {
    this.geographicalAreaService.geographicalAreaSelected = geographicalArea;
  }

  deleteGeographicalArea(id: string) {
    this.geographicalAreaService.deleteGeographicalArea(id)
      .subscribe(res => {
        this.getGeographicalArea();
        console.log(res);
      });
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.geographicalAreaService.geographicalAreaSelected = new GeographicalArea();
    }
  }
}
