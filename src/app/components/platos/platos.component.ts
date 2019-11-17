import { Component, OnInit } from '@angular/core';
import { Plato } from 'src/app/models/plato.js';
import { PlatoService } from 'src/app/services/plato.service';

@Component({
  selector: 'app-platos',
  templateUrl: './platos.component.html',
  styleUrls: ['./platos.component.css']
})
export class PlatosComponent implements OnInit {

  platos: Plato[];

  constructor(private platoService: PlatoService) { }

  ngOnInit() {
    this.platoService.getPlatos().subscribe(
      platos => this.platos = platos
    );
  }

}
