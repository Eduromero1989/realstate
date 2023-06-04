import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  emailPattern: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  email: string;
  password: string;
  InicioStatus: string;

  constructor(private http: HttpClient) { }

  login() {
    if (!this.email.match(this.emailPattern)) {
      // Si el correo no cumple el patrón establecido, establecer el estado como "failure"
      this.InicioStatus = 'failure';
      return;
    }

    // Lógica para enviar la solicitud de inicio de sesión al servidor
    // Puedes usar el servicio HttpClient para enviar una solicitud POST a tu API de inicio de sesión

    // Ejemplo de código para enviar la solicitud utilizando HttpClient
    this.http.post('/login', { email: this.email, password: this.password })
      .subscribe(
        response => {
          // Manejar la respuesta del servidor

          // Si el inicio de sesion fue exitoso, establecer el estado como "success"
          this.InicioStatus = 'success';
        },
        error => {
          // Manejar el error del servidor

          // Si hubo un error en el Inicio de sesion, establecer el estado como "failure"
          this.InicioStatus = 'failure';
        }
      );
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
