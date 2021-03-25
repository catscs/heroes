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
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { HeroFormComponent } from '@hero/components/hero-form/hero-form.component';
import { FormComponent } from '@hero/components/form/form.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeroesListComponent,
    HeroSearchComponent,
    CapitalLettersDirective,
    HeroFormComponent,
    FormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HeroesRoutingModule,
    MatTableModule,
    MatButtonModule,
    FlexLayoutModule,
    MatInputModule,
    MatIconModule,
    MatProgressBarModule,
    MatCardModule,
    MatFormFieldModule,
    MatPaginatorModule,
  ],
  providers: [HeroService],
})
export class HeroesModule {}
