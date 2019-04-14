import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/User';
import {Post} from '../models/Post';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  constructor(private http: HttpClient) {
  }

  getUsers() {
    return this.http.get('server/users');
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

  postUser(user: User) {
    this.http.post('server/users/', JSON.stringify(user), httpOptions)
      .subscribe(data => {
          console.log(data);
        },
        err => {
          console.log('error occurred');
        });
  }

  createPost(post: Post) {
    this.http.post('server/users/createPost/', JSON.stringify(post), httpOptions)
      .subscribe(data => {console.log(data); },
        err => { console.log('error occurred creating post'); });
  }

  deletePost(post: Post) {
    this.http.delete('/users/deletePost/' + post.id, httpOptions)
      .subscribe(data => {console.log(data); },
        err => { console.log('Error occurred deleting the post'); });
  }

  updatePost(post: Post) {
    this.http.put('/server/users/updatePost/' + post.id, JSON.stringify(post), httpOptions)
      .subscribe(data => {console.log(data); },
        err => { console.log('Error occured updating the post'); });
  }


}
