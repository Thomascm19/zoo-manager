import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClientService } from 'src/app/services/client.service';
import { Client } from 'src/app/models/client.model';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html'
})
export class ClientComponent implements OnInit {

  loading: boolean;

  constructor(public clientService: ClientService) {
    this.loading = true;
   }

  ngOnInit(): void {
  }

  getClients() {
    this.clientService.getClients()
      .subscribe(res => {
       this.clientService.clients = res as Client[];
       this.loading = false;
      });
  }

  addClient(form?: NgForm) {
    if (form.value._id) {
      this.clientService.putClient(form.value)
        .subscribe(res => {
          this.getClients();
          this.resetForm(form);
        });
    } else {
    this.clientService.postClient(form.value)
      .subscribe(res => {
        this.getClients();
        this.resetForm(form);
      });
    }
  }

  editClient(client: Client) {
    this.clientService.selectedClient = client;
  }

  deleteClient(id: string) {
    this.clientService.deleteClient(id)
        .subscribe(res => {
          this.getClients();
        });
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.clientService.selectedClient = new Client();
    }
  }

}
