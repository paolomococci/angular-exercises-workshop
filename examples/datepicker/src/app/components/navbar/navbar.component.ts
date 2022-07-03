import {
  Component,
  OnInit,
  Input
} from '@angular/core'

import {
  BreakpointObserver,
  Breakpoints
} from '@angular/cdk/layout'

import {
  Observable
} from 'rxjs'

import {
  map,
  shareReplay
 } from 'rxjs/operators'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  @Input()
  title!: string

  constructor() { }

  ngOnInit(): void {
  }

}
