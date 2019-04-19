import { Component, OnInit } from '@angular/core';
import {Comments} from '../../models/Comments';
import { CommentsPostService} from '../../services/comments-post.service';
import {Post} from '../../models/Post';
import {Tags} from '../../models/Tag';
import {TagService} from '../../services/tag.service';
import {ActivatedRoute} from '@angular/router';
import {BlogApiService} from '../../services/blog.api.service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {
  public post;
  public showing = false;
  public comments = [];
  model = new Comments(null, '', new Date(), null, {id: null, name: localStorage.getItem('username')});
  constructor(private postId: ActivatedRoute, private blogApiService: BlogApiService) { }

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
    console.log(this.model);
    this.model = new Comments(null, '', new Date(), null, {id: null, name: localStorage.getItem('username')});
    this.showing = false;
  }
  onDelete(commentId) {
    this.blogApiService.deleteComment(commentId);
    this.comments = this.comments.filter( comment => comment.commentId !== commentId);
  }

  onUpdate() {
    this.blogApiService.updateComment(this.model);
  }

}
