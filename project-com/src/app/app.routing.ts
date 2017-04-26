/**
 * Created by Qili on 2/12/17.
 */
import { Routes,RouterModule } from '@angular/router';
import {FeedComponent } from './feed/feed.component';
import {SigninComponent } from './signin/signin.component';
import {SignupComponent } from './signup/signup.component';
import {PROJECT_ROUTES} from "./feed/feed-list/feed-routes";
import { MyaccountComponent } from "./myaccount/myaccount.component";
import { MyprojectComponent } from "./myproject/myproject.component";
import { RepoBrowserComponent } from './github/repo-browser/repo-browser.component';
import { RepoListComponent } from './github/repo-list/repo-list.component';
import { RepoDetailComponent } from './github/repo-detail/repo-detail.component';

const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/newsfeed', pathMatch: 'full'},
  { path: 'newsfeed', component: FeedComponent, children: PROJECT_ROUTES },
  { path: 'signin', component: SigninComponent},
  { path: 'signup', component: SignupComponent },
  { path: 'myaccount', component: MyaccountComponent },
  { path: 'myproject', component: MyprojectComponent },
  { path: 'github', component: RepoBrowserComponent,
  children: [
  { path: '', component: RepoListComponent },
  { path: ':org', component: RepoListComponent,
    children: [
      { path: '', component: RepoDetailComponent },
      { path: ':repo', component: RepoDetailComponent }
    ]
  }]
},
];
export const routing = RouterModule.forRoot(APP_ROUTES);
