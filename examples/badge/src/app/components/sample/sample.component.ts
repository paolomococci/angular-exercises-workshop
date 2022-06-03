import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.sass']
})
export class SampleComponent implements OnInit {

  hidden: boolean = false

  toggleBadgeVisibility() {
    this.hidden = !this.hidden
  }

  constructor() { }

  ngOnInit(): void {
  }

}
