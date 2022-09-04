import { FlatNode } from "./flat-node.model"

export interface Food {
  name: string
  children?: FlatNode
}
