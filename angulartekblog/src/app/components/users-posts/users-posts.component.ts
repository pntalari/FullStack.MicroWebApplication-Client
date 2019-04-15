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

  constructor(private userId: ActivatedRoute, private userListService: BlogApiService) { }

  ngOnInit() {
    this.getPosts(this.userId);
  }

  getPosts(userId) {
    this.userListService.getPostsByUser(userId.params.value.id).subscribe(
      data => { this.posts = data; },
      err => console.log(err),
      () => console.log('posts loaded')
    );
  }

}
