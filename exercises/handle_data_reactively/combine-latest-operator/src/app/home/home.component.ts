import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core'
import {
  FormControl,
  FormGroup
} from '@angular/forms'
import { Observable } from 'rxjs'
import { Color } from '../data/color.model'
import { Example } from '../data/example'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit, OnDestroy {

  colorOptions: Color[] = Example.colors
  borderRadiusOptions: number[] = [1,1,2,3,5,8,13,21,34,55]
  sizeOptions: number[] = [90,180,270,360,450,540,630,720,810,900]

  boxForm = new FormGroup({
    backgroundColor: new FormControl(''),
    textColor: new FormControl(''),
    borderRadius: new FormControl(''),
    size: new FormControl(''),
  })

  boxStyles$!: Observable<{}>

  constructor() { }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.')
  }

  listenToInputChange() {}

}
