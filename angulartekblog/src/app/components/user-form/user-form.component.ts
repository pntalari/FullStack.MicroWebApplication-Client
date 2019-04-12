import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  model = new User(1, 'testing', 'testing@edu.com', null, null);
  sumbited = false;
  onSumbit() { this.sumbited = true; }

  constructor() { }

  ngOnInit() {
  }

}
