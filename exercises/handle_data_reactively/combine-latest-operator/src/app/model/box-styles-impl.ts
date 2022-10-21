import { Observable } from "rxjs"
import { BoxStyles } from "./box-styles.model"

export class BoxStylesImpl implements BoxStyles {

    boxStyles: Observable<{
        backgroundColor: string; 
        textColor: string; 
        borderRadius: string; 
        width: string; 
        height: string; 
    }> = new Observable<{
        backgroundColor: '#fff'
        textColor: '#000'
        borderRadius: '5'
        width: '90'
        height: '90'
    }>()

    static styles: BoxStyles;
    styles: Observable<{
        backgroundColor: string; 
        textColor: string; 
        borderRadius: string; 
        width: string; 
        height: string; 
    }> = this.boxStyles

    constructor() {}
    

    public static getStyles(): BoxStyles {
        return this.styles
    }

    public static setStyles(
        bg: string,
        tc: string,
        br: string,
        s: string
    ): void {
        this.styles.styles.pipe()
    }
}
