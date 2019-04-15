import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UserListService} from './services/user-list.service';
import {HttpClientModule} from '@angular/common/http';
import {UsersComponent} from './components/users/users.component';
import { UsersPostsComponent } from './components/users-posts/users-posts.component';
import { PostComponent } from './components/post/post.component';
import {FormsModule} from '@angular/forms';
import { UserFormComponent } from './components/user-form/user-form.component';
import { TagItemsComponent } from './components/tag-items/tag-items.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { TagFormComponent } from './components/tag-form/tag-form.component';
import { TagsComponent } from './components/tags/tags.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UsersPostsComponent,
    PostComponent,
    UserFormComponent,
    TagItemsComponent,
    AddTagsComponent,
    PostFormComponent,
    TagFormComponent,
    TagsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [UserListService, TagService],
  bootstrap: [AppComponent]
})
export class AppModule { }
