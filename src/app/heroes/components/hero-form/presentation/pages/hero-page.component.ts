import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SnackBarService } from '@core/services/snack-bar.service';
import { HeroService } from '@hero/services/hero.service';
import { Hero } from '@hero/models/hero.model';
import {
  EDIT_HERO_SUCCESS,
  ADD_HERO_SUCCESS,
  GO_TO_REDIRECT,
} from '@core/utils/constants';

@Component({
  selector: 'hr-hero-page',
  templateUrl: './hero-page.component.html',
  styleUrls: ['./hero-page.component.scss'],
})
export class HeroPageComponent implements OnInit {
  hero?: Hero;
  id?: number;
  loading: boolean = false;

  constructor(
    private heroService: HeroService,
    private activatedRoute: ActivatedRoute,
    private snackBarService: SnackBarService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      if (this.id) {
        this.loading = true;
        this.heroService.getHeroById(params.id).subscribe(
          (hero: Hero) => {
            this.hero = hero;
            this.loading = false;
          },
          (error) => {
            this.snackBarService.openSnackBar(error.message);
          }
        );
      }
    });
  }

  valueForm = (hero: Hero) => {
    this.id !== undefined ? this.editHero(hero) : this.addHero(hero);
  };

  addHero = (hero: Hero) => {
    this.loading = true;
    this.heroService.addHero(hero).subscribe(
      () => {
        this.showSnackBar(ADD_HERO_SUCCESS);
      },
      (error) => {
        this.snackBarService.openSnackBar(error.message);
      }
    );
  };

  editHero = (hero: Hero) => {
    if (this.id === undefined) return;
    this.loading = true;
    this.heroService.editHero(hero, this.id).subscribe(
      () => {
        this.showSnackBar(EDIT_HERO_SUCCESS);
      },
      (error) => {
        this.snackBarService.openSnackBar(error.message);
      }
    );
  };

  showSnackBar = (text: string) => {
    this.snackBarService.openSnackBarRedirect(
      text,
      GO_TO_REDIRECT,
      5000,
      this.redirect
    );
  };

  redirect = () => {
    this.loading = false;
    this.router.navigate(['/heroes']);
  };
}
