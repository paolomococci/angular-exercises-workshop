import {
  Component,
  OnInit
} from '@angular/core'

import {
  FormBuilder,
  Validators
} from '@angular/forms'

@Component({
  selector: 'app-kind-error',
  templateUrl: './kind-error.component.html',
  styleUrls: ['./kind-error.component.sass']
})
export class KindErrorComponent implements OnInit {

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required]
  })

  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required]
  })

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
