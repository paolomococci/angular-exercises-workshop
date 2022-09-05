import {
  Component,
  OnInit
} from '@angular/core'
import { FlatTreeControl } from '@angular/cdk/tree'

import { Food } from 'src/app/models/food.model'
import { FlatNode } from 'src/app/models/flat-node.model'

@Component({
  selector: 'app-kind',
  templateUrl: './kind.component.html',
  styleUrls: ['./kind.component.sass']
})
export class KindComponent implements OnInit {

  dataSource: any

  treeControl = new FlatTreeControl<FlatNode>(
    node => node.level,
    node => node.expandable
  )

  treeFlattener: any

  constructor() { }

  ngOnInit(): void {
  }

  hasChild() {}

  private _transformer = (node: Food, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level
    }
  }

}
