export class Comments {
  constructor(
    public id: number,
    public comment: string,
    public date: Date,
    public posts: any,
    public user: any
  ) {}
}
