import { Directive, ElementRef,HostListener,Input } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';

@Directive({
  selector: '[Highlight]'
})
export class HighlightDirective {

  constructor(private el:ElementRef)  {   }

  @HostListener('mouseenter') onMouseEnter(){
    this.highlight(this.Highlight);
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.highlight("");
  }

  @Input() Highlight='';

  private highlight(color:string){
    this.el.nativeElement.style.backgroundColor=color;
  }

}



