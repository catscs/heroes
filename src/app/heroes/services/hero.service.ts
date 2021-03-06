import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { environment } from './../../../environments/environment';
import { Hero } from '@hero/models/hero.model';

@Injectable()
export class HeroService {
  constructor(private http: HttpClient) {}

  getAllHeroes = (): Observable<Hero[]> => {
    const url = `${environment.apiUrl}/heroes`;
    return this.http.get<Hero[]>(url);
  };

  getSearchHeroes = (name: string): Observable<Hero[]> => {
    const url = `${environment.apiUrl}/heroes`;
    return this.http
      .get<Hero[]>(url)
      .pipe(
        map((hero) =>
          hero.filter((h) => h.name.toLowerCase().includes(name.toLowerCase()))
        )
      );
  };

  getHeroById = (id: number): Observable<Hero> => {
    const url = `${environment.apiUrl}/heroes/${id}`;
    return this.http.get<Hero>(url);
  };

  addHero = (hero: Hero): Observable<void> => {
    const url = `${environment.apiUrl}/heroes`;
    return this.http.post<void>(url, { ...hero });
  };

  editHero = (hero: Hero, id: number): Observable<void> => {
    const url = `${environment.apiUrl}/heroes/${id}`;
    return this.http.put<void>(url, { ...hero });
  };

  deleteHero = (id: number): Observable<void> => {
    const url = `${environment.apiUrl}/heroes/${id}`;
    return this.http.delete<void>(url);
  };
}
