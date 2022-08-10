import {
  Component,
  OnInit
} from '@angular/core'

import {
  FormBuilder,
  FormGroup
} from '@angular/forms'

@Component({
  selector: 'app-kind-vertical',
  templateUrl: './kind-vertical.component.html',
  styleUrls: ['./kind-vertical.component.sass']
})
export class KindVerticalComponent implements OnInit {

  firstFormGroup: FormGroup = this._formBuilder.group({
    firstCtrl: ['']
  })

  secondFormGroup: FormGroup = this._formBuilder.group({
    secondCtrl: ['']
  })

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
