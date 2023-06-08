import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'ngx-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent {
  emailPattern: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  email: string = 'edulds1989@gmail.com';
  password: string = '1234';
  InicioStatus: string;
  loginUrl = 'http://localhost:5235/ServicioPersonas';

  constructor(private http: HttpClient, private apiServices: ApiService) { }

  login() {
    if (!this.email.match(this.emailPattern)) {
      // Si el correo no cumple el patrón establecido, establecer el estado como "failure"
      this.InicioStatus = 'failure';
      return;
    }

    const credentials = btoa(this.email + ':' + this.password);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + credentials
    });

    const httpOptions = {
      headers: headers
    };

    


    // this.http.get(this.loginUrl, { 
    //   httpOptions,
    //   // params: { email: this.email, password: this.password }
    // })
    //   .subscribe(
    //     response => {
    //       // Manejar la respuesta del servidor

    //       // Si el inicio de sesión fue exitoso, establecer el estado como "success"
    //       this.InicioStatus = 'success';
    //     },
    //     error => {
    //       // Manejar el error del servidor

    //       // Si hubo un error en el inicio de sesión, establecer el estado como "failure"
    //       this.InicioStatus = 'failure';
    //     }
    //   );

    this.apiServices.callServices(this.loginUrl,'get', {})
          .subscribe(
            (response) => {
              console.log('Response ApiService:', response);
              // Hacer algo con la respuesta del servicio
            },
            (error) => {
              console.error('Error ApiService:', error);
              // Manejar el error de la solicitud
            }
          );
  }
}
