import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlwarComponent } from './pages/alwar/alwar.component';
import { Alwar2Component } from './pages/alwar2/alwar2.component';

const routes: Routes = [
  {
    path: "alwar", component: AlwarComponent
  },
  {
    path: "alwar2", component: Alwar2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatesRoutingModule {
}
