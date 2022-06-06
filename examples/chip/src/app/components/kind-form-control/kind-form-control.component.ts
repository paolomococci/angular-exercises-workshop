import { MatChipInputEvent } from '@angular/material/chips';
import {
  Component,
  OnInit
 } from '@angular/core'

import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-kind-form-control',
  templateUrl: './kind-form-control.component.html',
  styleUrls: ['./kind-form-control.component.sass']
})
export class KindFormControlComponent implements OnInit {

  keyWords = new Set<string>(
    [
      'backend',
      'frontend',
      'development'
    ]
  )

  formControl = new FormControl([
    'development'
  ])

  constructor() { }

  ngOnInit(): void {
  }

  create(matChipInputEvent: MatChipInputEvent): void {}

  delete(keyWords: string): void {}

}
