import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SectionTitleComponent } from './section-title/section-title.component';
import { PrintComponent } from './print/print.component';


@NgModule({
  declarations: [
    SectionTitleComponent,
    PrintComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    SectionTitleComponent,
    PrintComponent
  ]
})
export class SharedModule { }
