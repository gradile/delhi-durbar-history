import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlwarComponent } from './pages/alwar/alwar.component';

const routes: Routes = [
  {
    path: "alwar", component: AlwarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatesRoutingModule {
}
