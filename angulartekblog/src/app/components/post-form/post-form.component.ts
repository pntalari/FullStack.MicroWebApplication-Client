import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../models/Post';
import {BlogApiService} from '../../services/blog.api.service';
import {TagService} from '../../services/tag.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
 // @Input() model: Post;

  public model = new Post(null, '', '', '', new Date(), null, null, '');
  public submitted = false;
  public tags;

  constructor(private blogApiService: BlogApiService, private tagService: TagService) {}

  ngOnInit() {
    this.getTags();
  }

  getTags(){
    this.tagService.findAllTags().subscribe(
      data => { this.tags = data; },
      err => console.log(err));
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

