import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core'
import { FormGroup } from '@angular/forms'
import { Observable } from 'rxjs'
import { Color } from '../data/color.model'
import { Example } from '../data/example'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit, OnDestroy {

  sizeOptions: number[] = [90,180,270,360,450,540,630,720,810,900]
  colorOptions: Color[] = Example.colors
  borderRadiusOptions: number[] = [1,1,2,3,5,8,13,21,34,55]

  boxForm = new FormGroup({})

  boxStyles$!: Observable<{}>

  constructor() { }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.')
  }

  listenToInputChange() {}

}
