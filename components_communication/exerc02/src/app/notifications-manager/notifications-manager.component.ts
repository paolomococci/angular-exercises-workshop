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

}
