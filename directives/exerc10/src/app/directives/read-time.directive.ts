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
export class ReadTimeDirective implements OnInit {

  @Input() configuration: ReadTimeConfig = {
    wordsPerMinute: 80
  }

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    const text = this.elementRef.nativeElement.textContent
    const time = this.computeReadTime(text)
    const timeString = this.createTimeString(time)
  }

  computeReadTime(text: string) {
    const wordsCount = text.split(/\s+/g).length
    return Math.ceil(wordsCount/this.configuration.wordsPerMinute)
  }

  createTimeString(timeInMinutes: number) {
    throw new Error('Method not implemented.')
  }

}
