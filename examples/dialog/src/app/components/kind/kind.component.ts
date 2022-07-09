import {
  Component,
  OnInit
} from '@angular/core'

import { MatDialog } from '@angular/material/dialog'

@Component({
  selector: 'app-kind',
  templateUrl: './kind.component.html',
  styleUrls: ['./kind.component.sass']
})
export class KindComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {}

}
