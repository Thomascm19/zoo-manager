import { Component, OnInit } from '@angular/core';
import { PackegeService } from 'src/app/services/packege.service';
import { Packege } from 'src/app/models/packege.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-packeges',
  templateUrl: './packeges.component.html',
  providers: [PackegeService]
})
export class PackegesComponent implements OnInit {

  constructor(public packegeService: PackegeService) { }

  ngOnInit(): void {
    this.getPackege();
  }

  getPackege() {
    this.packegeService.getPackege()
      .subscribe(res => {
       console.log(this.packegeService.packege = res as Packege[]);
      });
  }

  addPackege(form?: NgForm) {
    if (form.value.id) {
      this.packegeService.putPackege(form.value)
        .subscribe(res => {
          this.getPackege();
          this.resetForm();
        });
    } else {
    this.packegeService.postPackege(form.value)
      .subscribe(res => {
        this.getPackege();
        this.resetForm();
      });
    }
  }

  editPackege(packege: Packege) {
    this.packegeService.packegeSelected = packege;
  }

  deleteClient(id: string) {
    this.packegeService.deletePackege(id)
        .subscribe(res => {
          this.getPackege();
          console.log(res);
        });
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.packegeService.packegeSelected = new Packege();
    }
  }
}



