import {
  Component,
  OnInit
} from '@angular/core'

@Component({
  selector: 'app-kind',
  templateUrl: './kind.component.html',
  styleUrls: ['./kind.component.sass']
})
export class KindComponent implements OnInit {

  autoNotches: boolean = false
  disabled: boolean = false
  invert: boolean = false
  showNotches: boolean = false
  thumbLabel: boolean = false
  vertical: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

}
