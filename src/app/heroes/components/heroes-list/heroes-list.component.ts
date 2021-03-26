import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { SnackBarService } from '@core/services/snack-bar.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Hero } from '@hero/models/hero.model';
import { HeroService } from '@hero/services/hero.service';
import { deleteAlert } from '@core/utils/alert';

import {
  COLUMNS_TABLE_HERO,
  RESULT_SEARCH,
  TEXT_DELETE_SUCCESS,
} from '@core/utils/constants';

@Component({
  selector: 'hr-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss'],
})
export class HeroesListComponent implements OnInit, OnDestroy {
  private subs?: Subscription;
  displayedColumns: string[] = COLUMNS_TABLE_HERO;
  dataSource = new MatTableDataSource<Hero>();
  loading: boolean = false;

  @ViewChild('scheduledOrdersPaginator') set paginator(pager: MatPaginator) {
    if (pager) this.dataSource.paginator = pager;
  }

  constructor(
    private heroService: HeroService,
    private snackBarService: SnackBarService
  ) {}

  ngOnInit(): void {
    this.getAllHeroes();
  }

  getAllHeroes = () => {
    this.parameterReset();
    this.heroService.getAllHeroes().subscribe((heroes: Hero[]) => {
      this.dataSource.data = heroes.reverse();
      this.loading = false;
    });
  };

  getSearchHeroes = (name: string) => {
    this.parameterReset();
    setTimeout(() => {
      this.subs = this.heroService
        .getSearchHeroes(name)
        .subscribe((heroes: Hero[]) => {
          this.dataSource.data = heroes;
          this.loading = false;
          this.showAlertSearch(name);
        });
    }, 1000);
  };

  deleteHero = (id: number) => {
    this.loading = true;
    this.heroService.deleteHero(id).subscribe(() => {
      this.getAllHeroes();
      this.snackBarService.openSnackBar(TEXT_DELETE_SUCCESS);
    });
  };

  clickDeleteHero = (id: number) => {
    deleteAlert<number>(id, this.deleteHero);
  };

  searchHero = (name: string) => {
    name !== '' ? this.getSearchHeroes(name) : this.getAllHeroes();
  };

  parameterReset = () => {
    this.dataSource.data = [];
    this.loading = true;
  };

  showAlertSearch = (name: string) => {
    this.snackBarService
      .openSnackBar(`${RESULT_SEARCH} ${name}`, 'Reset search', 5000)
      .onAction()
      .subscribe(() => this.getAllHeroes());
  };

  ngOnDestroy(): void {
    this.subs?.unsubscribe();
  }
}
