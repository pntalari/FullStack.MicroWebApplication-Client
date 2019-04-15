import { Component, OnInit } from '@angular/core';
import {BlogApiService} from '../../services/blog.api.service';
import {ActivatedRoute} from '@angular/router';
import {Post} from '../../models/Post';
import Any = jasmine.Any;

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  private model: Post;
  private post;
  private submitted;

  constructor(private postId: ActivatedRoute, private blogApiService: BlogApiService) { }

  ngOnInit() {
    this.getPost(this.postId);
    this.model = new Post(this.post.postID, this.post.postTitle, this.post.postSummary, this.post.postContent, this.post.createdDate,
      this.post.comments, this.post.tagSet, this.post.creator);
    this.submitted = false;
  }

  getPost(postId) {
    this.blogApiService.getPostById(postId.params.value.id).subscribe(
      data => { this.post = data; },
      err => console.log(err),
    );
  }

  onUpdate() {
    this.blogApiService.updatePost(this.model);
    this.submitted = true;
  }
}
