import { Component, OnInit } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { IBranchOffice } from "../branch-office.interface";
import { BranchOfficeData } from "../../../@core/data/branch-office";
import { EstadoRendererComponent } from "./estado.render.component";
import { EstadoEditorComponent } from "./estado.editor.component";
import { NbDialogService } from "@nebular/theme";
import { ConfirmationDialogComponent } from "./confirm.modal.component";

@Component({
  selector: "ngx-list-branch-office",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: "ID",
        type: "number",
        editable: false,
        addable: false,
      },
      nombre: {
        title: "Nombre",
        type: "string",
      },
      direccion: {
        title: "Direccion",
        type: "string",
      },
      telefono: {
        title: "Telefono",
        type: "string",
      },
      estado: {
        title: "Estado",
        type: "custom",
        filter: false,
        renderComponent: EstadoRendererComponent,
        editor: {
          type: "custom",
          component: EstadoEditorComponent,
        },
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  branchOffices: IBranchOffice[] = [];

  constructor(
    private branchOffice: BranchOfficeData,
    private dialogService: NbDialogService
  ) {}

  ngOnInit(): void {
    this.branchOffice
      .getBranchOffices()
      .subscribe((branchOffices: IBranchOffice[]) => {
        this.source.load(branchOffices);
        this.branchOffices = branchOffices;
      });
  }

  onEditConfirm(event: any) {
    this.dialogService
      .open(ConfirmationDialogComponent, {
        context: {
          title: "Confirmar Edición",
          message: "¿Estás seguro de que deseas editar este elemento?",
        },
      })
      .onClose.subscribe(async (confirmed: boolean) => {
        if (confirmed) {
          try {
            const item = event.newData;
            await this.branchOffice.updateBranchOffice(item).toPromise();
            this.source.refresh();
          } catch (error) {
            event.confirm.reject();
          }
        } else {
          event.confirm.reject();
        }
      });
  }

  onDeleteConfirm(event: any) {
    this.dialogService
      .open(ConfirmationDialogComponent, {
        context: {
          title: "Confirmar Eliminación",
          message: "¿Estás seguro de que deseas eliminar este elemento?",
        },
      })
      .onClose.subscribe(async (confirmed: boolean) => {
        if (confirmed) {
          try {
            const item = event.data;
            this.source.remove(item);
            await this.branchOffice.deleteBranchOffice(item).toPromise();
          } catch (error) {
            event.confirm.reject();
          }
        } else {
          event.confirm.reject();
        }
      });
  }

  createConfirm(event: any) {
    const item = event.newData;
    item.id = new Date().getTime();
    event.confirm.reject();
    this.branchOffice.createBranchOffice(item).subscribe(() => {
      this.source.refresh();
    });
  }
}
