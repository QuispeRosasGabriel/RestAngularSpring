import { Component, OnInit } from '@angular/core';
import { Plato } from 'src/app/models/plato.js';
import { PlatoService } from 'src/app/services/plato.service';
import Swal from 'sweetalert2';

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

  delete(plato: Plato): void {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    swalWithBootstrapButtons.fire({
      title: 'Estas Seguro?',
      text: "No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.platoService.delete(plato.id).subscribe(
          response => {
            this.platos = this.platos.filter(
              pla => pla !== plato)
            swalWithBootstrapButtons.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          }
        )
      }
    })
  }

}
