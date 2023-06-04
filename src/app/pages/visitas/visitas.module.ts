import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitasRoutingModule } from './visitas-routing.module';
import { ActualVisitaComponent } from './actual-visita/actual-visita.component';
import { NbButtonModule, NbCardModule   , NbTreeGridModule } from '@nebular/theme';
import { DialogCommentComponent } from './actual-visita/dialog-comment/dialog-comment.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        ActualVisitaComponent,
        DialogCommentComponent,

    ],
    imports: [
        CommonModule,
        VisitasRoutingModule,
        NbCardModule,
        NbTreeGridModule,
        NbButtonModule,
        FormsModule,
    ]
})
export class VisitasModule { }