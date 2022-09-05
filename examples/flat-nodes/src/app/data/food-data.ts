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
        {name: 'Breadfruit'},
        {name: 'Cherry'},
        {name: 'Coconut'},
        {name: 'Cranberry'},
        {name: 'Date Palm'},
        {name: 'Dragon fruit'},
        {name: 'Durian'},
        {name: 'Goji berry'},
        {name: 'Grape'},
        {name: 'Guava'},
        {name: 'Jackfruit'},
        {name: 'Kiwi'},
        {name: 'Kumquat'},
        {name: 'Longan'},
        {name: 'Loquat'},
        {name: 'Lychee'},
        {name: 'Mango'},
        {name: 'Mangosteen'},
        {name: 'Melon'},
        {name: 'Nectarine'},
        {name: 'Orange'},
        {name: 'Papaya'},
        {name: 'Passion fruit'},
        {name: 'Peach'},
        {name: 'Pear'},
        {name: 'Persimmon'},
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
