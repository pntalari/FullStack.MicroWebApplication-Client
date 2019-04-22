import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Post} from '../models/Post';
import {Comments} from '../models/Comments';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'}).set('Authorization', 'Bearer ' + localStorage.getItem('access_token'))
};

@Injectable({
  providedIn: 'root'
})
export class BlogApiService {

  constructor(private http: HttpClient) {
  }

  signUp() {
    const token = localStorage.getItem('access_token');
    return this.http.post('server/users/sign-up', localStorage.getItem('id_token'),
      {headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)})
      .subscribe((data: any) => {
          localStorage.setItem('userid', data.id);
          localStorage.setItem('username', data.name);
        },
        err => {
          console.log('error occurred');
        });
  }

  getUsers() {
    const token = localStorage.getItem('access_token');
    return this.http.get('server/users',
      {headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access_token'))});
  }

  getUserById(userId: string) {
    return this.http.get('server/users/id/' + userId);
  }

  getPosts() {
    return this.http.get('server/post');
  }

  getPostsByUser(userId: string) {
    const url = 'server/users/posts/' + userId;
    return this.http.get(url);
  }

  getPostById(postId: string) {
    const url = 'server/post/' + postId;
    return this.http.get(url);
  }

  getPostTags(postId: string) {
    const url = 'server/post/tags/' + postId;
    return this.http.get(url);
  }

  createPost(post: Post) {
    console.log(localStorage.getItem('access_token'));
    return this.http.post('server/users/createPost/' + localStorage.getItem('id_token'), JSON.stringify(post), httpOptions)
      .subscribe(data => {
          console.log(data);
        },
        err => {
          console.log('error occurred creating post');
        });
  }

  deletePost(postID) {
    this.http.delete('server/users/deletePost/' + postID,
      {headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access_token'))})
      .subscribe(data => {
          console.log(data);
        },
        err => {
          console.log('Error occurred deleting the post');
        });
  }

  updatePost(post: Post) {
    this.http.put('server/users/updatePost/' + post.postID, JSON.stringify(post), httpOptions)
      .subscribe(data => {
          console.log(data);
        },
        err => {
          console.log('Error occurred updating the post');
        });
  }

  createComment(comment: Comments) {
    const token = localStorage.getItem('access_token');
    console.log(JSON.stringify(comment));
    this.http.post('server/comment/create/' + localStorage.getItem('id_token'), JSON.stringify(comment),
      {headers: new HttpHeaders({'Content-Type': 'application/json'}).set('Authorization', 'Bearer ' + token)})
      .subscribe(data => {
          console.log(data);
        },
        err => {
          console.log('error occurred creating comment');
        });
  }

  getCommentsByPost(postId: number) {
    const url = 'server/comments/post/' + postId;
    return this.http.get(url);
  }

  deleteComment(commentId) {
    this.http.delete('server/comment/delete/' + commentId, httpOptions)
      .subscribe(data => {
          console.log(data);
        },
        err => {
          console.log('Error occurred deleting the comment');
        });
  }

  updateComment(comment: Comments) {
    this.http.put('server/comment/update/' + comment.commentId, JSON.stringify(comment), httpOptions)
      .subscribe(data => {
          console.log(data);
        },
        err => {
          console.log('Error occurred updating the comment');
        });

  }

  getCommentsByUser(userId) {
    const url = 'server/users/comments/' + userId;
    return this.http.get(url);
  }

  uploadImage(myFile: FormData) {
    const url = 'server/uploadFile';
    return this.http.post(url, myFile)
      .subscribe(data => {
          console.log(data);
        },
        err => {
          console.log('Error occurred updating the post');
        });
  }
}
