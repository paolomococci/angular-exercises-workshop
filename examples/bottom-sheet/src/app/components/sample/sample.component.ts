import {
  Component,
  OnInit
} from '@angular/core'

import {
  MatBottomSheet
} from '@angular/material/bottom-sheet'

import { BottomSheetComponent } from './../bottom-sheet/bottom-sheet.component'

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.sass']
})
export class SampleComponent implements OnInit {

  constructor(
    private _bottomSheet: MatBottomSheet
  ) { }

  ngOnInit(): void {
  }

  openBottomSheet(): void {
    this._bottomSheet.open(
      BottomSheetComponent
    )
  }

}
