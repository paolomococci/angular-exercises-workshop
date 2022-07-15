import {
  Component,
  OnInit
 } from '@angular/core'

 import {
  MatDialog
 } from '@angular/material/dialog'

 import {
  DialogOverviewComponent
 } from './../dialog-overview/dialog-overview.component'

@Component({
  selector: 'app-kind-overview',
  templateUrl: './kind-overview.component.html',
  styleUrls: ['./kind-overview.component.sass']
})
export class KindOverviewComponent implements OnInit {

  vegetable!: string
  name!: string

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewComponent, {
      width: '300px',
      data: {
        name: this.name,
        vegetable: this.vegetable
      }
    })

    dialogRef
      .afterClosed()
      .subscribe(
        result => {
          console.log('the dialog has been closed')
          this.vegetable = result
        }
      )
  }

}
