import {
  Component,
  OnInit
 } from '@angular/core'

 import { FormControl } from '@angular/forms'

 import { Fruit } from 'src/app/models/fruit.model'

@Component({
  selector: 'app-kind-disabled',
  templateUrl: './kind-disabled.component.html',
  styleUrls: ['./kind-disabled.component.sass']
})
export class KindDisabledComponent implements OnInit {

  disableSelect = new FormControl(false)

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
