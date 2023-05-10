import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  list = [
    {
      "id":"1053845",
      "nombre":"Sergio",
      "apellido":"Moreno",
      "telefono":"3103872"
    },
    {
      "id":"092737",
      "nombre":"Angey",
      "apellido":"Velez",
      "telefono":"31273728"
    },
    {
      "id":"1053845",
      "nombre":"Martin",
      "apellido":"Garcia",
      "telefono":"3103872"
    },
    {
      "id":"1053845",
      "nombre":"Paula",
      "apellido":"Rodriguez",
      "telefono":"3103872"
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
