import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BlogApiService} from '../../services/blog.api.service';

@Component({
  selector: 'app-users-blogs',
  templateUrl: './users-posts.component.html',
  styleUrls: ['./users-posts.component.css']
})
export class UsersPostsComponent implements OnInit {
  public posts;
  public user = {name: ''};
  public comments;

  constructor(private userId: ActivatedRoute, private blogApiService: BlogApiService) { }

  ngOnInit() {
    this.getUser(this.userId);
    this.getPosts(this.userId);
    this.getComments(this.userId);
  }

  getUser(userId) {
    this.blogApiService.getUserById(userId.params.value.id).subscribe(
      (data: any) => {this.user = data; },
      err => console.log(err)
    );
  }

  getPosts(userId) {
    this.blogApiService.getPostsByUser(userId.params.value.id).subscribe(
      data => { this.posts = data; },
      err => console.log(err)
    );
  }

  getComments(userId) {
    this.blogApiService.getCommentsByUser(userId.params.value.id).subscribe(
      data => { this.comments = data; },
      err => console.log(err)
    );
  }

}
