import { Component, OnInit } from '@angular/core';
import { Plato } from 'src/app/models/plato';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  private plato: Plato = new Plato();

  constructor() { }

  ngOnInit() {
  }

}
