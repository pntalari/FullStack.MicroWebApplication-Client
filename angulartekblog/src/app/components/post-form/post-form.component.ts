import {Component, OnInit} from '@angular/core';
import {UserListService} from '../../services/user-list.service';
import {Post} from '../../models/Post';

@Component({
  selector: 'app-create-post',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  model = new Post(null, '', '', '', new Date(), '');
  submitted = false;

  constructor(private userListService: UserListService) {}

  onSubmit() {
    this.userListService.createPost(this.model);
    this.submitted = true;
  }

  ngOnInit() {
  }

  newPost() {
    this.model = new Post(null, '', '', '', new Date(), '');
  }

}
