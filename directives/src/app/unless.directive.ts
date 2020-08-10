import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.ViewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.ViewContainerRef.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>, private ViewContainerRef: ViewContainerRef) { }

}
