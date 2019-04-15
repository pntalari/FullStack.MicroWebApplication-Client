import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

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
    console.log(token);
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

  getPosts(userId: string) {
    const url = 'server/users/posts/' + userId;
    return this.http.get(url);
  }

  getPost(postId: string) {
    const url = 'server/post/' + postId;
    return this.http.get(url);
  }
}
