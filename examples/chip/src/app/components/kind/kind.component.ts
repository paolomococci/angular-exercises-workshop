import {
  Component,
  OnInit
} from '@angular/core'

import { ChipColor } from 'src/app/models/chip-color.model'

@Component({
  selector: 'app-kind',
  templateUrl: './kind.component.html',
  styleUrls: ['./kind.component.sass']
})
export class KindComponent implements OnInit {

  availableColors: ChipColor[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
