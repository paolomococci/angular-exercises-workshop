import {
  Component,
  OnInit
} from '@angular/core'

import { Sort } from '@angular/material/sort'

import { Fruit } from 'src/app/interfaces/fruit.model'

@Component({
  selector: 'app-kind',
  templateUrl: './kind.component.html',
  styleUrls: ['./kind.component.sass']
})
export class KindComponent implements OnInit {

  fruits: Fruit[] = [
    {name: "apricot", water: 91.2, carbohydrates: 6.7, proteins: 0.4, fat: 0.09, fiber: 1.61},
    {name: "avocado", water: 64, carbohydrates: 2.1, proteins: 6.2,  fat: 24.2, fiber: 3.5},
    {name: "banana", water: 78.9, carbohydrates: 17.8, proteins: 1.31,  fat: 0.29, fiber: 1.7},
    {name: "orange", water: 89.1, carbohydrates: 8.2, proteins: 0.6,  fat: 0.3, fiber: 1.8},
    {name: "pineapple", water: 97.4, carbohydrates: 0.9, proteins: 0.6,  fat: 0.0, fiber: 1.1},
    {name: "strawberry", water: 91.6, carbohydrates: 5.52, proteins: 0.85,  fat: 0.38, fiber: 1.65}
  ]

  sortedFruits!: Fruit[]

  constructor() {
    this.sortedFruits = this.fruits.slice()
  }

  ngOnInit(): void {
  }

  sortFruits(sort: Sort) {}

  compare(
    first: number | string,
    second: number | string,
    isAsc: boolean
  ) {
    return (first < second ? -1 : 1) * (isAsc ? 1 : -1)
  }

}
