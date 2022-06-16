import {
  Component,
  OnInit,
  Input
} from '@angular/core'
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
  selector: 'app-drop-right-menu',
  templateUrl: './drop-right-menu.component.html',
  styleUrls: ['./drop-right-menu.component.sass']
})
export class DropRightMenuComponent implements OnInit {

  @Input()
  title!: string

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(
      Breakpoints.Handset
    )
    .pipe(
      map(result => result.matches),
      shareReplay()
    )

  constructor(
    private breakpointObserver: BreakpointObserver
  ) { }

  ngOnInit(): void {
  }

}
