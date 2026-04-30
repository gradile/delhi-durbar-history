import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { ElephantsIdentificationComponent } from './pages/elephants-identification/elephants-identification.component';
import { MainProcession1Component } from './pages/main-procession1/main-procession1.component';
import { MainProcession2Component } from './pages/main-procession2/main-procession2.component';
import { RetainersReviewComponent } from './pages/retainers-review/retainers-review.component';

const routes: Routes = [
  { path: 'mainProcession-1', component: MainProcession1Component},
  { path: 'mainProcession-2', component: MainProcession2Component},
  { path: 'elephants', component: ElephantsIdentificationComponent},
  { path: 'activities', component: ActivitiesComponent},
  { path: 'retainersReview', component: RetainersReviewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DurbarHistoryRoutingModule {
}
