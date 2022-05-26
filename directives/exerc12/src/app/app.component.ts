import { Component } from '@angular/core'

enum Visibility {
  On = 'on',
  Off = 'off'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'exerc12'

  makeRandomText(
    lengthOfText: number,
    charactersAccepted: string
  ): string {
    let randomText = ""
    for (let i = 0; i < lengthOfText; i++) {
      randomText += charactersAccepted.charAt(
        Math.floor(Math.random() * charactersAccepted.length)
      )
    }
    return randomText
  }

  randomText = this.makeRandomText(
    3200,
    "abcdefghijklmnopqrstuvwxyz_-ABCDEFGHIJKLMNOPQRSTUVWXYZ,.;:?!'\n\s"
  )
}
