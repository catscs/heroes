import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Hero } from '@hero/models/hero.model';
import { HeroService } from '@hero/services/hero.service';
import { Message, Type } from '@hero/models/message.model';
import { deleteAlert } from '@core/utils/alert';
import { getMessage } from '@core/utils/factory';
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
export class HeroesListComponent implements OnInit {
  displayedColumns: string[] = COLUMNS_TABLE_HERO;
  dataSource = new MatTableDataSource<Hero>();
  loading: boolean = false;
  message?: Message;

  @ViewChild('scheduledOrdersPaginator') set paginator(pager: MatPaginator) {
    if (pager) this.dataSource.paginator = pager;
  }

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getAllHeroes();
  }

  getAllHeroes = () => {
    this.parameterReset();
    this.message = undefined;
    this.heroService.getAllHeroes().subscribe((heroes: Hero[]) => {
      this.dataSource.data = heroes;
      this.loading = false;
    });
  };

  getSearchHeroes = (name: string) => {
    this.parameterReset();
    setTimeout(() => {
      this.heroService.getSearchHeroes(name).subscribe((heroes: Hero[]) => {
        this.dataSource.data = heroes;
        this.loading = false;
        this.message = getMessage(`${RESULT_SEARCH} ${name}`, Type.Success);
      });
    }, 1000);
  };

  deleteHero = (id: number) => {
    this.loading = true;
    this.heroService.deleteHero(id).subscribe(() => {
      this.getAllHeroes();
      this.message = getMessage(TEXT_DELETE_SUCCESS, Type.Success);
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
}
