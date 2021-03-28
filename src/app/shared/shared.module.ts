import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import { MenuService } from '@shared/services/menu.service';
import { NavComponent } from '@shared/nav/nav.component';

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
  providers: [MenuService],
})
export class SharedModule {}
