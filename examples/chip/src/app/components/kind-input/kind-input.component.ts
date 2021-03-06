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
      name: 'melon'
    },
    {
      name: 'watermelon'
    },
    {
      name: 'grape'
    },
    {
      name: 'apricot'
    },
    {
      name: 'cherry'
    },
    {
      name: 'blueberry'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  create(matChipInputEvent: MatChipInputEvent): void {
    const value = (matChipInputEvent.value || '').trim()
    if (matChipInputEvent) {
      this.fruits.push(
        {name: value}
      )
    }
    matChipInputEvent.chipInput!.clear()
  }

  delete(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit)
    if (index >= 0) {
      this.fruits.splice(index, 1)
    }
  }

}
