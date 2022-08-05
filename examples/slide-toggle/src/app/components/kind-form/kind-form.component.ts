import {
  Component,
  OnInit
} from '@angular/core'

import {
  FormBuilder,
  Validators
} from '@angular/forms'

@Component({
  selector: 'app-kind-form',
  templateUrl: './kind-form.component.html',
  styleUrls: ['./kind-form.component.sass']
})
export class KindFormComponent implements OnInit {

  isSwitched = false

  formGroup = this._formBuilder.group(
    {
      enableWifi: '',
      acceptEthicsOfConduct: ['', Validators.requiredTrue]
    }
  )

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onFormSubmit() {
    alert(
      JSON.stringify(this.formGroup.value, null, 2)
    )
  }

}
