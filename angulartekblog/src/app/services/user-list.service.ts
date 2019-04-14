import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/User';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('http://localhost:8080/users');
  }

  getPosts(userId: string) {
    const url = 'server/users/posts/' + userId;
    return this.http.get(url);
  }

  getPost(postId: string) {
    const url = 'server/post/' + postId;
    return this.http.get(url);
  }

  postUser(user: User) {
    this.http.post('server/users/', JSON.stringify(user) , httpOptions)
      .subscribe(data => {console.log(data); },
        err => {console.log('error occurred'); });
  }
}
