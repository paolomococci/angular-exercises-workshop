import {
  Component,
  OnInit
} from '@angular/core'

@Component({
  selector: 'app-kind',
  templateUrl: './kind.component.html',
  styleUrls: ['./kind.component.sass']
})
export class KindComponent implements OnInit {

  favoriteFruit!: string
  fruits: string[] = [
    'cherries',
    'raspberries',
    'blackberries',
    'blueberries',
    'strawberries'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
