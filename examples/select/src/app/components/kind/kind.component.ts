import {
  Component,
  OnInit
} from '@angular/core'

import { Fruit } from 'src/app/models/fruit.model'

@Component({
  selector: 'app-kind',
  templateUrl: './kind.component.html',
  styleUrls: ['./kind.component.sass']
})
export class KindComponent implements OnInit {

  fruits: Fruit[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
