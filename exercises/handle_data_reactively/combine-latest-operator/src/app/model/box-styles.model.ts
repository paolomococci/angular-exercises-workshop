import { Observable } from "rxjs"

export interface BoxStyles {
    styles: Observable<{
        backgroundColor: string
        textColor: string
        borderRadius: string
        width: string
        height: string
      }>
}
