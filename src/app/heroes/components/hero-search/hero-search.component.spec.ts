import { HeroSearchComponent } from './hero-search.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('HeroSearchComponent', () => {
  let heroSearchComponent: HeroSearchComponent;
  let fixture: ComponentFixture<HeroSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroSearchComponent],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroSearchComponent);
    heroSearchComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(heroSearchComponent).toBeTruthy();
  });

  it('should be input search', () => {
    const input = fixture.debugElement.query(By.css('input'));
    const el = input.nativeElement;
    const placeholder = el.placeholder;
    expect(el.value).toEqual('');
    expect(placeholder).toBe('Type and press enter');
  });

  it('Testing output search', () => {
    // arrange
    const data: any = 'Ba';

    // act
    let result;
    heroSearchComponent.searchHero.subscribe((res) => {
      result = res;
    });
    heroSearchComponent.searchHero.next(data);

    // assert
    expect(result).toEqual(data);
  });
});
