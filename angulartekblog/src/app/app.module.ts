import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogApiService } from './services/blog.api.service';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './components/users/users.component';
import { UsersPostsComponent } from './components/users-posts/users-posts.component';
import { PostComponent } from './components/post/post.component';
import { FormsModule } from '@angular/forms';
import { CallbackComponent } from './components/callback/callback.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth.guard';
import { OpeningPageComponent } from './components/opening-page/opening-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { TagService} from './services/tag.service';
import { TagsComponent} from './components/tags/tags.component';
import { TagFormComponent} from './components/tag-form/tag-form.component';
import { PostEditComponent } from './components/post-edit/post-edit.component';
import {CommentsPostComponent} from './components/comments-post/comments-post.component';
import { CommentFormComponent } from './components/comment-form/comment-form.component';
import { CommentEditComponent } from './components/comment-edit/comment-edit.component';
// import { FontAwesomeModule } from '@fontawesome/angular-fontawesome';
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UsersPostsComponent,
    PostComponent,
    CallbackComponent,
    OpeningPageComponent,
    NavBarComponent,
    PostFormComponent,
    PostEditComponent,
    PostFormComponent,
    TagsComponent,
    TagFormComponent,
    CommentsPostComponent,
    CommentFormComponent,
    CommentEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    // FontAwesomeModule
  ],
  providers: [BlogApiService, AuthService, AuthGuard, TagService],
  bootstrap: [AppComponent]
})
export class AppModule { }
