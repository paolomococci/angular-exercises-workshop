import {
  Component,
  OnInit
} from '@angular/core'

import {
  FormBuilder,
  Validators
} from '@angular/forms'

@Component({
  selector: 'app-kind',
  templateUrl: './kind.component.html',
  styleUrls: ['./kind.component.sass']
})
export class KindComponent implements OnInit {

  firstFormGroup = this._formBuilder.group({})

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
