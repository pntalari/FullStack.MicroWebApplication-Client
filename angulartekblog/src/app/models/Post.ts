export class Post {
  constructor(
    public postID: number,
    public postTitle: string,
    public postSummary: string,
    public postContent: string,
    public createdDate: Date,
    public comments: any[],
    public tagsSet: any[],
    public creator: any
  ) {}
}
