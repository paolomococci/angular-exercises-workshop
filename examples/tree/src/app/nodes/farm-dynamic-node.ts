export class FarmDynamicNode {
  constructor(
    public item: string,
    public level = 1,
    public expandable = false,
    public isLoading = false
  ) {}
}
