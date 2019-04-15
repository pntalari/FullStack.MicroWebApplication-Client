import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserListService} from '../../services/user-list.service';

@Component({
  selector: 'app-users-blogs',
  templateUrl: './users-posts.component.html',
  styleUrls: ['./users-posts.component.css']
})
export class UsersPostsComponent implements OnInit {
  public posts;

  constructor(private userId: ActivatedRoute, private userListService: UserListService) { }

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
