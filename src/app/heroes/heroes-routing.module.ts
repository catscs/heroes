import { HeroFormComponent } from '@hero/components/hero-form/hero-form.component';
import { HeroesListComponent } from '@hero/components/heroes-list/heroes-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HeroesListComponent,
  },
  { path: 'form', component: HeroFormComponent },
  { path: 'form/:id', component: HeroFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroesRoutingModule {}
