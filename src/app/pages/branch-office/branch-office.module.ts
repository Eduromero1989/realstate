import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../shared/shared.module";
import { EstateRoutingModule } from "./branch-office-routing.module";
import { ListComponent } from "./list/list.component";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { NbButtonModule, NbCardModule } from "@nebular/theme";
import { EstadoEditorComponent } from "./list/estado.editor.component";
import { EstadoRendererComponent } from "./list/estado.render.component";
import { ConfirmationDialogComponent } from "./list/confirm.modal.component";

@NgModule({
  declarations: [
    ListComponent,
    ConfirmationDialogComponent,
    EstadoEditorComponent,
    EstadoRendererComponent,
  ],
  imports: [
    CommonModule,
    NbCardModule,
    NbButtonModule,
    Ng2SmartTableModule,
    EstateRoutingModule,
    SharedModule,
  ],
})
export class BranchOfficeModule {}
