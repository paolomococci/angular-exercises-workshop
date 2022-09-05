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
        {name: 'Beef'},
        {name: 'Bison'},
        {name: 'Chicken'},
        {name: 'Duck'},
        {name: 'Pork'},
        {name: 'Sheep'},
        {name: 'Turkey'},
        {name: 'Venison'}
      ]
    },
    {
      name: 'Fish',
      children: [
        {name: 'Branzino'},
        {name: 'Tilapia'},
        {name: 'Codfish'},
        {name: 'Hake'},
        {name: 'Sea bream'},
        {name: 'Salmon'},
        {name: 'Mackerel'},
        {name: 'Sea bass'},
        {name: 'Tuna'},
        {name: 'Trout'},
        {name: 'Pollock'},
        {name: 'Haddock'},
        {name: 'Turbot'},
        {name: 'Sardines'},
        {name: 'Red mullet'},
        {name: 'Perch'},
        {name: 'Walleye'},
        {name: 'Catfish'},
        {name: 'Halibut'},
        {name: 'Amberjack'},
        {name: 'Dover sole'},
        {name: 'Flounder'},
      ]
    },
    {
      name: 'Drinks',
      children: [
        {name: 'White wine'},
        {name: 'Sparkling white wine'},
        {name: 'Red wine'},
        {name: 'Beer'},
        {name: 'Unfiltered beer'},
        {name: 'Still water'},
        {name: 'Sparkling water'},
        {name: 'Orange juice'},
        {name: 'Tomato juice'},
      ]
    }
  ]

  constructor() {}
}
