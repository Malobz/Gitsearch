import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef) {}

    @HostListener('mouseenter') onMouseEnter() {
      this.highlight('grey');
    }
    
    @HostListener('mouseleave') onMouseLeave() {
      this.highlight('rosybrown');
    }
    private highlight(color: string) {
    this.elem.nativeElement.style.backgroundColor= color;
    }
    
  }


