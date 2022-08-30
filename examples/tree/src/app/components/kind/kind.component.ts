import { FlatTreeControl } from '@angular/cdk/tree'
import {
  Component,
  OnInit
} from '@angular/core'

import { DynamicNode } from 'src/app/nodes/dynamic-node'
import { FamilyData } from 'src/app/nodes/family-data'
import { DynamicDataSource } from 'src/app/nodes/dynamic-data-source'

@Component({
  selector: 'app-kind',
  templateUrl: './kind.component.html',
  styleUrls: ['./kind.component.sass']
})
export class KindComponent implements OnInit {

  treeControl!: FlatTreeControl<DynamicNode>
  dataSource!: DynamicDataSource

  getLevel = (node: DynamicNode) => node.level

  constructor(
    database: FamilyData
  ) { }

  ngOnInit(): void {
  }

}
