import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Package } from '../models/package.model';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  selectedPackage: Package;
  packages: Package[];
  readonly URL_API = 'http://localhost:3000/api/package';

  constructor(private http: HttpClient) {
    this.selectedPackage = new Package();
  }

   getPackages() {
    return this.http.get(this.URL_API);
   }

   postPackage(pack: Package) {
    return this.http.post(this.URL_API, pack);
   }

   putPackage(pack: Package) {
    return this.http.put(this.URL_API + `/${pack._id}`, pack);
   }

   deletePackage(id: string) {
     return this.http.delete(this.URL_API + `/${id}`);
   }
}
