import {
  Component,
  OnInit
} from '@angular/core'
import { FlatTreeControl } from '@angular/cdk/tree'

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

  constructor(
    database: FamilyData
  ) {
    this.treeControl = new FlatTreeControl<DynamicNode>(
      this.getLevel,
      this.isExpandable
    )
    this.dataSource = new DynamicDataSource(
      this.treeControl,
      database
    )
    this.dataSource.data = database.initialData()
  }

  ngOnInit(): void {
  }

  getLevel = (node: DynamicNode) => node.level

  isExpandable = (node: DynamicNode) => node.expandable

  hasChild = (
    _: number,
    _nodeData: DynamicNode
  ) => _nodeData.expandable

}
