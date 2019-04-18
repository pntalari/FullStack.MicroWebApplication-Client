import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  private isUserLoggedIn: boolean;
  private userId;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    setTimeout( () => {this.isUserLoggedIn = this.authService.isAuthenticated();
                       this.userId = localStorage.getItem('userid'); }, 400);
  }
  logout() {
    this.authService.logout();
    this.isUserLoggedIn = this.authService.isAuthenticated();
  }
  login() {
    this.authService.login();
    this.isUserLoggedIn = this.authService.isAuthenticated();
  }
}
