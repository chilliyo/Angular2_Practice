import { Injectable } from '@angular/core';
import {Project} from "./project";
import { Phase } from "../shared/phase";
@Injectable()
export class ProjectService {
  private projects: Project[] = [

    {name:'[Computer Science] iOS Project for DePaul University Application [Based in Chicago]',
      description:'We are looking for students around Chicago to help us(DePaul) to build a new DePaul application. See details in link',
      imagePath:'http://is2.mzstatic.com/image/thumb/Purple122/v4/b1/09/03/b10903fa-09c8-0efa-3dfd-88bb37b691fc/source/175x175bb.png', phases:[{name:'Production Phase' , status:'Completed'}]},


    {name:'[urbanPlanning] Metra Ridership Research Project[UIC Based]',
      description:'Anyone who is focusing on UrbanPlanning in Chicago can jon us.',
      imagePath:'http://metrarail.com/sites/all/themes/metra/logo-blue.svg', phases:[{name:'Development Phase' , status:'In Progress'}]},

    {name:'[Art] Installation Art Project[London Based]',
      description:'Requirement: anyone who currently pursuing or have a BFA degree.',
      imagePath:'http://image.slidesharecdn.com/installationart-150828115104-lva1-app6891/95/installation-art-1-638.jpg?cb=1458976700', phases:[{name:'Planning Phase' , status:'In Progress'}]}
  ];
  constructor() { }

  getProjects(){
    return this.projects;
  }

  getProject(id: number){
    return this.projects[id];
  }

  deleteProject(project: Project){
    this.projects.splice(this.projects.indexOf(project),1)
  }
}
