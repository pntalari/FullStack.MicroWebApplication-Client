import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BlogApiService} from '../../services/blog.api.service';
import {Post} from '../../models/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  public post = new Post(null, null, null, null, null, null,
    null, {id: null, name: ''}, null);
  public tags;
  public imageUrl = '../../assets/images/defaultBackground.jpeg';

  constructor(private postId: ActivatedRoute, private blogApiService: BlogApiService) { }

  ngOnInit() {
    this.getPost(this.postId);
    this.getTags(this.postId);
  }


  getTags(postId) {
    this.blogApiService.getPostTags(postId.params.value.id).subscribe(
      data => { this.tags = data; },
      err => console.log(err),
    );
  }

  getPost(postId) {
    this.blogApiService.getPostById(postId.params.value.id).subscribe(
      (data: Post) => { this.post = data; this.setImage(data.myFile); },
      err => console.log(err),
    );
  }

  private setImage(myFile: string) {
    if (myFile !== null) {
      this.imageUrl = 'server/downloadFile/' + myFile;
    }
  }
}
