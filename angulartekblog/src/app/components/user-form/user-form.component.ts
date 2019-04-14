import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User';
import {UserListService} from '../../services/user-list.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  model = new User( '', '', [], []);
  submitted = false;
  onSubmit() {
    this.userListService.postUser(this.model);
    this.submitted = true;
  }

  constructor(private userListService: UserListService) { }

  ngOnInit() {
  }

  newUser() {
    this.model = new User( '', '', [], []);
  }

}
