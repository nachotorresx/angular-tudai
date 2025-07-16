import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Mensaje } from './Mensaje';
import { MensajesService } from '../servicies/mensajes.service';

@Component({
  selector: 'app-reactive-form',
  standalone: false,
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent {

  @Output() formSubmitted = new EventEmitter();

  formularioContacto = new FormGroup({
    nombre: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    telefono: new FormControl(''),
    mensaje: new FormControl('', Validators.required)
  });

  mensajes: Mensaje[] = [];

  constructor(private mensajesService: MensajesService) { }

  ngOnInit(): void {
    this.obtenerMensajes();
  }

  onSubmit() {
    if (this.formularioContacto.valid) {
      const nuevoMensaje = this.formularioContacto.value as Mensaje;

      this.mensajesService.enviarMensaje(nuevoMensaje).subscribe({
        next: (response) => {
          alert('Mensaje enviado con éxito: ' + response.mensaje);
          this.formSubmitted.emit(nuevoMensaje);
          this.obtenerMensajes();
          this.formularioContacto.reset();
        },
        error: (error) => {
          console.error('Error al enviar el mensaje', error);
        }
      });
    } else {
      console.log('Formulario inválido');
    }
  }

  obtenerMensajes() {
    this.mensajesService.obtenerMensajes().subscribe({
      next: (mensajes) => this.mensajes = mensajes,
      error: (error) => console.error('Error al obtener los mensajes', error)
    });
  }

  deleteMensaje(id: string) {
    this.mensajesService.eliminarMensaje(id).subscribe({
      next: () => this.obtenerMensajes(),
      error: (error) => console.error('Error al eliminar el mensaje', error)
    });
  }
}
