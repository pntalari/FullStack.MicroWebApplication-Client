import { Component, OnInit } from '@angular/core';
import {Comments} from '../../models/Comments';
import { CommentsPostService} from '../../services/comments-post.service';
import {Post} from '../../models/Post';
import {Tags} from '../../models/Tag';
import {TagService} from '../../services/tag.service';
import {ActivatedRoute} from '@angular/router';
import {BlogApiService} from '../../services/blog.api.service';
import {CommentEditComponent} from '../comment-edit/comment-edit.component';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {
  public post;
  public showing = false;
  public comments = [];
  model = new Comments(null, '', new Date(), null, null);
  submitted = false;
  constructor(private postId: ActivatedRoute, private blogApiService: BlogApiService,
              private commentEditComponent: CommentEditComponent) { }

  ngOnInit() {
   this.setPost(this.postId);
   this.getComments(this.postId);
  }

  getComments(postId) {
     this.blogApiService.getCommentsByPost(postId.params.value.id)
      .subscribe((data: any[]) => {this.comments = data; });
  }
  setPost(postId) {
    this.blogApiService.getPostById(postId.params.value.id)
      .subscribe(data => {this.model.post = data; });
  }
  onClick() {
    this.showing = !this.showing;
  }
  onClickAdd() {
    this.blogApiService.createComment(this.model);
    this.comments.push(this.model);
    this.model = new Comments(null, '', new Date(), null, null);
    this.submitted = true;
  }
  // onUpdate() {
  //   console.log('I was called and therefore am not the problem');
  //   this.blogApiService.updateComment(this.model);
  // }
  //
  // onDelete() {
  //   this.blogApiService.deleteComment(this.post.postID);
  //   // this.deleted = true;
  // }

}
