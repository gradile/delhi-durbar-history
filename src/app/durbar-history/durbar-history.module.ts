import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { DurbarHistoryRoutingModule } from './durbar-history-routing.module';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { ElephantsIdentificationComponent } from './pages/elephants-identification/elephants-identification.component';
import { MainProcession1Component } from './pages/main-procession1/main-procession1.component';
import { MainProcession2Component } from './pages/main-procession2/main-procession2.component';
import { RetainersReviewComponent } from './pages/retainers-review/retainers-review.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ActivitiesComponent,
    ElephantsIdentificationComponent,
    MainProcession1Component,
    MainProcession2Component,
    RetainersReviewComponent
  ],
  imports: [
    CommonModule,
    DurbarHistoryRoutingModule,
    SharedModule
  ]
})
export class DurbarHistoryModule { }
