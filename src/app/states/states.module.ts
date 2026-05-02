import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatesRoutingModule } from './states-routing.module';
import { AlwarComponent } from './pages/alwar/alwar.component';


@NgModule({
  declarations: [
    AlwarComponent
  ],
  imports: [
    CommonModule,
    StatesRoutingModule
  ]
})
export class StatesModule { }
