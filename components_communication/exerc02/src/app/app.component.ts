import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'exerc02'
  notificationsCount = 5
  updateNotificationsCount(count: number) {
    this.notificationsCount = count
  }
}
