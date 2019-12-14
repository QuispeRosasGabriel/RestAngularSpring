import { Component, OnInit } from '@angular/core';
import { Plato } from 'src/app/models/plato';
import { PlatoService } from 'src/app/services/plato.service';
import { Router, ActivatedRoute } from '@angular/router';

//libreria de alertas
import swal from 'sweetalert2';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  private plato: Plato = new Plato();

  constructor(private platoService: PlatoService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cargarPlato()
  }

  cargarPlato(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if (id) {
        this.platoService.obtenerPlato(id).subscribe(
          (plato) => this.plato = plato
        )
      }
    })
  }

  create(): void {
    this.platoService.create(this.plato).subscribe(
      response => {
        if (confirm("Desea guardar los cambios?")) {
          this.router.navigate(['/platos'])
          swal.fire('Nuevo Plato', `Plato ${response.plato.nombre} creado con éxito`, 'success')
        }
      }
    )
  }
  update(): void {
    this.platoService.update(this.plato).subscribe(
      plato => {
        this.router.navigate(['/platos'])
        swal.fire('Plato Actualizado', `El plato ${plato.nombre} fue actualizado con éxito`, 'success')
      }
    )
  }
}
