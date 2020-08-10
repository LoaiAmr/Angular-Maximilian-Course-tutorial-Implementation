import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[appBasicHighlightDirevtive]'
})
export class BasicHighlightDirevtive implements OnInit{
    
    constructor(private elementRef: ElementRef){}
    
    ngOnInit(){
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
}