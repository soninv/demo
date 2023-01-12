import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BadComponent } from './bad/bad.component';
import { ColorComponent } from './color/color.component';
import { GoodComponent } from './good/good.component';

const routes: Routes = [
  {
    path: 'good',
    component: GoodComponent
  },
  {
    path: 'bad',
    component: BadComponent
  },
  {
    path: 'color',
    component: ColorComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
