import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { EstateRoutingModule } from './estate-routing.module';
import { NbButtonModule, NbCardModule, NbIconModule, NbTooltipModule } from '@nebular/theme';
import { CardComponent } from './card/card.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    ListComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    EstateRoutingModule,
    FormsModule,
    NbCardModule,
    NbTooltipModule,
    NbButtonModule,
    SharedModule,
    NbIconModule
  ]
})
export class EstateModule { }