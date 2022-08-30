export class DynamicNode {
  constructor(
    public item: string,
    public level: number = 1,
    public expandable: boolean = false
  ) {}
}
