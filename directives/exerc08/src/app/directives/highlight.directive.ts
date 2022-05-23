import {
  Directive,
  Input
} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() highlightText = ''
  @Input() highlightColor = '#ff6'

  constructor() { }

}
