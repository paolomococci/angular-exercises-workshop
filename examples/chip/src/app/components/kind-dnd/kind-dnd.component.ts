import {
  Component,
  OnInit
 } from '@angular/core'

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

  constructor() { }

  ngOnInit(): void {
  }

}
