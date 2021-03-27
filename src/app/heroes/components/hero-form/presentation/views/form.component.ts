import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Hero } from '@hero/models/hero.model';

@Component({
  selector: 'hr-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() hero?: Hero;
  @Output() valueForm = new EventEmitter<Hero>();
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({});
  }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [this.hero?.name, Validators.required],
      publisher: [this.hero?.publisher, Validators.required],
      alterEgo: [this.hero?.alterEgo, Validators.required],
      firstAppearance: [this.hero?.firstAppearance, Validators.required],
    });
  }

  get fm() {
    return this.form.controls;
  }

  handleForm = () => {
    if (this.form.valid) {
      this.valueForm.emit(this.form.value);
    }
  };
}
