import { Component, OnInit } from '@angular/core';
import { Zoo } from 'src/app/models/zoo.model';

@Component({
  selector: 'app-zoo',
  templateUrl: './zoo.component.html',
})
export class ZooComponent implements OnInit {

  zoo: Zoo = {
    _id: '50013d60c8ed2140604dcb2d',
    name: 'Zoologico Pandora',
    description: 'Bienvenido a nuestro zoologico el cual contiene los animales mas exótico de la region',
    email: 'zoo@zoo.com',
    nit: '338,854-3'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
