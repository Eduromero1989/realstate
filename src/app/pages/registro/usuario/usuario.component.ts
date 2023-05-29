import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  registroForm: FormGroup;
  registroExitoso: boolean = false;

  constructor() {
    this.registroForm = new FormGroup({
      nombres: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
      apellidos: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
      identificacion: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
      correo: new FormControl('', [Validators.required, Validators.pattern('[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}')]),
      celular: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
      direccion: new FormControl('', Validators.required),
      contrasena: new FormControl('', Validators.required),
      confirmacion: new FormControl('', Validators.required)
    });
  }

  guardarUsuario() {
    if (this.registroForm.invalid) {
      this.registroForm.markAllAsTouched();
      return;
    }

    if (this.registroForm.get('contrasena').value !== this.registroForm.get('confirmacion').value) {
      this.registroForm.get('confirmacion').setErrors({ 'notMatched': true });
      return;
    }

    // Resto de la lógica para guardar el usuario

    this.registroExitoso = true;
  }

  cancelar() {
    // Lógica para cancelar el registro
  }
  ngOnInit(): void {
  }

}
