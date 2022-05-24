import {
  Directive,
  Input
} from '@angular/core'

@Directive({
  selector: '[appScrollTo]'
})
export class ScrollToDirective {

  @Input() target = ''

  constructor() { }

}
