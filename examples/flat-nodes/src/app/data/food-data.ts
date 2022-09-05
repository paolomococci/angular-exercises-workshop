import { Injectable } from "@angular/core"
import { Food } from "../models/food.model"

@Injectable({providedIn: 'root'})
export class FoodData {

  static data: Food[] = [
    {
      name: 'Fruits'
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
