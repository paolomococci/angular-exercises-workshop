import {
  Component,
  OnInit
 } from '@angular/core'

 import {
  FormControl,
  Validators
  } from '@angular/forms'

import { Fruit } from 'src/app/models/fruit.model'

import { ErrorSelectHandler } from 'src/app/handlers/error-select-handler'

@Component({
  selector: 'app-kind-error-state',
  templateUrl: './kind-error-state.component.html',
  styleUrls: ['./kind-error-state.component.sass']
})
export class KindErrorStateComponent implements OnInit {

  selected = new FormControl(
    'valid',
    [
      Validators.required,
      Validators.pattern('valid')
    ]
  )

  selectFormControl = new FormControl(
    'valid',
    [
      Validators.required,
      Validators.pattern('valid')
    ]
  )

  nativeSelectFormControl = new FormControl(
    'valid',
    [
      Validators.required,
      Validators.pattern('valid')
    ]
  )

  errorSelectHandler = new ErrorSelectHandler()

  fruits: Fruit[] = [
    {value: '', viewValue: 'none'},
    {value: 'valid', viewValue: 'apple'},
    {value: 'valid', viewValue: 'grape'},
    {value: 'valid', viewValue: 'orange'},
    {value: 'valid', viewValue: 'pear'},
    {value: 'valid', viewValue: 'banana'},
    {value: 'valid', viewValue: 'mango'},
    {value: 'valid', viewValue: 'avocado'},
    {value: 'valid', viewValue: 'pineapple'},
    {value: 'invalid', viewValue: 'chimerical'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
