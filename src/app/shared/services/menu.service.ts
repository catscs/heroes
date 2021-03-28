import { Menu } from '@shared/models/menu.model';

export class MenuService {
  private listMenu: Menu[] = [
    { title: 'Dashboard', url: '/dashboard', icon: 'grid_view' },
    { title: 'Heroes', url: '/heroes', icon: 'personal_injury' },
  ];

  getListMenu = (): Menu[] => {
    return [...this.listMenu];
  };
}
