import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-vc-logs',
  templateUrl: './vc-logs.component.html',
  styleUrls: ['./vc-logs.component.sass']
})
export class VcLogsComponent implements OnInit {

  @Input() vName: any

  logs: string[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
