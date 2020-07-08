import { Component, OnInit } from '@angular/core';
import { VetService } from 'src/app/services/vet.service';
import { Vet } from 'src/app/models/vet.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-vet',
  templateUrl: './vet.component.html'
})
export class VetComponent implements OnInit {

  loading: boolean;

  constructor(public vetService: VetService) {
    this.loading = true;
   }

  ngOnInit(): void {
  this.getVets();
  }

  getVets() {
    this.vetService.getVets()
      .subscribe(res => {
       this.vetService.vets = res as Vet[];
       this.loading = false;
      });
  }

  addVet(form?: NgForm) {
    if (form.value._id) {
      this.vetService.putVet(form.value)
        .subscribe(res => {
          this.getVets();
          this.resetForm(form);
        });
    } else {
    this.vetService.postVet(form.value)
      .subscribe(res => {
        this.getVets();
        this.resetForm(form);
      });
    }
  }

  editVet(vet: Vet) {
    this.vetService.selectedVet = vet;
  }

  deleteVet(id: string) {
    this.vetService.deleteVet(id)
        .subscribe(res => {
          this.getVets();
        });
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.vetService.selectedVet = new Vet();
    }
  }
}
