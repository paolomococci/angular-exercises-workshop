import {
  Component,
  OnInit
 } from '@angular/core'

 import { Vegetable } from './../../models/vegetable.model'

 import {
  CdkDragDrop,
  moveItemInArray
 } from '@angular/cdk/drag-drop'

@Component({
  selector: 'app-kind-dnd',
  templateUrl: './kind-dnd.component.html',
  styleUrls: ['./kind-dnd.component.sass']
})
export class KindDndComponent implements OnInit {

  vegetables: Vegetable[] = [
    {
      name: 'Artichoke'
    },
    {
      name: 'Aubergine'
    },
    {
      name: 'Beans'
    },
    {
      name: 'Cabbage'
    },
    {
      name: 'Chard'
    },
    {
      name: 'Chicory'
    },
    {
      name: 'Chili Pepper'
    },
    {
      name: 'Gourd'
    },
    {
      name: 'Lettuce'
    },
    {
      name: 'Pepper'
    },
    {
      name: 'Potato'
    },
    {
      name: 'Tomato'
    },
    {
      name: 'Zucchini'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<Vegetable[]>) {
    moveItemInArray(
      this.vegetables,
      event.previousIndex,
      event.currentIndex
    )
  }

}
