import {
  AbstractControl,
  FormControl,
  FormGroupDirective,
  NgForm
} from '@angular/forms'

import { ErrorStateMatcher } from '@angular/material/core'

export class ErrorSelectHandler implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    throw new Error('Method not implemented.')
  }
}
