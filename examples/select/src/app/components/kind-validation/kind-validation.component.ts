import {
  Component,
  OnInit
 } from '@angular/core'

 import { Fruit } from 'src/app/models/fruit.model'

import {
  FormControl,
  Validators
} from '@angular/forms'

@Component({
  selector: 'app-kind-validation',
  templateUrl: './kind-validation.component.html',
  styleUrls: ['./kind-validation.component.sass']
})
export class KindValidationComponent implements OnInit {

  fruitControl = new FormControl<Fruit | null>(null, Validators.required)

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
