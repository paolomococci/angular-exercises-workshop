import { ChemicalGroup } from './../enumerations/chemical-group.enumeration'

export interface Element {
  atomic: number | null
  symbol: string | null
  name: string | null
  group: ChemicalGroup | null
  mass: number | null
  weight: number | null
  radioactive: boolean | null
  artificially: boolean | null
}
