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
    console.log(`appIfNot value is: ${value}`)
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) { }

}
