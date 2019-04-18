import {Component, OnInit} from '@angular/core';
import {Post} from '../../models/Post';
import {BlogApiService} from '../../services/blog.api.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-create-post',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  constructor(private http: HttpClient,
              private blogApiService: BlogApiService) {
  }

  selectedFile = null;

  model = new Post(null, '', '', '', new Date(), null, null, '');
  submitted = false;

  onSubmit() {
    const fd = new FormData(this.selectedFile);
    fd.append('Image', this.selectedFile, this.selectedFile.name);
    this.http.post('http://localhost:4200/src/assets/images/', fd)
      .subscribe(res => {
        console.log(res);
      });
    this.blogApiService.createPost(this.model);
    this.submitted = true;
  }

  OnEdit(model: Post) {
    this.blogApiService.updatePost(model);
    this.submitted = true;
  }

  onDelete() {
    this.blogApiService.deletePost(this.model);
    this.submitted = true;
  }

  ngOnInit() {
  }

  newPost() {
    this.model = new Post(null, '', '', '', new Date(), null, null, '');
  }

  onSelectFile(event) {
    this.selectedFile = event.target.files[0] as File;
    console.log(event);
  }
}

