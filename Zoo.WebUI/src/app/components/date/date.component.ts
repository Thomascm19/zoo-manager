import { Component, OnInit } from '@angular/core';
import { DateService } from 'src/app/services/date.service';
import { Date } from 'src/app/models/date.model';
import { NgForm } from '@angular/forms';
import { AnimalService } from 'src/app/services/animal.service';
import { VetService } from 'src/app/services/vet.service';
import { AnimalComponent } from '../animals/animal.component';
import { VetComponent } from '../vet/vet.component';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
})
export class DateComponent implements OnInit {
  loading: boolean;
  animalComponent: AnimalComponent;
  vetComponent: VetComponent;

  constructor(public dateService: DateService,
              public animalService: AnimalService,
              public vetService: VetService) {
                this.animalComponent = new AnimalComponent(this.animalService);
                this.vetComponent = new VetComponent(this.vetService);
                this.loading = true;
   }

  ngOnInit(): void {
    this.getDates();
    this.animalComponent.getAnimals();
    this.vetComponent.getVets();
  }

  getDates() {
    this.dateService.getDates()
      .subscribe(res => {
       this.dateService.dates = res as Date[];
       this.loading = false;
      });
  }

  addDate(form?: NgForm) {
    if (form.value._id) {
      this.dateService.putDate(form.value)
        .subscribe(res => {
          this.getDates();
          this.resetForm(form);
        });
    } else {
    this.dateService.postDate(form.value)
      .subscribe(res => {
        this.getDates();
        this.resetForm(form);
      });
    }
  }

  editDate(date: Date) {
    this.dateService.selectedDate._id = date._id;
    this.dateService.selectedDate.animal = date.animal._id;
    this.dateService.selectedDate.vet = date.vet._id;
    this.dateService.selectedDate.description = date.description;
  }

  deleteDate(id: string) {
    this.dateService.deleteDate(id)
        .subscribe(res => {
          this.getDates();
        });
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.dateService.selectedDate = new Date();
    }
  }

}
