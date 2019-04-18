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
  public showing: boolean;

  constructor(private postId: ActivatedRoute, private blogApiService: BlogApiService) { }

  ngOnInit() {
    this.getPost(this.postId);
  }

  consoleLog() {
    console.log('Hi there!');
  }

  setFalse() {
    this.showing = !this.showing;
  }

  getPost(postId) {
    this.blogApiService.getPostById(postId.params.value.id).subscribe(
      data => { this.post = data; },
      err => console.log(err),
    );
  }

}
