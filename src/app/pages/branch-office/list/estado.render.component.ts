import { Component, Input, OnInit } from "@angular/core";

import { ViewCell } from "ng2-smart-table";

@Component({
  template: ` {{ renderValue }} `,
})
export class EstadoRendererComponent implements ViewCell, OnInit {
  renderValue: string;

  @Input() value: any;
  @Input() rowData: any;

  ngOnInit() {
    if (this.value && this.value.nombre) {
      this.renderValue = this.value.nombre;
    } else {
      this.renderValue = "";
    }
  }
}
