import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { FeedComponent } from './feed/feed.component';
import { FeedListComponent } from './feed/feed-list/feed-list.component';
import { FeedItemComponent } from './feed/feed-list/feed-item.component';
import { ProjectDetailComponent } from './feed/project-detail/project-detail.component';
import { DropdownDirective } from './dropdown.directive';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { routing } from "./app.routing";
import { ProjectEditComponent } from './feed/project-edit/project-edit.component';
import { FeedStartComponent } from './feed/feed-start.component';
import { UserprojectComponent } from './userproject/userproject.component';
import { UserprojectAddComponent } from './userproject/userproject-add.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { MyprojectComponent } from './myproject/myproject.component';
import { ProjectService } from "./feed/project.service";
import { UserProjectService } from "./userproject/user-project.service";
import { RepoBrowserComponent } from './github/repo-browser/repo-browser.component';
import { RepoDetailComponent } from './github/repo-detail/repo-detail.component';
import { RepoListComponent } from './github/repo-list/repo-list.component';
import { GithubService } from './github/shared/github.service';
import { TwitterService } from 'ng2-twitter';
import {AUTH_PROVIDERS} from './services/AuthService';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeedComponent,
    FeedListComponent,
    FeedItemComponent,
    ProjectDetailComponent,
    DropdownDirective,
    SigninComponent,
    SignupComponent,
    ProjectEditComponent,
    FeedStartComponent,
    UserprojectComponent,
    UserprojectAddComponent,
    MyaccountComponent,
    MyprojectComponent,
    RepoBrowserComponent,
    RepoDetailComponent,
    RepoListComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    ProjectService,
    UserProjectService,
    GithubService,
    TwitterService,
    AUTH_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
