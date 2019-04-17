export class Comments {
  constructor(
    public commentId: number,
    public comments: string,
    public createdDate: Date,
    public post: any,
    public user: any
  ) {}
}
