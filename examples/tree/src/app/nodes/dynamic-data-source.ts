import {
  CollectionViewer,
  DataSource
} from "@angular/cdk/collections"
import {
  BehaviorSubject,
  Observable
} from "rxjs"

import { DynamicNode } from "./dynamic-node"

export class DynamicDataSource implements DataSource<DynamicNode> {

  dataChange = new BehaviorSubject<DynamicNode[]>([])

  connect(collectionViewer: CollectionViewer): Observable<readonly DynamicNode[]> {
    throw new Error("Method not implemented.")
  }

  disconnect(collectionViewer: CollectionViewer): void {
    throw new Error("Method not implemented.")
  }

  get data(): DynamicNode[] {
    return this.dataChange.value
  }

  set data(value: DynamicNode[]) {}

}
