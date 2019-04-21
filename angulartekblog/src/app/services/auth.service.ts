import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as auth0 from 'auth0-js';
import {BlogApiService} from './blog.api.service';

@Injectable()
export class AuthService {

  auth0 = new auth0.WebAuth({
    clientID: 'v6OMhNmN0OO3aPQnC9VnEACBDX7COR0N',
    domain: 'whatthetek.auth0.com',
    responseType: 'token id_token',
    audience: 'http://localhost:8080',
    redirectUri: 'http://localhost:4200/callback',
    scope: 'profile openid view:user view:users'
  });

  constructor(public router: Router, private blogApiService: BlogApiService ) {}

  public login(): void {
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
        this.router.navigate(['/']);
      } else if (err) {
        this.router.navigate(['/']);
        console.log(err);
      }
    });
  }

  private setSession(authResult): void {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    // console.log(authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    this.blogApiService.signUp();
    localStorage.setItem('expires_at', expiresAt);
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('userid');
    localStorage.removeItem('username');
    // Go back to the home route
    this.auth0.logout({
      returnTo: 'http://localhost:4200/'
    });
    // window.location.href = 'https://whatthetek.auth0.com/v2/logout';
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

}
