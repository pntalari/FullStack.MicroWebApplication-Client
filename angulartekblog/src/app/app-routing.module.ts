import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersComponent} from './components/users/users.component';
import {UsersPostsComponent} from './components/users-posts/users-posts.component';
import {PostComponent} from './components/post/post.component';
import {PostFormComponent} from './components/post-form/post-form.component';
import {CallbackComponent} from './components/callback/callback.component';
import {AuthGuard} from './services/auth.guard';
import {OpeningPageComponent} from './components/opening-page/opening-page.component';

const routes: Routes = [
  {path: '', component: OpeningPageComponent},
  {path: 'users', component: UsersComponent, canActivate: [AuthGuard]},
  {path: 'users/posts/:id', component: UsersPostsComponent },
  {path: 'post/:id', component: PostComponent},
  {path: 'users/createPost', component: PostFormComponent},
  {path: 'users/posts', component: PostComponent},
  {path: 'users/updatePost/:id', component: PostFormComponent},
  {path: 'users/deletePost/:id', component: PostFormComponent},
  {path: 'callback', component: CallbackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
