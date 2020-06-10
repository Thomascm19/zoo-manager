import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { Client } from 'src/app/models/client.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  providers: [ClientService]
})
export class ClientsComponent implements OnInit {

  constructor(public clientService: ClientService) { }

  ngOnInit(): void {
    this.getClient();
  }

  getClient() {
    this.clientService.getClient()
      .subscribe(res => {
       console.log(this.clientService.client = res as Client[]);
      });
  }

  addClient(form?: NgForm) {
    if (form.value.id) {
      this.clientService.putCLient(form.value)
        .subscribe(res => {
          this.getClient();
          this.resetForm();
        });
    } else {
    this.clientService.postCLient(form.value)
      .subscribe(res => {
        this.getClient();
        this.resetForm();
      });
    }
  }

  editClient(client: Client) {
    this.clientService.selectedClient = client;
  }

  deleteClient(id: string) {
    this.clientService.deleteClient(id)
        .subscribe(res => {
          this.getClient();
          console.log(res);
        });
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.clientService.selectedClient = new Client();
    }
  }
}



