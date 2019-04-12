export class Post {
  constructor(
    public id: number,
    public title: string,
    public summary: string,
    public content: string,
    public date: Date,
    public author: string
  ) {}
}
