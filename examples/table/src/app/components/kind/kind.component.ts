import {
  Component,
  OnInit
} from '@angular/core'

import { Element } from 'src/app/models/element.model'

const ELEMENT_DATA: Element[] = [
  {atomic:1, symbol:'H', name:'Hydrogen', group:'Nonmetal', mass:1.0079, weight:1},
  {atomic:2, symbol:'He', name:'Helium', group:'Noble gas', mass:4.0026, weight:4},
]

@Component({
  selector: 'app-kind',
  templateUrl: './kind.component.html',
  styleUrls: ['./kind.component.sass']
})
export class KindComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
