import { ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormComponent } from './form.component';

describe('FormComponent', () => {
  let formComponent: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormComponent],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
      imports: [ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(FormComponent);
    formComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(formComponent).toBeTruthy();
  });

  describe('component is init', () => {
    it('should create forms', () => {
      // act
      const controls = Object.keys(formComponent.form.controls);

      // assert
      expect(controls).toEqual([
        'name',
        'publisher',
        'alterEgo',
        'firstAppearance',
      ]);
    });
    it('Testing output hero', () => {
      // arrange
      const data: any = [
        {
          id: 1,
          name: 'Batman',
          publisher: 'DC Comics',
          alterEgo: 'Bruce Wayne',
          firstAppearance: 'Detective Comics #27',
        },
      ];

      // act
      let result;
      formComponent.valueForm.subscribe((res) => {
        result = res;
      });
      formComponent.valueForm.next(data);

      // assert
      expect(result).toEqual(data);
    });
  });
});
