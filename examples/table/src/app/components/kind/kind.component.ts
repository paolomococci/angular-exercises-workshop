import {
  Component,
  OnInit
} from '@angular/core'

import { Element } from 'src/app/models/element.model'

const ELEMENT_DATA: Element[] = []

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
