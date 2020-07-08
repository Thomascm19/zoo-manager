import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  providers: [EmployeeService]
})
export class EmployeesComponent implements OnInit {

  loading: boolean;

  constructor(public employeeService: EmployeeService) {
    this.loading = true;
  }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getEmployess()
      .subscribe(res => {
       this.employeeService.employees = res as Employee[];
       this.loading = false;
      });
  }

  addEmployee(form?: NgForm) {
    if (form.value._id) {
      this.employeeService.putEmployes(form.value)
        .subscribe(res => {
          this.getEmployees();
          this.resetForm(form);
        });
    } else {
    this.employeeService.postEmployes(form.value)
      .subscribe(res => {
        this.getEmployees();
        this.resetForm(form);
      });
    }
  }

  editEmployee(employee: Employee) {
    this.employeeService.selectedEmployee = employee;
  }

  deleteEmployee(id: string) {
    this.employeeService.deleteEmployee(id)
        .subscribe(res => {
          this.getEmployees();
        });
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.employeeService.selectedEmployee = new Employee();
    }
  }
}
