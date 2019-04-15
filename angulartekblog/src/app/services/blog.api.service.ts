import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../models/Post';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class BlogApiService {

  constructor(private http: HttpClient) { }
  signUp() {
    const token = localStorage.getItem('access_token');
    console.log(localStorage.getItem('id_token'));
    return this.http.post('server/users/sign-up', localStorage.getItem('id_token'),
      {headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)})
      .subscribe(data => {console.log(data); },
        err => {console.log('error occurred'); });
  }

  getUsers() {
    const token = localStorage.getItem('access_token');
    return this.http.get('server/users',
      {headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access_token'))});
  }

  getUserById(userId: string) {
    return this.http.get('server/users/' + userId);
  }

  getPosts() {
    return this.http.get('server/users/posts');
  }

  getPostsByUser(userId: string) {
    const url = 'server/users/posts/' + userId;
    return this.http.get(url);
  }

  getPostById(postId: string) {
    const url = 'server/post/' + postId;
    return this.http.get(url);
  }

  createPost(post: Post) {
    this.http.post('server/users/createPost/', (JSON.stringify(post), localStorage.getItem('id_token')), httpOptions)
      .subscribe(data => {console.log(data); },
        err => { console.log('error occurred creating post'); });
  }

  deletePost(post: Post) {
    this.http.delete('/users/deletePost/' + post.id, {params: {postTitle: post.title, postSummary: post.summary,
      postContent: post.content, postComments: post.comments, postTags: post.tags}})
      .subscribe(data => {console.log(data); },
        err => { console.log('Error occurred deleting the post'); });
  }

  updatePost(post: Post) {
    this.http.put('/server/users/updatePost/' + post.id, JSON.stringify(post), httpOptions)
      .subscribe(data => {console.log(data); },
        err => { console.log('Error occured updating the post'); });
  }


}
