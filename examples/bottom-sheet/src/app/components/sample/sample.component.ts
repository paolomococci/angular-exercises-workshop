import {
  Component,
  OnInit
} from '@angular/core'

import {
  MatBottomSheet,
  MatBottomSheetRef
} from '@angular/material/bottom-sheet'

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.sass']
})
export class SampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openBottomSheet(): void {}

}
