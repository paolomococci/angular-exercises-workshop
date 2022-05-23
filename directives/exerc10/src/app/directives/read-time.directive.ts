import {
  Directive,
  Input,
  ElementRef,
  OnInit,
  Output,
  EventEmitter
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

  @Output() readTimeComputed = new EventEmitter<string>()

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    const text = this.elementRef.nativeElement.textContent
    const time = this.computeReadTime(text)
    const timeString = this.createTimeString(time)
    this.readTimeComputed.emit(timeString)
  }

  computeReadTime(text: string) {
    const wordsCount = text.split(/\s+/g).length
    return Math.ceil(wordsCount/this.configuration.wordsPerMinute)
  }

  createTimeString(timeInMinutes: number): string {
    if (timeInMinutes === 1) {
      return 'a minute'
    } else if (timeInMinutes < 1) {
      return 'less than a minute'
    } else {
      return `${timeInMinutes} minutes`
    }
  }

}
