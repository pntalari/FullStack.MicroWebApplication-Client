import { Component, OnInit } from '@angular/core';
import {BlogApiService} from '../../services/blog.api.service';

@Component({
  selector: 'app-opening-page',
  templateUrl: './opening-page.component.html',
  styleUrls: ['./opening-page.component.css']
})
export class OpeningPageComponent implements OnInit {
  public posts;

  constructor(private blogApiService: BlogApiService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.blogApiService.getPosts().subscribe(
      data => { this.posts = data; },
      err => console.log(err),
      () => console.log('posts loaded')
    );
  }

}
