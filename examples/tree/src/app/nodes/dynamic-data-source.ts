import {
  CollectionViewer,
  DataSource
} from "@angular/cdk/collections"
import { FlatTreeControl } from "@angular/cdk/tree"
import {
  BehaviorSubject,
  Observable
} from "rxjs"

import { DynamicNode } from "./dynamic-node"
import { FamilyData } from "./family-data"

export class DynamicDataSource implements DataSource<DynamicNode> {

  dataChange = new BehaviorSubject<DynamicNode[]>([])

  constructor(
    private _treeControl: FlatTreeControl<DynamicNode>,
    private _database: FamilyData
  ) {}

  connect(collectionViewer: CollectionViewer): Observable<readonly DynamicNode[]> {
    throw new Error("Method not implemented.")
  }

  disconnect(collectionViewer: CollectionViewer): void {
    throw new Error("Method not implemented.")
  }

  get data(): DynamicNode[] {
    return this.dataChange.value
  }

  set data(value: DynamicNode[]) {
    this._treeControl.dataNodes = value
    this.dataChange.next(value)
  }

}
