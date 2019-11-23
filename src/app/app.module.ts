import { AppErrorHandler } from './services/app-error-handler';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
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
import { PostComponent } from './components/post/post.component';
import { Sibling1Component } from './sharedata/sibling1/sibling1.component';
import { Sibling2Component } from './sharedata/sibling2/sibling2.component';
import { ParentComponent } from './sharedata/parent/parent.component';
import { ValidatorTestComponent } from './form/validator-test/validator-test.component';
import { PropsBindComponent } from './demo/props-bind/props-bind.component';
import { RxjsDemoComponent } from './demo/rxjs-demo/rxjs-demo.component';
import { FormStudyComponent } from './demo/form-study/form-study.component';

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
    FormTestDetail2Component,
    PostComponent,
    Sibling1Component,
    Sibling2Component,
    ParentComponent,
    ValidatorTestComponent,
    PropsBindComponent,
    RxjsDemoComponent,
    FormStudyComponent
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
        path: 'formstudy',
        component: FormStudyComponent
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
        path: 'posttest',
        component: PostComponent
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
        path: 'rxjs-demo',
        component: RxjsDemoComponent
      },
      {
        path: 'form-validator',
        component: ValidatorTestComponent
      },
      {
        path: 'demo-property-binding',
        component: PropsBindComponent
      },
      {
        path: 'sharedata',
        component: ParentComponent
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
  providers: [
    { provide: ErrorHandler, useClass:AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
