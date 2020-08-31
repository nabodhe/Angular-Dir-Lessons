import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight],.appHighlight'
})
export class HighlightDirective {

  constructor(private e:ElementRef) { }

  @HostListener('mouseover') onmouseover(){
    this.e.nativeElement.style.backgroundColor = 'pink';
  }

  @HostListener('mouseleave') onmouseleave(){

    this.e.nativeElement.style.backgroundColor = '';
  }

}
