import { HeroService } from './services/hero.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from '@hero/heroes-routing.module';
import { HeroesListComponent } from '@hero/components/heroes-list/heroes-list.component';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { HeroSearchComponent } from '@hero/components/hero-search/hero-search.component';
import { CapitalLettersDirective } from '@hero/directives/capital-letters.directive';

@NgModule({
  declarations: [
    HeroesListComponent,
    HeroSearchComponent,
    CapitalLettersDirective,
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MatTableModule,
    MatButtonModule,
    FlexLayoutModule,
    MatInputModule,
    MatIconModule,
  ],
  providers: [HeroService],
})
export class HeroesModule {}
