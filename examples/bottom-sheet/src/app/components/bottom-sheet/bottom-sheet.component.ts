import {
  Component,
  OnInit
} from '@angular/core'

import {
  MatBottomSheetRef
} from '@angular/material/bottom-sheet'

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.sass']
})
export class BottomSheetComponent implements OnInit {

  constructor(
    private _bottomSheetRef: MatBottomSheetRef<BottomSheetComponent>
  ) { }

  ngOnInit(): void {
  }

  openSheet(event: MouseEvent): void {
    this._bottomSheetRef.dismiss()
    event.preventDefault()
  }

}
