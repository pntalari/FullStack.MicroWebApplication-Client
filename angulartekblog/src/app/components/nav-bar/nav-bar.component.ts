import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  private isUserLoggedIn: boolean = this.authService.isAuthenticated();

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  logout() {
    this.authService.logout();
  }
  login() {
    this.authService.login();
  }

}
