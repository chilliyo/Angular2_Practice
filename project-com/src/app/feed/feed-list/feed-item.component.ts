import { Component, Input } from '@angular/core';
import { Project } from '../project';

@Component({
  moduleId: module.id,
  selector: 'pc-feed-item',
  templateUrl: './feed-item.component.html'
})
export class FeedItemComponent{
  @Input() project: Project;
  @Input() projectId: number;


}
