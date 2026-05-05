import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatesRoutingModule } from './states-routing.module';
import { AlwarComponent } from './pages/alwar/alwar.component';
import { SharedModule } from '@app/shared/shared.module';


@NgModule({
  declarations: [
    AlwarComponent
  ],
  imports: [
    CommonModule,
    StatesRoutingModule,
    SharedModule
  ]
})
export class StatesModule { }
