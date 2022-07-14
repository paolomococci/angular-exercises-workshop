import {
  Component,
  OnInit,
  Inject
} from '@angular/core'

import {
  MAT_DIALOG_DATA
} from '@angular/material/dialog'

import {
  Fruit
} from 'src/app/models/fruit.model'

@Component({
  selector: 'app-injected-data-dialog',
  templateUrl: './injected-data-dialog.component.html',
  styleUrls: ['./injected-data-dialog.component.sass']
})
export class InjectedDataDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Fruit
  ) { }

  ngOnInit(): void {
  }

  isPreferred(fruit: string): boolean {
    return this.data.fruit === fruit
  }

}
