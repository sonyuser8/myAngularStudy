import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FollowerComponent } from './follower/follower.component';
import { Card1Component } from './card1/card1.component';
import { Card2Component } from './card2/card2.component';
import { TestComponent } from './tests/test/test.component';
import { FormTestComponent } from './tests/form-test/form-test.component';
import { FormTestDetailComponent } from './tests/form-test-detail/form-test-detail.component';
import { FormTestDetail2Component } from './tests/form-test-detail2/form-test-detail2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent,
    FollowerComponent,
    Card1Component,
    Card2Component,
    TestComponent,
    FormTestComponent,
    FormTestDetailComponent,
    FormTestDetail2Component
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'formtest',
        component: FormTestComponent,
        children: [
          { path: 'detail', component: FormTestDetailComponent },
          { path: 'detail2', component: FormTestDetail2Component }
        ]
      },
      {
        path: 'test',
        component: TestComponent
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
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
