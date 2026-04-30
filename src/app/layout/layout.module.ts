import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutRoutingModule } from './layout-routing.module';
import { MenuComponent } from './menu/menu.component';
import { MenuButtonsComponent } from './menu/buttons/menu-buttons/menu-buttons.component';
import { HistoryButtonsComponent } from './menu/buttons/history-buttons/history-buttons.component';
import { BeauGesteButtonsComponent } from './menu/buttons/beau-geste-buttons/beau-geste-buttons.component';


@NgModule({
  declarations: [
    MenuComponent,
    MenuButtonsComponent,
    HistoryButtonsComponent,
    BeauGesteButtonsComponent
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
