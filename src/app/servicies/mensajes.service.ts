import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mensaje } from '../reactive-form/Mensaje';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {
  
  private apiUrl = 'https://68756ede814c0dfa65388b2d.mockapi.io/burgers/mensajes';

  constructor(private http: HttpClient) { }

  obtenerMensajes(): Observable<Mensaje[]> {
    return this.http.get<Mensaje[]>(this.apiUrl);
  }

  enviarMensaje(mensaje: Mensaje): Observable<Mensaje> {
    return this.http.post<Mensaje>(this.apiUrl, mensaje);
  }

  eliminarMensaje(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}