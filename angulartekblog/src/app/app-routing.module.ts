import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersComponent} from './components/users/users.component';
import {UsersPostsComponent} from './components/users-posts/users-posts.component';
import {PostComponent} from './components/post/post.component';
import {UserFormComponent} from './components/user-form/user-form.component';


const routes: Routes = [
  {path: 'users', component: UsersComponent},
  {path: 'users/posts/:id', component: UsersPostsComponent },
  {path: 'post/:id', component: PostComponent},
  {path: 'create', component: UserFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
