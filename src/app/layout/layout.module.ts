import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutRoutingModule } from './layout-routing.module';
import { MenuComponent } from './menu/menu.component';
import { MenuButtonsComponent } from './menu/buttons/menu-buttons/menu-buttons.component';
import { HistoryButtonsComponent } from './menu/buttons/history-buttons/history-buttons.component';
import { BeauGesteButtonsComponent } from './menu/buttons/beau-geste-buttons/beau-geste-buttons.component';
import { HomeButtonsComponent } from './menu/buttons/home-buttons/home-buttons.component';
import { BeauGesteSetsComponent } from './menu/buttons/beau-geste-sets/beau-geste-sets.component';
import { ChaptersBtnComponent } from './menu/buttons/chapters-btn/chapters-btn.component';
import { StatesComponent } from './menu/buttons/states-button/states.component';
import { StatesPagesButtonsComponent } from './menu/buttons/states-pages-buttons/states-pages-buttons.component';


@NgModule({
  declarations: [
    MenuComponent,
    MenuButtonsComponent,
    HistoryButtonsComponent,
    BeauGesteButtonsComponent,
    HomeButtonsComponent,
    BeauGesteSetsComponent,
    ChaptersBtnComponent,
    StatesComponent,
    StatesPagesButtonsComponent
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
