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

}
