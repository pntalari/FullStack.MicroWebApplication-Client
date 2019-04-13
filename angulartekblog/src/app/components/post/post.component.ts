import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserListService} from '../../services/user-list.service';
import {Post} from '../../models/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  public post;

  constructor(private postId: ActivatedRoute, private userListService: UserListService) {
  }

  ngOnInit() {
    this.getPost(this.postId);
    this.getPosts();
  }

  getPost(userId) {
    this.userListService.getPostById(userId.params.value.id)
      .subscribe(
      data => {this.post = data; },
      err => console.log(err),
      () => console.log('Posts loaded')
    );
  }

  private getPosts() {
    this.userListService.getPosts() .subscribe(
      data => { this.post = data; },
      err => console.log(err),
      () => console.log('users loaded')
    );
  }
}
