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

  fruits: Fruit[] = [
    {value: '11001', viewValue: ''},
    {value: '11002', viewValue: ''},
    {value: '11003', viewValue: ''},
    {value: '11004', viewValue: ''},
    {value: '11005', viewValue: ''},
    {value: '11006', viewValue: ''},
    {value: '11007', viewValue: ''}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
