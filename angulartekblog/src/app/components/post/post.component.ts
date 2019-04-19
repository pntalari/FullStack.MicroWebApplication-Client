import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BlogApiService} from '../../services/blog.api.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  public post;
  public tags;

  constructor(private postId: ActivatedRoute, private blogApiService: BlogApiService) { }

  ngOnInit() {
    this.getPost(this.postId);
    this.getTags(this.postId);
  }

  getTags(postId) {
    this.blogApiService.getPostTags(postId.params.value.id).subscribe(
      data => { this.tags = data; console.log(data); },
      err => console.log(err),
    );
  }

  getPost(postId) {
    this.blogApiService.getPostById(postId.params.value.id).subscribe(
      data => { this.post = data; console.log(data); },
      err => console.log(err),
    );
  }

}
