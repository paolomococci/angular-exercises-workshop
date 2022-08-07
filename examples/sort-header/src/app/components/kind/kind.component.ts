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
    {name: "apricot", water: null, calories: null, proteins: null, carbs: null, fat: null, fiber: null},
    {name: "", water: null, calories: null, proteins: null, carbs: null, fat: null, fiber: null},
    {name: "", water: null, calories: null, proteins: null, carbs: null, fat: null, fiber: null},
    {name: "", water: null, calories: null, proteins: null, carbs: null, fat: null, fiber: null},
    {name: "", water: null, calories: null, proteins: null, carbs: null, fat: null, fiber: null},
    {name: "", water: null, calories: null, proteins: null, carbs: null, fat: null, fiber: null},
    {name: "", water: null, calories: null, proteins: null, carbs: null, fat: null, fiber: null},
    {name: "", water: null, calories: null, proteins: null, carbs: null, fat: null, fiber: null},
    {name: "", water: null, calories: null, proteins: null, carbs: null, fat: null, fiber: null},
    {name: "", water: null, calories: null, proteins: null, carbs: null, fat: null, fiber: null},
    {name: "", water: null, calories: null, proteins: null, carbs: null, fat: null, fiber: null},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
