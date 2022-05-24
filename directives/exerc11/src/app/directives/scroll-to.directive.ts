import {
  Directive,
  Input,
  HostListener
} from '@angular/core'

@Directive({
  selector: '[appScrollTo]'
})
export class ScrollToDirective {

  @Input() target = ''

  @HostListener('click') onClick() {
    console.log(this.target)
  }

  constructor() { }

}
