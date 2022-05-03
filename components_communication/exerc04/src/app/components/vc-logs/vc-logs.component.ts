import {
  Component,
  Input,
  OnInit,
  SimpleChange
} from '@angular/core';

@Component({
  selector: 'app-vc-logs',
  templateUrl: './vc-logs.component.html',
  styleUrls: ['./vc-logs.component.sass']
})
export class VcLogsComponent implements OnInit {

  @Input()
  vName!: string

  logs: string[] = []

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChange) {

  }

}
