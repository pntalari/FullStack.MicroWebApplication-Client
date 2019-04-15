export class Tags {
  public id: number;
  tagName: string;
  listOfPosts: Set<any>;
  constructor(
  id: number,
  tagName: string,
  listOfPosts: Set<any>
  ) {}
}
