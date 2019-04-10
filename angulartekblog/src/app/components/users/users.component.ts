import { Component, OnInit } from '@angular/core';
import {UserListService} from '../../services/user-list.service';

@Component({
  selector: 'app-admin',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public users;

  constructor(private userListService: UserListService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userListService.getUsers().subscribe(
      data => { this.users = data; },
      err => console.log(err),
      () => console.log('users loaded')
    );
  }

}
