import {
  Component,
  OnInit
} from '@angular/core'
import { Tile } from 'src/app/models/tile.model'

@Component({
  selector: 'app-kind',
  templateUrl: './kind.component.html',
  styleUrls: ['./kind.component.sass']
})
export class KindComponent implements OnInit {

  tiles : Tile[] = [
    {
      color: '#fbb',
      columns: 3,
      rows: 1,
      text: '1st'
    },
    {
      color: '#bbd',
      columns: 1,
      rows: 2,
      text: '2nd'
    },
    {
      color: '#adf',
      columns: 1,
      rows: 1,
      text: '3rd'
    },
    {
      color: '#deb',
      columns: 2,
      rows: 1,
      text: '4th'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
