import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'exerc10'
  readTime!: string

  onReadTimeComputed(readTimeString: string) {
    this.readTime = readTimeString
  }
}
