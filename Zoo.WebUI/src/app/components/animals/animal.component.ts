import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../../services/animal.service';
import { NgForm } from '@angular/forms';
import { Animal } from 'src/app/models/animal.model';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  providers: [AnimalService]
})
export class AnimalComponent implements OnInit {

  loading: boolean;

  constructor(public animalService: AnimalService) {
    this.loading = true;
   }

  ngOnInit(): void {
    this.getAnimals();
  }

  getAnimals() {
    this.animalService.getAnimals()
      .subscribe(res => {
       console.log(this.animalService.animals = res as Animal[]);
       this.loading = false;
      });
  }

  addAnimal(form?: NgForm) {
    if (form.value._id) {
      this.animalService.putAnimal(form.value)
        .subscribe(res => {
          this.getAnimals();
          this.resetForm(form);
        });
    } else {
      this.animalService.postAnimal(form.value)
        .subscribe(res => {
          this.getAnimals();
          this.resetForm(form);
        });
    }
  }

  editAnimal(animal: Animal) {
    this.animalService.selectedAnimal = animal;
  }

  deleteAnimal(id: string) {
    this.animalService.deleteAnimal(id)
      .subscribe(res => {
        this.getAnimals();
      });
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.animalService.selectedAnimal = new Animal();
    }
  }
}
