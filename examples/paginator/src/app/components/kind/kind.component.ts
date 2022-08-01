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

  length: number = 100
  pageSize: number = 10

  pageSizeOptions: number[] = [
    5,
    10,
    25,
    100
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
