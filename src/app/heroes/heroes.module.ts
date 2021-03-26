import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeroesRoutingModule } from '@hero/heroes-routing.module';
import { HeroesListComponent } from '@hero/components/heroes-list/heroes-list.component';
import { HeroSearchComponent } from '@hero/components/hero-search/hero-search.component';
import { HeroFormComponent } from '@hero/components/hero-form/hero-form.component';
import { FormComponent } from '@hero/components/form/form.component';
import { HeroService } from '@hero/services/hero.service';
import { CapitalLettersDirective } from '@hero/directives/capital-letters.directive';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    HeroesListComponent,
    HeroSearchComponent,
    CapitalLettersDirective,
    HeroFormComponent,
    FormComponent,
    CapitalLettersDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
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
