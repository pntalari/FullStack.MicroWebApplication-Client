import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  private postsList: any[];

  @Input() set posts(value: any[]) {
    if (value !== undefined) {
      this.postsList = value;
      this.postsList = this.postsList.sort((a, b) => b.postID - a.postID);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
