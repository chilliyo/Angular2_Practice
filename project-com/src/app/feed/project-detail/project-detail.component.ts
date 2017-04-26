import { Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs/Rx";

import { Project } from '../project';
import { ProjectService } from "../project.service";
import { UserProjectService } from "../../userproject/user-project.service";

@Component({
  selector: 'pc-project-detail',
  templateUrl: './project-detail.component.html'
})
export class ProjectDetailComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  private projectIndex: number;
  selectedProject: Project;

  constructor(private sls: UserProjectService,
              private route: ActivatedRoute,
              private projectsService: ProjectService,
              private router: Router) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) =>{
        this.projectIndex = params['id'];
        this.selectedProject = this.projectsService.getProject(this.projectIndex);
      }
    )
  }

  onEdit(){
    this.router.navigate(['/newsfeed', this.projectIndex, 'edit']);
  }

  onDelete(){
    this.projectsService.deleteProject(this.selectedProject);
    this.router.navigate(['/newsfeed']);
  }


  onAddToPhase(){
    this.sls.addItems(this.selectedProject.phases);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
