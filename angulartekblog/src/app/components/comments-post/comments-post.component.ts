import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BlogApiService} from '../../services/blog.api.service';
@Component({
  selector: 'app-comments-post',
  templateUrl: './comments-post.component.html',
  styleUrls: ['./comments-post.component.css']
})
export class CommentsPostComponent implements OnInit {
  public  comment;
  public post;

  constructor(private commentId: ActivatedRoute, private blogApiService: BlogApiService) { }

  ngOnInit() {
    this.getComments(this.post.getId());
  }
  getComments(postId) {
    this.blogApiService.getCommentsByPost(postId.params.value.id).subscribe(
      data => { this.post = data; },
      err => console.log(err),
    );
  }
}


