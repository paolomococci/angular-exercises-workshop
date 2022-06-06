import {
  Component,
  OnInit
 } from '@angular/core'

 import { Fruit } from 'src/app/models/fruit.model'

 import {
  COMMA,
  ENTER
 } from '@angular/cdk/keycodes'

 import { MatChipInputEvent } from '@angular/material/chips'

@Component({
  selector: 'app-kind-input',
  templateUrl: './kind-input.component.html',
  styleUrls: ['./kind-input.component.sass']
})
export class KindInputComponent implements OnInit {

  blur: boolean = true

  readonly keyCodes = [
    COMMA,
    ENTER
  ] as const

  fruits: Fruit[] = [
    {
      name: 'Melon'
    },
    {
      name: 'Watermelon'
    },
    {
      name: 'Grape'
    },
    {
      name: 'Apricot'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  add(): void {}

  delete(): void {}

}
