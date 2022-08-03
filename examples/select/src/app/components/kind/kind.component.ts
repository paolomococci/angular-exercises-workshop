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
    {value: '11001', viewValue: 'apple'},
    {value: '11002', viewValue: 'grape'},
    {value: '11003', viewValue: 'orange'},
    {value: '11004', viewValue: 'pear'},
    {value: '11005', viewValue: 'banana'},
    {value: '11006', viewValue: 'mango'},
    {value: '11007', viewValue: 'avocado'},
    {value: '11008', viewValue: 'pineapple'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
