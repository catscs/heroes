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
  selector: 'hr-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss'],
})
export class HeroListComponent implements OnInit, OnDestroy {
  private subs?: Subscription;
  displayedColumns: string[] = COLUMNS_TABLE_HERO;
  dataSource = new MatTableDataSource<Hero>();
  loading: boolean = false;
  resetSearch: boolean = false;

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
    this.heroService.getAllHeroes().subscribe(
      (heroes: Hero[]) => {
        this.dataSource.data = heroes.reverse();
        this.loading = false;
      },
      (error) => {
        this.snackBarService.openSnackBar(error.message);
      }
    );
  };

  getSearchHeroes = (name: string) => {
    this.parameterReset();
    this.subs = this.heroService.getSearchHeroes(name).subscribe(
      (heroes: Hero[]) => {
        this.dataSource.data = heroes;
        this.loading = false;
        this.showAlertSearch(name);
      },
      (error) => {
        this.snackBarService.openSnackBar(error.message);
      }
    );
  };

  deleteHero = (id: number) => {
    this.loading = true;
    this.heroService.deleteHero(id).subscribe(
      () => {
        this.getAllHeroes();
        this.snackBarService.openSnackBar(TEXT_DELETE_SUCCESS);
      },
      (error) => {
        this.snackBarService.openSnackBar(error.message);
      }
    );
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
    this.resetSearch = false;
  };

  showAlertSearch = (name: string) => {
    this.resetSearch = true;
    this.snackBarService.openSnackBar(
      `${RESULT_SEARCH} ${name}`,
      'Close',
      5000
    );
  };

  ngOnDestroy(): void {
    this.subs?.unsubscribe();
  }
}
