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
    if (!name) {
      return
    }
    if (!this._vName) {
      this.logs.push('first version is ${name.trim()}')
    } else {
      this.logs.push('version changed to ${name.trim()}')
    }
    this._vName = name;
  }

  logs: string[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
