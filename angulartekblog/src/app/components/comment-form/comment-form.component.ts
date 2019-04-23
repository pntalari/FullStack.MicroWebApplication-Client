import { Component, OnInit } from '@angular/core';
import {Comments} from '../../models/Comments';
import {ActivatedRoute} from '@angular/router';
import {BlogApiService} from '../../services/blog.api.service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {
  private post;
  private showing = false;
  private comments = [];
  private model;
  private creator = localStorage.getItem('username');
  constructor(private postId: ActivatedRoute, private blogApiService: BlogApiService) { }

  ngOnInit() {
   this.setPost(this.postId);
   this.getComments(this.postId);
   this.resetModel();
  }

  getComments(postId) {
     this.blogApiService.getCommentsByPost(postId.params.value.id)
      .subscribe((data: any[]) => {this.comments = data; });
  }
  setPost(postId) {
    this.blogApiService.getPostById(postId.params.value.id)
      .subscribe(data => {this.post = data; });
  }
  onClick() {
    this.showing = !this.showing;
  }
  onClickAdd() {
    this.blogApiService.createComment(this.model);
    this.comments.push(this.model);
    this.resetModel();
    this.showing = false;
  }
  onDelete(commentId) {
    this.blogApiService.deleteComment(commentId);
    this.comments = this.comments.filter( comment => comment.commentId !== commentId);
  }

  onUpdate(comment) {
    if (comment !== this.model) {
      this.model = comment;
    } else {
      this.blogApiService.updateComment(this.model);
      this.resetModel();
    }
  }

  resetModel() {
    this.model = new Comments(null, '', new Date(), this.post,
      {id: localStorage.getItem('userid'), name: localStorage.getItem('username')});
  }

}
