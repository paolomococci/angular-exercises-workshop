import {
  Component,
  OnInit
} from '@angular/core'

import {
  MatDialog
} from '@angular/material/dialog'

import {
  InjectedDataDialogComponent
} from './../injected-data-dialog/injected-data-dialog.component'

@Component({
  selector: 'app-injector',
  templateUrl: './injector.component.html',
  styleUrls: ['./injector.component.sass']
})
export class InjectorComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ) {
    this.dialog.open(InjectedDataDialogComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: {
        fruit: 'blueberry'
      }
    })
  }

}
