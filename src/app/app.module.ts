import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FollowerComponent } from './follower/follower.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent,
    FollowerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'followers',
        component: FollowerComponent
      },
      {
        path: 'profile/:username',
        component: GithubProfileComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ])],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
