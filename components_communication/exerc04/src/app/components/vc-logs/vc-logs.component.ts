import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-vc-logs',
  templateUrl: './vc-logs.component.html',
  styleUrls: ['./vc-logs.component.sass']
})
export class VcLogsComponent implements OnInit, OnChanges {

  @Input()
  vName!: string;

  logs: string[] = []

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    const cValue = changes[this.vName].currentValue
    if (changes[this.vName].isFirstChange()) {
      this.logs.push(`first version is: ${cValue.trim()}`)
    } else {
      this.logs.push(`version is changed to: ${cValue.trim()}`)
    }
  }

  ngOnInit(): void {
  }

}
