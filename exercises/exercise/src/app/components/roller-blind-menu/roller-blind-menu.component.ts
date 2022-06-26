import { Component } from '@angular/core'
import {
  BreakpointObserver,
  Breakpoints
} from '@angular/cdk/layout'
import { Observable } from 'rxjs'
import {
  map,
  shareReplay
} from 'rxjs/operators'

@Component({
  selector: 'app-roller-blind-menu',
  templateUrl: './roller-blind-menu.component.html',
  styleUrls: ['./roller-blind-menu.component.sass']
})
export class RollerBlindMenuComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map(
        result => result.matches
      ),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver
  ) {}

}
