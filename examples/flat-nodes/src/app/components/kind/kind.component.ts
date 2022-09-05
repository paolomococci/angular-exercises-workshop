import {
  Component,
  OnInit
} from '@angular/core'

import { FlatTreeControl } from '@angular/cdk/tree'

import {
  MatTreeFlatDataSource,
  MatTreeFlattener
} from '@angular/material/tree'

import { Food } from 'src/app/models/food.model'
import { FlatNode } from 'src/app/models/flat-node.model'
import { FoodData } from 'src/app/data/food-data'

@Component({
  selector: 'app-kind',
  templateUrl: './kind.component.html',
  styleUrls: ['./kind.component.sass']
})
export class KindComponent implements OnInit {

  private _transformer = (
    node: Food,
    level: number
  ) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level
    }
  }

  treeControl = new FlatTreeControl<FlatNode>(
    node => node.level,
    node => node.expandable
  )

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children
  )

  constructor(

  ) { }

  ngOnInit(): void {
  }

  dataSource = new MatTreeFlatDataSource(
    this.treeControl,
    this.treeFlattener
  )

  hasChild = (
    _: number,
    node: FlatNode
  ) => node.expandable

}
