import {
  CollectionViewer,
  DataSource,
  SelectionChange
} from "@angular/cdk/collections"

import {
  BehaviorSubject,
  Observable
} from "rxjs"

import { FarmDynamicNode } from "./farm-dynamic-node"

export class FarmDynamicDataSource implements DataSource<FarmDynamicNode> {

  dataChange = new BehaviorSubject<FarmDynamicNode[]>([])

  constructor() {}

  connect(collectionViewer: CollectionViewer): Observable<readonly FarmDynamicNode[]> {
    return new Observable<FarmDynamicNode[]>
  }

  disconnect(collectionViewer: CollectionViewer): void {}

  get data(): FarmDynamicNode[] {
    return this.dataChange.value
  }

  set data(value: FarmDynamicNode[]) {}

  private handleTreeControl(change: SelectionChange<FarmDynamicNode>): void {}

  private toggleNode(
    node: FarmDynamicNode,
    expand: boolean
  ): void {}

}
