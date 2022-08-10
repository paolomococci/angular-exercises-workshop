import {
  Component,
  OnInit
} from '@angular/core'

import {
  FormBuilder,
  Validators
} from '@angular/forms'

@Component({
  selector: 'app-kind-vertical',
  templateUrl: './kind-vertical.component.html',
  styleUrls: ['./kind-vertical.component.sass']
})
export class KindVerticalComponent implements OnInit {

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
