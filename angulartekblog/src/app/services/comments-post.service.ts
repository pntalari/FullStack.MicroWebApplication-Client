import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Post} from '../models/Post';
import {Comments} from '../models/Comments';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

//
// @Injectable({
//   providedIn: 'root'
// })
// export class CommentsPostService {
//
//   constructor(private http: HttpClient)) { }
// getCommentsByPost(postId: number);{
//   const url = 'server/users/comments_post/' + postId;
//   return this.http.get(url);
//   }
// createComment(comment: Comments);{
//   this.http.post('server/users/comment', JSON.stringify(comment), httpOptions)
//     .subscribe(data => {
//         console.log(data);
//       },
//       err => {
//         console.log('error occurred creating comment'); });
// }
//
// deleteComment(comment: Comments);{
//   this.http.delete('/users/deleteComment/' + comment.id, httpOptions)
//     .subscribe(data => {console.log(data); },
//       err => { console.log('Error occurred deleting the comment'); });
// }
//
// updatePost(comment: Comments);{
//   this.http.put('/server/users/updatePost/' + post.id, JSON.stringify(comment), httpOptions)
//     .subscribe(data => {console.log(data); },
//       err => { console.log('Error occured updating the comment'); });
// }
// }
