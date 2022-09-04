import { Injectable } from "@angular/core"

import { FarmDynamicNode } from "./farm-dynamic-node"

@Injectable({providedIn: 'root'})

export class FarmData {
  dataMap = new Map<string, string[]>([
    ['Fruits',
      [
        'Apple',
        'Apricot',
        'Avocado',
        'Banana',
        'Berries',
        'Cherry',
        'Clementine',
        'Dragon fruit',
        'Durian',
        'Grapes',
        'Guava',
        'Kiwi',
        'Lemon',
        'Lime',
        'Lychee',
        'Mandarin',
        'Mango',
        'Mangosteen',
        'Melon',
        'Nectarine',
        'Orange',
        'Papaya',
        'Passion fruit',
        'Peach',
        'Pear',
        'Persimmon',
        'Pineapple',
        'Pomegranate',
        'Pomelo',
        'Rambutan',
        'Strawberry',
        'Tamarind',
        'Tangerine',
        'Watermelon',
      ]
    ],
    ['Vegetables',
      [
        'Arugula',
        'Asparagus',
        'Aubergine',
        'Broccoli',
        'Cabbage',
        'Carrot',
        'Garlic',
        'Leek',
        'Lettuce',
        'Mushrooms',
        'Okra',
        'Onion',
        'Potato',
        'Radicchio',
        'Radish',
        'Shallot',
        'Spinach',
        'Tomato',
        'Zucchini',
      ]
    ],
    // sub-level
    ['Apple',
      [
        'Alice',
        'Fuji',
        'Gala',
        'Golden Delicious',
        'Granny Smith',
        'Honeycrisp',
        'Lobo',
        'Pink Lady',
        'Red Delicious',
      ]
    ],
    ['Pear',
      [
        'Beth',
        'Concorde',
        'Conference',
      ]
    ],
    ['Cabbage',
      [
        'Green',
        'Red',
      ]
    ],
    ['Onion',
      [
        'Purple',
        'Yellow',
        'White',
      ]
    ],
    ['Tomato',
      [
        'Grape',
        'Plum',
        'San Marzano',
        'Yellow Cherry',
      ]
    ],
  ])

}
