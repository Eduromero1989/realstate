import { Component, Input } from "@angular/core";
import { NbDialogRef } from "@nebular/theme";

@Component({
  template: `
    <nb-card>
      <nb-card-header>{{ title }}</nb-card-header>
      <nb-card-body>{{ message }}</nb-card-body>
      <nb-card-footer>
        <button nbButton status="danger" (click)="confirm()">Confirmar</button>
        <button nbButton status="basic" (click)="dismiss()">Cancelar</button>
      </nb-card-footer>
    </nb-card>
  `,
})
export class ConfirmationDialogComponent {
  @Input() title: string;
  @Input() message: string;

  constructor(private ref: NbDialogRef<ConfirmationDialogComponent>) {}

  confirm() {
    this.ref.close(true);
  }

  dismiss() {
    this.ref.close(false);
  }
}
