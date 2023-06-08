import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FilterByPipe } from "./pipes/filter-by.pipe";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
@NgModule({
  declarations: [FilterByPipe],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [FilterByPipe, FormsModule, ReactiveFormsModule],
})
export class SharedModule {}
