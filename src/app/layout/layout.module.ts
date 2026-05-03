import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutRoutingModule } from './layout-routing.module';
import { MenuComponent } from './menu/menu.component';
import { MenuSectionComponent } from './menu/menu-section/menu-section.component';
@NgModule({
  declarations: [
    MenuComponent,
    MenuSectionComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    RouterModule,
  ],
  exports: [
    MenuComponent,
  ]
})
export class LayoutModule { }
