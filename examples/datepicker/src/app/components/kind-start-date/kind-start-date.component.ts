import {
  Component,
  OnInit
} from '@angular/core'

@Component({
  selector: 'app-kind-start-date',
  templateUrl: './kind-start-date.component.html',
  styleUrls: ['./kind-start-date.component.sass']
})
export class KindStartDateComponent implements OnInit {

  selectedDate = new Date(2022, 0, 1)

  constructor() { }

  ngOnInit(): void {
  }

}
