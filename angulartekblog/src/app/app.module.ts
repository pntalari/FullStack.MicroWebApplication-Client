import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UserListService} from './services/user-list.service';
import {HttpClientModule} from '@angular/common/http';
import {UsersComponent} from './components/users/users.component';
import { UsersPostsComponent } from './components/users-posts/users-posts.component';
import { PostComponent } from './components/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UsersPostsComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [UserListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
