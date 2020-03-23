import { Component, OnInit } from '@angular/core';
import { GeographicalAreaService } from '../../services/geographical-area.service';
import { EmployeeService } from '../../services/employee.service';
import { GeographicalArea } from '../../models/geographical-area.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-geographical-area',
  templateUrl: './geographical-area.component.html',
  providers: [GeographicalAreaService]
})
export class GeographicalAreaComponent implements OnInit {

  constructor(public geographicalAreaService: GeographicalAreaService, public employeeService: EmployeeService) { }

  ngOnInit() {
    this.getGeographicalArea();
  }

  getGeographicalArea() {
    this.geographicalAreaService.getGeographicalArea()
      .subscribe(res => {
        console.log(this.geographicalAreaService.geographicalArea = res as GeographicalArea[]);
      });
  }

  addGeographicalArea(form?: NgForm) {
    this.geographicalAreaService.postGeographicalArea(form.value)
      .subscribe(res => {
        this.getGeographicalArea();
        this.resetForm();
      });
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.geographicalAreaService.geographicalAreaSelected = new GeographicalArea();
    }
  }
}
