export class Post {
  constructor(
    public id: number,
    public title: string,
    public summary: string,
    public content: string,
    public createdDate: Date,
    public comments: any[],
    public tags: any[],
    public creator: any
  ) {}
}
