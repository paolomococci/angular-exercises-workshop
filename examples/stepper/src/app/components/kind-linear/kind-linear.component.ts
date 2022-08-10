import {
  Component,
  OnInit
} from '@angular/core'

import {
  FormBuilder,
  Validators
} from '@angular/forms'

@Component({
  selector: 'app-kind-linear',
  templateUrl: './kind-linear.component.html',
  styleUrls: ['./kind-linear.component.sass']
})
export class KindLinearComponent implements OnInit {

  isLinear = false

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
