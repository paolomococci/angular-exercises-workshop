import {
  Component,
  OnInit
} from '@angular/core'

import {
  MatDialog,
  MatDialogRef
} from '@angular/material/dialog'

import {
  DialogContentComponent
} from './../dialog-content/dialog-content.component'

@Component({
  selector: 'app-kind-slowly',
  templateUrl: './kind-slowly.component.html',
  styleUrls: ['./kind-slowly.component.sass']
})
export class KindSlowlyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
