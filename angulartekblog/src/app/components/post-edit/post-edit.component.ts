import { Component, OnInit } from '@angular/core';
import {BlogApiService} from '../../services/blog.api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Post} from '../../models/Post';
import {TagService} from '../../services/tag.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  private model = new Post(null, null, null, null, null, null, null, null);
  private creator = true;
  public tags = [{tagName: 'testing'}];


  constructor(private postId: ActivatedRoute, private blogApiService: BlogApiService,
              public router: Router, private tagService: TagService) { }

  ngOnInit() {
    this.getPost(this.postId);
    this.getTags();
    this.getSelectedTags(this.postId);
    setTimeout(() => {this.checkUser(); }, 400);
  }

  getTags() {
    this.tagService.findAllTags().subscribe(
      (data: any) => { this.tags = data; },
      err => console.log(err));
  }

  checkUser() {
    // @ts-ignore
    this.creator = localStorage.getItem('username') === this.model.creator.name;
  }

  getPost(postId) {
    this.blogApiService.getPostById(postId.params.value.id).subscribe(
      (data: any) => { this.model = new Post(data.postID, data.postTitle, data.postSummary, data.postContent, data.createdDate,
        data.comments, data.tagSet, data.creator); },
      err => console.log(err),
    );
  }

  onUpdate() {
    this.blogApiService.updatePost(this.model);
    this.router.navigate(['/posts/']);
  }

  onDelete() {
    this.blogApiService.deletePost(this.model.postID);
    this.router.navigate(['/posts/']);
  }

  private getSelectedTags(postId) {
    this.blogApiService.getPostTags(postId.params.value.id).subscribe(
      (data: any) => {this.model.tagsSet = data; },
      err => console.log(err),
    );
  }
}
