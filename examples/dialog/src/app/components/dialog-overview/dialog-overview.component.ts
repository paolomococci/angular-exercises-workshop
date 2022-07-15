import {
  Component,
  OnInit,
  Inject
} from '@angular/core'

import {
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog'

import {
  DataAssociation
} from './../../models/data-association.model'

@Component({
  selector: 'app-dialog-overview',
  templateUrl: './dialog-overview.component.html',
  styleUrls: ['./dialog-overview.component.sass']
})
export class DialogOverviewComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DataAssociation
  ) { }

  ngOnInit(): void {
  }

}
