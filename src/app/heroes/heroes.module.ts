import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';

import { HeroesRoutingModule } from '@hero/heroes-routing.module';
import { HeroListComponent } from '@hero/components/hero-list/hero-list.component';
import { HeroSearchComponent } from '@hero/components/hero-search/hero-search.component';
import { HeroPageComponent } from '@hero/components/hero-form/presentation/pages/hero-page.component';
import { FormComponent } from '@hero/components/hero-form/presentation/views/form.component';
import { HeroService } from '@hero/services/hero.service';
import { CapitalLettersDirective } from '@hero/directives/capital-letters.directive';

@NgModule({
  declarations: [
    HeroListComponent,
    HeroSearchComponent,
    CapitalLettersDirective,
    HeroPageComponent,
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
