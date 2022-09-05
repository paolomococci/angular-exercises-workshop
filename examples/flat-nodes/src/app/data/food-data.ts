import { Injectable } from "@angular/core"
import { Food } from "../models/food.model"

@Injectable({providedIn: 'root'})
export class FoodData {

  static data: Food[] = [
    {
      name: 'Fruits',
      children: [
        {name: 'Apple'},
        {name: 'Apricot'},
        {name: 'Avocado'},
        {name: 'Banana'},
        {name: 'Blackberry'},
        {name: 'Blueberry'},
        {name: 'Breadfruit'}
      ]
    },
    {
      name: 'Vegetables'
    },
    {
      name: 'Meat'
    },
    {
      name: 'Fish'
    },
    {
      name: 'Drinks'
    }
  ]

  constructor() {}
}
