import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CommentsPostService} from '../../services/comments-post.service';
@Component({
  selector: 'app-comments-post',
  templateUrl: './comments-post.component.html',
  styleUrls: ['./comments-post.component.css']
})
export class CommentsPostComponent implements OnInit {
  public  comment;
  public post;

  constructor(private commentId: ActivatedRoute, private commentsPostService: CommentsPostService) { }

  ngOnInit() {
    this.getComments(this.post.getId());
  }
  getComments(postId) {
    this.commentsPostService.getCommentsByPost(postId.params.value.id).subscribe(
      data => { this.post = data; },
      err => console.log(err),
    );
  }
}


