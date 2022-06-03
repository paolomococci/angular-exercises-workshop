import { Component } from '@angular/core'

export enum Fruit {
  undefined = '',
  blueberry = 'blueberry',
  cherry = 'cherry',
  apple = 'apple',
  apricot = 'apricot',
  melon = 'melon',
  pineapple = 'pineapple'
}

interface IFruit {
  id: number
  name: Fruit
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'exerc13'

  selectedFruit!: Fruit.undefined

  fruits: string[] = Object.values(Fruit)

  MAX_BASKET_LENGTH = 10

  basket: IFruit[] = []

  addSelectedFruitToBasket() {
    this.basket.push({
      id: Date.now(),
      name: this.selectedFruit
    })
  }

  deleteFromBasket(item: IFruit) {
    this.basket = this.basket.filter(
      fruit => fruit.id != item.id
    )
  }

}
