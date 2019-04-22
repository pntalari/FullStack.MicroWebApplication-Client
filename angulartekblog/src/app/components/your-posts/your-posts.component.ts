import { Component, OnInit } from '@angular/core';
import {BlogApiService} from '../../services/blog.api.service';

@Component({
  selector: 'app-your-posts',
  templateUrl: './your-posts.component.html',
  styleUrls: ['./your-posts.component.css']
})
export class YourPostsComponent implements OnInit {

  public posts;

  constructor(private userListService: BlogApiService) { }

  ngOnInit() {
    setTimeout(() => {
      this.getPosts(localStorage.getItem('userid'));
    }, 500);
  }

  getPosts(userId) {
    this.userListService.getPostsByUser(userId).subscribe(
      (data: any[]) => { this.posts = data.sort((a, b) => b.postID - a.postID); },
      err => console.log(err),
      () => console.log('posts loaded')
    );
  }
}
