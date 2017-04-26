import { Component } from '@angular/core';
import { TwitterService } from 'ng2-twitter';

import { HeaderComponent } from './header.component';
import { FeedComponent } from './feed/feed.component';
import { ProjectService } from './feed/project.service';
import {UserProjectService} from "./userproject/user-project.service";

@Component({
  selector: 'pc-root',
  templateUrl: './app.component.html',
  providers: [ProjectService, UserProjectService, TwitterService]
})
export class AppComponent {
  title = 'Twitter';
  result = '';
  constructor(private twitter: TwitterService){ }

  getHomeTimeline(){
    this.twitter.get(
      'https://api.twitter.com/1.1/statuses/home_timeline.json',
      {
        count: 5
      },
      {
        consumerKey: 'mgjXFIviJpejnOlFsTGfRlWzu',
        consumerSecret: 'N6IuQmxsMpfNMaZum4d21J0KrzdR7eoGTorPvFKzJA9VTgBxV8'
      },
      {
        token: '158986078-IQgwrdzBy8oY63JQfHnfddtiDdgFgVLsR6lfoGgG',
        tokenSecret: 'N4O1dm0WJQuWnyN4RnQ4qUS9IQnRnO2iF3IFGzsLYR1Bc'
      }
    ).subscribe((res)=>{
      this.result = res.json().map(tweet => tweet.text);
    });
  }

}
