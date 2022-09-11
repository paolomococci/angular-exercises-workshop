import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core'
import { FormControl } from '@angular/forms'
import { TooltipPosition } from '@angular/material/tooltip'

@Component({
  selector: 'app-kind',
  templateUrl: './kind.component.html',
  styleUrls: ['./kind.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class KindComponent implements OnInit {

  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right']
  position = new FormControl(this.positionOptions[0])

  message = new FormControl('info about the action offered by this button')

  constructor() { }

  ngOnInit(): void {
  }

}
