import {
  Directive,
  ElementRef,
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

  originalHTML = ''

  constructor(private elementRef: ElementRef) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['highlightText'].firstChange) {
      this.originalHTML = this.elementRef.nativeElement.innerHTML
      return
    }
    const { currentValue } = changes['highlightText']
    if (currentValue) {
      const regExp = new RegExp(`(${currentValue})`, 'gi')
      this.elementRef.nativeElement.innerHTML = this.originalHTML.replace(
        regExp,
        `<span style="background-color: ${this.highlightColor}">\$1</span>`
      )
    } else {
      this.elementRef.nativeElement.innerHTML = this.originalHTML
    }
    console.log(currentValue)
  }

}
