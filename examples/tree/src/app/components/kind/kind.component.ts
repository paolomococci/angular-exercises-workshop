import { FlatTreeControl } from '@angular/cdk/tree'
import {
  Component,
  OnInit
} from '@angular/core'

import { DynamicNode } from 'src/app/nodes/dynamic-node'
import { FamilyData } from 'src/app/nodes/family-data'

@Component({
  selector: 'app-kind',
  templateUrl: './kind.component.html',
  styleUrls: ['./kind.component.sass']
})
export class KindComponent implements OnInit {

  treeControl!: FlatTreeControl<DynamicNode>

  constructor(
    database: FamilyData
  ) { }

  ngOnInit(): void {
  }

}
