import { Component, OnInit, EventEmitter } from '@angular/core';
import { Project } from '../project';
import { FeedItemComponent } from './feed-item.component';
import { ProjectService } from '../project.service';

@Component({
  moduleId: module.id,
  selector: 'pc-feed-list',
  templateUrl: './feed-list.component.html'
})
export class FeedListComponent implements OnInit {
  projects: Project[] = [];
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }


  onSelected(project: Project) {

  }
}
