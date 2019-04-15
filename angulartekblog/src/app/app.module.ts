import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BlogApiService} from './services/blog.api.service';
import {HttpClientModule} from '@angular/common/http';
import {UsersComponent} from './components/users/users.component';
import { UsersPostsComponent } from './components/users-posts/users-posts.component';
import { PostComponent } from './components/post/post.component';
import {FormsModule} from '@angular/forms';
import { CallbackComponent } from './components/callback/callback.component';
import {AuthService} from './services/auth.service';
import {AuthGuard} from './services/auth.guard';
import { OpeningPageComponent } from './components/opening-page/opening-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UsersPostsComponent,
    PostComponent,
    CallbackComponent,
    OpeningPageComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [BlogApiService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
