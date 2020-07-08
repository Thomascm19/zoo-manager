import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Packege } from '../models/packege.model';

@Injectable({
    providedIn: 'root'
})
export class PackegeService {

    packegeSelected: Packege;
    packege: Packege[];
    readonly URL_API = 'http://localhost:3000/api/packege';

    constructor(private http: HttpClient) {
        this.packegeSelected = new Packege();
    }

    getPackege() {
        return this.http.get(this.URL_API);
       }
    
       postPackege(packege: Packege) {
        return this.http.post(this.URL_API, packege);
       }
    
       putPackege(packege: Packege) {
        return this.http.put(this.URL_API + `/${packege._id}`, packege);
       }
    
       deletePackege(id: string) {
         return this.http.delete(this.URL_API + `/${id}`);
       }
}

