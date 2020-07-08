import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  selectedClient: Client;
  client: Client[];
  readonly URL_API = 'http://localhost:3000/api/client';

  constructor(private http: HttpClient) {
    this.selectedClient = new Client();
  }

   getClient() {
    return this.http.get(this.URL_API);
   }

   postCLient(client: Client) {
    return this.http.post(this.URL_API, client);
   }

   putCLient(client: Client) {
    return this.http.put(this.URL_API + `/${client._id}`, client);
   }

   deleteClient(id: string) {
     return this.http.delete(this.URL_API + `/${id}`);
   }
}
