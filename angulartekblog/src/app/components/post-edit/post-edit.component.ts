import { Component, OnInit } from '@angular/core';
import {BlogApiService} from '../../services/blog.api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Post} from '../../models/Post';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  private model = new Post(null, null, null, null, null, null, null, null);
  private post;
  private creator = true;
  private deleted = false;
  private userId;

  constructor(private postId: ActivatedRoute, private blogApiService: BlogApiService, public router: Router) { }

  ngOnInit() {
    this.getPost(this.postId);
    setTimeout(() => {this.checkUser(); }, 400);
    if (this.creator) {
      setTimeout(() => {
        this.loadModel();
      }, 400);
    }
    this.userId = localStorage.getItem('userid');
  }

  checkUser() {
    this.creator = localStorage.getItem('username') === this.post.creator.name;
  }

  loadModel() {
    this.model = new Post(this.post.postID, this.post.postTitle, this.post.postSummary, this.post.postContent, this.post.createdDate,
      this.post.comments, this.post.tagSet, this.post.creator);
  }

  getPost(postId) {
    console.log(postId.params.value.id);
    this.blogApiService.getPostById(postId.params.value.id).subscribe(
      data => { this.post = data; },
      err => console.log(err),
    );
  }

  onUpdate() {
    this.blogApiService.updatePost(this.model);
  }

  onDelete() {
    this.blogApiService.deletePost(this.post.postID);
    this.deleted = true;
  }
}
