import {
  Component,
  OnInit
} from '@angular/core'

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.sass']
})
export class BottomSheetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openSheet(): void {}

}
