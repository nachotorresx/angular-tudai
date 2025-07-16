import { Component, OnInit } from '@angular/core';
import { Mensaje } from '../reactive-form/Mensaje';
import { MensajesService } from '../servicies/mensajes.service';

@Component({
  selector: 'app-ntburgers-about',
  standalone: false,
  templateUrl: './ntburgers-about.component.html',
  styleUrl: './ntburgers-about.component.scss'
})

export class NtburgersAboutComponent implements OnInit {

  mensajes: Mensaje[] = [];

  constructor(private mensajesService: MensajesService) { }

  ngOnInit(): void {
    this.mensajesService.obtenerMensajes().subscribe({
      next: (data) => this.mensajes = data,
      error: (err) => console.error('Error al cargar mensajes', err)
    });
  }
}
