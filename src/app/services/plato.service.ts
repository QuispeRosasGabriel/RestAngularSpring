import { Injectable } from '@angular/core';
import { PLATOS } from '../components/platos/platos.json';
import { Plato } from '../models/plato.js';
//RxJs
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PlatoService {
  private urlEndPoint: string = 'http://localhost:8080/api/platos'
  constructor(private http: HttpClient) { }

  getPlatos(): Observable<Plato[]> {
    //return of(PLATOS);
    return this.http.get(this.urlEndPoint).pipe(
      map((response) => response as Plato[])
    );
  }

}
