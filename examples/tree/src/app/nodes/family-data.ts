import { DynamicNode } from "./dynamic-node"

export class FamilyData {

  dataMap = new Map<string, string[]>(
    [
      ['Doe', ['John', 'Madeline', 'James']]
    ]
  )

  rootLevelNodes: string[] = [
    'Doe'
  ]

  initialData(): DynamicNode[] {
    return this.rootLevelNodes.map(
      name => new DynamicNode(
        name,
        0,
        true
      )
    )
  }

  getChildren(node: string): string[] | undefined {
    return this.dataMap.get(node)
  }
}
