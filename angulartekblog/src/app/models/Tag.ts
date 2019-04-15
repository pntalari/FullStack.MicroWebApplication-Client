export class Tags {
  constructor(
  public id: number,
  public tagName: string,
  public listOfPosts: Set<any>
  ) {}
}
