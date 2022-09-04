import {
  Component,
  OnInit
} from '@angular/core'
import {FlatTreeControl} from '@angular/cdk/tree'

import { FarmData } from 'src/app/nodes/farm-data'
import { FarmDynamicNode } from 'src/app/nodes/farm-dynamic-node'
import { FarmDynamicDataSource } from 'src/app/nodes/farm-dynamic-data-source'

@Component({
  selector: 'app-farm-kind',
  templateUrl: './farm-kind.component.html',
  styleUrls: ['./farm-kind.component.sass']
})
export class FarmKindComponent implements OnInit {

  treeControl: FlatTreeControl<FarmDynamicNode>

  dataSource: FarmDynamicDataSource

  constructor(database: FarmData) {
    this.treeControl = new FlatTreeControl<FarmDynamicNode>(
      this.getLevel,
      this.isExpandable
    )
    this.dataSource = new FarmDynamicDataSource(
      this.treeControl,
      database
    )

    this.dataSource.data = database.initialData()
  }

  ngOnInit(): void {
  }

  getLevel = (node: FarmDynamicNode) => node.level

  isExpandable = (node: FarmDynamicNode) => node.expandable

  hasChild = (
    _: number,
    _nodeData: FarmDynamicNode
  ) => _nodeData.expandable

}
