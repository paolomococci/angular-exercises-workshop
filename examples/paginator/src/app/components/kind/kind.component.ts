import {
  Component,
  OnInit
} from '@angular/core'

import { PageEvent } from '@angular/material/paginator'

@Component({
  selector: 'app-kind',
  templateUrl: './kind.component.html',
  styleUrls: ['./kind.component.sass']
})
export class KindComponent implements OnInit {

  length: number = 144
  pageSize: number = 5

  pageSizeOptions: number[] = [
    1,
    2,
    3,
    5,
    8,
    13,
    21,
    34,
    55,
    89,
    144
  ]

  pageEvent!: PageEvent

  constructor() { }

  ngOnInit(): void {
  }

  setPageSizeOptions(setPageSizeOptionsInput: string): void {
    if (setPageSizeOptionsInput)
      this.pageSizeOptions = setPageSizeOptionsInput.split(',')
        .map(s => +s)
  }

}
