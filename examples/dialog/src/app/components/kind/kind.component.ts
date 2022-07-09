import {
  Component,
  OnInit
} from '@angular/core'

import {
  MatDialog
} from '@angular/material/dialog'

import {
  DialogContentComponent
} from './../dialog-content/dialog-content.component'

@Component({
  selector: 'app-kind',
  templateUrl: './kind.component.html',
  styleUrls: ['./kind.component.sass']
})
export class KindComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentComponent)
    dialogRef.afterClosed().subscribe(
      result => {
        console.log(`dialog content result: ${result}`)
      }
    )
  }

}
