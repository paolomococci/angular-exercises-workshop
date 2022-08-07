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
    {name: "pineapple", water: 97.4, carbohydrates: 0.9, proteins: 0.6,  fat: 0.0, fiber: 1.1},
    {name: "avocado", water: 64, carbohydrates: 2.1, proteins: 6.2,  fat: 24.2, fiber: 3.5},
    {name: "", water: null, carbohydrates: null, proteins: null,  fat: null, fiber: null},
    {name: "", water: null, carbohydrates: null, proteins: null,  fat: null, fiber: null},
    {name: "", water: null, carbohydrates: null, proteins: null,  fat: null, fiber: null},
    {name: "", water: null, carbohydrates: null, proteins: null,  fat: null, fiber: null},
    {name: "", water: null, carbohydrates: null, proteins: null,  fat: null, fiber: null},
    {name: "", water: null, carbohydrates: null, proteins: null,  fat: null, fiber: null},
    {name: "", water: null, carbohydrates: null, proteins: null,  fat: null, fiber: null},
    {name: "", water: null, carbohydrates: null, proteins: null,  fat: null, fiber: null},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
