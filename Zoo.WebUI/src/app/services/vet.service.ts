import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vet } from '../models/vet.model';

@Injectable({
  providedIn: 'root'
})
export class VetService {

  selectedVet: Vet;
  vets: Vet[];
  readonly URL_API = 'http://localhost:3000/api/vet';

  constructor(private http: HttpClient) {
    this.selectedVet = new Vet();
  }

   getVets() {
    return this.http.get(this.URL_API);
   }

   postVet(vet: Vet) {
    return this.http.post(this.URL_API, vet);
   }

   putVet(vet: Vet) {
    return this.http.put(this.URL_API + `/${vet._id}`, vet);
   }

   deleteVet(id: string) {
     return this.http.delete(this.URL_API + `/${id}`);
   }
}
