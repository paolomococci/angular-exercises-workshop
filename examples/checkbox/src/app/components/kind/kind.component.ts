import {
  Component,
  OnInit
} from '@angular/core'

import { Task } from 'src/app/models/task.model'

@Component({
  selector: 'app-kind',
  templateUrl: './kind.component.html',
  styleUrls: ['./kind.component.sass']
})
export class KindComponent implements OnInit {

  task: Task = {
    name: 'unassigned',
    completed: false,
    color: undefined
  }

  constructor() { }

  ngOnInit(): void {
  }

}
