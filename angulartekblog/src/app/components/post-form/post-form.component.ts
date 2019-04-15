import {Component, OnInit} from '@angular/core';
import {Post} from '../../models/Post';
import {BlogApiService} from '../../services/blog.api.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  model = new Post(null, '', '', '', new Date(), null, null, '');
  submitted = false;

  constructor(private blogApiService: BlogApiService) {}

  ngOnInit() {
  }

  onSubmit() {
    this.blogApiService.createPost(this.model);
    this.submitted = true;
  }

  onUpdate() {
    this.blogApiService.updatePost(this.model);
    this.submitted = true;
  }

  onDelete() {
    this.blogApiService.deletePost(this.model);
    this.submitted = true;
  }

  newPost() {
    this.model = new Post(null, '', '', '', new Date(), null, null, '');
  }
}
