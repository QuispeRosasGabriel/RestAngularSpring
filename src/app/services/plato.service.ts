import { Injectable } from '@angular/core';
import { Plato } from '../models/plato.js';
//RxJs
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PlatoService {
  private urlEndPoint: string = 'http://localhost:8080/api/platos'

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })

  constructor(private http: HttpClient) { }

  getPlatos(): Observable<Plato[]> {
    //return of(PLATOS);
    return this.http.get(this.urlEndPoint).pipe(
      map((response) => response as Plato[])
    );
  }

  create(plato: Plato): Observable<Plato> {
    return this.http.post<Plato>(this.urlEndPoint, plato, { headers: this.httpHeaders })
  }

  obtenerPlato(id): Observable<Plato> {
    return this.http.get<Plato>(`${this.urlEndPoint}/${id}`)
  }

  update(plato: Plato): Observable<Plato> {
    return this.http.put<Plato>(`${this.urlEndPoint}/${plato.id}`, plato, { headers: this.httpHeaders })
  }

  delete(id: number): Observable<Plato> {
    return this.http.delete<Plato>(`${this.urlEndPoint}/${id}`, { headers: this.httpHeaders })
  }

}
