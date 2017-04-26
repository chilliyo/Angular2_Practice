import { Component, OnInit } from '@angular/core';
import { Project } from './project';
import { FeedListComponent } from './feed-list/feed-list.component';
import { FeedItemComponent } from './feed-list/feed-item.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

@Component({
  moduleId: module.id,
  selector: 'pc-feed',
  templateUrl: './feed.component.html'
})
export class FeedComponent implements OnInit {
  selectedProject: Project;

  constructor() { }

  ngOnInit() {
  }

}
