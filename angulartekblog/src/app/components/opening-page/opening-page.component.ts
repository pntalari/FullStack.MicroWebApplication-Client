import { Component, OnInit } from '@angular/core';
import {Post} from '../../models/Post';
import {BlogApiService} from '../../services/blog.api.service';

@Component({
  selector: 'app-opening-page',
  templateUrl: './opening-page.component.html',
  styleUrls: ['./opening-page.component.css']
})
export class OpeningPageComponent implements OnInit {

  constructor(private blogApiService: BlogApiService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.blogApiService.createPost(new Post(null, 'TESTING', 'this is a test', 'Am I created? What is existence. ' +
      'To be post or not to post. Or to suffer the slings and arrows of outrageous fortune. To sleep to dream. To dream perchance to sleep',
      new Date(), null, null, ''));
  }

}
