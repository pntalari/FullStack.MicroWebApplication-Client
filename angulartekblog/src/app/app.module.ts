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
import {TagService} from './services/tag.service';
import { TagComponent } from './components/tag/tag.component';
import { TagItemsComponent } from './components/tag-items/tag-items.component';
import { HeaderComponent } from './components/header/header.component';
import { AddTagsComponent } from './components/add-tags/add-tags.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UsersPostsComponent,
    PostComponent,
    UserFormComponent,
    TagComponent,
    TagItemsComponent,
    HeaderComponent,
    AddTagsComponent
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
