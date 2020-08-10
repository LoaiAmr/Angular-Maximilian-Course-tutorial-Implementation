import { Directive, ElementRef, OnInit, HostListener, Renderer2, HostBinding, Input,  } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  
  @Input() highlightColor: string;
  @Input() defaultColor: string;

  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elementRef: ElementRef, private render: Renderer2) { }

  ngOnInit(){
    // this.render.setStyle(this.elementRef.nativeElement, 'background', 'blue');
    this.backgroundColor = this.defaultColor;
  }
  
  @HostListener('mouseenter') mouseover(eventData: Event){
    // this.render.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highlightColor;
  }
  
  @HostListener('mouseleave') mouseleave(eventData: Event){
    // this.render.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }


}
