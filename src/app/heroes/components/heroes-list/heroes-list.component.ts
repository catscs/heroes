import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Hero } from '@hero/models/hero.model';
import { HeroService } from '@hero/services/hero.service';

@Component({
  selector: 'hr-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss'],
})
export class HeroesListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'power', 'actions'];
  dataSource?: MatTableDataSource<Hero>;
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroes = this.heroService.getAllHeroes();
    this.dataSource = new MatTableDataSource<Hero>(this.heroes);
  }
}
