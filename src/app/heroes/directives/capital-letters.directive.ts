import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[hrCapitalLetters]',
})
export class CapitalLettersDirective {
  constructor(private el: ElementRef) {}

  @HostListener('keyup') onKeyUp = () => {
    this.el.nativeElement.style.textTransform = 'uppercase';
  };
}
