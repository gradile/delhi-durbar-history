import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { Part1Component } from './pages/part1/part1.component';
import { Part10Component } from './pages/part10/part10.component';
import { Part11Component } from './pages/part11/part11.component';
import { Part12Component } from './pages/part12/part12.component';
import { Part13Component } from './pages/part13/part13.component';
import { Part14Component } from './pages/part14/part14.component';
import { Part15Component } from './pages/part15/part15.component';
import { Part16Component } from './pages/part16/part16.component';
import { Part17Component } from './pages/part17/part17.component';
import { Part18Component } from './pages/part18/part18.component';
import { Part19Component } from './pages/part19/part19.component';
import { Part2Component } from './pages/part2/part2.component';
import { Part20Component } from './pages/part20/part20.component';
import { Part21Component } from './pages/part21/part21.component';
import { Part22Component } from './pages/part22/part22.component';
import { Part23Component } from './pages/part23/part23.component';
import { Part24Component } from './pages/part24/part24.component';
import { Part25Component } from './pages/part25/part25.component';
import { Part26Component } from './pages/part26/part26.component';
import { Part27Component } from './pages/part27/part27.component';
import { Part28Component } from './pages/part28/part28.component';
import { Part29Component } from './pages/part29/part29.component';
import { Part3Component } from './pages/part3/part3.component';
import { Part30Component } from './pages/part30/part30.component';
import { Part31Component } from './pages/part31/part31.component';
import { Part32Component } from './pages/part32/part32.component';
import { Part33Component } from './pages/part33/part33.component';
import { Part34Component } from './pages/part34/part34.component';
import { Part35Component } from './pages/part35/part35.component';
import { Part36Component } from './pages/part36/part36.component';
import { Part37Component } from './pages/part37/part37.component';
import { Part38Component } from './pages/part38/part38.component';
import { Part39Component } from './pages/part39/part39.component';
import { Part4Component } from './pages/part4/part4.component';
import { Part40Component } from './pages/part40/part40.component';
import { Part41Component } from './pages/part41/part41.component';
import { Part42Component } from './pages/part42/part42.component';
import { Part43Component } from './pages/part43/part43.component';
import { Part44Component } from './pages/part44/part44.component';
import { Part45Component } from './pages/part45/part45.component';
import { Part46Component } from './pages/part46/part46.component';
import { Part47Component } from './pages/part47/part47.component';
import { Part48Component } from './pages/part48/part48.component';
import { Part49Component } from './pages/part49/part49.component';
import { Part5Component } from './pages/part5/part5.component';
import { Part50Component } from './pages/part50/part50.component';
import { Part51Component } from './pages/part51/part51.component';
import { Part6Component } from './pages/part6/part6.component';
import { Part7Component } from './pages/part7/part7.component';
import { Part8Component } from './pages/part8/part8.component';
import { Part9Component } from './pages/part9/part9.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'chapter-1', component: Part1Component},
    { path: 'chapter-2', component: Part2Component},
    { path: 'chapter-3', component: Part3Component},
    { path: 'chapter-4', component: Part4Component},
    { path: 'chapter-5', component: Part5Component},
    { path: 'chapter-6', component: Part6Component},
    { path: 'chapter-7', component: Part7Component},
    { path: 'chapter-8', component: Part8Component},
    { path: 'chapter-9', component: Part9Component},
    { path: 'chapter-10', component: Part10Component},
    { path: 'chapter-11', component: Part11Component},
    { path: 'chapter-12', component: Part12Component},
    { path: 'chapter-13', component: Part13Component},
    { path: 'chapter-14', component: Part14Component},
    { path: 'chapter-15', component: Part15Component},
    { path: 'chapter-16', component: Part16Component},
    { path: 'chapter-17', component: Part17Component},
    { path: 'chapter-18', component: Part18Component},
    { path: 'chapter-19', component: Part19Component},
    { path: 'chapter-20', component: Part20Component},
    { path: 'chapter-21', component: Part21Component},
    { path: 'chapter-22', component: Part22Component},
    { path: 'chapter-23', component: Part23Component},
    { path: 'chapter-24', component: Part24Component},
    { path: 'chapter-25', component: Part25Component},
    { path: 'chapter-26', component: Part26Component},
    { path: 'chapter-27', component: Part27Component},
    { path: 'chapter-28', component: Part28Component},
    { path: 'chapter-29', component: Part29Component},
    { path: 'chapter-30', component: Part30Component},
    { path: 'chapter-31', component: Part31Component},
    { path: 'chapter-32', component: Part32Component},
    { path: 'chapter-33', component: Part33Component},
    { path: 'chapter-34', component: Part34Component},
    { path: 'chapter-35', component: Part35Component},
    { path: 'chapter-36', component: Part36Component},
    { path: 'chapter-37', component: Part37Component},
    { path: 'chapter-38', component: Part38Component},
    { path: 'chapter-39', component: Part39Component},
    { path: 'chapter-40', component: Part40Component},
    { path: 'chapter-41', component: Part41Component},
    { path: 'chapter-42', component: Part42Component},
    { path: 'chapter-43', component: Part43Component},
    { path: 'chapter-44', component: Part44Component},
    { path: 'chapter-45', component: Part45Component},
    { path: 'chapter-46', component: Part46Component},
    { path: 'chapter-47', component: Part47Component},
    { path: 'chapter-48', component: Part48Component},
    { path: 'chapter-49', component: Part49Component},
    { path: 'chapter-50', component: Part50Component},
    { path: 'chapter-51', component: Part51Component}
  ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeauGesteRoutingModule { }
