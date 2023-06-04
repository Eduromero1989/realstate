import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { EstateRoutingModule } from './estate-routing.module';
import { NbCardModule } from '@nebular/theme';
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
    SharedModule
  ]
})
export class EstateModule { }
