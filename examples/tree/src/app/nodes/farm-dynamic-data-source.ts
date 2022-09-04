import {
  CollectionViewer,
  DataSource,
  SelectionChange
} from "@angular/cdk/collections"

import { FlatTreeControl } from "@angular/cdk/tree"

import {
  BehaviorSubject,
  Observable
} from "rxjs"

import { FarmData } from "./farm-data"
import { FarmDynamicNode } from "./farm-dynamic-node"

export class FarmDynamicDataSource implements DataSource<FarmDynamicNode> {

  dataChange = new BehaviorSubject<FarmDynamicNode[]>([])

  constructor(
    private _treeControl: FlatTreeControl<FarmDynamicNode>,
    private _database: FarmData
  ) {}

  connect(collectionViewer: CollectionViewer): Observable<readonly FarmDynamicNode[]> {
    return new Observable<FarmDynamicNode[]>
  }

  disconnect(collectionViewer: CollectionViewer): void {}

  get data(): FarmDynamicNode[] {
    return this.dataChange.value
  }

  set data(value: FarmDynamicNode[]) {
    this._treeControl.dataNodes = value
    this.dataChange.next(value)
  }

  private handleTreeControl(change: SelectionChange<FarmDynamicNode>): void {
    if (change.added) {
      change.added.forEach(node => this.toggleNode(node, true))
    }
    if (change.removed) {
      change.removed
        .slice()
        .reverse()
        .forEach(
          node => this.toggleNode(node, false)
        )
    }
  }

  private toggleNode(
    node: FarmDynamicNode,
    expand: boolean
  ): void {
    const children = this._database.getChildren(node.item)
    const index = this.data.indexOf(node)
    if (!children || index < 0) {
      return
    }
    node.isLoading = true
    setTimeout(() => {
      if (expand) {
        const nodes = children.map(
          name => new FarmDynamicNode(
            name,
            node.level + 1,
            this._database.isExpandable(name)
          ),
        )
        this.data.splice(
          index + 1,
          0,
          ...nodes
        )
      } else {
        let count = 0
        for (
          let i = index + 1;
          i < this.data.length && this.data[i].level > node.level;
          i++, count++
        ) {}
        this.data.splice(
          index + 1,
          count
        )
      }
      this.dataChange.next(this.data)
      node.isLoading = false
    }, 300)
  }

}
