import { Component, OnInit } from '@angular/core';
import { PLATOS } from '../platos/platos.json';
import { Plato } from 'src/app/models/plato.js';

@Component({
  selector: 'app-platos',
  templateUrl: './platos.component.html',
  styleUrls: ['./platos.component.css']
})
export class PlatosComponent implements OnInit {

  platos: Plato[];

  constructor() { }

  ngOnInit() {
    this.platos = PLATOS;
  }

}
