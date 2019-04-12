export class User {
    constructor(
      public id: number,
      public name: string,
      public email: string,
      public posts: any[],
      public comments: any[]
    ) {}
}
