import { Injectable } from "@angular/core"
import { DynamicNode } from "./dynamic-node"

@Injectable({providedIn: 'root'})
export class FamilyData {

  /* These data are purely invented, used for demonstration purposes only. */
  dataMap = new Map<string, string[]>(
    [
      ['Doe', ['John', 'Madeline', 'James']],
      ['Murray',['Acton', 'Rose', 'Olivia', 'Oscar']],
      ['Cook',['Dean', 'Maisie', '', 'Tiffany']],
      ['Fletcher',['Milo', 'Ashlee', 'Felicity', 'Charmaine', 'Avery']],
      ['Kelly',['Knox', 'Natalie', 'Rose', 'Harlow']],
      ['Lee',['Everett', 'Poppy', 'Tiffany', 'Ellis']],
      ['Graham',['Willow', 'Ivy', 'Ashlee', 'Dean']],
    ]
  )

  rootLevelNodes: string[] = [
    'Doe',
    'Murray',
    'Cook',
    'Fletcher',
    'Kelly',
    'Lee',
    'Graham',
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

  isExpandable(node: string): boolean {
    return this.dataMap.has(node)
  }

}
