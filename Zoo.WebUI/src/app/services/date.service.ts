import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Date } from '../models/date.model';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  selectedDate: Date;
  dates: Date[];
  readonly URL_API = 'http://localhost:3000/api/date';

  constructor(private http: HttpClient) {
    this.selectedDate = new Date();
  }

   getDates() {
    return this.http.get(this.URL_API);
   }

   postDate(date: Date) {
    return this.http.post(this.URL_API, date);
   }

   putDate(date: Date) {
    return this.http.put(this.URL_API + `/${date._id}`, date);
   }

   deleteDate(id: string) {
     return this.http.delete(this.URL_API + `/${id}`);
   }
}
