import {
  Directive,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnChanges {

  @Input() highlightText = ''
  @Input() highlightColor = '#ff6'

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

}
