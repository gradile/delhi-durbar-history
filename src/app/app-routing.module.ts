import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'beau-geste',
    loadChildren: () =>
      import('./beau-geste/beau-geste.module').then(m => m.BeauGesteModule)
  },
  { path: 'durbar-history',
    loadChildren: () =>
      import('./durbar-history/durbar-history.module').then(m => m.DurbarHistoryModule)
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
