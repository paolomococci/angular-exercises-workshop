import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core'
import { Observable, Observer } from 'rxjs'
import { NotificationsService } from './../services/notifications.service'
import { first } from 'rxjs/operators'

@Component({
  selector: 'app-notifications-manager',
  templateUrl: './notifications-manager.component.html',
  styleUrls: ['./notifications-manager.component.sass']
})
export class NotificationsManagerComponent implements OnInit {

  notificationsCount$!: Observable<number>

  constructor(private notificationsService: NotificationsService) {}

  ngOnInit(): void {
    this.notificationsCount$ = this.notificationsService.count$
  }

  getCountValue(callback: any) {
    this.notificationsCount$.pipe(
      first()
    ).subscribe(callback)
  }

  addNotification() {
    this.getCountValue(
      (value: number) => {
        this.notificationsService.setCount(++value)
      }
    )
  }

  removeNotification() {
    this.getCountValue(
      (value: number) => {
        if (value === 0) {
          return
        }
        this.notificationsService.setCount(--value)
      }
    )
  }

  resetCount() {
    this.getCountValue(
      (value: number) => {
        this.notificationsService.setCount(0)
      }
    )
  }

}
