import {
  Component,
  OnInit
} from '@angular/core'

@Component({
  selector: 'app-kind',
  templateUrl: './kind.component.html',
  styleUrls: ['./kind.component.sass']
})
export class KindComponent implements OnInit {

  dataSource: any

  treeControl: any

  treeFlattener: any

  constructor() { }

  ngOnInit(): void {
  }

  hasChild() {}

  private _transformer() {}

}
