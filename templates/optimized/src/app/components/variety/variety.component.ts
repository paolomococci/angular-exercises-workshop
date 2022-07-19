import {
  Component,
  OnInit
 } from '@angular/core'

 import { FormControl } from '@angular/forms'

 import { Observable } from 'rxjs'

 import {
  map,
  startWith
 } from 'rxjs/operators'

@Component({
  selector: 'app-variety',
  templateUrl: './variety.component.html',
  styleUrls: ['./variety.component.sass']
})
export class VarietyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
