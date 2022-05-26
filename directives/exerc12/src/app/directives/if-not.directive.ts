import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef
} from '@angular/core'

@Directive({
  selector: '[appIfNot]'
})
export class IfNotDirective {

  @Input() set appIfNot(value: boolean) {
    if (value === false) {
      this.viewContainerRef.createEmbeddedView(this.templateRef)
    } else {
      this.viewContainerRef.clear()
    }
    console.log(`appIfNot value is: ${value}`)
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) { }

}
