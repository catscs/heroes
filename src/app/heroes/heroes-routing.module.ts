import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroListComponent } from '@hero/components/hero-list/hero-list.component';
import { HeroPageComponent } from '@hero/components/hero-form/presentation/pages/hero-page.component';

const routes: Routes = [
  {
    path: '',
    component: HeroListComponent,
  },
  { path: 'form', component: HeroPageComponent },
  { path: 'form/:id', component: HeroPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroesRoutingModule {}
