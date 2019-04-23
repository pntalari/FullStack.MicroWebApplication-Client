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
  private model = new Post(null, null, null, null, null, null, null,
    {name: localStorage.getItem('username')}, null);
  private creator = localStorage.getItem('username');
  public tags = [{tagName: 'testing'}];
  selectedFile: File;

  constructor(private postId: ActivatedRoute, private blogApiService: BlogApiService,
              public router: Router, private tagService: TagService) { }

  ngOnInit() {
    this.getPost(this.postId);
    this.getTags();
    this.getSelectedTags(this.postId);
  }

  getTags() {
    this.tagService.findAllTags().subscribe(
      (data: any) => { this.tags = data; },
      err => console.log(err));
  }

  getPost(postId) {
    this.blogApiService.getPostById(postId.params.value.id).subscribe(
      (data: any) => { this.model = new Post(data.postID, data.postTitle, data.postSummary, data.postContent, data.createdDate,
        data.comments, data.tagSet, data.creator, data.myFile); },
      err => console.log(err),
    );
  }

  onUpdate() {
    const uploadData = new FormData();
    if (this.selectedFile !== undefined) {
      uploadData.append('file', this.selectedFile, this.selectedFile.name);
      this.model.myFile = this.selectedFile.name;
      this.blogApiService.uploadImage(uploadData);
    }
    this.blogApiService.updatePost(this.model);
    this.router.navigate(['/posts/']);
  }

  onDelete() {
    this.blogApiService.deletePost(this.model.postID);
    this.router.navigate(['/posts/']);
  }

  getSelectedTags(postId) {
    this.blogApiService.getPostTags(postId.params.value.id).subscribe(
      (data: any) => {this.model.tagsSet = data; },
      err => console.log(err),
    );
  }

  onFileChange(event) {
    this.selectedFile = event.target.files[0];
  }
}
