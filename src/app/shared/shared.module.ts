import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    MatListModule,
    MatIconModule,
    RouterModule,
  ],
  exports: [NavComponent],
})
export class SharedModule {}
