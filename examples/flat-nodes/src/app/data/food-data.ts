import { Injectable } from "@angular/core"
import { Food } from "../models/food.model"

@Injectable({providedIn: 'root'})
export class FoodData {

  /* Warning: these data are listed for demonstration purposes only! */
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
        {name: 'Plum'},
        {name: 'Pineapple'},
        {name: 'Pomegranate'},
        {name: 'Pomelo'},
        {name: 'Raspberry'},
        {name: 'Rambutan'},
        {name: 'Strawberry'},
        {name: 'Watermelon'}
      ]
    },
    {
      name: 'Vegetables',
      children: [
        {name: 'Arugula'},
        {name: 'Beet'},
        {name: 'Bell pepper'},
        {name: 'Borage'},
        {name: 'Broccoli'},
        {name: 'Cabbage'},
        {name: 'Chard'},
        {name: 'Chili pepper'},
        {name: 'Chicory'},
        {name: 'Lettuce'},
        {name: 'Potato'},
        {name: 'Radicchio'},
        {name: 'Spinach'},
        {name: 'Sweet potato'}
      ]
    },
    {
      name: 'Meat',
      children: [
        {name: ''},
        {name: ''},
        {name: ''},
        {name: ''},
        {name: ''},
        {name: ''},
        {name: ''},
        {name: ''},
        {name: ''},
        {name: ''},
        {name: ''},
        {name: ''},
        {name: ''},
        {name: ''},
        {name: ''},
        {name: ''},
        {name: ''},
        {name: ''},
        {name: ''},
        {name: ''},
        {name: ''},
      ]
    },
    {
      name: 'Fish',
      children: [
        {name: ''},
        {name: ''},
        {name: ''},
        {name: ''},
        {name: ''},
        {name: ''},
        {name: ''},
        {name: ''},
        {name: ''},
        {name: ''},
        {name: ''},
        {name: ''},
        {name: ''},
        {name: ''},
        {name: ''},
        {name: ''},
      ]
    },
    {
      name: 'Drinks',
      children: [
        {name: ''},
        {name: ''},
        {name: ''},
        {name: ''},
        {name: ''},
        {name: ''},
      ]
    }
  ]

  constructor() {}
}
