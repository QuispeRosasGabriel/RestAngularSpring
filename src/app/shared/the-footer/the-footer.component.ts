import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'the-footer',
  templateUrl: './the-footer.component.html',
  styleUrls: ['./the-footer.component.css']
})
export class TheFooterComponent implements OnInit {

  autor: any = { nombre: 'Gabriel', apellido: 'Quispe' }

  constructor() { }

  ngOnInit() {
  }

}
