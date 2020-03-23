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

  ngOnInit() {
    this.getEmployees();
  }
  constructor(public employeeService: EmployeeService) { }

  getEmployees() {
    this.employeeService.getEmployess()
      .subscribe(res => {
       console.log(this.employeeService.employees = res as Employee[]);
      });
  }

  addEmployee(form?: NgForm) {
    if (form.value.id) {
      this.employeeService.putEmployes(form.value)
        .subscribe(res => {
          this.getEmployees();
          this.resetForm();
        });
    } else {
    this.employeeService.postEmployes(form.value)
      .subscribe(res => {
        this.getEmployees();
        this.resetForm();
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
          console.log(res);
        });
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.employeeService.selectedEmployee = new Employee();
    }
  }
}
