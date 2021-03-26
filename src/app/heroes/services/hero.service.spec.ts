import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { HeroService } from '@hero/services/hero.service';

describe('HeroService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: HeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HeroService],
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(HeroService);
  });

  it('should be create service', () => {
    expect(service).toBeTruthy();
  });

  describe('Test getAllHeroes', () => {
    it('should return all heroes', () => {
      // arrange
      const data = [
        {
          id: 1,
          name: 'Batman',
          publisher: 'DC Comics',
          alterEgo: 'Bruce Wayne',
          firstAppearance: 'Detective Comics #27',
        },
        {
          id: 2,
          name: 'Superman',
          publisher: 'DC Comics',
          alterEgo: 'Kal-El',
          firstAppearance: 'Action Comics #1',
        },
      ];

      // act
      let heroes = [];

      service.getAllHeroes().subscribe((response: any) => {
        heroes = response;
      });

      const req = httpTestingController.expectOne(
        `${environment.apiUrl}/heroes`
      );
      req.flush(data);

      // assert
      expect(heroes.length).toEqual(2);
      expect(req.request.method).toEqual('GET');
    });
  });

  describe('Test getSearchHeroes', () => {
    it('should return hero by search name', () => {
      // arrange
      const data = [
        {
          id: 1,
          name: 'Batman',
          publisher: 'DC Comics',
          alterEgo: 'Bruce Wayne',
          firstAppearance: 'Detective Comics #27',
        },
      ];

      // act
      let hero: any;

      service.getSearchHeroes('b').subscribe((response) => {
        hero = response;
      });

      const req = httpTestingController.expectOne(
        `${environment.apiUrl}/heroes`
      );
      req.flush(data);

      // assert
      expect(hero[0].name).toBe('Batman');
      expect(req.request.method).toEqual('GET');
    });
  });

  describe('Test getHeroById', () => {
    it('should return one hero by id', () => {
      // arrange
      const data = {
        id: 1,
        name: 'Batman',
        publisher: 'DC Comics',
        alterEgo: 'Bruce Wayne',
        firstAppearance: 'Detective Comics #27',
      };
      const id = 1;

      // act
      let hero: any;
      service.getHeroById(id).subscribe((response) => {
        hero = response;
      });

      const req = httpTestingController.expectOne(
        `${environment.apiUrl}/heroes/${id}`
      );
      req.flush(data);

      // assert
      expect(hero.id).toEqual(id);
      expect(hero.name).toBe('Batman');
      expect(req.request.method).toEqual('GET');
    });
  });

  describe('Test addHero', () => {
    it('should add hero', () => {
      // arrange
      const data = {
        id: 1,
        name: 'Batman',
        publisher: 'DC Comics',
        alterEgo: 'Bruce Wayne',
        firstAppearance: 'Detective Comics #27',
      };
      const dataAdd = {
        id: 1,
        name: 'Batman',
        publisher: 'DC Comics',
        alterEgo: 'Bruce Wayne',
        firstAppearance: 'Detective Comics #27',
      };

      // act
      let hero: any;
      service.addHero(dataAdd).subscribe((response) => {
        hero = response;
      });

      const req = httpTestingController.expectOne(
        `${environment.apiUrl}/heroes`
      );
      req.flush(data);

      // assert
      expect(hero.id).toEqual(dataAdd.id);
      expect(hero.name).toBe('Batman');
      expect(req.request.method).toEqual('POST');
    });
  });

  describe('Test editHero', () => {
    it('should edit hero', () => {
      // arrange
      const dataEdit = {
        id: 1,
        name: 'Felix',
        publisher: 'DC Comics',
        alterEgo: 'Bruce Wayne',
        firstAppearance: 'Detective Comics #27',
      };
      const id = 1;

      // act
      let hero: any;
      service.editHero(dataEdit, id).subscribe((response) => {
        hero = response;
      });

      const req = httpTestingController.expectOne(
        `${environment.apiUrl}/heroes/${id}`
      );
      req.flush(dataEdit);

      // assert
      expect(hero.name).toBe('Felix');
      expect(req.request.method).toEqual('PUT');
    });
  });

  describe('Test deleteHero', () => {
    it('should delete hero', () => {
      // arrange
      const id = 1;

      // act
      let resp: any;
      service.deleteHero(id).subscribe((response) => {
        resp = response;
      });

      const req = httpTestingController.expectOne(
        `${environment.apiUrl}/heroes/${id}`
      );
      req.flush(id);

      // assert
      expect(resp).toEqual(id);
      expect(req.request.method).toEqual('DELETE');
    });
  });
});
