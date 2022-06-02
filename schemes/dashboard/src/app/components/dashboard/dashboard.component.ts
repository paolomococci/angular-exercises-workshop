import {
  Component,
  Input
} from '@angular/core'
import { map } from 'rxjs/operators'
import {
  Breakpoints,
  BreakpointObserver
} from '@angular/cdk/layout'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent {

  @Input()
  title!: string

  cards = this.breakpointObserver.observe(
    Breakpoints.Handset
  ).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'card one', cols: 1, rows: 1 },
          { title: 'card two', cols: 1, rows: 1 },
          { title: 'card three', cols: 1, rows: 1 },
          { title: 'card four', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'card one', cols: 2, rows: 1 },
        { title: 'card two', cols: 1, rows: 1 },
        { title: 'card three', cols: 1, rows: 2 },
        { title: 'card four', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(
    private breakpointObserver: BreakpointObserver
  ) {}
}
