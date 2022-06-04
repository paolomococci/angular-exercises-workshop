import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.sass']
})
export class SampleComponent implements OnInit {

  hidden: boolean = false
  buttonText: string = "hide badge"

  toggleBadgeVisibility() {
    this.hidden = !this.hidden
    if (this.buttonText === 'hide badge') {
      this.buttonText = 'show badge'
    } else {
      this.buttonText = 'hide badge'
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
