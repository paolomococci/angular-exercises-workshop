import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core'
import {
  FormControl,
  FormGroup
} from '@angular/forms'
import {
  Observable, startWith
} from 'rxjs'

import { Example } from '../data/example'
import { BoxStylesImpl } from '../model/box-styles-impl'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit, OnDestroy {

  colorOptions: string[] = Example.colorOptions()
  borderRadiusOptions: string[] = ['1','1','2','3','5','8','13','21','34','55']
  sizeOptions: string[] = ['90','180','270','360','450','540','630','720','810','900']

  boxForm = new FormGroup({
    backgroundColor: new FormControl(''),
    textColor: new FormControl(''),
    borderRadius: new FormControl(''),
    size: new FormControl(''),
  })

  boxStyles$ = new BoxStylesImpl()

  constructor() {}

  ngOnInit(): void {
    this.boxForm.get('backgroundColor')?.setValue(this.colorOptions[0])
    this.boxForm.get('textColor')?.setValue(this.colorOptions[this.colorOptions.length-1])
    this.boxForm.get('borderRadius')?.setValue(this.borderRadiusOptions[0])
    this.boxForm.get('size')?.setValue(this.sizeOptions[0])
    //this.listenToInputChange()
  }

  ngOnDestroy(): void {}

  private listenToInputChange(): void {
    throw new Error('Function not implemented.')
  }

}


