import {
  CollectionViewer,
  DataSource,
  SelectionChange
} from "@angular/cdk/collections"
import { FlatTreeControl } from "@angular/cdk/tree"
import {
  BehaviorSubject,
  merge,
  Observable
} from "rxjs"
import { map } from 'rxjs/operators'

import { DynamicNode } from "./dynamic-node"
import { FamilyData } from "./family-data"

export class DynamicDataSource implements DataSource<DynamicNode> {

  dataChange = new BehaviorSubject<DynamicNode[]>([])

  constructor(
    private _treeControl: FlatTreeControl<DynamicNode>,
    private _database: FamilyData
  ) {}

  connect(collectionViewer: CollectionViewer): Observable<readonly DynamicNode[]> {
    this._treeControl.expansionModel.changed.subscribe(
      change => {
        if ((change as SelectionChange<DynamicNode>).added || (change as SelectionChange<DynamicNode>).removed) {
          this.handleTreeControl(change as SelectionChange<DynamicNode>)
        }
      }
    )
    return merge(
      collectionViewer.viewChange,
      this.dataChange
    ).pipe(
      map(
        () => this.data
      )
    )
  }

  disconnect(collectionViewer: CollectionViewer): void {}

  get data(): DynamicNode[] {
    return this.dataChange.value
  }

  set data(value: DynamicNode[]) {
    this._treeControl.dataNodes = value
    this.dataChange.next(value)
  }

  private handleTreeControl(change: SelectionChange<DynamicNode>): void {
    if (change.added) {
      change.added.forEach(
        node => this.toggleNode(node, true)
      )
    }
    if (change.removed) {
      change.removed.slice().reverse().forEach(
        node => this.toggleNode(node, false)
      )
    }
  }

  private toggleNode(
    node: DynamicNode,
    expand: boolean
  ): void {
    const children = this._database.getChildren(node.item)
    const index = this.data.indexOf(node)
    if (!children || index < 0) {
      return
    }
    node.isLoading = true
    setTimeout(
      () => {
        if (expand) {
          const nodes = children.map(
            name => new DynamicNode(
              name,
              node.level + 1,
              this._database.isExpandable(name)
            )
          )
          this.data.splice(
            index + 1,
            0,
            ...nodes
          )
        } else {
          let count = 0
          for (let i = index + 1; i < this.data.length && this.data[i].level > node.level; i++, count++) {}
          this.data.splice(index + 1, count)
        }
        this.dataChange.next(this.data)
        node.isLoading = false
      }, 500
    )
  }

}
