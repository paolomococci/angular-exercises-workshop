import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit, OnDestroy {

  isComponentAlive: boolean = false

  subscription: Subscription | undefined

  inputDataStream: string[] = ['one','two','three','four','five','six','seven','eight','nine']

  outputDataStream: any = []

  constructor() {}

  ngOnInit(): void {
    throw new Error('Method not implemented.')
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.')
  }

}
