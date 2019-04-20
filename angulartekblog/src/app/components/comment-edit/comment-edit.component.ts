import { Component, OnInit } from '@angular/core';
import {BlogApiService} from '../../services/blog.api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Comments} from '../../models/Comments';
import {Post} from '../../models/Post';

@Component({
  selector: 'app-comment-edit',
  templateUrl: './comment-edit.component.html',
  styleUrls: ['./comment-edit.component.css']
})
export class CommentEditComponent implements OnInit {
  private model = new Comments(null, null, null, null, null);
  private post;
  private  comment;
  private user = true;
  private deleted = false;

  constructor(private postId: ActivatedRoute, private blogApiService: BlogApiService, public router: Router) { }

  ngOnInit() {
    this.getComment(this.comment.commentId);
    setTimeout(() => {
      this.checkUser();
    }, 400);
    if (this.user) {
      setTimeout(() => {
        this.loadCommentModel();
      }, 400);
    }
  }
  getComment(commentId) {
    console.log(commentId.params.value.id);
    this.blogApiService.getPostById(commentId.params.value.id).subscribe(
      data => { this.post = data; },
      err => console.log(err),
    );
  }

  checkUser() {
    this.user = localStorage.getItem('username') === this.comment.user.name;
  }

  loadCommentModel() {
    this.model = new Comments(this.comment.commentID, this.comment.comments, this.comment.createdDate,
      this.comment.post, this.comment.user);
  }

  // onUpdate() {
  //   console.log('I was called and therefore am not the problem');
  //   this.blogApiService.updateComment(this.model);
  // }
  //
  // onDelete() {
  //   this.blogApiService.deleteComment(this.post.postID);
  //   this.deleted = true;
  // }
}
