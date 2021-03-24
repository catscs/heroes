import { Hero } from '@hero/models/hero.model';
import { Injectable } from '@angular/core';

@Injectable()
export class HeroService {
  heroes: Hero[] = [
    {
      id: 1,
      name: 'Superman',
      power: 'Volar',
    },
    {
      id: 2,
      name: 'Batman',
      power: 'Volar',
    },
    {
      id: 3,
      name: 'Spiderman',
      power: 'Volar',
    },
  ];

  getAllHeroes = (): Hero[] => {
    return this.heroes;
  };
}
