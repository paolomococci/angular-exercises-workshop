import {
  Directive,
  Input
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

  constructor() { }

}
