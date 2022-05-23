import {
  Directive,
  Input,
  ElementRef,
  OnInit
} from '@angular/core'

export interface ReadTimeConfig {
  wordsPerMinute: number
}

@Directive({
  selector: '[appReadTime]'
})
export class ReadTimeDirective {

  @Input() configuration: ReadTimeConfig = {
    wordsPerMinute: 80
  }

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    const text = this.elementRef.nativeElement.textContent
  }

}
