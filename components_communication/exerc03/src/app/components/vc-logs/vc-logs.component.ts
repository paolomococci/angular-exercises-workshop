import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-vc-logs',
  templateUrl: './vc-logs.component.html',
  styleUrls: ['./vc-logs.component.sass']
})
export class VcLogsComponent implements OnInit {

  _vName!: string

  @Input()

  public get vName() : string {
    return this._vName
  }

  public set vName(name : string) {
    this._vName = name;
  }

  logs: string[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
