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

  separatorKeysCodes: number[] = [
    ENTER,
    COMMA
  ]

  petFormControl = new FormControl('')

  filteredPets!: Observable<string[]>

  pets: string[] = ['Dog']

  allPets: string[] = [
    'Dog',
    'Cat',
    'Hamster',
    'Rabbit',
    'Canary'
  ]

  @ViewChild('petInput')
  petInput!: ElementRef<HTMLInputElement>

  constructor() {
    this.filteredPets = this.petFormControl.valueChanges.pipe(
      startWith(null),
      map(
        (pet: string | null) => (pet ? this._filter(pet) : this.allPets.slice())
      ),
    )
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase()
    return this.allPets.filter(
      pet => pet
        .toLowerCase()
        .includes(filterValue)
    )
  }

  ngOnInit(): void {}

  selected(event: MatAutocompleteSelectedEvent): void {
    this.pets.push(event.option.viewValue)
    this.petInput.nativeElement.value = ''
    this.petFormControl.setValue(null)
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim()
    if (value) {
      this.pets.push(value)
    }
    event.chipInput!.clear()
    this.petFormControl.setValue(null)
  }

  remove(pet: string): void {
    const index = this.pets.indexOf(pet)
    if (index >= 0)
      this.pets.splice(index, 1)
  }

}
