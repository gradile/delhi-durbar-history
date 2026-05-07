import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatesRoutingModule } from './states-routing.module';
import { AlwarComponent } from './pages/alwar/alwar.component';
import { SharedModule } from '@app/shared/shared.module';
import { Alwar2Component } from './pages/alwar2/alwar2.component';


@NgModule({
  declarations: [
    AlwarComponent,
    Alwar2Component
  ],
  imports: [
    CommonModule,
    StatesRoutingModule,
    SharedModule
  ]
})
export class StatesModule { }
