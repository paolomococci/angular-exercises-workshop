import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core'
import { Observable } from 'rxjs'
import { NotificationsService } from './../services/notifications.service'

@Component({
  selector: 'app-notifications-manager',
  templateUrl: './notifications-manager.component.html',
  styleUrls: ['./notifications-manager.component.sass']
})
export class NotificationsManagerComponent implements OnInit {

  @Input() count = 0

  @Output() countChanged = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void { }

}
