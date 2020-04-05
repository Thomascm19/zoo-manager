import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Animal } from '../models/animal.model';


@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  selectedAnimal: Animal;
  animals: Animal[];
  readonly URL_API = 'http://localhost:3000/api/animals';

  constructor(private http: HttpClient) {
    this.selectedAnimal = new Animal();
  }

   getAnimals() {
    return this.http.get(this.URL_API);
   }

   postAnimal(animal: Animal) {
    return this.http.post(this.URL_API, animal);
   }

   putAnimal(animal: Animal) {
    return this.http.put(this.URL_API + `/${animal._id}`, animal);
   }

   deleteAnimal(id: string) {
     return this.http.delete(this.URL_API + `/${id}`);
   }
}
