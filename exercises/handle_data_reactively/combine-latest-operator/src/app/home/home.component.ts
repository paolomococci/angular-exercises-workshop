import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit, OnDestroy {

  sizeOptions: number[] = [90,180,270,360,450,540,630,720,810,900]

  constructor() { }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.')
  }

}
