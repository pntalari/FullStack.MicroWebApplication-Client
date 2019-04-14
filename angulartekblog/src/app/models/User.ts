export class User {
    constructor(
      public name: string,
      public email: string,
      public posts: any[],
      public comments: any[]
    ) {}
}
