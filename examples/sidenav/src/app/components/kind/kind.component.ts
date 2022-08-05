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

  showFiller:boolean = false
  extraText: string = "Some simple extra text for demonstration purposes only."

  constructor() { }

  ngOnInit(): void {
  }

}
