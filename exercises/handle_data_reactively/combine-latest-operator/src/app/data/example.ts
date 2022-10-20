import { Color } from "./color.model"

export class Example {
    static colors: Color[] = [
        {hexCode: '#fff'},
        {hexCode: '#ffe'},
        {hexCode: '#ffd'},
        {hexCode: '#ffc'},
        {hexCode: '#ffb'},
        {hexCode: '#ffa'},
        {hexCode: '#ff9'},
        {hexCode: '#ff8'},
        {hexCode: '#ff7'},
        {hexCode: '#ff6'},
        {hexCode: '#ff5'},
        {hexCode: '#ff4'},
        {hexCode: '#ff3'},
        {hexCode: '#ff2'},
        {hexCode: '#ff1'},
        {hexCode: '#ff0'},
        {hexCode: '#fef'},
        {hexCode: '#fdf'},
        {hexCode: '#fcf'},
        {hexCode: '#fbf'},
        {hexCode: '#faf'},
        {hexCode: '#f9f'},
        {hexCode: '#f8f'},
        {hexCode: '#f7f'},
        {hexCode: '#f6f'},
        {hexCode: '#f5f'},
        {hexCode: '#f4f'},
        {hexCode: '#f3f'},
        {hexCode: '#f2f'},
        {hexCode: '#f1f'},
        {hexCode: '#f0f'},
        {hexCode: '#eff'},
        {hexCode: '#dff'},
        {hexCode: '#cff'},
        {hexCode: '#bff'},
        {hexCode: '#aff'},
        {hexCode: '#9ff'},
        {hexCode: '#8ff'},
        {hexCode: '#7ff'},
        {hexCode: '#6ff'},
        {hexCode: '#5ff'},
        {hexCode: '#4ff'},
        {hexCode: '#3ff'},
        {hexCode: '#2ff'},
        {hexCode: '#1ff'},
        {hexCode: '#0ff'},
    ]

    static colorOptions(): string[] {
        let opt: string[] = []
        for (let i = 0; i < this.colors.length; i++) {
            opt[i] = this.colors[i].hexCode
        }
        return opt
    }
}
