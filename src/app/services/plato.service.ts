import { Injectable } from '@angular/core';
import { Plato } from '../models/plato.js';
//RxJs
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from "rxjs/operators";
import { Router } from "@angular/router";

import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class PlatoService {
  private urlEndPoint: string = 'http://localhost:8080/api/platos'

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })

  constructor(private http: HttpClient, private router: Router) { }

  getPlatos(): Observable<Plato[]> {
    //return of(PLATOS);
    return this.http.get(this.urlEndPoint).pipe(
      map((response) => response as Plato[])
    );
  }

  create(plato: Plato): Observable<any> {
    return this.http.post<any>(this.urlEndPoint, plato,
      { headers: this.httpHeaders }).pipe(
        catchError(e => {
          console.error(e.error.mensaje)
          Swal.fire(
            e.error.mensaje, e.error.error, "error")
          return throwError(e);
        })
      )
  }

  obtenerPlato(id): Observable<Plato> {
    return this.http.get<Plato>(`${this.urlEndPoint}/${id}`).pipe(
      catchError(e => {
        this.router.navigate(['/platos']);
        console.error(e.error.mensaje);
        Swal.fire('Error al editar', e.error.mensaje, "error");
        return throwError(e);
      })
    )
  }

  update(plato: Plato): Observable<Plato> {
    return this.http.put<Plato>(`${this.urlEndPoint}/${plato.id}`,
      plato, { headers: this.httpHeaders })
      .pipe(
        catchError(e => {
          console.error(e.error.mensaje)
          Swal.fire(
            e.error.mensaje, e.error.error, "error")
          return throwError(e);
        }))
  }

  delete(id: number): Observable<Plato> {
    return this.http.delete<Plato>(`${this.urlEndPoint}/${id}`, { headers: this.httpHeaders })
      .pipe(
        catchError(e => {
          console.error(e.error.mensaje)
          Swal.fire(
            e.error.mensaje, e.error.error, "error")
          return throwError(e);
        }))

  }

}
