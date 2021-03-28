import { MenuService } from '@shared/services/menu.service';
import { Menu } from './../models/menu.model';
import { Component } from '@angular/core';

@Component({
  selector: 'hr-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  listMenu: Menu[] = [];

  constructor(private menuService: MenuService) {
    this.listMenu = this.menuService.getListMenu();
  }
}
