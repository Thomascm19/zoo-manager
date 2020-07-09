import { Component, OnInit } from '@angular/core';
import { PackageService } from 'src/app/services/package.service';
import { Package } from 'src/app/models/package.model';
import { NgForm } from '@angular/forms';
import { ClientService } from 'src/app/services/client.service';
import { ClientComponent } from '../client/client.component';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html'
})
export class PackageComponent implements OnInit {

  loading: boolean;
  clientComponent: ClientComponent;
  constructor(public packageService: PackageService,
              public clientService: ClientService) {
                this.clientComponent = new ClientComponent(this.clientService);
                this.loading = true;
  }

  ngOnInit(): void {
    this.getPackages();
    this.clientComponent.getClients();
  }

  getPackages() {
    this.packageService.getPackages()
      .subscribe(res => {
       this.packageService.packages = res as Package[];
       this.loading = false;
      });
  }

  addPackage(form?: NgForm) {
    if (form.value._id) {
      this.packageService.putPackage(form.value)
        .subscribe(res => {
          this.getPackages();
          this.resetForm(form);
        });
    } else {
    this.packageService.postPackage(form.value)
      .subscribe(res => {
        this.getPackages();
        this.resetForm(form);
      });
    }
  }

  editPackage(pack: Package) {
    this.packageService.selectedPackage._id = pack._id;
    this.packageService.selectedPackage.name = pack.name;
    this.packageService.selectedPackage.description = pack.description;
    this.packageService.selectedPackage.price = pack.price;
    this.packageService.selectedPackage.client = pack.client._id;
  }

  deletePackage(id: string) {
    this.packageService.deletePackage(id)
        .subscribe(res => {
          this.getPackages();
        });
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.packageService.selectedPackage = new Package();
    }
  }
}
