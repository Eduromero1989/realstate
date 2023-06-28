import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { VisitaservicesService } from '../../../servicesvisita/visitaservices.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'ngx-solicitar',
  templateUrl: './solicitar.component.html',
  styleUrls: ['./solicitar.component.scss']
})
export class SolicitarComponent implements OnInit {

  angForm: FormGroup;
  submitted = false;
  fecha: DatePipe;
  realizada: boolean;

  constructor(private fb: FormBuilder, private visitaservices: VisitaservicesService) {
  }
  visita = "";
  get f() { return this.angForm.controls; }

  ngOnInit(): void {
    this.angForm = this.fb.group({
      fecha: ['', [
                Validators.required,
                // validates date format yyyy-mm-dd with regular expression
                Validators.pattern(/^(000[1-9]|00[1-9]\d|0[1-9]\d\d|100\d|10[1-9]\d|1[1-9]\d{2}|[2-9]\d{3}|[1-9]\d{4}|1\d{5}|2[0-6]\d{4}|27[0-4]\d{3}|275[0-6]\d{2}|2757[0-5]\d|275760)-(0[1-9]|1[012])-(0[1-9]|[12]\d|3[01])T(0\d|1\d|2[0-4]):(0\d|[1-5]\d)(?::(0\d|[1-5]\d))?(?:.(00\d|0[1-9]\d|[1-9]\d{2}))?$/)

            ]],
      realizada: ['', Validators.required]
    });
  }

  Post(): void {
    this.submitted = true;
    if (this.angForm.valid) {
      this.fecha = this.angForm.value;
      if(this.fecha['realizada'] == 'true'){
        this.realizada = true;
      }else{
        this.realizada = false;
      }
      let datos = {
        "idOferta": 8,
        "idPersona": 1,
        "fecha": this.fecha['fecha'],
        "realizada": this.realizada,
        "comentario": ""
      }
      
      this.visitaservices.ServicesVisit("http://localhost:5235/ServicioVisitas", "post", datos).subscribe(
        (response) => {
          this.visita = JSON.parse(response.completa);
          if(this.visita){
            alert("La visita se asignó correctamente");
          }else{
            alert("La visita se asignó correctamente");
          }
        }
      );
    }
  }
}
