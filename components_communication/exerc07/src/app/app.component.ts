import { Component } from '@angular/core'
import { SocialCardType } from './enums/social-card-type'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'exerc07'

  selectedCardType!: SocialCardType
}
