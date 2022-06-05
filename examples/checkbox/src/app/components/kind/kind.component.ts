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
    name: 'UNASSIGNED',
    completed: false,
    color: undefined,
    subtasks: [
      {
        name: 'PRIMARY',
        completed: false,
        color: 'primary'
      },
      {
        name: 'ACCENT',
        completed: false,
        color: 'accent'
      },
      {
        name: 'WARN',
        completed: false,
        color: 'warn'
      },
    ]
  }

  allTaskComplete: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  someComplete(): boolean {
    return true
  }

  updateAllTaskComplete(): void {}

  setAll(completed: boolean): void {
    this.allTaskComplete = completed
    if (this.task.subtasks == null) {
      return
    }
    this.task.subtasks.forEach(
      task => (
        task.completed = completed
      )
    )
  }

}
