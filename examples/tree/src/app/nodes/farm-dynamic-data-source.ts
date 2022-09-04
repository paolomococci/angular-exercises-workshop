import {
  CollectionViewer,
  DataSource
} from "@angular/cdk/collections"
import { Observable } from "rxjs"

import { FarmDynamicNode } from "./farm-dynamic-node"

export class FarmDynamicDataSource implements DataSource<FarmDynamicNode> {

  connect(collectionViewer: CollectionViewer): Observable<readonly FarmDynamicNode[]> {
    throw new Error("Method not implemented.");
  }
  disconnect(collectionViewer: CollectionViewer): void {
    throw new Error("Method not implemented.");
  }
}
