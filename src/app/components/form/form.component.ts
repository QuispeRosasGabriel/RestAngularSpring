import { Component, OnInit } from '@angular/core';
import { Plato } from 'src/app/models/plato';
import { PlatoService } from 'src/app/services/plato.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  private plato: Plato = new Plato();

  constructor(private platoService: PlatoService, private router: Router) { }

  ngOnInit() {
  }

  create(): void {
    this.platoService.create(this.plato).subscribe(
      response => this.router.navigate(['platos'])
    )
  }

}
