import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SelectButtonModule,
    TableModule
  ],
  exports: [
    SelectButtonModule,
    TableModule
  ]
})

export class PrimeuiModule { }
