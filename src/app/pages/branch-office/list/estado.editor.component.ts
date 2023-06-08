import { Component, OnInit } from "@angular/core";
import { DefaultEditor } from "ng2-smart-table";

@Component({
  template: `
    <select
      [ngModel]="cell.getValue()"
      (ngModelChange)="onChange($event)"
      style="width:100%;padding:5px;border-color:rgb(206, 212, 218);"
    >
      <option *ngFor="let option of cellValueOptions" [value]="option.id">
        {{ option.nombre }}
      </option>
    </select>
  `,
})
export class EstadoEditorComponent extends DefaultEditor implements OnInit {
  cellValueOptions: any[] = [
    { id: "1", nombre: "Activo" },
    { id: "2", nombre: "Inactivo" },
    // Agrega más opciones según sea necesario
  ];

  ngOnInit() {
    this.cell.setValue(this.cellValueOptions[0]);
  }

  onChange(value: any) {
    this.cell.setValue(
      this.cellValueOptions.find((option) => option.id === value)
    );
  }
}
