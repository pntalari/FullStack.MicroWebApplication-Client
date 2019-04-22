import {Comments} from './Comments';

export class Post {
  constructor(
    public postID: number,
    public postTitle: string,
    public postSummary: string,
    public postContent: string,
    public createdDate: Date,
    public comments: Comments[],
    public tagsSet: any[],
    public creator: {},
    public myFile: string /* property of File type */
  ) {
  }
}
