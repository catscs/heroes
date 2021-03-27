import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'hr-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss'],
})
export class HeroSearchComponent {
  @Input() resetSearch: boolean = false;
  @Output() searchHero = new EventEmitter<string>();
  search: string = '';

  handleChange = () => {
    this.searchHero.emit(this.search);
    this.search = '';
  };
}
