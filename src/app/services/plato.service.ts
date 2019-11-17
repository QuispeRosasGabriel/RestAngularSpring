import { Injectable } from '@angular/core';
import { PLATOS } from '../components/platos/platos.json';
import { Plato } from '../models/plato.js';
//RxJs
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlatoService {

  constructor() { }

  getPlatos(): Observable<Plato[]> {
    return of(PLATOS);
  }

}
