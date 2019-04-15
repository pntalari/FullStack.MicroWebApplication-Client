export class Comments {
  constructor(
    public id: number,
    public comment: string,
    // public date: new Date,
    public posts: any,
    public user: any
  ) {}
}
