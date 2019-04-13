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
  }

  getPost(userId) {
    this.userListService.getPost(userId.params.value.id)
      .subscribe(
      data => {this.post = data; },
      err => console.log(err),
      () => console.log('Posts loaded')
    );
  }

}
