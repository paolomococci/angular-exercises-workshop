import {
  Component,
  OnInit,
  ElementRef,
  ViewChild
 } from '@angular/core'

 import {
  COMMA,
  ENTER
 } from '@angular/cdk/keycodes'
 import { FormControl } from '@angular/forms'
 import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete'
 import { MatChipInputEvent } from '@angular/material/chips'
 import { Observable } from 'rxjs'
 import {
  map,
  startWith
 } from 'rxjs/operators'

@Component({
  selector: 'app-kind-autocomplete',
  templateUrl: './kind-autocomplete.component.html',
  styleUrls: ['./kind-autocomplete.component.sass']
})
export class KindAutocompleteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
