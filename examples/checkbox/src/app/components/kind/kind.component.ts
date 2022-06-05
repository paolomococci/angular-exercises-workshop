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
    name: 'UNDEFINED',
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
  kindCheckboxDisabled: boolean = false
  actionText: string = 'tick here to disable the checkbox on the right'
  kindText: string = "TODO"

  constructor() { }

  ngOnInit(): void {
  }

  someTasksAreComplete(): boolean {
    if (this.task.subtasks == null) {
      return false
    }
    return this.task.subtasks.filter(
      task => task.completed
    ).length > 0 && !this.allTaskComplete
  }

  setAllTask(completed: boolean): void {
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

  updateAllTaskComplete(): void {
    this.allTaskComplete = this.task.subtasks != null && this.task.subtasks.every(
      task => task.completed
    )
  }

  setSelected(selected: boolean): void {
    this.kindCheckboxDisabled = selected
    if (selected) {
      this.kindText = 'DONE'
      this.actionText = 'tick here to enable the checkbox on the right'
    } else {
      this.kindText = 'TODO'
      this.actionText = 'tick here to disable the checkbox on the right'
    }
  }

}
