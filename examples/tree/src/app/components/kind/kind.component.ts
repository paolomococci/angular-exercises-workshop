import {
  Component,
  OnInit
} from '@angular/core'

import { FamilyData } from 'src/app/nodes/family-data'

@Component({
  selector: 'app-kind',
  templateUrl: './kind.component.html',
  styleUrls: ['./kind.component.sass']
})
export class KindComponent implements OnInit {

  constructor(
    database: FamilyData
  ) { }

  ngOnInit(): void {
  }

}
