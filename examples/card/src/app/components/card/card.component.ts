import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {

  sampleText: string = "Some text describing anything on this card."

  constructor() { }

  ngOnInit(): void {
  }

}
