import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../models/Post';
import {BlogApiService} from '../../services/blog.api.service';
import {TagService} from '../../services/tag.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  public model = new Post(null, '', '', '', new Date(), null, [], '', null);
  public tags = [{tagName: 'testing'}];

  selectedFile: File;

  constructor(public router: Router, private blogApiService: BlogApiService, private tagService: TagService) {}

  ngOnInit() {
    this.getTags();
  }

  getTags() {
    this.tagService.findAllTags().subscribe(
      (data: any) => { this.tags = data; },
      err => console.log(err));
  }

  onSubmit() {
    const uploadData = new FormData();
    uploadData.append('file', this.selectedFile, this.selectedFile.name);
    this.model.myFile = this.selectedFile.name;
    this.blogApiService.uploadImage(uploadData);
    this.blogApiService.createPost(this.model);
    this.router.navigate(['/posts/']);
  }

  onFileChange(event) {
    this.selectedFile = event.target.files[0];
  }

  newPost() {
    this.model = new Post(null, '', '', '', new Date(), null, null, '', null);
  }
}

