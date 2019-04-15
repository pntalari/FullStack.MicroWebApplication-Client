import {Component, OnInit} from '@angular/core';
import {UserListService} from '../../services/user-list.service';
import {Post} from '../../models/Post';

@Component({
  selector: 'app-create-post',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  model = new Post(null, '', '', '', new Date(), null, null, '');
  submitted = false;
  onSubmit() {
    this.userListService.createPost(this.model);
    this.submitted = true;
  }

  onUpdate() {
    this.userListService.updatePost(this.model);
    this.submitted = true;
  }

  onDelete() {
    this.userListService.deletePost(this.model);
    this.submitted = true;
  }

  constructor(private userListService: UserListService) {}

  ngOnInit() {
  }

  newPost() {
    this.model = new Post(null, '', '', '', new Date(), null, null, '');
  }
}
