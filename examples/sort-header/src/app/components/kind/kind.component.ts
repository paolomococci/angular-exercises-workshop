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
    {name: "apricot", water: 86.2, carbohydrates: 6.7, proteins: 0.4, fat: 0.09, fiber: 1.3},
    {name: "", water: null, carbohydrates: null, proteins: null,  fat: null, fiber: null},
    {name: "", water: null, carbohydrates: null, proteins: null,  fat: null, fiber: null},
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
