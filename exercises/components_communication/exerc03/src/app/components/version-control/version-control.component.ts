import {
  Component,
  OnInit
} from '@angular/core'
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms'

@Component({
  selector: 'app-version-control',
  templateUrl: './version-control.component.html',
  styleUrls: ['./version-control.component.sass']
})
export class VersionControlComponent implements OnInit {

  versionForm = new FormGroup(
    {
      version: new FormControl(
        '',
        [Validators.pattern('([0-9]+)\.([0-9]+)\.([0-9]+)')]
      )
    }
  )

  versionName = '0.0.0'

  constructor() { }

  ngOnInit(): void {
    this.versionForm.get(
      'version'
    )?.setValue(
      this.versionName
    )
  }

  formSubmit() {
    if (!this.versionForm.valid) {
      alert('version has an invalid format')
      return
    }
    this.versionName = this.versionForm.get(
      'version'
    )?.value
  }

}
