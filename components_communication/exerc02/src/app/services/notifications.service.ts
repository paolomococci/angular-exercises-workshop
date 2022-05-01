import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  private count: BehaviorSubject<number> = new BehaviorSubject<number>(5)

  count$: Observable<number> = this.count.asObservable()

  constructor() { }
}
